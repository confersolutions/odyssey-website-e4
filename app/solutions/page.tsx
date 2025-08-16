"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, Workflow, Cpu, Database, ShieldCheck, Network, ArrowRight, BarChart3, Sparkles } from "lucide-react"

// Simple reveal animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export default function SolutionsPage() {
  return (
    <main className="bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Floating background */}
        <motion.div
          className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[#2563EB] blur-[120px] opacity-25"
          animate={{ y: [0, -14, 0], x: [0, 14, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#7C3AED] blur-[140px] opacity-20"
          animate={{ y: [0, 14, 0], x: [0, -12, 0] }}
          transition={{ duration: 13, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <h1 className="text-4xl font-bold md:text-5xl">{"AI Solutions for the Future of Enterprise"}</h1>
              <p className="mt-3 max-w-2xl text-white/80">
                {"Transform your business with our cutting-edge AI platform and services"}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-[#2563EB] hover:bg-[#1d4fd7]">
                  <Link href="/contact">{"Schedule a Demo"}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/industries">{"Explore Industries"}</Link>
                </Button>
              </div>
            </motion.div>
            <div aria-hidden="true" className="relative">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <Image
                  src="/abstract-ai-tech.png"
                  alt="Abstract AI and tech background with floating UI elements"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover opacity-90"
                  priority
                />
                {/* Floating UI chips */}
                <motion.div
                  className="absolute left-6 top-6 rounded-xl border border-white/10 bg-[#0F172A]/60 px-3 py-2 text-xs"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="flex items-center gap-2">
                    <Bot className="h-3.5 w-3.5 text-[#10B981]" />
                    {"Agentic AI"}
                  </div>
                </motion.div>
                <motion.div
                  className="absolute bottom-6 right-6 rounded-xl border border-white/10 bg-[#0F172A]/60 px-3 py-2 text-xs"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="flex items-center gap-2">
                    <Database className="h-3.5 w-3.5 text-[#7C3AED]" />
                    {"Data Foundry"}
                  </div>
                </motion.div>
                <motion.div
                  className="absolute right-10 top-10 rounded-xl border border-white/10 bg-[#0F172A]/60 px-3 py-2 text-xs"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-3.5 w-3.5 text-[#2563EB]" />
                    {"Real-time Insights"}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <motion.h2
          className="text-3xl font-bold md:text-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          {"The Odyssey AI Platform"}
        </motion.h2>
        <motion.p
          className="mt-2 max-w-3xl text-white/70"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          {"Modular capabilities designed for secure, scalable, and compliant AI across the enterprise."}
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <FeatureCard
            icon={<Sparkles className="h-5 w-5 text-[#10B981]" />}
            title="Agentic AI Engine"
            items={["Autonomous decision-making", "Workflow automation", "Real-time analytics"]}
            img="/agentic-ai-engine-diagram.png"
          />
          <FeatureCard
            icon={<Database className="h-5 w-5 text-[#7C3AED]" />}
            title="Data Foundry"
            items={["Enterprise data pipelines", "Model training & deployment", "MLOps infrastructure"]}
            img="/enterprise-data-foundry-pipeline.png"
          />
        </div>
      </section>

      {/* Solution Cards */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <motion.h2
          className="text-3xl font-bold md:text-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          {"Core Solution Areas"}
        </motion.h2>
        <p className="mt-2 max-w-3xl text-white/70">
          {"Deliver outcomes with focused capabilities that integrate into your existing stack."}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((s) => (
            <SolutionCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <motion.h2
          className="text-3xl font-bold md:text-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          {"Technical Deep Dive"}
        </motion.h2>
        <p className="mt-2 max-w-3xl text-white/70">
          {"Explore the platform architecture, data flow, and integration points."}
        </p>

        <DeepDive />
      </section>

      {/* Case Study Showcase */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          {"Case Studies"}
        </motion.h2>
        <p className="mt-2 max-w-3xl text-white/70">
          {"Real outcomes from real deployments—measured impact and time-to-value."}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <CaseStudyCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* Components */

function FeatureCard({
  icon,
  title,
  items,
  img,
}: {
  icon: React.ReactNode
  title: string
  items: string[]
  img: string
}) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-2">{icon}</div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
          <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-slate-300">
            {items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div className="relative h-40 w-full">
          <Image
            src={img || "/placeholder.svg"}
            alt={`${title} visual`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-90"
          />
        </div>
      </Card>
    </motion.div>
  )
}

type Solution = {
  title: string
  icon: React.ReactNode
  desc: string
  features: string[]
  cta?: { href: string; label: string }
}

const solutions: Solution[] = [
  {
    title: "Autonomous Agents",
    icon: <Bot className="h-5 w-5 text-[#10B981]" />,
    desc: "Task planning, tool-use, and supervision for complex processes.",
    features: ["Multi-step planning", "Human-in-the-loop", "RBAC & audit", "Observability"],
    cta: { href: "/contact", label: "Learn More" },
  },
  {
    title: "Workflow Automation",
    icon: <Workflow className="h-5 w-5 text-[#7C3AED]" />,
    desc: "Orchestrate pipelines with SLAs, retries, and policy checks.",
    features: ["SLA tracking", "Event triggers", "Policy guards", "Alerts & retries"],
    cta: { href: "/contact", label: "Learn More" },
  },
  {
    title: "Decision Intelligence",
    icon: <Cpu className="h-5 w-5 text-[#2563EB]" />,
    desc: "Real-time scoring, recommendations, and analytic feedback loops.",
    features: ["Feature stores", "Real-time scoring", "A/B & canary", "Cost controls"],
    cta: { href: "/contact", label: "Learn More" },
  },
  {
    title: "Data Foundry",
    icon: <Database className="h-5 w-5 text-[#10B981]" />,
    desc: "Pipelines, training, deployment, and monitoring for ML/AI.",
    features: ["Data quality", "Model registry", "Drift detection", "Versioning"],
    cta: { href: "/contact", label: "Learn More" },
  },
  {
    title: "Security & Governance",
    icon: <ShieldCheck className="h-5 w-5 text-[#F59E0B]" />,
    desc: "Guardrails for privacy, access, and risk management.",
    features: ["PII redaction", "Access controls", "Policy engine", "Audit logs"],
    cta: { href: "/contact", label: "Learn More" },
  },
  {
    title: "Integrations Fabric",
    icon: <Network className="h-5 w-5 text-[#22d3ee]" />,
    desc: "Connect to your core systems, CRMs, and data lakes.",
    features: ["REST/GraphQL", "Event streams", "Webhooks", "SDKs"],
    cta: { href: "/contact", label: "Learn More" },
  },
]

function SolutionCard({ title, icon, desc, features, cta }: Solution) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <Card className="group h-full overflow-hidden rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur transition">
        <div className="flex items-center gap-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">{icon}</div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-slate-300">{desc}</p>
        <ul className="mt-3 grid list-disc gap-1.5 pl-5 text-sm text-slate-300">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        {cta ? (
          <Link
            href={cta.href}
            className="mt-4 inline-flex items-center text-sm text-[#2563EB] hover:underline"
            aria-label={`${title} - ${cta.label}`}
          >
            {cta.label} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        ) : null}
      </Card>
    </motion.div>
  )
}

function DeepDive() {
  const components = [
    {
      key: "ingest",
      label: "Data Ingestion",
      desc: "Batch and streaming connectors with quality checks and PII policies.",
      color: "#2563EB",
      hotspot: { top: "18%", left: "14%" },
    },
    {
      key: "store",
      label: "Feature Store",
      desc: "Low-latency features for real-time scoring and analytics.",
      color: "#10B981",
      hotspot: { top: "46%", left: "28%" },
    },
    {
      key: "agents",
      label: "Agentic Engine",
      desc: "Tool-using agents with planning, memory, and oversight.",
      color: "#7C3AED",
      hotspot: { top: "48%", left: "58%" },
    },
    {
      key: "evals",
      label: "Evals & Guardrails",
      desc: "Automated evaluations, safety filters, and policy enforcement.",
      color: "#F59E0B",
      hotspot: { top: "72%", left: "40%" },
    },
    {
      key: "observe",
      label: "Observability",
      desc: "Tracing, metrics, cost monitoring, and drift detection.",
      color: "#22d3ee",
      hotspot: { top: "30%", left: "78%" },
    },
  ] as const

  const [active, setActive] = React.useState<(typeof components)[number]["key"]>("agents")
  const activeMeta = components.find((c) => c.key === active)!

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card className="relative overflow-hidden rounded-2xl border-white/10 bg-white/5 p-0 backdrop-blur">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src="/isometric-ai-platform-architecture.png"
            alt="Odyssey AI platform architecture diagram"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />
          {/* Hotspots */}
          {components.map((c) => (
            <button
              key={c.key}
              style={{ top: c.hotspot.top, left: c.hotspot.left }}
              className="group absolute rounded-full border border-white/20 bg-[#0F172A]/60 p-2 outline-none transition focus:ring-2 focus:ring-[#2563EB]"
              aria-label={c.label}
              onClick={() => setActive(c.key)}
            >
              <span
                className="block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: c.key === active ? c.color : "rgba(255,255,255,0.6)" }}
              />
              <span className="pointer-events-none absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#0F172A] px-2 py-1 text-[10px] text-white/80 group-hover:block">
                {c.label}
              </span>
            </button>
          ))}
        </div>
      </Card>

      <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="text-xs uppercase tracking-wide text-white/60">{"Key Technologies"}</div>
        <div className="mt-2 text-xl font-semibold" style={{ color: activeMeta.color }}>
          {activeMeta.label}
        </div>
        <p className="mt-2 text-sm text-white/80">{activeMeta.desc}</p>

        <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/80 md:grid-cols-3">
          {techByKey[active].map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: activeMeta.color }} aria-hidden="true" />
              <span className="font-medium">{t.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-white/60">
          {"Integrations include your CRM, data warehouse, data lake, and line‑of‑business systems."}
        </div>
      </Card>
    </div>
  )
}

const techByKey: Record<string, { name: string }[]> = {
  ingest: [{ name: "Kafka" }, { name: "Fivetran" }, { name: "Airbyte" }],
  store: [{ name: "Feast" }, { name: "Redis" }, { name: "Iceberg" }],
  agents: [{ name: "LLMs" }, { name: "Tools" }, { name: "Evals" }],
  evals: [{ name: "Safety Filters" }, { name: "Unit/Spec Tests" }, { name: "Policy Engine" }],
  observe: [{ name: "Tracing" }, { name: "Metrics" }, { name: "Drift" }],
}

type CaseStudy = {
  title: string
  industry: string
  beforeAfter: { label: string; before: string; after: string; color?: string }[]
  quote: string
  author: string
  role: string
  img: string
  link: string
}

const caseStudies: CaseStudy[] = [
  {
    title: "Reducing fraud losses while lifting approvals",
    industry: "Financial Services",
    beforeAfter: [
      { label: "Chargebacks", before: "Baseline", after: "−38%", color: "#10B981" },
      { label: "Approvals", before: "Baseline", after: "+6.2%", color: "#2563EB" },
      { label: "AHT", before: "Baseline", after: "−42%", color: "#7C3AED" },
    ],
    quote:
      "Odyssey balanced risk and customer experience—our approvals climbed while fraud losses dropped significantly.",
    author: "VP Risk",
    role: "Top 10 Card Issuer",
    img: "/fraud-detection-dashboard.png",
    link: "/resources",
  },
  {
    title: "Operational efficiency in care coordination",
    industry: "Healthcare",
    beforeAfter: [
      { label: "Readmissions", before: "Baseline", after: "−17%", color: "#10B981" },
      { label: "Throughput", before: "Baseline", after: "+24%", color: "#2563EB" },
      { label: "Time to action", before: "Baseline", after: "−31%", color: "#7C3AED" },
    ],
    quote: "The platform aligned clinicians and operations with trustworthy predictions and clear next steps.",
    author: "Clinical Ops Director",
    role: "Integrated Health Network",
    img: "/placeholder-u787b.png",
    link: "/resources",
  },
  {
    title: "Personalization at scale with inventory balance",
    industry: "Retail",
    beforeAfter: [
      { label: "CVR", before: "Baseline", after: "+14%", color: "#10B981" },
      { label: "Stockouts", before: "Baseline", after: "−22%", color: "#2563EB" },
      { label: "AOV", before: "Baseline", after: "+9%", color: "#7C3AED" },
    ],
    quote: "We unlocked a new level of personalized experiences and operational efficiency.",
    author: "Chief Digital Officer",
    role: "Global Retailer",
    img: "/retail-recommendation-dashboard.png",
    link: "/resources",
  },
]

function CaseStudyCard(cs: CaseStudy) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur">
        <div className="relative h-40 w-full">
          <Image
            src={cs.img || "/placeholder.svg"}
            alt={`${cs.industry} case study illustration`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="text-xs uppercase tracking-wide text-white/60">{cs.industry}</div>
          <h3 className="mt-1 text-lg font-semibold text-white">{cs.title}</h3>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {cs.beforeAfter.map((m) => (
              <div key={m.label} className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                <div className="text-xs text-white/60">{m.label}</div>
                <div className="text-lg font-semibold" style={{ color: m.color ?? "#10B981" }}>
                  {m.after}
                </div>
              </div>
            ))}
          </div>

          <blockquote className="mt-4 border-l-2 border-white/20 pl-3 text-sm text-slate-300">
            {"“"}
            {cs.quote}
            {"” "}
            <span className="text-xs text-white/60">
              {"— "}
              {cs.author}
              {", "}
              {cs.role}
            </span>
          </blockquote>

          <Link href={cs.link} className="mt-4 inline-flex items-center text-sm text-[#2563EB] hover:underline">
            {"View Full Case Study"}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </Card>
    </motion.div>
  )
}
