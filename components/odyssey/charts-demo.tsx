"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

type Point = { t: string; v: number }

export function ChartsDemo() {
  const [data, setData] = React.useState<Point[]>(() =>
    Array.from({ length: 20 }).map((_, i) => ({
      t: String(i).padStart(2, "0"),
      v: Math.round(50 + 30 * Math.sin(i / 2) + Math.random() * 8),
    })),
  )

  React.useEffect(() => {
    const id = setInterval(() => {
      setData((prev) => {
        const i = prev.length
        const next = {
          t: String(i).padStart(2, "0"),
          v: Math.max(0, Math.round(prev[prev.length - 1].v + (Math.random() - 0.4) * 10)),
        }
        const arr = [...prev.slice(-19), next]
        return arr
      })
    }, 1500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-[#0F172A] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          {"Operational visibility with live metrics"}
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-white/70">
          {"Monitor agent throughput, SLA adherence, and performance over time."}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="col-span-2 rounded-2xl border-white/10 bg-white/5 p-4 text-white backdrop-blur">
            <div className="mb-3 text-sm text-white/70">{"Agent Throughput (events/min)"}</div>
            <ChartContainer
              className="h-72"
              config={{
                v: { label: "Throughput", color: "#10B981" },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="t" hide />
                  <YAxis hide domain={["auto", "auto"]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="v" stroke="#10B981" strokeWidth={2} dot={false} isAnimationActive />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </Card>

          <div className="grid gap-4">
            <MiniStat title="SLA Adherence" value="99.3%" trend="+0.4%" color="#2563EB" />
            <MiniStat title="Automation Rate" value="78%" trend="+2.1%" color="#7C3AED" />
            <MiniStat title="Latency (p95)" value="420ms" trend="-35ms" color="#10B981" />
          </div>
        </div>
      </div>
    </section>
  )
}

function MiniStat({ title, value, trend, color }: { title: string; value: string; trend: string; color: string }) {
  return (
    <Card className="rounded-2xl border-white/10 bg-white/5 p-5 text-white backdrop-blur">
      <div className="text-sm text-white/70">{title}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      <div className="mt-2 text-xs" style={{ color }}>
        {trend}
      </div>
    </Card>
  )
}
