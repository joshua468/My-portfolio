"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import { products } from "@/lib/data"

const ease = [0.22, 1, 0.36, 1]

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-secondary">Product not found</p>
      </div>
    )
  }

  return (
    <>
      <Navigation />

      <div className="pt-section pb-section px-6">
        <div className="shell max-w-[780px]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link href="/products" className="inline-flex items-center gap-2 text-secondary text-sm mb-8 transition-colors">
              &larr; Back to Products
            </Link>
          </motion.div>

          <motion.div
            className="card p-8 md:p-10 text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <div
              className="rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ width: 64, height: 64, fontSize: "1.875rem", background: product.iconBg, color: product.iconColor }}
            >
              {product.emoji}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {product.name}
            </h1>
            <a href={product.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Open Live Product &rarr;
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 pb-3 border-b" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Overview</h3>
            <p className="text-secondary text-sm leading-relaxed mb-12">{product.overview}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
          >
            <h3 className="text-lg font-bold mb-4 pb-3 border-b" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="text-center py-8 px-6 border-t text-tertiary text-xs">
        <div className="shell flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 Adegbesan Joshua Temitope</p>
          <p>Lagos, Nigeria</p>
        </div>
      </footer>
    </>
  )
}
