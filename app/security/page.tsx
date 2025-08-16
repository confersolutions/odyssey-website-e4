"use client"

import type * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Eye, FileText, CheckCircle, AlertTriangle, Globe, Server } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function SecurityPage() {
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
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-[#F59E0B]" />
                <span className="text-sm text-white/60 uppercase tracking-wide">Security & Compliance</span>
              </div>
              <h1 className="text-4xl font-bold md:text-5xl text-white">Enterprise-Grade Security</h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                Comprehensive security controls, compliance frameworks, and privacy protection designed for the most
                demanding enterprise environments.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-[#F59E0B] hover:bg-[#D97706]">
                  <Link href="/contact">Security Assessment</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/solutions/security-governance">Security Solutions</Link>
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
                  src="/placeholder.svg?height=400&width=640"
                  alt="Security architecture diagram"
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
          Our security framework is built on four foundational pillars that ensure comprehensive protection.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {securityPillars.map((pillar) => (
            <SecurityPillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Compliance & Certifications
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          We maintain the highest standards of compliance across multiple frameworks and industries.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {complianceFrameworks.map((framework) => (
            <ComplianceCard key={framework.title} {...framework} />
          ))}
        </div>
      </section>

      {/* Security Architecture */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Security Architecture
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Multi-layered security architecture with defense-in-depth principles and zero-trust networking.
        </p>

        <div className="mt-8">
          <Card className="overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Security architecture layers"
                fill
                sizes="100vw"
                className="object-cover opacity-90"
              />
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {architectureLayers.map((layer) => (
                  <div key={layer.name} className="space-y-2">
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <layer.icon className="h-4 w-4" style={{ color: layer.color }} />
                      {layer.name}
                    </h4>
                    <p className="text-sm text-slate-300">{layer.description}</p>
                    <div className="space-y-1">
                      {layer.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="h-3 w-3 text-[#F59E0B]" />
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
          Advanced privacy-preserving technologies that protect sensitive data while maintaining AI model performance.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {privacyFeatures.map((feature) => (
            <PrivacyFeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Security Operations */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Security Operations
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          24/7 security monitoring, incident response, and continuous threat assessment.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {securityOperations.map((operation) => (
            <SecurityOperationCard key={operation.title} {...operation} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-[#F59E0B]/10 to-[#DC2626]/10 p-8 backdrop-blur text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Secure Your AI Infrastructure?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Get a comprehensive security assessment and learn how we can protect your AI systems and data.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild className="bg-[#F59E0B] hover:bg-[#D97706]">
              <Link href="/contact">Security Assessment</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              <Link href="/whitepapers">Security Whitepapers</Link>
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
    icon: <Lock className="h-6 w-6 text-[#F59E0B]" />,
    title: "Access Controls",
    description: "Multi-factor authentication, role-based access, and fine-grained permissions.",
    features: ["MFA enforcement", "RBAC policies", "Just-in-time access"],
  },
  {
    icon: <Eye className="h-6 w-6 text-[#2563EB]" />,
    title: "Monitoring & Logging",
    description: "Comprehensive audit trails and real-time security monitoring.",
    features: ["Activity logging", "Anomaly detection", "Real-time alerts"],
  },
  {
    icon: <FileText className="h-6 w-6 text-[#10B981]" />,
    title: "Policy Enforcement",
    description: "Automated policy compliance and governance controls.",
    features: ["Policy engine", "Compliance checks", "Automated remediation"],
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-[#DC2626]" />,
    title: "Threat Protection",
    description: "Advanced threat detection and incident response capabilities.",
    features: ["Threat intelligence", "Incident response", "Vulnerability management"],
  },
]

const complianceFrameworks = [
  {
    title: "Enterprise Standards",
    certifications: ["SOC 2 Type II", "ISO 27001", "ISO 27017", "ISO 27018"],
    description: "Comprehensive security and privacy controls for enterprise environments.",
    icon: <Globe className="h-6 w-6 text-[#2563EB]" />,
  },
  {
    title: "Industry Specific",
    certifications: ["HIPAA", "PCI DSS", "FedRAMP", "GDPR"],
    description: "Specialized compliance for healthcare, finance, government, and privacy regulations.",
    icon: <Shield className="h-6 w-6 text-[#10B981]" />,
  },
  {
    title: "Cloud Security",
    certifications: ["CSA STAR", "AWS Security", "Azure Security", "GCP Security"],
    description: "Cloud-native security controls and multi-cloud compliance frameworks.",
    icon: <Server className="h-6 w-6 text-[#7C3AED]" />,
  },
]

const architectureLayers = [
  {
    name: "Network Security",
    description: "Zero-trust networking with micro-segmentation",
    features: ["VPC isolation", "Network ACLs", "DDoS protection"],
    icon: Globe,
    color: "#2563EB",
  },
  {
    name: "Application Security",
    description: "Secure coding practices and runtime protection",
    features: ["SAST/DAST", "Runtime protection", "API security"],
    icon: Shield,
    color: "#10B981",
  },
  {
    name: "Data Security",
    description: "Encryption at rest and in transit",
    features: ["AES-256 encryption", "Key management", "Data classification"],
    icon: Lock,
    color: "#F59E0B",
  },
  {
    name: "Infrastructure Security",
    description: "Hardened infrastructure and container security",
    features: ["OS hardening", "Container scanning", "Secrets management"],
    icon: Server,
    color: "#7C3AED",
  },
]

const privacyFeatures = [
  {
    title: "Data Anonymization",
    description: "Advanced techniques to remove personally identifiable information while preserving data utility.",
    techniques: ["K-anonymity", "L-diversity", "Differential privacy"],
    icon: <Eye className="h-6 w-6 text-[#2563EB]" />,
  },
  {
    title: "Secure Computation",
    description: "Process encrypted data without exposing sensitive information to unauthorized parties.",
    techniques: ["Homomorphic encryption", "Secure multi-party computation", "Federated learning"],
    icon: <Lock className="h-6 w-6 text-[#10B981]" />,
  },
  {
    title: "PII Detection",
    description: "Automated identification and protection of personally identifiable information.",
    techniques: ["Pattern matching", "ML-based detection", "Real-time scanning"],
    icon: <AlertTriangle className="h-6 w-6 text-[#F59E0B]" />,
  },
]

const securityOperations = [
  {
    title: "24/7 Security Operations Center",
    description:
      "Round-the-clock monitoring and incident response with dedicated security analysts and automated threat detection.",
    capabilities: [
      "Real-time threat monitoring",
      "Incident response team",
      "Automated threat hunting",
      "Security orchestration",
    ],
    icon: <Eye className="h-6 w-6 text-[#2563EB]" />,
  },
  {
    title: "Continuous Compliance Monitoring",
    description:
      "Automated compliance checking and reporting across all security frameworks and regulatory requirements.",
    capabilities: ["Compliance dashboards", "Automated assessments", "Audit trail management", "Regulatory reporting"],
    icon: <FileText className="h-6 w-6 text-[#10B981]" />,
  },
]

function SecurityPillarCard({
  icon,
  title,
  description,
  features,
}: { icon: React.ReactNode; title: string; description: string; features: string[] }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex items-center gap-3 mb-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">{icon}</div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-slate-300 mb-4">{description}</p>
        <div className="space-y-1">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle className="h-3 w-3 text-[#F59E0B]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

function ComplianceCard({
  title,
  certifications,
  description,
  icon,
}: { title: string; certifications: string[]; description: string; icon: React.ReactNode }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex items-center gap-3 mb-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">{icon}</div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-slate-300 mb-4">{description}</p>
        <div className="space-y-2">
          <span className="text-xs text-white/60 uppercase tracking-wide">Certifications:</span>
          <div className="flex flex-wrap gap-1">
            {certifications.map((cert) => (
              <span key={cert} className="px-2 py-1 text-xs bg-white/10 rounded-md text-white">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

function PrivacyFeatureCard({
  title,
  description,
  techniques,
  icon,
}: { title: string; description: string; techniques: string[]; icon: React.ReactNode }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex items-center gap-3 mb-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">{icon}</div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-slate-300 mb-4">{description}</p>
        <div className="space-y-1">
          {techniques.map((technique) => (
            <div key={technique} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle className="h-3 w-3 text-[#2563EB]" />
              <span>{technique}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

function SecurityOperationCard({
  title,
  description,
  capabilities,
  icon,
}: { title: string; description: string; capabilities: string[]; icon: React.ReactNode }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex items-center gap-3 mb-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">{icon}</div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-slate-300 mb-4">{description}</p>
        <div className="space-y-1">
          {capabilities.map((capability) => (
            <div key={capability} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle className="h-3 w-3 text-[#10B981]" />
              <span>{capability}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
