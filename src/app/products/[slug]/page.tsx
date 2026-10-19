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
    case "bukafinder":
      return (
        <svg {...s}>
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
      )
    case "convertdoc":
      return (
        <svg {...s}>
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M8 13h8" />
          <path d="M8 17h8" />
        </svg>
      )
    case "marketplace-api":
      return (
        <svg {...s}>
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      )
    case "payment-subscription":
      return (
        <svg {...s}>
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      )
    case "auth-slice":
      return (
        <svg {...s}>
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case "records-access":
      return (
        <svg {...s}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      )
    case "background-jobs":
      return (
        <svg {...s}>
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <rect width="6" height="6" x="9" y="9" rx="1" />
          <path d="M15 2v2" /><path d="M15 20v2" />
          <path d="M2 15h2" /><path d="M2 9h2" />
          <path d="M20 15h2" /><path d="M20 9h2" />
          <path d="M9 2v2" /><path d="M9 20v2" />
        </svg>
      )
    case "buka-finder-repo":
      return (
        <svg {...s}>
          <line x1="6" x2="6" y1="3" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
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

      <div className="pt-section pb-section px-5 sm:px-6">
        <div className="shell max-w-[780px]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link href="/products" className="inline-flex items-center gap-2 text-secondary text-sm mb-10 transition-colors">
              &larr; Back to Products
            </Link>
          </motion.div>

          <motion.div
            className="card p-6 md:p-10 text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <div
              className="rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ width: 60, height: 60, background: product.iconBg, color: product.iconColor }}
            >
              <ProductIcon slug={product.slug} />
            </div>
            <h1 className="text-xl md:text-3xl font-bold tracking-tight mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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
            <h3 className="text-base font-bold mb-4 pb-4 border-b" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Overview</h3>
            <p className="text-secondary text-sm leading-relaxed mb-12">{product.overview}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
          >
            <h3 className="text-base font-bold mb-4 pb-4 border-b" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="text-center py-10 px-5 sm:px-6 border-t text-tertiary text-xs">
        <div className="shell flex flex-col md:flex-row items-center justify-between gap-3">
          <p>&copy; 2026 Adegbesan Joshua Temitope</p>
          <p>Lagos, Nigeria</p>
        </div>
      </footer>
    </>
  )
}
