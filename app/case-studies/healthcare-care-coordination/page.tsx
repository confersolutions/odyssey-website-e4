"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingDown, TrendingUp, Clock } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function HealthcareCareCoordinationPage() {
  return (
    <main className="bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 py-16">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link href="/solutions" className="inline-flex items-center text-sm text-slate-300 hover:text-white mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Solutions
            </Link>

            <div className="text-sm uppercase tracking-wide text-green-400 mb-2">Healthcare Case Study</div>
            <h1 className="text-4xl font-bold md:text-5xl mb-4">Operational Efficiency in Care Coordination</h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              How an integrated health network achieved a 17% reduction in readmissions and 24% increase in throughput
              using Odyssey AI's workflow automation platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <TrendingDown className="h-6 w-6 text-green-400" />
              <div className="text-sm text-slate-400">Readmissions</div>
            </div>
            <div className="text-3xl font-bold text-green-400">-17%</div>
            <div className="text-sm text-slate-300">Improved patient outcomes</div>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-6 w-6 text-blue-400" />
              <div className="text-sm text-slate-400">Throughput</div>
            </div>
            <div className="text-3xl font-bold text-blue-400">+24%</div>
            <div className="text-sm text-slate-300">Enhanced operational efficiency</div>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="h-6 w-6 text-purple-400" />
              <div className="text-sm text-slate-400">Time to Action</div>
            </div>
            <div className="text-3xl font-bold text-purple-400">-31%</div>
            <div className="text-sm text-slate-300">Faster clinical decisions</div>
          </Card>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-invert max-w-none">
          <Card className="rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
            <p className="text-slate-300 mb-4">
              An integrated health network was facing challenges with care coordination across multiple facilities.
              Manual processes were leading to delays in patient care, increased readmission rates, and inefficient
              resource allocation.
            </p>
            <p className="text-slate-300">
              The organization needed a solution to streamline care coordination, improve patient outcomes, and optimize
              operational efficiency across their network.
            </p>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
            <p className="text-slate-300 mb-4">
              Odyssey AI implemented an intelligent care coordination platform that automated workflow processes,
              provided predictive insights for patient care, and enabled real-time collaboration between clinical teams.
            </p>
            <ul className="text-slate-300 space-y-2">
              <li>• Automated care pathway recommendations based on patient data</li>
              <li>• Real-time alerts for high-risk patients requiring immediate attention</li>
              <li>• Intelligent resource allocation and scheduling optimization</li>
              <li>• Predictive analytics for readmission risk assessment</li>
            </ul>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Results</h2>
            <p className="text-slate-300 mb-4">
              The implementation resulted in significant improvements in both patient outcomes and operational metrics:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-green-400 font-semibold">Patient Outcomes</div>
                <div className="text-slate-300">17% reduction in readmissions through better care coordination</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-blue-400 font-semibold">Operational Efficiency</div>
                <div className="text-slate-300">24% increase in patient throughput across facilities</div>
              </div>
            </div>
            <blockquote className="border-l-4 border-green-400 pl-4 italic text-slate-300">
              "The platform aligned clinicians and operations with trustworthy predictions and clear next steps."
              <footer className="text-sm text-slate-400 mt-2">
                — Clinical Ops Director, Integrated Health Network
              </footer>
            </blockquote>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-green-600/20 to-blue-600/20 p-8 backdrop-blur text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Care Coordination?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Discover how Odyssey AI can help you improve patient outcomes while enhancing operational efficiency.
            Schedule a demo to learn more about our healthcare solutions.
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/contact">Schedule Demo</Link>
          </Button>
        </Card>
      </section>

      <Footer />
    </main>
  )
}
