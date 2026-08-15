"use client"

import { useRef, useEffect, ReactNode } from "react"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const prevPath = useRef(pathname)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce").matches
    if (prefersReduced) return

    if (prevPath.current !== pathname) {
      // Exit: fade out
      el.classList.add("page-transition-exit", "page-transition-exit-active")

      const timer = setTimeout(() => {
        el.classList.remove("page-transition-exit", "page-transition-exit-active")
        // Enter: fade + slide in
        el.classList.add("page-transition-enter")
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.classList.add("page-transition-enter-active")
            el.classList.remove("page-transition-enter")
          })
        })
        // Clean up enter classes after transition
        setTimeout(() => {
          el.classList.remove("page-transition-enter-active")
        }, 500)
      }, 200) // dur-fast for exit

      prevPath.current = pathname
      return () => clearTimeout(timer)
    } else {
      // Initial load: just fade in
      el.classList.add("page-transition-enter")
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.classList.add("page-transition-enter-active")
          el.classList.remove("page-transition-enter")
        })
      })
      setTimeout(() => {
        el.classList.remove("page-transition-enter-active")
      }, 500)
    }
  }, [pathname])

  return <div ref={ref}>{children}</div>
}
