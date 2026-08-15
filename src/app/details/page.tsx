"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import { projects } from "@/lib/data"

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

export default function Work() {
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
            <p className="label">Portfolio</p>
            <h1 className="h2 mb-4">Featured Projects</h1>
            <p className="text-secondary text-base leading-relaxed max-w-[560px]">
              A collection of products, platforms and experiences designed to solve real problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, i) => (
              <FadeUp key={project.slug} delay={i * 0.05}>
                <Link href={`/details/${project.slug}`} className="block group">
                  <div className="card overflow-hidden">
                    <div style={{ position: 'relative', height: '300px', background: 'var(--bg-alt)' }} className="overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 scale-on-hover"
                        sizes="(max-width: 768px) 100vw, 1120px"
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.6), transparent, transparent)" }} />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block text-tertiary bg-white border" style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 9999, backdropFilter: "blur(8px)" }}>
                          {project.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{project.title}</h3>
                        <p className="text-secondary text-sm mt-1 max-w-[560px]">{project.description}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap shrink-0">
                        {project.tags.slice(0, 2).map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                        <span className="text-accent text-sm font-semibold ml-1">&rarr;</span>
                      </div>
                    </div>
                  </div>
                </Link>
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
