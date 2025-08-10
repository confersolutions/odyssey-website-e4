import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.text()
  console.log("Newsletter subscribe:", body)
  return NextResponse.json({ ok: true })
}
