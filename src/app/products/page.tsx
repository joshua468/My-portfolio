"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import ScrollReveal from "@/components/ScrollReveal"
import { products } from "@/lib/data"

const ease = [0.22, 1, 0.36, 1]

function ProductIcon({ slug }: { slug: string }) {
  const s = { width: 18, height: 18, viewBox: "0 0 24 24" as const, fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
  switch (slug) {
    case "crampai":
      return (
        <svg {...s}>
          <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1 1 12 5.001a5 5 0 1 1 7.5 7.571" />
        </svg>
      )
    case "grade":
      return (
        <svg {...s}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 3v6" />
          <path d="M15 3v6" />
          <path d="M9 15h2" />
          <path d="M15 15h2" />
          <path d="M9 19h6" />
        </svg>
      )
    case "calorie":
      return (
        <svg {...s}>
          <path d="M12 22c4-4 8-8.5 8-14C14 8 12 10 12 10S10 8 4 8c0 5.5 4 10 8 14z" />
          <path d="M12 22V12" />
        </svg>
      )
    case "bird":
      return (
        <svg {...s}>
          <polygon points="8,5 19,12 8,19" />
        </svg>
      )
    case "neondrift":
      return (
        <svg {...s}>
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
        </svg>
      )
    default:
      return (
        <svg {...s}>
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
  }
}

export default function Products() {
  return (
    <>
      <Navigation />

      <section className="section px-5 sm:px-6">
        <div className="shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-10"
          >
            <p className="label">Products</p>
            <h1 className="h2 mb-3">Things I&apos;ve Built</h1>
            <p className="text-secondary text-sm md:text-base leading-relaxed max-w-[560px]">
              Products launched beyond the design file.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5">
            {products.map((p) => (
              <ScrollReveal key={p.slug} stagger>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="block card p-6 md:p-6 h-full group">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="rounded-lg flex items-center justify-center shrink-0"
                      style={{ width: 40, height: 40, background: p.iconBg, color: p.iconColor }}
                    >
                      <ProductIcon slug={p.slug} />
                    </div>
                    <span className="text-tertiary text-xs transition-colors">↗</span>
                  </div>
                  <h3 className="font-semibold mb-1 text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{p.overview}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-10 px-5 sm:px-6 border-t text-tertiary text-xs">
        <div className="shell flex flex-col md:flex-row items-center justify-between gap-3">
          <p>&copy; 2026 Adegbesan Joshua Temitope</p>
          <p>Lagos, Nigeria</p>
        </div>
      </footer>
    </>
  )
}
