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

export default function FinancialServicesFraudPreventionPage() {
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

            <div className="text-sm uppercase tracking-wide text-blue-400 mb-2">Financial Services Case Study</div>
            <h1 className="text-4xl font-bold md:text-5xl mb-4">Reducing Fraud Losses While Lifting Approvals</h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              How a top 10 card issuer achieved a 38% reduction in chargebacks while increasing approvals by 6.2% using
              Odyssey AI's decision intelligence platform.
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
              <div className="text-sm text-slate-400">Chargebacks</div>
            </div>
            <div className="text-3xl font-bold text-green-400">-38%</div>
            <div className="text-sm text-slate-300">Significant reduction in fraud losses</div>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-6 w-6 text-blue-400" />
              <div className="text-sm text-slate-400">Approvals</div>
            </div>
            <div className="text-3xl font-bold text-blue-400">+6.2%</div>
            <div className="text-sm text-slate-300">Improved customer experience</div>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="h-6 w-6 text-purple-400" />
              <div className="text-sm text-slate-400">AHT</div>
            </div>
            <div className="text-3xl font-bold text-purple-400">-42%</div>
            <div className="text-sm text-slate-300">Faster decision processing</div>
          </Card>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-invert max-w-none">
          <Card className="rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
            <p className="text-slate-300 mb-4">
              A major card issuer was struggling with the classic fraud prevention dilemma: tightening security measures
              to reduce fraud losses while maintaining a smooth customer experience. Their existing rule-based system
              was generating too many false positives, declining legitimate transactions and frustrating customers.
            </p>
            <p className="text-slate-300">
              The challenge was to implement a more sophisticated approach that could accurately identify fraudulent
              transactions while minimizing the impact on genuine customers.
            </p>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
            <p className="text-slate-300 mb-4">
              Odyssey AI implemented a comprehensive decision intelligence platform that leveraged machine learning
              models trained on historical transaction data, real-time behavioral patterns, and contextual information
              to make more accurate fraud predictions.
            </p>
            <ul className="text-slate-300 space-y-2">
              <li>• Real-time risk scoring with sub-100ms response times</li>
              <li>• Advanced feature engineering incorporating device fingerprinting and behavioral analytics</li>
              <li>• Continuous model retraining to adapt to emerging fraud patterns</li>
              <li>• Explainable AI to provide clear reasoning for decisions</li>
            </ul>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Results</h2>
            <p className="text-slate-300 mb-4">
              The implementation delivered significant improvements across all key metrics within the first quarter of
              deployment:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-green-400 font-semibold">Fraud Reduction</div>
                <div className="text-slate-300">38% decrease in chargebacks, saving millions in fraud losses</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-blue-400 font-semibold">Customer Experience</div>
                <div className="text-slate-300">6.2% increase in legitimate transaction approvals</div>
              </div>
            </div>
            <blockquote className="border-l-4 border-blue-400 pl-4 italic text-slate-300">
              "Odyssey balanced risk and customer experience—our approvals climbed while fraud losses dropped
              significantly."
              <footer className="text-sm text-slate-400 mt-2">— VP Risk, Top 10 Card Issuer</footer>
            </blockquote>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 backdrop-blur text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Fraud Prevention?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            See how Odyssey AI can help you reduce fraud losses while improving customer experience. Schedule a demo to
            learn more about our decision intelligence platform.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Schedule Demo</Link>
          </Button>
        </Card>
      </section>

      <Footer />
    </main>
  )
}
