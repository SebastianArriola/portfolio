"use client"

import { useEffect, useState } from "react"

export function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      className="spotlight hidden lg:block"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(4, 0, 255, 0.06), transparent 80%)`,
      }}
    />
  )
}
