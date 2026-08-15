"use client"

import { useRef, useEffect, ReactNode } from "react"

export default function ScrollReveal({
  children,
  className = "",
  stagger = false,
}: {
  children: ReactNode
  className?: string
  stagger?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Check reduced motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      el.classList.add("is-visible")
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible")
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`sr${stagger ? " sr-stagger" : ""} ${className}`}
    >
      {children}
    </div>
  )
}
