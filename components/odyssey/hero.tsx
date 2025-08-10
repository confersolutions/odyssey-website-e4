"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"

function useTypewriter(words: string[], speed = 55, pause = 1200) {
  const [index, setIndex] = React.useState(0)
  const [display, setDisplay] = React.useState("")
  const [deleting, setDeleting] = React.useState(false)

  React.useEffect(() => {
    const current = words[index % words.length]
    let timer: number

    if (!deleting) {
      if (display.length < current.length) {
        timer = window.setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed)
      } else {
        timer = window.setTimeout(() => setDeleting(true), pause)
      }
    } else {
      if (display.length > 0) {
        timer = window.setTimeout(() => setDisplay(current.slice(0, display.length - 1)), speed / 1.5)
      } else {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      }
    }

    return () => window.clearTimeout(timer)
  }, [display, deleting, index, words, speed, pause])

  return display
}

export function Hero() {
  const typed = useTypewriter(["Agentic AI for Retail", "Automation at Enterprise Scale", "Decision Intelligence"])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-[#0F172A]">
      {/* Floating blobs */}
      <motion.div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#2563EB] blur-[100px] opacity-30"
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#7C3AED] blur-[120px] opacity-25"
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-[#10B981] blur-[90px] opacity-20"
        animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 text-center">
        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
          {"Agentic AI for Enterprise"}
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
          {"Build, Orchestrate, and Scale "}
          <span className="relative inline-block whitespace-nowrap align-baseline">
            {/* Invisible spacer reserves the max width to prevent reflow. Use your longest phrase here. */}
            <span aria-hidden="true" className="invisible">
              {"Automation at Enterprise Scale"}
            </span>
            {/* Visible typed text overlays the reserved space */}
            <span
              className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#10B981] bg-clip-text text-transparent"
              aria-live="polite"
            >
              {typed}
            </span>
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 md:text-lg">
          {
            "Odyssey AI powers enterprise automation with autonomous agents, workflow intelligence, and a robust data foundry—engineered for compliance-heavy industries."
          }
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#2563EB] hover:bg-[#1d4fd7] text-white px-6 py-6 shadow-md shadow-[#2563EB]/30">
                <Play className="mr-2 h-4 w-4" />
                {"Schedule Demo"}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>{"Book a demo"}</DialogTitle>
              </DialogHeader>
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe title="Calendly" className="h-full w-full" src="https://calendly.com/your-calendly/30min" />
              </div>
            </DialogContent>
          </Dialog>
          <Link
            href="/solutions"
            className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-white hover:bg-white/10"
          >
            {"Explore Solutions"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Key Highlights */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { title: "Agentic AI Platform", desc: "Autonomous agents, orchestration, decisioning" },
            { title: "Data Foundry", desc: "Pipelines, AI/ML Ops, model lifecycle" },
            { title: "Industry Solutions", desc: "Finserv, Healthcare, Defense, Retail" },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-left text-white backdrop-blur"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-sm text-white/60">{item.title}</div>
              <div className="mt-1 font-semibold">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
