"use client"

import type * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldCheck, CheckCircle, Lock, Eye, FileText, AlertTriangle } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export default function SecurityGovernancePage() {
  return (
    <main className="bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[#F59E0B] blur-[120px] opacity-25"
          animate={{ y: [0, -14, 0], x: [0, 14, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                  <ShieldCheck className="h-6 w-6 text-[#F59E0B]" />
                </div>
                <span className="text-sm text-white/60 uppercase tracking-wide">Solution</span>
              </div>
              <h1 className="text-4xl font-bold md:text-5xl text-white">Security & Governance</h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                Enterprise-grade security controls, privacy protection, and governance frameworks for responsible AI
                deployment at scale.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-[#F59E0B] hover:bg-[#D97706]">
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
                  alt="Security and governance dashboard"
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

      {/* Security Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Security Pillars
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Comprehensive security framework designed for enterprise AI deployments with zero-trust architecture.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {securityPillars.map((pillar) => (
            <SecurityPillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Compliance Frameworks
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Built-in support for major compliance standards and regulatory requirements across industries.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {complianceFrameworks.map((framework) => (
            <ComplianceFrameworkCard key={framework.title} {...framework} />
          ))}
        </div>
      </section>

      {/* Privacy Protection */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Privacy Protection
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Advanced privacy-preserving techniques to protect sensitive data while maintaining AI model performance.
        </p>

        <div className="mt-8">
          <Card className="overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Privacy protection architecture"
                fill
                sizes="100vw"
                className="object-cover opacity-90"
              />
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {privacyFeatures.map((feature) => (
                  <div key={feature.title} className="space-y-2">
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm text-slate-300">{feature.description}</p>
                    <div className="space-y-1">
                      {feature.techniques.map((technique) => (
                        <div key={technique} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="h-3 w-3 text-[#F59E0B]" />
                          <span>{technique}</span>
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
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-[#F59E0B]/10 to-[#DC2626]/10 p-8 backdrop-blur text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Secure Your AI Infrastructure?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Deploy AI with confidence using enterprise-grade security and governance controls that scale with your
            organization.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild className="bg-[#F59E0B] hover:bg-[#D97706]">
              <Link href="/contact">Schedule Demo</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              <Link href="/security">View Security Details</Link>
            </Button>
          </div>
        </Card>
      </section>

      <Footer />
    </main>
  )
}

const securityPillars = [
  {
    icon: <Lock className="h-5 w-5 text-[#F59E0B]" />,
    title: "Access Controls",
    description: "Role-based access with multi-factor authentication and fine-grained permissions.",
  },
  {
    icon: <Eye className="h-5 w-5 text-[#2563EB]" />,
    title: "Audit Logging",
    description: "Comprehensive audit trails for all AI operations and data access patterns.",
  },
  {
    icon: <FileText className="h-5 w-5 text-[#10B981]" />,
    title: "Policy Engine",
    description: "Automated policy enforcement with customizable rules and compliance checks.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-[#DC2626]" />,
    title: "Risk Management",
    description: "Continuous risk assessment with automated threat detection and response.",
  },
]

const complianceFrameworks = [
  {
    title: "Financial Services",
    standards: ["SOX", "PCI DSS", "GDPR", "CCPA"],
    description: "Comprehensive compliance for banking, insurance, and fintech applications.",
    certifications: ["SOC 2 Type II", "ISO 27001", "FedRAMP"],
  },
  {
    title: "Healthcare",
    standards: ["HIPAA", "HITECH", "FDA 21 CFR Part 11"],
    description: "Healthcare-specific privacy and security controls for patient data protection.",
    certifications: ["HITRUST CSF", "SOC 2 Type II"],
  },
  {
    title: "Government",
    standards: ["FedRAMP", "FISMA", "NIST"],
    description: "Government-grade security controls for public sector deployments.",
    certifications: ["FedRAMP High", "FIPS 140-2"],
  },
]

const privacyFeatures = [
  {
    title: "Data Anonymization",
    description: "Advanced techniques to remove personally identifiable information",
    techniques: ["K-anonymity", "L-diversity", "T-closeness", "Differential privacy"],
  },
  {
    title: "Secure Computation",
    description: "Process encrypted data without exposing sensitive information",
    techniques: ["Homomorphic encryption", "Secure multi-party computation", "Federated learning"],
  },
  {
    title: "PII Detection",
    description: "Automated identification and protection of sensitive data",
    techniques: ["Pattern matching", "ML-based detection", "Custom classifiers", "Real-time scanning"],
  },
]

function SecurityPillarCard({
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

function ComplianceFrameworkCard({
  title,
  standards,
  description,
  certifications,
}: { title: string; standards: string[]; description: string; certifications: string[] }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-300 mb-4">{description}</p>
        <div className="space-y-3">
          <div>
            <span className="text-xs text-white/60 uppercase tracking-wide">Standards:</span>
            <div className="mt-1 flex flex-wrap gap-1">
              {standards.map((standard) => (
                <span key={standard} className="px-2 py-1 text-xs bg-white/10 rounded-md text-white">
                  {standard}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs text-white/60 uppercase tracking-wide">Certifications:</span>
            <div className="mt-1 space-y-1">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="h-3 w-3 text-[#F59E0B]" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
