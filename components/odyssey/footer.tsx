"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "ok" | "err">("idle")

  async function subscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes("@")) {
      setStatus("err")
      return
    }
    setStatus("idle")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
      })
      if (res.ok) setStatus("ok")
    } catch {
      setStatus("err")
    }
  }

  return (
    <footer className="border-t border-white/10 bg-[#0B1224] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">{"Odyssey AI"}</div>
            <p className="mt-2 text-sm text-white/70">{"Enterprise AI solutions for regulated industries."}</p>
          </div>
          <div>
            <div className="text-sm font-semibold">{"Company"}</div>
            <ul className="mt-2 space-y-1 text-sm text-white/70">
              <li>
                <Link href="/solutions" className="hover:text-white">
                  {"Solutions"}
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white">
                  {"Industries"}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white">
                  {"Resources"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  {"Contact"}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">{"Resources"}</div>
            <ul className="mt-2 space-y-1 text-sm text-white/70">
              <li>{"Case studies"}</li>
              <li>{"Whitepapers"}</li>
              <li>{"Blog"}</li>
              <li>{"Security"}</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">{"Newsletter"}</div>
            <form onSubmit={subscribe} className="mt-2 flex gap-2">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="bg-white/5 text-white placeholder:text-white/40"
              />
              <Button type="submit" className="bg-[#2563EB] hover:bg-[#1d4fd7]">
                {"Join"}
              </Button>
            </form>
            {status === "ok" && <div className="mt-2 text-xs text-[#10B981]">{"Subscribed!"}</div>}
            {status === "err" && <div className="mt-2 text-xs text-[#ef4444]">{"Please enter a valid email."}</div>}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60">
          <div>
            {"© "}
            {new Date().getFullYear()}
            {" Odyssey AI. All rights reserved."}
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              {"Privacy"}
            </Link>
            <Link href="#" className="hover:text-white">
              {"Terms"}
            </Link>
            <Link href="#" className="hover:text-white">
              {"Security"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
