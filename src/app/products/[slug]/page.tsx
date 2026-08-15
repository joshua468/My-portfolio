"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import { products } from "@/lib/data"

const ease = [0.22, 1, 0.36, 1]

function ProductIcon({ slug }: { slug: string }) {
  const s = { width: 28, height: 28, viewBox: "0 0 24 24" as const, fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
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
              style={{ width: 64, height: 64, background: product.iconBg, color: product.iconColor }}
            >
              <ProductIcon slug={product.slug} />
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
