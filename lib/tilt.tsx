"use client"

import * as React from "react"

export function useTilt<T extends HTMLElement>(maxTilt = 8) {
  const ref = React.useRef<T | null>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    function handleMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const px = x / rect.width
      const py = y / rect.height
      const tiltX = (py - 0.5) * -2 * maxTilt
      const tiltY = (px - 0.5) * 2 * maxTilt
      el.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(0)`
    }
    function handleLeave() {
      el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)"
    }

    el.addEventListener("mousemove", handleMove)
    el.addEventListener("mouseleave", handleLeave)
    return () => {
      el.removeEventListener("mousemove", handleMove)
      el.removeEventListener("mouseleave", handleLeave)
    }
  }, [maxTilt])

  return ref
}
