"use client"

import type React from "react"

import { useTilt } from "@/lib/tilt"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Bot, Workflow, BrainCircuit, ShieldCheck } from "lucide-react"

const items = [
  {
    icon: Bot,
    title: "Autonomous Agents",
    desc: "Task-planning, tool-use, and oversight for mission-critical operations.",
    color: "#2563EB",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Multi-step pipelines with human-in-the-loop and SLA tracking.",
    color: "#7C3AED",
  },
  {
    icon: BrainCircuit,
    title: "Decision Intelligence",
    desc: "Real-time scoring and recommendations with feature stores.",
    color: "#10B981",
  },
  {
    icon: ShieldCheck,
    title: "Governance & Security",
    desc: "Audit trails, PII redaction, RBAC, and model risk management.",
    color: "#F59E0B",
  },
]

export function SolutionsGrid() {
  return (
    <section id="solutions" className="bg-[#0F172A] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          {"Solutions engineered for enterprise scale"}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          {"Modular capabilities to accelerate AI strategy, consulting, and product delivery."}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc, color }) => (
            <TiltCard key={title} color={color} title={title} desc={desc} Icon={Icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TiltCard({
  color,
  title,
  desc,
  Icon,
}: {
  color: string
  title: string
  desc: string
  Icon: React.ComponentType<{ className?: string }>
}) {
  const ref = useTilt<HTMLDivElement>(10)
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <Card
        ref={ref}
        className="group h-full cursor-pointer overflow-hidden rounded-2xl border-white/10 bg-white/5 p-5 text-white backdrop-blur transition-transform"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-lg p-2" style={{ backgroundColor: `${color}22`, border: `1px solid ${color}44` }}>
            <Icon className="h-5 w-5" style={{ color }} />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="mt-3 text-sm text-white/70">{desc}</p>
        <div className="mt-4 text-sm text-[#2563EB] group-hover:underline">{"Learn more →"}</div>
      </Card>
    </motion.div>
  )
}
