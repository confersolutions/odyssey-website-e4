"use client"

import type * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Heart, Clock, Activity, CheckCircle } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function HealthcareCaseStudy() {
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
          className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[#2563EB] blur-[120px] opacity-25"
          animate={{ y: [0, -14, 0], x: [0, 14, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-[#2563EB]" />
                <span className="text-sm text-white/60 uppercase tracking-wide">Healthcare</span>
              </div>
              <h1 className="text-4xl font-bold md:text-5xl text-white">Operational efficiency in care coordination</h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                How an integrated health network improved patient outcomes and operational efficiency through AI-powered
                care coordination and predictive analytics.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-[#2563EB] hover:bg-[#1d4fd7]">
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
                  src="/placeholder-u787b.png"
                  alt="Healthcare care coordination dashboard"
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
          Significant improvements in patient outcomes, operational efficiency, and care team coordination.
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
                  The integrated health network struggled with fragmented care coordination across multiple facilities:
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
                <p>Odyssey AI implemented an intelligent care coordination platform with predictive analytics:</p>
                <ul className="space-y-2">
                  {solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-[#2563EB] flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Key Use Cases
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          AI-powered solutions addressing critical healthcare operational challenges.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.title} {...useCase} />
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 p-8 backdrop-blur">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl text-white font-medium">
              "The platform aligned clinicians and operations with trustworthy predictions and clear next steps. We're
              seeing better outcomes and happier staff."
            </p>
            <footer className="mt-6">
              <div className="text-slate-300">
                <strong>Clinical Operations Director</strong>
                <br />
                Integrated Health Network
              </div>
            </footer>
          </blockquote>
        </Card>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Card className="rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Healthcare Operations?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Learn how Odyssey AI can help you improve patient outcomes and operational efficiency with intelligent care
            coordination.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild className="bg-[#2563EB] hover:bg-[#1d4fd7]">
              <Link href="/contact">Schedule Demo</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              <Link href="/solutions/autonomous-agents">Explore Autonomous Agents</Link>
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
    icon: <Heart className="h-6 w-6 text-[#10B981]" />,
    metric: "Readmissions",
    value: "−17%",
    description: "Reduced 30-day readmissions through predictive risk assessment",
    color: "#10B981",
  },
  {
    icon: <Activity className="h-6 w-6 text-[#2563EB]" />,
    metric: "Throughput",
    value: "+24%",
    description: "Increased patient throughput with optimized care pathways",
    color: "#2563EB",
  },
  {
    icon: <Clock className="h-6 w-6 text-[#7C3AED]" />,
    metric: "Time to action",
    value: "−31%",
    description: "Faster clinical decision-making with AI-powered insights",
    color: "#7C3AED",
  },
]

const challenges = [
  "Siloed patient data across different systems and departments",
  "Reactive care model leading to preventable readmissions",
  "Manual care coordination causing delays and inefficiencies",
  "Lack of predictive insights for proactive intervention",
]

const solutions = [
  "Unified patient data platform with real-time clinical insights",
  "Predictive models for readmission risk and care optimization",
  "Automated care coordination workflows with smart routing",
  "AI-powered clinical decision support with evidence-based recommendations",
]

const useCases = [
  {
    title: "Readmission Prevention",
    description:
      "AI models identify high-risk patients and trigger proactive interventions before discharge, reducing costly readmissions.",
    benefits: ["17% reduction in 30-day readmissions", "Improved patient satisfaction", "Lower care costs"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Care Pathway Optimization",
    description:
      "Intelligent routing and scheduling optimize patient flow through the health system, reducing wait times and improving throughput.",
    benefits: ["24% increase in patient throughput", "Reduced wait times", "Better resource utilization"],
    image: "/placeholder.svg?height=200&width=400",
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

function UseCaseCard({
  title,
  description,
  benefits,
  image,
}: { title: string; description: string; benefits: string[]; image: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur">
        <div className="relative h-48 w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-90"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-slate-300 mb-4">{description}</p>
          <div className="space-y-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle className="h-4 w-4 text-[#2563EB]" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
