"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import ChromeObjects from "@/components/ChromeObjects"
import { projects, products, capabilities, experience, personal } from "@/lib/data"

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

export default function Home() {
  return (
    <>
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
        <ChromeObjects />
        <div className="relative z-10 mx-auto" style={{ maxWidth: 800 }}>
          <motion.div
            className="inline-flex items-center gap-2 border rounded-full px-4 mb-10"
            style={{ paddingTop: 6, paddingBottom: 6, fontSize: "0.65rem", background: "rgba(255,255,255,0.5)", backdropFilter: "blur(8px)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="rounded-full" style={{ width: 6, height: 6, background: "#22C55E" }} />
            <span className="font-medium tracking-wider uppercase text-secondary">Open to opportunities and collaborations</span>
          </motion.div>

          <motion.h1
            className="font-bold leading-[0.92]"
            style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)", letterSpacing: "-0.04em", fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          >
            Joshua Temitope
          </motion.h1>

          <motion.p
            className="mt-4 text-accent font-semibold tracking-wide"
            style={{ fontSize: "clamp(1rem,1.8vw,1.25rem)", fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            Product Designer and Builder
          </motion.p>

          <motion.p
            className="mt-6 text-secondary leading-relaxed font-medium"
            style={{ fontSize: "clamp(1rem,2vw,1.3rem)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
          >
            Designing intelligent products, systems, and experiences that people actually use.
          </motion.p>

          <motion.p
            className="text-sm text-tertiary mt-6 max-w-[420px] mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
          >
            Based in Lagos, Nigeria, I help founders and startups transform ideas into impactful digital products through strategy, design, and execution.
          </motion.p>

          <motion.div
            className="flex gap-3 justify-center mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
          >
            <Link href="/work" className="btn btn-primary">
              View Work &rarr;
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="section px-6">
        <div className="shell">
          <FadeUp>
            <div className="section-h">
              <p className="label">Portfolio</p>
              <h2 className="h2">Featured Projects</h2>
              <p className="text-secondary text-sm leading-relaxed mt-3 max-w-[560px]">A selection of products, platforms, and experiences designed to solve real-world problems.</p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 mt-10">
            {projects.filter(p => p.featured).map((project, i) => (
              <FadeUp key={project.slug} delay={i * 0.05}>
                <Link href={`/work/${project.slug}`} className="block group">
                  <div className="card overflow-hidden">
                    <div style={{ position: 'relative', height: '320px', background: 'var(--bg-alt)' }} className="overflow-hidden">
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

          <FadeUp>
            <div className="mt-10 text-center">
              <a href="https://www.behance.net/adegbesanjoshua" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View All Projects &rarr;
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="divider" />

      {/* ===== THINGS I'VE BUILT ===== */}
      <section className="section px-6">
        <div className="shell">
          <FadeUp>
            <div className="section-h">
              <p className="label">Products</p>
              <h2 className="h2">Things I've Built</h2>
              <p className="text-secondary text-sm leading-relaxed mt-3 max-w-[560px]">Building products beyond the design file and bringing ideas to life.</p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
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
                    <span className="text-tertiary text-xs transition-colors" style={{ color: "var(--text-tertiary)" }}>↗</span>
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

      <div className="divider" />

      {/* ===== ABOUT ===== */}
      <section className="section px-6">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <FadeUp>
              <p className="label">About</p>
              <h2 className="h2" style={{ fontSize: "1.5rem" }}>Designing Beyond the Interface.</h2>
            </FadeUp>
            <FadeUp delay={0.05}>
              <p className="text-secondary text-sm leading-relaxed mb-5">
                I work at the intersection of product design, technology, and innovation.
              </p>
              <p className="text-secondary text-sm leading-relaxed mb-5">
                My work goes beyond creating screens. I help define product direction, uncover user needs, and design experiences that move ideas from concept to reality.
              </p>
              <p className="text-secondary text-sm leading-relaxed mb-5">
                With a foundation in design and growing expertise in development, I bridge the gap between strategy, user experience, and execution.
              </p>
              <p className="text-secondary text-sm leading-relaxed">
                Based in {personal.location}, I'm continuously expanding my full-stack and AI capabilities to build products that create meaningful impact.
              </p>
              <div className="mt-8">
                <Link href="/about" className="btn btn-secondary">
                  More About Me &rarr;
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== CAPABILITIES ===== */}
      <section className="section px-6">
        <div className="shell">
          <FadeUp>
            <div className="section-h">
              <p className="label">Capabilities</p>
              <h2 className="h2">What I Work With</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            {capabilities.map((c, i) => (
              <FadeUp key={i} delay={i * 0.02}>
                <div className="card p-5 h-full">
                  <p className="text-tertiary mb-1" style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{c.category}</p>
                  <p className="font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{c.name}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== EXPERIENCE ===== */}
      <section className="section px-6">
        <div className="shell max-w-[720px]">
          <FadeUp>
            <div className="section-h">
              <p className="label">Experience</p>
              <h2 className="h2">Where I've Worked</h2>
            </div>
          </FadeUp>

          <div className="mt-10">
            {experience.map((exp, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-8 border-b last:border-0">
                  <p className="text-sm text-tertiary font-medium shrink-0 md:w-[140px]">{exp.date}</p>
                  <div>
                    <h3 className="font-semibold text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{exp.company}</h3>
                    <p className="text-accent text-sm font-medium mb-3">{exp.role}</p>
                    <ul className="space-y-1\.5">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="text-secondary text-sm leading-relaxed pl-5 relative" style={{ position: "relative", paddingLeft: 20 }}>
                          <span className="absolute left-0 text-tertiary" style={{ position: "absolute", left: 0 }}>&mdash;</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== CONTACT ===== */}
      <section className="section px-6 text-center">
        <div className="shell mx-auto" style={{ maxWidth: 640 }}>
          <FadeUp>
            <p className="label">Contact</p>
            <h2 className="font-bold leading-[1.05] mb-6 tracking-tight" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
              Have an idea worth building?
            </h2>
            <p className="text-secondary text-base leading-relaxed max-w-[480px] mx-auto mb-10">
              Whether you're launching an AI product, building a startup, or improving an existing platform, I'd love to help shape the next version of it.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`mailto:${personal.email}`} className="btn btn-primary">
                Email Me &rarr;
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                LinkedIn
              </a>
              <a href={personal.behance} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Behance
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <footer className="text-center py-8 px-6 border-t text-tertiary text-xs">
        <div className="shell flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 {personal.name}</p>
          <p>Lagos, Nigeria</p>
        </div>
      </footer>
    </>
  )
}
