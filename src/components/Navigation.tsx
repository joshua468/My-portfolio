"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { href: "/", label: "work" },
  { href: "/products", label: "products" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-300 ${
        scrolled ? "bg-white/80" : "bg-transparent"
      }`}
      style={scrolled ? { background: "rgba(255,255,255,0.8)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" } : undefined}
    >
      <Link href="/" className="font-['Space_Grotesk'] font-bold text-lg tracking-tight text-[#1C1C1A]">
        joshua<span className="text-[#7C6FFF]">.</span>
      </Link>

      <ul className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-[#6B6B68] hover:text-[#1C1C1A] transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/plugin" className="text-sm text-[#6B6B68] hover:text-[#1C1C1A] transition-colors">
            plugin
          </Link>
        </li>
      </ul>

      <button
        className="md:hidden text-[#1C1C1A] p-2"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          {open ? (
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          ) : (
            <>
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link href={l.href} className="text-2xl font-['Space_Grotesk'] font-bold text-[#6B6B68] hover:text-[#1C1C1A] transition-colors">
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
