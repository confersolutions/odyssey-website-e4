"use client"

import type * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, CheckCircle, GitBranch, BarChart3, Zap } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export default function DataFoundryPage() {
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
                  <Database className="h-6 w-6 text-[#10B981]" />
                </div>
                <span className="text-sm text-white/60 uppercase tracking-wide">Solution</span>
              </div>
              <h1 className="text-4xl font-bold md:text-5xl text-white">Data Foundry</h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                Complete MLOps platform for data pipelines, model training, deployment, and monitoring with
                enterprise-grade governance.
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
                  src="/placeholder.svg?height=400&width=640"
                  alt="Data Foundry MLOps pipeline"
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

      {/* MLOps Lifecycle */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Complete MLOps Lifecycle
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          From data ingestion to model deployment and monitoring, manage your entire ML lifecycle in one platform.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mlopsStages.map((stage) => (
            <MLOpsStageCard key={stage.title} {...stage} />
          ))}
        </div>
      </section>

      {/* Data Pipeline Features */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Enterprise Data Pipelines
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Scalable, reliable data processing with built-in quality checks and governance controls.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {pipelineFeatures.map((feature) => (
            <PipelineFeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Model Management */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Model Registry & Deployment
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Centralized model management with versioning, A/B testing, and automated deployment pipelines.
        </p>

        <div className="mt-8">
          <Card className="overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Model registry and deployment"
                fill
                sizes="100vw"
                className="object-cover opacity-90"
              />
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {modelManagementFeatures.map((feature) => (
                  <div key={feature.title} className="space-y-2">
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm text-slate-300">{feature.description}</p>
                    <div className="space-y-1">
                      {feature.capabilities.map((capability) => (
                        <div key={capability} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="h-3 w-3 text-[#10B981]" />
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
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-[#10B981]/10 to-[#2563EB]/10 p-8 backdrop-blur text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Scale Your ML Operations?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Transform your data science workflows with enterprise-grade MLOps platform built for scale and reliability.
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

const mlopsStages = [
  {
    icon: <Database className="h-5 w-5 text-[#10B981]" />,
    title: "Data Ingestion",
    description: "Connect to any data source with built-in quality validation and schema evolution.",
  },
  {
    icon: <Zap className="h-5 w-5 text-[#2563EB]" />,
    title: "Feature Engineering",
    description: "Automated feature generation with reusable transformations and lineage tracking.",
  },
  {
    icon: <GitBranch className="h-5 w-5 text-[#7C3AED]" />,
    title: "Model Training",
    description: "Distributed training with experiment tracking and hyperparameter optimization.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-[#F59E0B]" />,
    title: "Monitoring",
    description: "Real-time model performance monitoring with drift detection and alerting.",
  },
]

const pipelineFeatures = [
  {
    title: "Data Quality Assurance",
    description: "Automated data validation, profiling, and anomaly detection to ensure high-quality inputs.",
    features: ["Schema validation", "Statistical profiling", "Anomaly detection", "Data lineage tracking"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Scalable Processing",
    description: "Distributed data processing with auto-scaling and cost optimization for large datasets.",
    features: ["Auto-scaling clusters", "Cost optimization", "Fault tolerance", "Performance monitoring"],
    image: "/placeholder.svg?height=200&width=400",
  },
]

const modelManagementFeatures = [
  {
    title: "Model Registry",
    description: "Centralized repository for model artifacts with versioning and metadata",
    capabilities: ["Version control", "Metadata tracking", "Model comparison", "Approval workflows"],
  },
  {
    title: "Deployment Pipeline",
    description: "Automated deployment with canary releases and rollback capabilities",
    capabilities: ["CI/CD integration", "Canary deployments", "Blue-green deployment", "Automated rollback"],
  },
  {
    title: "Performance Monitoring",
    description: "Real-time monitoring of model performance and business metrics",
    capabilities: ["Drift detection", "Performance metrics", "Business KPIs", "Alert management"],
  },
]

function MLOpsStageCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
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

function PipelineFeatureCard({
  title,
  description,
  features,
  image,
}: { title: string; description: string; features: string[]; image: string }) {
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
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle className="h-4 w-4 text-[#10B981]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
