"use client"

import type * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cpu, CheckCircle, TrendingUp, Target, Zap, BarChart3 } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export default function DecisionIntelligencePage() {
  return (
    <main className="bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[#2563EB] blur-[120px] opacity-25"
          animate={{ y: [0, -14, 0], x: [0, 14, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                  <Cpu className="h-6 w-6 text-[#2563EB]" />
                </div>
                <span className="text-sm text-white/60 uppercase tracking-wide">Solution</span>
              </div>
              <h1 className="text-4xl font-bold md:text-5xl text-white">Decision Intelligence</h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                Power real-time decisions with AI-driven scoring, recommendations, and continuous learning from business
                outcomes.
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
                  <Link href="/solutions">View All Solutions</Link>
                </Button>
              </div>
            </motion.div>
            <div className="relative">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <Image
                  src="/decision-intelligence-dashboard.png"
                  alt="Decision intelligence dashboard"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover opacity-90"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Core Capabilities
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Transform data into actionable insights with enterprise-grade decision intelligence platform.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
      </section>

      {/* Decision Types */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Decision Types
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Support for various decision patterns from simple scoring to complex multi-criteria optimization.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {decisionTypes.map((type) => (
            <DecisionTypeCard key={type.title} {...type} />
          ))}
        </div>
      </section>

      {/* Feature Store */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Enterprise Feature Store
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Centralized feature management with real-time serving and historical tracking for consistent decision-making.
        </p>

        <div className="mt-8">
          <Card className="overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Feature store architecture"
                fill
                sizes="100vw"
                className="object-cover opacity-90"
              />
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featureStoreCapabilities.map((capability) => (
                  <div key={capability.title} className="space-y-2">
                    <h4 className="font-semibold text-white">{capability.title}</h4>
                    <p className="text-sm text-slate-300">{capability.description}</p>
                    <div className="space-y-1">
                      {capability.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="h-3 w-3 text-[#2563EB]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 p-8 backdrop-blur text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Enhance Your Decision Making?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Transform your business with AI-powered decision intelligence that learns and adapts to your unique
            requirements.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild className="bg-[#2563EB] hover:bg-[#1d4fd7]">
              <Link href="/contact">Schedule Demo</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </Card>
      </section>

      <Footer />
    </main>
  )
}

const capabilities = [
  {
    icon: <TrendingUp className="h-5 w-5 text-[#2563EB]" />,
    title: "Real-time Scoring",
    description: "Sub-millisecond decision scoring with feature stores and model serving.",
  },
  {
    icon: <Target className="h-5 w-5 text-[#10B981]" />,
    title: "Recommendations",
    description: "Personalized recommendations with multi-armed bandit optimization.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-[#7C3AED]" />,
    title: "A/B Testing",
    description: "Built-in experimentation platform with statistical significance testing.",
  },
  {
    icon: <Zap className="h-5 w-5 text-[#F59E0B]" />,
    title: "Cost Controls",
    description: "Monitor and optimize model inference costs with intelligent caching.",
  },
]

const decisionTypes = [
  {
    title: "Risk Scoring",
    description: "Real-time risk assessment for financial services, insurance, and compliance.",
    useCases: ["Credit scoring", "Fraud detection", "Compliance monitoring"],
    metrics: "99.9% uptime, <10ms latency",
  },
  {
    title: "Personalization",
    description: "Dynamic content and product recommendations based on user behavior.",
    useCases: ["Product recommendations", "Content personalization", "Dynamic pricing"],
    metrics: "15-30% conversion lift",
  },
  {
    title: "Optimization",
    description: "Multi-objective optimization for resource allocation and planning.",
    useCases: ["Supply chain optimization", "Resource allocation", "Route planning"],
    metrics: "20-40% efficiency gains",
  },
]

const featureStoreCapabilities = [
  {
    title: "Real-time Features",
    description: "Low-latency feature serving for online inference",
    features: ["Sub-millisecond serving", "Auto-scaling", "Global distribution"],
  },
  {
    title: "Batch Features",
    description: "Historical feature computation for training and analysis",
    features: ["Scheduled pipelines", "Point-in-time correctness", "Data lineage"],
  },
  {
    title: "Feature Engineering",
    description: "Automated feature generation and transformation",
    features: ["Time-based aggregations", "Cross-feature interactions", "Drift detection"],
  },
]

function CapabilityCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex items-center gap-3 mb-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">{icon}</div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-slate-300">{description}</p>
      </Card>
    </motion.div>
  )
}

function DecisionTypeCard({
  title,
  description,
  useCases,
  metrics,
}: { title: string; description: string; useCases: string[]; metrics: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-300 mb-4">{description}</p>
        <div className="space-y-3">
          <div>
            <span className="text-xs text-white/60 uppercase tracking-wide">Use Cases:</span>
            <div className="mt-1 space-y-1">
              {useCases.map((useCase) => (
                <div key={useCase} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="h-3 w-3 text-[#2563EB]" />
                  <span>{useCase}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-2 border-t border-white/10">
            <span className="text-xs text-white/60 uppercase tracking-wide">Performance:</span>
            <p className="mt-1 text-sm font-medium text-[#10B981]">{metrics}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
