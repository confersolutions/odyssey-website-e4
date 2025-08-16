"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, Package, DollarSign } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function RetailPersonalizationInventoryPage() {
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

            <div className="text-sm uppercase tracking-wide text-purple-400 mb-2">Retail Case Study</div>
            <h1 className="text-4xl font-bold md:text-5xl mb-4">Personalization at Scale with Inventory Balance</h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              How a global retailer achieved a 14% increase in conversion rates and 22% reduction in stockouts using
              Odyssey AI's personalization and inventory optimization platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-6 w-6 text-green-400" />
              <div className="text-sm text-slate-400">CVR</div>
            </div>
            <div className="text-3xl font-bold text-green-400">+14%</div>
            <div className="text-sm text-slate-300">Improved conversion rates</div>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <Package className="h-6 w-6 text-blue-400" />
              <div className="text-sm text-slate-400">Stockouts</div>
            </div>
            <div className="text-3xl font-bold text-blue-400">-22%</div>
            <div className="text-sm text-slate-300">Better inventory management</div>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="h-6 w-6 text-purple-400" />
              <div className="text-sm text-slate-400">AOV</div>
            </div>
            <div className="text-3xl font-bold text-purple-400">+9%</div>
            <div className="text-sm text-slate-300">Higher average order value</div>
          </Card>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-invert max-w-none">
          <Card className="rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
            <p className="text-slate-300 mb-4">
              A global retailer was struggling to balance personalized customer experiences with efficient inventory
              management. Their existing systems couldn't effectively coordinate between demand prediction,
              personalization algorithms, and inventory optimization.
            </p>
            <p className="text-slate-300">
              The challenge was to create a unified platform that could deliver personalized recommendations while
              ensuring optimal inventory levels across all channels and locations.
            </p>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
            <p className="text-slate-300 mb-4">
              Odyssey AI implemented an integrated personalization and inventory optimization platform that leveraged
              machine learning to predict customer preferences while optimizing inventory allocation in real-time.
            </p>
            <ul className="text-slate-300 space-y-2">
              <li>• Real-time personalization engine with collaborative filtering and deep learning</li>
              <li>• Demand forecasting models incorporating seasonal trends and customer behavior</li>
              <li>• Dynamic inventory allocation across channels and locations</li>
              <li>• A/B testing framework for continuous optimization</li>
            </ul>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Results</h2>
            <p className="text-slate-300 mb-4">
              The implementation delivered significant improvements across key retail metrics within six months:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-green-400 font-semibold">Customer Experience</div>
                <div className="text-slate-300">14% increase in conversion rates through better personalization</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-blue-400 font-semibold">Inventory Efficiency</div>
                <div className="text-slate-300">22% reduction in stockouts with optimized allocation</div>
              </div>
            </div>
            <blockquote className="border-l-4 border-purple-400 pl-4 italic text-slate-300">
              "We unlocked a new level of personalized experiences and operational efficiency."
              <footer className="text-sm text-slate-400 mt-2">— Chief Digital Officer, Global Retailer</footer>
            </blockquote>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 backdrop-blur text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Retail Experience?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            See how Odyssey AI can help you deliver personalized experiences while optimizing inventory management.
            Schedule a demo to learn more about our retail solutions.
          </p>
          <Button asChild className="bg-purple-600 hover:bg-purple-700">
            <Link href="/contact">Schedule Demo</Link>
          </Button>
        </Card>
      </section>

      <Footer />
    </main>
  )
}
