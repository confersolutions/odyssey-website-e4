"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Clock, ArrowRight } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function WhitepapersPage() {
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
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-[#7C3AED]" />
              <span className="text-sm text-white/60 uppercase tracking-wide">Research & Insights</span>
            </div>
            <h1 className="text-4xl font-bold md:text-5xl text-white">Whitepapers</h1>
            <p className="mt-4 max-w-2xl mx-auto text-slate-300">
              In-depth research, technical guides, and industry insights from our AI experts and thought leaders.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-[#7C3AED] hover:bg-[#6D28D9]">
                <Link href="/contact">Request Custom Research</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Whitepapers */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Featured Research
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Our latest research on AI governance, implementation strategies, and industry best practices.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featuredWhitepapers.map((whitepaper) => (
            <FeaturedWhitepaperCard key={whitepaper.title} {...whitepaper} />
          ))}
        </div>
      </section>

      {/* All Whitepapers */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          All Whitepapers
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Comprehensive collection of research papers, technical guides, and industry analyses.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allWhitepapers.map((whitepaper) => (
            <WhitepaperCard key={whitepaper.title} {...whitepaper} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Research Categories
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">Explore research by topic and industry focus.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-[#7C3AED]/10 to-[#2563EB]/10 p-8 backdrop-blur text-center">
          <h2 className="text-3xl font-bold text-white">Need Custom Research?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Our research team can provide custom analysis and insights tailored to your specific industry and use case.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild className="bg-[#7C3AED] hover:bg-[#6D28D9]">
              <Link href="/contact">Request Research</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              <Link href="/blog">Read Our Blog</Link>
            </Button>
          </div>
        </Card>
      </section>

      <Footer />
    </main>
  )
}

const featuredWhitepapers = [
  {
    title: "Model Risk Management for Agentic Systems",
    description:
      "A comprehensive framework for governance, oversight, and risk controls in autonomous AI systems. Covers regulatory requirements, technical implementation, and operational best practices.",
    category: "AI Governance",
    readTime: "25 min read",
    pages: "42 pages",
    image: "/placeholder.svg?height=300&width=500",
    downloadUrl: "#",
  },
  {
    title: "Enterprise AI Implementation Playbook",
    description:
      "Step-by-step guide for successful AI deployment at scale. Includes change management, technical architecture, and ROI measurement frameworks.",
    category: "Implementation",
    readTime: "35 min read",
    pages: "58 pages",
    image: "/placeholder.svg?height=300&width=500",
    downloadUrl: "#",
  },
]

const allWhitepapers = [
  {
    title: "Operational Patterns for Autonomous Agents",
    category: "Technical",
    readTime: "20 min read",
    pages: "28 pages",
    description: "Design patterns and architectural considerations for deploying autonomous agents in production.",
    downloadUrl: "#",
  },
  {
    title: "AI Ethics in Financial Services",
    category: "Ethics & Compliance",
    readTime: "15 min read",
    pages: "22 pages",
    description: "Ethical considerations and regulatory compliance for AI in banking and financial services.",
    downloadUrl: "#",
  },
  {
    title: "Healthcare AI: Privacy and Security",
    category: "Healthcare",
    readTime: "30 min read",
    pages: "45 pages",
    description: "Comprehensive guide to HIPAA compliance and security best practices for healthcare AI.",
    downloadUrl: "#",
  },
  {
    title: "Retail Personalization at Scale",
    category: "Retail",
    readTime: "18 min read",
    pages: "32 pages",
    description: "Strategies for implementing personalization engines that balance relevance with privacy.",
    downloadUrl: "#",
  },
  {
    title: "MLOps for Enterprise AI",
    category: "Technical",
    readTime: "40 min read",
    pages: "65 pages",
    description: "Complete guide to machine learning operations, from development to production monitoring.",
    downloadUrl: "#",
  },
  {
    title: "AI ROI Measurement Framework",
    category: "Business Strategy",
    readTime: "12 min read",
    pages: "18 pages",
    description: "Methodologies for measuring and demonstrating return on investment for AI initiatives.",
    downloadUrl: "#",
  },
]

const categories = [
  {
    name: "AI Governance",
    count: 8,
    description: "Risk management, compliance, and ethical AI frameworks",
    color: "#F59E0B",
  },
  {
    name: "Technical Implementation",
    count: 12,
    description: "Architecture patterns, deployment guides, and best practices",
    color: "#2563EB",
  },
  {
    name: "Industry Insights",
    count: 15,
    description: "Sector-specific research and use case analysis",
    color: "#10B981",
  },
  {
    name: "Business Strategy",
    count: 6,
    description: "ROI frameworks, change management, and organizational readiness",
    color: "#7C3AED",
  },
]

function FeaturedWhitepaperCard({
  title,
  description,
  category,
  readTime,
  pages,
  image,
  downloadUrl,
}: {
  title: string
  description: string
  category: string
  readTime: string
  pages: string
  image: string
  downloadUrl: string
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
        <div className="relative h-64 w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute top-4 left-4 rounded-lg border border-white/10 bg-[#0F172A]/60 px-3 py-1 text-xs backdrop-blur">
            <span className="text-white/80">{category}</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-slate-300 mb-4">{description}</p>
          <div className="flex items-center gap-4 text-xs text-white/60 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="h-3 w-3" />
              <span>{pages}</span>
            </div>
          </div>
          <Button asChild className="w-full bg-[#7C3AED] hover:bg-[#6D28D9]">
            <Link href={downloadUrl} className="inline-flex items-center justify-center">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}

function WhitepaperCard({
  title,
  category,
  readTime,
  pages,
  description,
  downloadUrl,
}: {
  title: string
  category: string
  readTime: string
  pages: string
  description: string
  downloadUrl: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      whileHover={{ y: -4 }}
    >
      <Card className="group h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur transition">
        <div className="mb-3">
          <span className="text-xs text-white/60 uppercase tracking-wide">{category}</span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-300 mb-4">{description}</p>
        <div className="flex items-center gap-4 text-xs text-white/60 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText className="h-3 w-3" />
            <span>{pages}</span>
          </div>
        </div>
        <Link
          href={downloadUrl}
          className="inline-flex items-center text-sm text-[#7C3AED] hover:underline group-hover:text-[#6D28D9]"
        >
          Download PDF <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </Card>
    </motion.div>
  )
}

function CategoryCard({
  name,
  count,
  description,
  color,
}: { name: string; count: number; description: string; color: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
          <h3 className="text-lg font-semibold text-white">{name}</h3>
        </div>
        <p className="text-sm text-slate-300 mb-3">{description}</p>
        <div className="text-sm font-medium" style={{ color }}>
          {count} whitepapers
        </div>
      </Card>
    </motion.div>
  )
}
