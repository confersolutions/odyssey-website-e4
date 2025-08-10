"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { submitContact } from "@/app/actions/submit-contact"
import { CheckCircle2 } from "lucide-react"

type Step = 1 | 2 | 3

export function ContactForm() {
  const [step, setStep] = React.useState<Step>(1)
  const [loading, setLoading] = React.useState(false)
  const { toast } = useToast()

  const [form, setForm] = React.useState({
    company: "",
    website: "",
    industry: "",
    goals: "",
    name: "",
    email: "",
    timeline: "",
  })

  function next() {
    if (step === 1 && !form.company) return toast({ title: "Company is required" })
    if (step === 2 && !form.goals) return toast({ title: "Please describe your goals" })
    setStep((s) => Math.min(3, (s + 1) as Step))
  }
  function prev() {
    setStep((s) => Math.max(1, (s - 1) as Step))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email) {
      toast({ title: "Name and email are required" })
      return
    }
    setLoading(true)
    try {
      const res = await submitContact({
        company: form.company,
        website: form.website,
        industry: form.industry,
        goals: form.goals,
        name: form.name,
        email: form.email,
        timeline: form.timeline,
      })
      if (res.ok) {
        toast({ title: "Thanks! We'll be in touch shortly." })
        setStep(3)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-[#0F172A] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 text-white backdrop-blur">
            <h2 className="text-2xl font-semibold">{"Enterprise contact"}</h2>
            <p className="mt-1 text-sm text-white/70">
              {"Tell us a bit about your needs, and we’ll reach out within 24 hours."}
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-white/80">{"Company"}</label>
                    <Input
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="e.g., QuantumPay Inc."
                      className="mt-1 bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/80">{"Website"}</label>
                    <Input
                      value={form.website}
                      onChange={(e) => setForm({ ...form, website: e.target.value })}
                      placeholder="https://"
                      className="mt-1 bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/80">{"Industry"}</label>
                    <Input
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      placeholder="e.g., Financial Services"
                      className="mt-1 bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-white/80">{"Goals / Use Cases"}</label>
                    <Textarea
                      value={form.goals}
                      onChange={(e) => setForm({ ...form, goals: e.target.value })}
                      placeholder="Describe your target outcomes, constraints, and timelines..."
                      className="mt-1 h-28 bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/80">{"Timeline"}</label>
                    <Input
                      value={form.timeline}
                      onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                      placeholder="e.g., Pilot in Q4"
                      className="mt-1 bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-white/80">{"Name"}</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Full name"
                      className="mt-1 bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/80">{"Email"}</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="mt-1 bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-1">
                <div className="text-xs text-white/50">
                  {"Step "}
                  {step}
                  {" of 3"}
                </div>
                <div className="flex gap-2">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prev}
                      className="border-white/20 text-white bg-transparent"
                    >
                      {"Back"}
                    </Button>
                  )}
                  {step < 3 && (
                    <Button type="button" onClick={next} className="bg-[#2563EB] hover:bg-[#1d4fd7]">
                      {"Next"}
                    </Button>
                  )}
                  {step === 3 && (
                    <Button type="submit" disabled={loading} className="bg-[#10B981] hover:bg-[#0ea371]">
                      {loading ? "Submitting..." : "Submit"}
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 text-white backdrop-blur">
            <h3 className="text-lg font-semibold">{"Or book a time directly"}</h3>
            <div className="mt-3 aspect-video w-full overflow-hidden rounded-lg">
              <iframe title="Calendly" className="h-full w-full" src="https://calendly.com/your-calendly/30min" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="font-medium">{"Global HQ"}</div>
                <div className="text-white/70">{"San Francisco, CA"}</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="font-medium">{"EMEA"}</div>
                <div className="text-white/70">{"London, UK"}</div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[#10B981]">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-xs text-white/70">
                {"We respond within 24 hours. Your data is kept confidential."}
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
