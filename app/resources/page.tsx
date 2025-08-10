import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const resources = [
  {
    type: "Case Study",
    title: "Reducing loan decision time by 45%",
    desc: "How a fintech automated underwriting with agentic workflows.",
  },
  {
    type: "Whitepaper",
    title: "Model Risk Management for Agentic Systems",
    desc: "A practical approach to governance, oversight, and controls.",
  },
  {
    type: "Blog",
    title: "Operational patterns for autonomous agents",
    desc: "From tool-use to supervision to feedback loops.",
  },
]

export default function ResourcesPage() {
  return (
    <main className="bg-[#0F172A] text-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-bold">{"Resources"}</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          {"Explore case studies, whitepapers, and insights from the field."}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {resources.map((r) => (
            <Card key={r.title} className="overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur">
              <img src="/abstract-resource-cover.png" alt="Resource cover" className="h-40 w-full object-cover" />
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide text-white/60">{r.type}</div>
                <div className="mt-1 text-lg font-semibold">{r.title}</div>
                <p className="mt-1 text-sm text-white/70">{r.desc}</p>
                <Link href="#" className="mt-3 inline-block text-sm text-[#2563EB] hover:underline">
                  {"Read more →"}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
