"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import { projects } from "@/lib/data"

const ease = [0.22, 1, 0.36, 1]

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-secondary">Project not found</p>
      </div>
    )
  }

  const sections = project.sections ?? [
    { num: "01", title: "Overview", content: project.overview },
    { num: "02", title: "Problem", content: project.problem },
    { num: "03", title: "Research", content: project.research },
    { num: "04", title: "Strategy", content: project.strategy },
    { num: "05", title: "Solution", content: project.solution },
    { num: "06", title: "Results", content: project.results },
    { num: "07", title: "Lessons", content: project.lessons },
  ]

  return (
    <>
      <Navigation />

      <div className="pt-section pb-section px-6">
        <div className="shell max-w-[800px]">
          <Link href="/" className="inline-flex items-center gap-2 text-secondary text-sm mb-12 transition-colors hover:text-accent" style={{ color: "var(--text-tertiary)" }}>
            <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>&uarr;</span> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-16"
          >
            <div style={{ position: 'relative', height: '420px', background: 'var(--bg-alt)', borderRadius: '16px' }} className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <span className="inline-block text-white mb-4" style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 100, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  {project.tag}
                </span>
                <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.15 }}>
                  {project.title}
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8" style={{ padding: "0 4px" }}>
              {[
                { label: "Role", value: project.role },
                { label: "Year", value: project.year },
                { label: "Tools", value: project.tools },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-tertiary mb-2" style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>{m.label}</p>
                  <p className="text-base" style={{ fontWeight: 450 }}>{m.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-28">
            {sections.map((s) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease }}
                className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10"
              >
                <div>
                  <span className="text-tertiary" style={{ fontSize: "0.6rem", fontFamily: "'SF Mono', Monaco, 'Cascadia Code', monospace", fontWeight: 600, letterSpacing: "0.05em", position: "sticky", top: 24 }}>
                    {s.num}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-6 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {s.title}
                  </h2>
                  <p className="text-secondary" style={{ fontSize: "1rem", lineHeight: 1.85, maxWidth: 620 }}>{s.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 40 }}>
            <a
              href="https://www.behance.net/adegbesanjoshua"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Full Project on Behance &rarr;
            </a>
          </div>
        </div>
      </div>

      <footer className="text-center py-10 px-6 border-t text-tertiary text-xs">
        <div className="shell flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 Adegbesan Joshua Temitope</p>
          <p>Lagos, Nigeria</p>
        </div>
      </footer>
    </>
  )
}
