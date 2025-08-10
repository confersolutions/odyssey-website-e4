"use client"

import * as React from "react"
import Link from "next/link"
import Script from "next/script"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Mail, Phone, MapPin, Calendar, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().min(2, "Please enter your company name"),
  email: z.string().email("Please enter a valid work email"),
  phone: z.string().optional(),
  topic: z.enum(["General Inquiry", "Sales", "Support", "Partnership", "Careers"]),
  message: z.string().min(10, "Please provide a brief description"),
  honeypot: z.string().max(0).optional(), // must remain empty
  turnstileToken: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const defaultValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  topic: "General Inquiry",
  message: "",
  honeypot: "",
  turnstileToken: "",
}

export default function ContactPage() {
  const { toast } = useToast()
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  })

  async function onSubmit(values: FormValues) {
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
        toast({ title: "Thanks! We'll respond within 24 hours." })
      } else {
        toast({ title: "Something went wrong. Please try again.", variant: "destructive" })
      }
    } catch (e) {
      toast({ title: "Network error. Please try again.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  // Optional Turnstile handling (renders only if NEXT_PUBLIC_TURNSTILE_SITE_KEY is present)
  React.useEffect(() => {
    if (!turnstileSiteKey) return
    // @ts-expect-error turnstile global injected by script
    if (typeof window !== "undefined" && window.turnstile && document.getElementById("cf-turnstile")) {
      // @ts-expect-error
      window.turnstile.render("#cf-turnstile", {
        sitekey: turnstileSiteKey,
        callback: (token: string) => {
          setValue("turnstileToken", token)
        },
      })
    }
  }, [turnstileSiteKey, setValue])

  return (
    <main className="bg-[#0F172A] text-white">
      <Navbar />
      {/* Turnstile script only if key provided */}
      {turnstileSiteKey ? <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer /> : null}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-[#2563EB] blur-[100px] opacity-25"
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-[#7C3AED] blur-[120px] opacity-20"
          animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold md:text-5xl">{"Let's Build the Future of AI Together"}</h1>
            <p className="mt-3 text-white/80">{"Our team is ready to discuss your AI challenges and opportunities"}</p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <Phone className="h-4 w-4 text-[#10B981]" />
                <a href="tel:+18054049173" className="text-sm text-white/80 hover:text-white">
                  {"+1 (805) 404-9173"}
                </a>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <Mail className="h-4 w-4 text-[#2563EB]" />
                <a href="mailto:contact@odysseyts.com" className="text-sm text-white/80 hover:text-white">
                  {"contact@odysseyts.com"}
                </a>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <MapPin className="h-4 w-4 text-[#7C3AED]" />
                <span className="text-sm text-white/80">{"San Francisco, CA"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Two Column Layout */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Contact Form */}
          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
            {!submitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold">{"Enterprise Contact"}</h2>
                    <p className="mt-1 text-sm text-white/70">{"We'll respond within 24 hours."}</p>
                  </div>
                </div>

                {/* Honeypot (hidden) */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("honeypot")}
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Field
                    label="Full Name"
                    error={errors.name?.message}
                    children={
                      <Input
                        {...register("name")}
                        placeholder="Jane Doe"
                        aria-invalid={!!errors.name}
                        className="bg-white/5 text-white placeholder:text-white/40"
                      />
                    }
                  />
                  <Field
                    label="Company Name"
                    error={errors.company?.message}
                    children={
                      <Input
                        {...register("company")}
                        placeholder="Acme Corp"
                        aria-invalid={!!errors.company}
                        className="bg-white/5 text-white placeholder:text-white/40"
                      />
                    }
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Field
                    label="Work Email"
                    error={errors.email?.message}
                    children={
                      <Input
                        type="email"
                        {...register("email")}
                        placeholder="you@company.com"
                        aria-invalid={!!errors.email}
                        className="bg-white/5 text-white placeholder:text-white/40"
                      />
                    }
                  />
                  <Field
                    label="Phone Number"
                    error={errors.phone?.message}
                    optional
                    children={
                      <Input
                        type="tel"
                        {...register("phone")}
                        placeholder="+1 555 0123"
                        aria-invalid={!!errors.phone}
                        className="bg-white/5 text-white placeholder:text-white/40"
                      />
                    }
                  />
                </div>

                <Field
                  label="How can we help?"
                  error={errors.topic?.message}
                  children={
                    <Select
                      defaultValue={watch("topic")}
                      onValueChange={(v) => setValue("topic", v as FormValues["topic"], { shouldValidate: true })}
                    >
                      <SelectTrigger
                        aria-label="Select a topic"
                        className="bg-white/5 text-white aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-red-500"
                        aria-invalid={!!errors.topic}
                      >
                        <SelectValue placeholder="Choose a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        {["General Inquiry", "Sales", "Support", "Partnership", "Careers"].map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  }
                />

                <Field
                  label="Message"
                  error={errors.message?.message}
                  children={
                    <Textarea
                      {...register("message")}
                      placeholder="Describe your goals, constraints, and timelines..."
                      aria-invalid={!!errors.message}
                      className="h-28 bg-white/5 text-white placeholder:text-white/40"
                    />
                  }
                />

                {/* Privacy Notice */}
                <p className="text-xs text-white/60">
                  {
                    "By submitting this form, you agree to our processing of your information in accordance with GDPR. We only use your data to respond to your inquiry."
                  }
                </p>

                {/* Turnstile (optional) */}
                {turnstileSiteKey ? <div id="cf-turnstile" className="mt-2" aria-label="Turnstile challenge" /> : null}

                <div className="flex items-center justify-end">
                  <Button
                    type="submit"
                    disabled={loading || !isValid}
                    className="bg-[#2563EB] hover:bg-[#1d4fd7] disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="h-10 w-10 text-[#10B981]" />
                <h3 className="mt-3 text-xl font-semibold">{"Message sent"}</h3>
                <p className="mt-1 max-w-md text-sm text-white/70">
                  {
                    "Thanks for reaching out. A member of our team will contact you within 24 hours. You can also book a demo below."
                  }
                </p>
                <a
                  href="https://calendly.com/your-calendly/30min"
                  className="mt-5 inline-flex items-center rounded-md bg-[#10B981] px-5 py-2 text-sm font-medium text-white hover:bg-[#0ea371]"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {"Book a Demo"}
                </a>
              </div>
            )}
          </Card>

          {/* Right: Contact Info, Offices, Map, Schedule */}
          <div className="grid grid-cols-1 gap-6">
            <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">{"Get in Touch"}</h3>
              <div className="mt-3 grid grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-2">
                <InfoRow label="Sales Inquiries" value="contact@odysseyts.com" href="mailto:contact@odysseyts.com" />
                <InfoRow label="Support" value="contact@odysseyts.com" href="mailto:contact@odysseyts.com" />
                <InfoRow label="Careers" value="contact@odysseyts.com" href="mailto:contact@odysseyts.com" />
                <InfoRow label="Phone" value="+1 (805) 404-9173" href="tel:+18054049173" />
              </div>
            </Card>

            <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">{"Office Locations"}</h3>
              <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-wide text-white/60">{"HQ"}</div>
                  <div className="mt-1 font-semibold">{"San Francisco, CA"}</div>
                  <div className="mt-1 text-sm text-white/70">
                    {"600 California St, 11th Floor, San Francisco, CA 94108"}
                  </div>
                  <div className="mt-2 text-xs text-white/60">
                    <a
                      className="text-[#2563EB] hover:underline"
                      href="https://www.google.com/maps/search/?api=1&query=600+California+St+San+Francisco+CA+94108"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {"View on Google Maps →"}
                    </a>
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-wide text-white/60">{"EMEA"}</div>
                  <div className="mt-1 font-semibold">{"London, UK"}</div>
                  <div className="mt-1 text-sm text-white/70">{"1 Finsbury Ave, London EC2M 2PF, UK"}</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-wide text-white/60">{"APAC"}</div>
                  <div className="mt-1 font-semibold">{"Singapore"}</div>
                  <div className="mt-1 text-sm text-white/70">{"9 Straits View, Marina One, Singapore 018937"}</div>
                </div>
              </div>

              {/* Map Integration (interactive Google Maps embed) */}
              <div className="mt-4 overflow-hidden rounded-lg">
                <iframe
                  title="Odyssey AI HQ Map"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={"https://www.google.com/maps?q=600+California+St,+San+Francisco,+CA+94108&output=embed"}
                />
              </div>
            </Card>

            <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold">{"Schedule a Meeting"}</h3>
                  <p className="mt-1 text-sm text-white/70">
                    {"Find a time that works for you. Choose a meeting type and book instantly."}
                  </p>
                </div>
                <a
                  href="https://calendly.com/your-calendly/30min"
                  className="inline-flex items-center rounded-md bg-[#10B981] px-4 py-2 text-sm font-medium text-white hover:bg-[#0ea371]"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {"Book a Demo"}
                </a>
              </div>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-md">
                <iframe title="Calendly" className="h-full w-full" src="https://calendly.com/your-calendly/30min" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Field({
  label,
  error,
  optional,
  children,
}: {
  label: string
  error?: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="group rounded-lg border border-white/10 bg-white/5 p-3 transition focus-within:border-[#2563EB]/60 focus-within:shadow-[0_0_0_2px_rgba(37,99,235,0.25)]">
      <div className="flex items-center justify-between">
        <label className="text-sm text-white/80">{label}</label>
        {optional ? <span className="text-xs text-white/40">{"Optional"}</span> : null}
      </div>
      <div className="mt-1">{children}</div>
      {error ? <div className="mt-1 text-xs text-red-400">{error}</div> : null}
    </div>
  )
}

function InfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center justify-between gap-4">
      <div className="text-white/60">{label}</div>
      <div className="font-medium text-white">{value}</div>
    </div>
  )
  return (
    <div className="rounded-md border border-white/10 bg-white/5 p-3">
      {href ? (
        <Link href={href} className="hover:underline">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  )
}
