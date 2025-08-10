"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

const team = [
  { name: "Ava Stone", role: "CEO", img: "/ava-stone-portrait.png", gh: "#", li: "#" },
  { name: "Leo Park", role: "CTO", img: "/leo-park-portrait.png", gh: "#", li: "#" },
  { name: "Maya Chen", role: "Head of AI", img: "/maya-chen-portrait.png", gh: "#", li: "#" },
  { name: "Sam Ortiz", role: "VP, Product", img: "/sam-ortiz-portrait.png", gh: "#", li: "#" },
]

export function TeamSection() {
  return (
    <section className="bg-[#0F172A] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{"Meet the team"}</h2>
        </div>
        <p className="mt-2 max-w-2xl text-white/70">
          {"A cross‑functional team spanning AI research, data engineering, and enterprise delivery."}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <motion.div key={m.name} whileHover={{ y: -5 }}>
              <Card className="group overflow-hidden rounded-2xl border-white/10 bg-white/5 p-6 text-white backdrop-blur">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 ring-2 ring-white/10">
                    <AvatarImage src={m.img || "/placeholder.svg"} alt={`${m.name} photo`} />
                    <AvatarFallback>{m.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="mt-4 text-lg font-semibold">{m.name}</div>
                  <div className="text-sm text-white/70">{m.role}</div>
                  <p className="mt-3 line-clamp-3 text-xs text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {"Focused on delivering measurable outcomes with robust, secure AI systems."}
                  </p>
                  <div className="mt-4 flex gap-3">
                    <a href={m.li} aria-label={`${m.name} on LinkedIn`} className="text-white/70 hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href={m.gh} aria-label={`${m.name} on GitHub`} className="text-white/70 hover:text-white">
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
