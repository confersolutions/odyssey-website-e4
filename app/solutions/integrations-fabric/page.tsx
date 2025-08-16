"use client"

import type * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Network, CheckCircle, Zap, Globe, Code, Webhook } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export default function IntegrationsFabricPage() {
  return (
    <main className="bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[#22d3ee] blur-[120px] opacity-25"
          animate={{ y: [0, -14, 0], x: [0, 14, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                  <Network className="h-6 w-6 text-[#22d3ee]" />
                </div>
                <span className="text-sm text-white/60 uppercase tracking-wide">Solution</span>
              </div>
              <h1 className="text-4xl font-bold md:text-5xl text-white">Integrations Fabric</h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                Universal connectivity layer that seamlessly connects your AI platform to existing systems, data
                sources, and third-party services.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-[#22d3ee] hover:bg-[#0891b2] text-black">
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
                  src="/placeholder.svg?height=400&width=640"
                  alt="Integrations fabric network"
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

      {/* Integration Types */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Integration Types
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Support for all major integration patterns with enterprise-grade reliability and security.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {integrationTypes.map((type) => (
            <IntegrationTypeCard key={type.title} {...type} />
          ))}
        </div>
      </section>

      {/* Pre-built Connectors */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Pre-built Connectors
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Extensive library of pre-built connectors for popular enterprise systems and cloud services.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {connectorCategories.map((category) => (
            <ConnectorCategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      {/* Custom Integration Framework */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Custom Integration Framework
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Build custom integrations with our developer-friendly SDK and comprehensive documentation.
        </p>

        <div className="mt-8">
          <Card className="overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Custom integration framework"
                fill
                sizes="100vw"
                className="object-cover opacity-90"
              />
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {customIntegrationFeatures.map((feature) => (
                  <div key={feature.title} className="space-y-2">
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm text-slate-300">{feature.description}</p>
                    <div className="space-y-1">
                      {feature.capabilities.map((capability) => (
                        <div key={capability} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="h-3 w-3 text-[#22d3ee]" />
                          <span>{capability}</span>
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
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-[#22d3ee]/10 to-[#2563EB]/10 p-8 backdrop-blur text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Connect Everything?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Unify your data and systems with our comprehensive integration platform that scales with your business.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild className="bg-[#22d3ee] hover:bg-[#0891b2] text-black">
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

const integrationTypes = [
  {
    icon: <Globe className="h-5 w-5 text-[#22d3ee]" />,
    title: "REST/GraphQL APIs",
    description: "Standard API integrations with authentication, rate limiting, and error handling.",
  },
  {
    icon: <Zap className="h-5 w-5 text-[#10B981]" />,
    title: "Event Streams",
    description: "Real-time data streaming with Kafka, Kinesis, and other event platforms.",
  },
  {
    icon: <Webhook className="h-5 w-5 text-[#7C3AED]" />,
    title: "Webhooks",
    description: "Bidirectional webhook support for real-time notifications and triggers.",
  },
  {
    icon: <Code className="h-5 w-5 text-[#F59E0B]" />,
    title: "Custom SDKs",
    description: "Language-specific SDKs for Python, JavaScript, Java, and more.",
  },
]

const connectorCategories = [
  {
    title: "CRM & Sales",
    connectors: ["Salesforce", "HubSpot", "Pipedrive", "Zendesk", "Intercom"],
    description: "Connect to your customer relationship management and sales platforms.",
    icon: "👥",
  },
  {
    title: "Data & Analytics",
    connectors: ["Snowflake", "Databricks", "BigQuery", "Redshift", "Tableau"],
    description: "Integrate with data warehouses, lakes, and analytics platforms.",
    icon: "📊",
  },
  {
    title: "Cloud Services",
    connectors: ["AWS", "Azure", "GCP", "Kubernetes", "Docker"],
    description: "Deploy and scale across major cloud infrastructure providers.",
    icon: "☁️",
  },
]

const customIntegrationFeatures = [
  {
    title: "SDK & Libraries",
    description: "Comprehensive SDKs for popular programming languages",
    capabilities: ["Python SDK", "JavaScript SDK", "Java SDK", "REST API client"],
  },
  {
    title: "Developer Tools",
    description: "Tools and utilities to accelerate integration development",
    capabilities: ["CLI tools", "Code generators", "Testing framework", "Debug console"],
  },
  {
    title: "Documentation",
    description: "Comprehensive guides and API references",
    capabilities: ["API documentation", "Integration guides", "Code examples", "Video tutorials"],
  },
]

function IntegrationTypeCard({
  icon,
  title,
  description,
}: { icon: React.ReactNode; title: string; description: string }) {
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

function ConnectorCategoryCard({
  title,
  connectors,
  description,
  icon,
}: { title: string; connectors: string[]; description: string; icon: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-slate-300 mb-4">{description}</p>
        <div className="space-y-2">
          <span className="text-xs text-white/60 uppercase tracking-wide">Available Connectors:</span>
          <div className="flex flex-wrap gap-1">
            {connectors.map((connector) => (
              <span key={connector} className="px-2 py-1 text-xs bg-white/10 rounded-md text-white">
                {connector}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
