"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import { products } from "@/lib/data"

const ease = [0.22, 1, 0.36, 1]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Products() {
  return (
    <>
      <Navigation />

      <section className="section px-6">
        <div className="shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-14"
          >
            <p className="label">Products</p>
            <h1 className="h2 mb-4">Things I've Built</h1>
            <p className="text-secondary text-base leading-relaxed max-w-[560px]">
              Products launched beyond the design file.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {products.map((p, i) => (
              <FadeUp key={p.slug} delay={i * 0.05}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="block card p-6 h-full group">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="rounded-lg flex items-center justify-center text-lg shrink-0"
                      style={{ width: 40, height: 40, background: p.iconBg, color: p.iconColor }}
                    >
                      {p.emoji}
                    </div>
                    <span className="text-tertiary text-xs transition-colors">↗</span>
                  </div>
                  <h3 className="font-semibold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{p.overview}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-8 px-6 border-t text-tertiary text-xs">
        <div className="shell flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 Adegbesan Joshua Temitope</p>
          <p>Lagos, Nigeria</p>
        </div>
      </footer>
    </>
  )
}
