"use client"

import type * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, Shield, Clock, CheckCircle } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function FinancialServicesCaseStudy() {
  return (
    <main className="bg-[#0F172A] text-white">
      <Navbar />

      {/* Breadcrumb */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-sm text-slate-300 hover:text-white transition"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Case Studies
        </Link>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[#10B981] blur-[120px] opacity-25"
          animate={{ y: [0, -14, 0], x: [0, 14, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-[#10B981]" />
                <span className="text-sm text-white/60 uppercase tracking-wide">Financial Services</span>
              </div>
              <h1 className="text-4xl font-bold md:text-5xl text-white">
                Reducing fraud losses while lifting approvals
              </h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                How a top-10 card issuer transformed their fraud detection system to achieve a 38% reduction in
                chargebacks while increasing approvals by 6.2%.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-[#10B981] hover:bg-[#059669]">
                  <Link href="/contact">Schedule Demo</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/case-studies">More Case Studies</Link>
                </Button>
              </div>
            </motion.div>
            <div className="relative">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <Image
                  src="/fraud-detection-dashboard.png"
                  alt="Fraud detection dashboard"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-90"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Key Results
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Measurable impact across fraud prevention, customer experience, and operational efficiency.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {keyResults.map((result) => (
            <ResultCard key={result.metric} {...result} />
          ))}
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
              <div className="space-y-4 text-slate-300">
                <p>
                  The card issuer faced a critical balance between fraud prevention and customer experience. Their
                  existing rule-based system was:
                </p>
                <ul className="space-y-2">
                  {challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-red-400 flex-shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
              <div className="space-y-4 text-slate-300">
                <p>
                  Odyssey AI implemented an intelligent fraud detection system with real-time decision intelligence:
                </p>
                <ul className="space-y-2">
                  {solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-[#10B981] flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Implementation Timeline
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          From pilot to full production deployment in 6 months with measurable results at each phase.
        </p>

        <div className="mt-8">
          <Card className="rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <TimelinePhase key={phase.phase} {...phase} isLast={index === timeline.length - 1} />
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-[#10B981]/10 to-[#2563EB]/10 p-8 backdrop-blur">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl text-white font-medium">
              "Odyssey balanced risk and customer experience—our approvals climbed while fraud losses dropped
              significantly. The system learns and adapts in ways our old rules never could."
            </p>
            <footer className="mt-6">
              <div className="text-slate-300">
                <strong>VP of Risk Management</strong>
                <br />
                Top 10 Card Issuer
              </div>
            </footer>
          </blockquote>
        </Card>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Card className="rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your Fraud Detection?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Learn how Odyssey AI can help you balance risk and customer experience with intelligent fraud detection.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild className="bg-[#10B981] hover:bg-[#059669]">
              <Link href="/contact">Schedule Demo</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              <Link href="/solutions/decision-intelligence">Explore Decision Intelligence</Link>
            </Button>
          </div>
        </Card>
      </section>

      <Footer />
    </main>
  )
}

const keyResults = [
  {
    icon: <Shield className="h-6 w-6 text-[#10B981]" />,
    metric: "Chargebacks",
    value: "−38%",
    description: "Significant reduction in fraud losses while maintaining customer satisfaction",
    color: "#10B981",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-[#2563EB]" />,
    metric: "Approvals",
    value: "+6.2%",
    description: "Increased legitimate transaction approvals through better risk assessment",
    color: "#2563EB",
  },
  {
    icon: <Clock className="h-6 w-6 text-[#7C3AED]" />,
    metric: "AHT",
    value: "−42%",
    description: "Reduced average handling time through automated decision-making",
    color: "#7C3AED",
  },
]

const challenges = [
  "Generating too many false positives, frustrating legitimate customers",
  "Missing sophisticated fraud patterns that evolved faster than rule updates",
  "Requiring manual review for edge cases, creating bottlenecks",
  "Lacking real-time adaptability to new fraud vectors",
]

const solutions = [
  "Real-time ML models that adapt to emerging fraud patterns",
  "Multi-layered risk scoring with contextual decision-making",
  "Automated A/B testing to optimize approval rates vs. fraud prevention",
  "Human-in-the-loop workflows for complex cases with full audit trails",
]

const timeline = [
  {
    phase: "Phase 1: Pilot (Months 1-2)",
    description: "Initial deployment on 10% of transactions",
    achievements: ["15% reduction in false positives", "Baseline performance established"],
  },
  {
    phase: "Phase 2: Expansion (Months 3-4)",
    description: "Scaled to 50% of transaction volume",
    achievements: ["25% improvement in fraud detection", "Reduced manual review by 30%"],
  },
  {
    phase: "Phase 3: Full Production (Months 5-6)",
    description: "Complete rollout across all transaction types",
    achievements: ["38% reduction in chargebacks", "6.2% increase in approvals", "42% reduction in AHT"],
  },
]

function ResultCard({
  icon,
  metric,
  value,
  description,
  color,
}: {
  icon: React.ReactNode
  metric: string
  value: string
  description: string
  color: string
}) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">{icon}</div>
          <div>
            <div className="text-sm text-white/60">{metric}</div>
            <div className="text-2xl font-bold" style={{ color }}>
              {value}
            </div>
          </div>
        </div>
        <p className="text-sm text-slate-300">{description}</p>
      </Card>
    </motion.div>
  )
}

function TimelinePhase({
  phase,
  description,
  achievements,
  isLast,
}: {
  phase: string
  description: string
  achievements: string[]
  isLast: boolean
}) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-[#10B981]" />
        {!isLast && <div className="mt-2 h-16 w-0.5 bg-white/20" />}
      </div>
      <div className="flex-1 pb-8">
        <h4 className="text-lg font-semibold text-white">{phase}</h4>
        <p className="mt-1 text-sm text-slate-300">{description}</p>
        <ul className="mt-3 space-y-1">
          {achievements.map((achievement) => (
            <li key={achievement} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle className="h-3 w-3 text-[#10B981]" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
