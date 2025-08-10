import { NextResponse } from "next/server"
import { Resend } from "resend"

type Payload = {
  name: string
  company: string
  email: string
  phone?: string
  topic: "General Inquiry" | "Sales" | "Support" | "Partnership" | "Careers"
  message: string
  honeypot?: string
  turnstileToken?: string
}

// Simple in-memory rate limit: per-IP max 10/hour and 3/min
const buckets = new Map<string, number[]>()

function track(ip: string, now = Date.now()) {
  const arr = buckets.get(ip) ?? []
  const oneMin = now - 60_000
  const oneHour = now - 60 * 60_000
  const recent = arr.filter((t) => t > oneHour) // keep last hour
  recent.push(now)
  buckets.set(ip, recent)
  const perMinute = recent.filter((t) => t > oneMin).length
  const perHour = recent.length
  return { perMinute, perHour }
}

async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET
  if (!secret) {
    // No secret configured; skip verification in demo mode
    return true
  }
  if (!token) return false
  try {
    const resp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    })
    const data = (await resp.json()) as { success?: boolean }
    return !!data.success
  } catch {
    return false
  }
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    // @ts-ignore Next.js polyfill
    req.ip ||
    "local"

  const { perMinute, perHour } = track(ip)
  if (perMinute > 3 || perHour > 10) {
    return NextResponse.json({ success: false, error: "Too many requests" }, { status: 429 })
  }

  let payload: Payload
  try {
    payload = (await req.json()) as Payload
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 })
  }

  // Honeypot check
  if (payload.honeypot && payload.honeypot.trim().length > 0) {
    // Silently accept but do nothing
    return NextResponse.json({ success: true })
  }

  // Basic field checks (server-side)
  if (!payload.name || !payload.company || !payload.email || !payload.message) {
    return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
  }

  // Optional Turnstile verification
  const ok = await verifyTurnstile(payload.turnstileToken)
  if (!ok) {
    return NextResponse.json({ success: false, error: "Failed Turnstile verification" }, { status: 400 })
  }

  // Send via Resend (if configured)
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log("Contact (no RESEND_API_KEY configured):", payload)
    return NextResponse.json({ success: true })
  }

  try {
    const resend = new Resend(apiKey)
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(payload.phone ?? "")}</p>
      <p><strong>Topic:</strong> ${escapeHtml(payload.topic)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(payload.message).replace(/\n/g, "<br/>")}</p>
    `
    const data = await resend.emails.send({
      from: "Odyssey Contact <contact@odysseyts.com>",
      to: ["contact@odysseyts.com"],
      subject: "New Contact Form Submission",
      html,
    })
    if ((data as any).error) {
      return NextResponse.json({ success: false, error: (data as any).error }, { status: 500 })
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}
