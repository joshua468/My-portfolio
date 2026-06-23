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
        <div className="shell max-w-[780px]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link href="/work" className="inline-flex items-center gap-2 text-secondary text-sm mb-8 transition-colors" style={{ color: "var(--text-secondary)" }}>
              &larr; Back to Projects
            </Link>
          </motion.div>

          <motion.div
            className="card overflow-hidden mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <div style={{ position: 'relative', height: '340px', background: 'var(--bg-alt)' }} className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 780px"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.6), transparent, transparent)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block text-tertiary bg-white border mb-3" style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 9999, backdropFilter: "blur(8px)" }}>
                  {project.tag}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.title}
                </h1>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-wrap bg-white" style={{ gap: "16px 32px" }}>
              {[
                { label: "Role", value: project.role },
                { label: "Year", value: project.year },
                { label: "Tools", value: project.tools },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-tertiary mb-1" style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{m.label}</p>
                  <p className="text-sm font-medium">{m.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-12">
            {sections.map((s) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease }}
              >
                <h3 className="text-lg font-bold mb-4 pb-3 border-b flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <span style={{ fontSize: "0.6rem", fontFamily: "'SF Mono', Monaco, 'Cascadia Code', monospace", color: "var(--text-tertiary)" }}>{s.num}</span>
                  {s.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">{s.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
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

      <footer className="text-center py-8 px-6 border-t text-tertiary text-xs">
        <div className="shell flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 Adegbesan Joshua Temitope</p>
          <p>Lagos, Nigeria</p>
        </div>
      </footer>
    </>
  )
}
