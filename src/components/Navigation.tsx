"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { href: "/", label: "home" },
  { href: "/products", label: "products" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
]

const mobileLinks = [
  ...links,
  { href: "/plugin", label: "plugin" },
  { href: "/Adegbesan Joshua Temitope CV.pdf", label: "cv", external: true },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = useCallback(() => {
    setOpen((prev) => {
      const next = !prev
      if (next) {
        document.body.classList.add("scroll-locked")
      } else {
        document.body.classList.remove("scroll-locked")
      }
      return next
    })
  }, [])

  const closeMenu = useCallback(() => {
    setOpen(false)
    document.body.classList.remove("scroll-locked")
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    return () => {
      document.body.classList.remove("scroll-locked")
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 md:py-5 transition-all duration-300 ${
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
            <Link href={l.href} className="text-sm text-[#6B6B68] hover:text-[#7C6FFF] transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <a href="/Adegbesan Joshua Temitope CV.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6B6B68] hover:text-[#7C6FFF] transition-colors">
            cv
          </a>
        </li>
        <li>
          <Link href="/plugin" className="text-sm text-[#6B6B68] hover:text-[#7C6FFF] transition-colors">
            plugin
          </Link>
        </li>
      </ul>

      <button
        className="md:hidden text-[#1C1C1A] p-3 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={open}
      >
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
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
            className="fixed inset-0 top-0 z-40 flex flex-col md:hidden"
            style={{ background: "rgba(245,245,240,0.97)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Top bar with logo + close */}
            <div className="flex items-center justify-between px-6 py-4">
              <Link href="/" onClick={closeMenu} className="font-['Space_Grotesk'] font-bold text-lg tracking-tight text-[#1C1C1A]">
                joshua<span className="text-[#7C6FFF]">.</span>
              </Link>
              <button
                className="text-[#1C1C1A] p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full"
                style={{ background: "rgba(0,0,0,0.05)" }}
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
              {mobileLinks.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                >
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" onClick={closeMenu}
                      className="text-2xl font-['Space_Grotesk'] font-bold text-[#6B6B68] hover:text-[#7C6FFF] transition-colors min-h-[44px] inline-flex items-center">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} onClick={closeMenu}
                      className="text-2xl font-['Space_Grotesk'] font-bold text-[#6B6B68] hover:text-[#7C6FFF] transition-colors min-h-[44px] inline-flex items-center">
                      {l.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="px-6 py-6 text-center">
              <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>&copy; 2026 Joshua Temitope</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
