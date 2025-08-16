"use client"

import type * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, CheckCircle, Users, Shield, BarChart3, Zap } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export default function AutonomousAgentsPage() {
  return (
    <main className="bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[#10B981] blur-[120px] opacity-25"
          animate={{ y: [0, -14, 0], x: [0, 14, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                  <Bot className="h-6 w-6 text-[#10B981]" />
                </div>
                <span className="text-sm text-white/60 uppercase tracking-wide">Solution</span>
              </div>
              <h1 className="text-4xl font-bold md:text-5xl text-white">Autonomous Agents</h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                Deploy intelligent agents that plan, execute, and adapt to complex business processes with human
                oversight and enterprise-grade security.
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
                  src="/autonomous-ai-workflow.png"
                  alt="Autonomous agents workflow visualization"
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

      {/* Key Capabilities */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Key Capabilities
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Enterprise-ready autonomous agents with built-in governance, observability, and human oversight.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
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
          Use Cases
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Transform complex business processes with intelligent automation and decision-making.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.title} {...useCase} />
          ))}
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Technical Architecture
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Built on proven enterprise infrastructure with security, scalability, and compliance at its core.
        </p>

        <div className="mt-8">
          <Card className="overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/autonomous-agents-architecture.png"
                alt="Autonomous agents technical architecture"
                fill
                sizes="100vw"
                className="object-cover opacity-90"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Core Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {architectureComponents.map((component) => (
                  <div key={component.name} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-[#10B981]" />
                    <span>{component.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-[#10B981]/10 to-[#2563EB]/10 p-8 backdrop-blur text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Deploy Autonomous Agents?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Start with a pilot project and scale across your organization with enterprise-grade security and governance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild className="bg-[#10B981] hover:bg-[#059669]">
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
    icon: <Zap className="h-5 w-5 text-[#10B981]" />,
    title: "Multi-Step Planning",
    description: "Agents break down complex tasks into executable steps with dynamic replanning based on outcomes.",
  },
  {
    icon: <Users className="h-5 w-5 text-[#2563EB]" />,
    title: "Human-in-the-Loop",
    description: "Configurable approval workflows and escalation paths for critical decisions and edge cases.",
  },
  {
    icon: <Shield className="h-5 w-5 text-[#F59E0B]" />,
    title: "Enterprise Security",
    description: "Role-based access controls, audit logging, and compliance frameworks built-in.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-[#7C3AED]" />,
    title: "Real-time Observability",
    description: "Monitor agent performance, decision paths, and business outcomes in real-time.",
  },
]

const useCases = [
  {
    title: "Customer Service Automation",
    description:
      "Intelligent agents handle complex customer inquiries, escalating to humans when needed while maintaining context and history.",
    benefits: ["85% reduction in response time", "40% increase in resolution rate", "24/7 availability"],
    image: "/customer-service-automation-dashboard.png",
  },
  {
    title: "Financial Process Automation",
    description:
      "Automate loan processing, fraud detection, and compliance checks with built-in risk management and audit trails.",
    benefits: ["60% faster processing", "95% accuracy rate", "Full audit compliance"],
    image: "/financial-process-automation.png",
  },
]

const architectureComponents = [
  { name: "Planning Engine" },
  { name: "Tool Registry" },
  { name: "Memory Store" },
  { name: "Execution Runtime" },
  { name: "Monitoring & Alerts" },
  { name: "Security Gateway" },
  { name: "Audit Logger" },
  { name: "Integration Hub" },
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
                <CheckCircle className="h-4 w-4 text-[#10B981]" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
