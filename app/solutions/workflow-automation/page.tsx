"use client"

import type * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Workflow, CheckCircle, Clock, AlertTriangle, BarChart3, Zap } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export default function WorkflowAutomationPage() {
  return (
    <main className="bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[#7C3AED] blur-[120px] opacity-25"
          animate={{ y: [0, -14, 0], x: [0, 14, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                  <Workflow className="h-6 w-6 text-[#7C3AED]" />
                </div>
                <span className="text-sm text-white/60 uppercase tracking-wide">Solution</span>
              </div>
              <h1 className="text-4xl font-bold md:text-5xl text-white">Workflow Automation</h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                Orchestrate complex business processes with SLA tracking, intelligent retries, and policy enforcement
                across your entire organization.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-[#7C3AED] hover:bg-[#6D28D9]">
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
                  src="/workflow-automation-pipeline.png"
                  alt="Workflow automation pipeline"
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

      {/* Key Features */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Key Features
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Enterprise-grade workflow orchestration with built-in reliability, monitoring, and governance.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Workflow Types */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Workflow Types
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Support for diverse workflow patterns from simple linear processes to complex branching logic.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {workflowTypes.map((type) => (
            <WorkflowTypeCard key={type.title} {...type} />
          ))}
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Integration Ecosystem
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Connect to your existing tools and systems with pre-built connectors and custom integrations.
        </p>

        <div className="mt-8">
          <Card className="overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur">
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {integrations.map((integration) => (
                  <div
                    key={integration}
                    className="flex items-center justify-center p-4 rounded-lg border border-white/10 bg-white/5"
                  >
                    <span className="text-sm text-slate-300 font-medium">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-[#7C3AED]/10 to-[#2563EB]/10 p-8 backdrop-blur text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Automate Your Workflows?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Transform your business processes with intelligent automation that scales with your organization.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild className="bg-[#7C3AED] hover:bg-[#6D28D9]">
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

const features = [
  {
    icon: <Clock className="h-5 w-5 text-[#7C3AED]" />,
    title: "SLA Tracking",
    description: "Monitor and enforce service level agreements with automated escalations.",
  },
  {
    icon: <Zap className="h-5 w-5 text-[#10B981]" />,
    title: "Event Triggers",
    description: "React to real-time events and data changes across your systems.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-[#F59E0B]" />,
    title: "Policy Guards",
    description: "Enforce business rules and compliance requirements at every step.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-[#2563EB]" />,
    title: "Analytics & Alerts",
    description: "Real-time monitoring with intelligent alerting and performance insights.",
  },
]

const workflowTypes = [
  {
    title: "Sequential Workflows",
    description: "Linear processes with step-by-step execution and conditional branching.",
    examples: ["Order processing", "Employee onboarding", "Document approval"],
    image: "/sequential-workflow.png",
  },
  {
    title: "Parallel Workflows",
    description: "Execute multiple tasks simultaneously with synchronization points.",
    examples: ["Data processing pipelines", "Multi-channel campaigns", "Batch operations"],
    image: "/parallel-workflow-diagram.png",
  },
  {
    title: "Event-Driven Workflows",
    description: "React to external events and triggers with dynamic workflow execution.",
    examples: ["Real-time alerts", "Customer journey automation", "System monitoring"],
    image: "/placeholder-g9ynt.png",
  },
  {
    title: "Human-in-the-Loop",
    description: "Combine automation with human decision points and approvals.",
    examples: ["Content moderation", "Financial approvals", "Quality assurance"],
    image: "/human-in-the-loop-workflow.png",
  },
]

const integrations = [
  "Salesforce",
  "ServiceNow",
  "Slack",
  "Microsoft Teams",
  "Jira",
  "GitHub",
  "AWS",
  "Azure",
  "GCP",
  "Snowflake",
  "Databricks",
  "Kafka",
]

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
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

function WorkflowTypeCard({
  title,
  description,
  examples,
  image,
}: { title: string; description: string; examples: string[]; image: string }) {
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
            <span className="text-xs text-white/60 uppercase tracking-wide">Common Use Cases:</span>
            {examples.map((example) => (
              <div key={example} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle className="h-4 w-4 text-[#7C3AED]" />
                <span>{example}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
