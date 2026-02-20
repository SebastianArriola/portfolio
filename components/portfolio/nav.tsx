"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "EXPERIENCIA", href: "#experience" },
  { label: "PROYECTOS", href: "#projects" },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -60% 0px" }
    )

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden lg:flex flex-col gap-1" aria-label="In-page navigation">
      {navItems.map(({ label, href }) => {
        const sectionId = href.replace("#", "")
        const isActive = activeSection === sectionId

        return (
          <a
            key={label}
            href={href}
            className={cn(
              "group flex items-center gap-4 py-2 text-xs font-semibold tracking-widest transition-all duration-300",
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span
              className={cn(
                "h-px transition-all duration-300",
                isActive ? "w-16 bg-foreground" : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
              )}
            />
            {label}
          </a>
        )
      })}
    </nav>
  )
}
