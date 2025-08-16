"use client"

import type * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, ShoppingCart } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function CaseStudiesPage() {
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
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl text-white">Case Studies</h1>
            <p className="mt-4 max-w-2xl mx-auto text-slate-300">
              Real outcomes from real deployments. See how leading organizations are transforming their operations with
              Odyssey AI.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-[#2563EB] hover:bg-[#1d4fd7]">
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Featured Case Studies
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Discover how industry leaders are achieving measurable results with AI-powered solutions.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} {...caseStudy} />
          ))}
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Results by Industry
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">See the impact across different sectors and use cases.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {industryStats.map((industry) => (
            <IndustryStatsCard key={industry.name} {...industry} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 p-8 backdrop-blur text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Write Your Success Story?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Join leading organizations that are transforming their operations with AI. Let's discuss your specific use
            case.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild className="bg-[#2563EB] hover:bg-[#1d4fd7]">
              <Link href="/contact">Schedule Demo</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </Card>
      </section>

      <Footer />
    </main>
  )
}

const featuredCaseStudies = [
  {
    slug: "financial-services",
    industry: "Financial Services",
    title: "Reducing fraud losses while lifting approvals",
    description:
      "A top-10 card issuer transformed their fraud detection system, achieving a 38% reduction in chargebacks while increasing approvals by 6.2%.",
    metrics: [
      { label: "Chargebacks", value: "−38%", color: "#10B981" },
      { label: "Approvals", value: "+6.2%", color: "#2563EB" },
      { label: "AHT", value: "−42%", color: "#7C3AED" },
    ],
    image: "/fraud-detection-dashboard.png",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    slug: "healthcare",
    industry: "Healthcare",
    title: "Operational efficiency in care coordination",
    description:
      "An integrated health network improved patient outcomes and operational efficiency through AI-powered care coordination.",
    metrics: [
      { label: "Readmissions", value: "−17%", color: "#10B981" },
      { label: "Throughput", value: "+24%", color: "#2563EB" },
      { label: "Time to action", value: "−31%", color: "#7C3AED" },
    ],
    image: "/placeholder-u787b.png",
    icon: <Users className="h-5 w-5" />,
  },
  {
    slug: "retail",
    industry: "Retail",
    title: "Personalization at scale with inventory balance",
    description:
      "A global retailer achieved significant improvements in conversion and inventory management through AI-powered personalization.",
    metrics: [
      { label: "CVR", value: "+14%", color: "#10B981" },
      { label: "Stockouts", value: "−22%", color: "#2563EB" },
      { label: "AOV", value: "+9%", color: "#7C3AED" },
    ],
    image: "/retail-recommendation-dashboard.png",
    icon: <ShoppingCart className="h-5 w-5" />,
  },
]

const industryStats = [
  {
    name: "Financial Services",
    description: "Risk reduction and operational efficiency",
    stats: [
      { metric: "Average fraud reduction", value: "35%" },
      { metric: "Processing time improvement", value: "45%" },
      { metric: "Customer satisfaction increase", value: "28%" },
    ],
  },
  {
    name: "Healthcare",
    description: "Patient outcomes and care coordination",
    stats: [
      { metric: "Readmission reduction", value: "20%" },
      { metric: "Operational efficiency gain", value: "30%" },
      { metric: "Care quality improvement", value: "25%" },
    ],
  },
  {
    name: "Retail",
    description: "Personalization and inventory optimization",
    stats: [
      { metric: "Conversion rate lift", value: "18%" },
      { metric: "Inventory optimization", value: "25%" },
      { metric: "Customer lifetime value", value: "22%" },
    ],
  },
]

function CaseStudyCard({
  slug,
  industry,
  title,
  description,
  metrics,
  image,
  icon,
}: {
  slug: string
  industry: string
  title: string
  description: string
  metrics: { label: string; value: string; color: string }[]
  image: string
  icon: React.ReactNode
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      whileHover={{ y: -6 }}
    >
      <Card className="group h-full overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur transition">
        <div className="relative h-48 w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${industry} case study`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute top-4 left-4 flex items-center gap-2 rounded-lg border border-white/10 bg-[#0F172A]/60 px-3 py-1 text-xs backdrop-blur">
            {icon}
            <span className="text-white/80">{industry}</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-slate-300 mb-4">{description}</p>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                <div className="text-xs text-white/60">{metric.label}</div>
                <div className="text-lg font-semibold" style={{ color: metric.color }}>
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          <Link
            href={`/case-studies/${slug}`}
            className="inline-flex items-center text-sm text-[#2563EB] hover:underline group-hover:text-[#1d4fd7]"
          >
            Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </Card>
    </motion.div>
  )
}

function IndustryStatsCard({
  name,
  description,
  stats,
}: { name: string; description: string; stats: { metric: string; value: string }[] }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-sm text-slate-300 mb-4">{description}</p>
        <div className="space-y-3">
          {stats.map((stat) => (
            <div key={stat.metric} className="flex justify-between items-center">
              <span className="text-sm text-slate-300">{stat.metric}</span>
              <span className="text-lg font-semibold text-[#10B981]">{stat.value}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
