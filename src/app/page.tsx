"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import ChromeObjects from "@/components/ChromeObjects"
import ScrollReveal from "@/components/ScrollReveal"
import HeroReveal from "@/components/HeroReveal"
import Mascot from "@/components/Mascot"
import DesignSlideshow from "@/components/DesignSlideshow"
import { projects, products, capabilities, experience, personal } from "@/lib/data"

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

export default function Home() {
  return (
    <>
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-6 pt-20 pb-16 overflow-hidden">
        <ChromeObjects />
        <div className="relative z-10 mx-auto" style={{ maxWidth: 800 }}>
          <motion.div
            className="inline-flex items-center gap-2 border rounded-full px-4 mb-5"
            style={{ paddingTop: 6, paddingBottom: 6, fontSize: "0.65rem", background: "rgba(255,255,255,0.5)", backdropFilter: "blur(8px)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="rounded-full" style={{ width: 6, height: 6, background: "#22C55E" }} />
            <span className="font-medium tracking-wider uppercase text-secondary">Open to opportunities and collaborations</span>
          </motion.div>

          <HeroReveal
            words="Joshua Temitope"
            subElements={
              <>
                <p
                  className="hero-sub mt-3 text-accent font-medium tracking-wide"
                  style={{ fontSize: "clamp(0.75rem,1.2vw,0.9375rem)", fontFamily: "'Space Grotesk', sans-serif", textTransform: "uppercase", letterSpacing: "0.1em" }}
                >
                  Product Designer & Builder
                </p>

                <p
                  className="hero-sub mt-5 text-secondary leading-relaxed font-medium"
                  style={{ fontSize: "clamp(0.9375rem,2vw,1.125rem)" }}
                >
                  Designing intelligent products, systems, and experiences that people actually use.
                </p>

                <p
                  className="hero-sub text-sm text-tertiary mt-4 max-w-[420px] mx-auto leading-relaxed"
                >
                  Based in Lagos, Nigeria, I help founders and startups transform ideas into impactful digital products through strategy, design, and execution.
                </p>

                <div className="hero-sub flex flex-col sm:flex-row gap-3 justify-center mt-8">
                  <Link href="#featured-projects" className="btn btn-primary">
                    View Work &rarr;
                  </Link>
                  <Link href="/contact" className="btn btn-secondary">
                    Let&apos;s Talk
                  </Link>
                </div>
              </>
            }
          />
        </div>
      </section>

      <div className="divider" />

      {/* ===== FEATURED PROJECTS ===== */}
      <section id="featured-projects" className="section-compact px-5 sm:px-6 relative z-10">
        <div className="shell">
          <ScrollReveal>
            <div className="section-h">
              <p className="label">Portfolio</p>
              <h2 className="h2">Featured Projects</h2>
              <p className="text-secondary text-sm leading-relaxed mt-2" style={{ maxWidth: 640 }}>A selection of products, platforms, and experiences designed to solve real-world problems.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-12" style={{ alignItems: 'stretch' }}>
            {projects.filter(p => p.featured).map((project) => (
              <ScrollReveal key={project.slug} stagger>
                <Link href={`/details/${project.slug}`} className="block group h-full">
                  <div className="card h-full flex flex-col transition-all duration-250" style={{ transitionTimingFunction: 'var(--ease)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02) translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                  >
                    <div className={`hero-frame${project.slug === 'skana' ? ' hero-frame--skana' : ''}`}>
                      <div className="hero-frame-inner">
                        {project.slug === 'skana' ? (
                          <Image
                            src="/Skana (2).png"
                            alt="Skana Payment Platform preview"
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'center top' }}
                            className="transition-transform duration-700 scale-on-hover"
                          />
                        ) : (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top transition-transform duration-700 scale-on-hover"
                            sizes="(max-width: 768px) 100vw, 1120px"
                          />
                        )}
                        <div className="hero-frame-gradient" />
                      </div>
                    </div>
                    <div className="p-5 md:p-6 flex flex-col gap-4 mt-auto">
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-tertiary mb-1" style={{ letterSpacing: '0.04em' }}>{project.year} &middot; {project.tags.slice(0, 2).join(', ')}</p>
                        <h3 className="text-lg md:text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{project.title}</h3>
                        <p className="text-secondary text-sm mt-1 line-clamp-3">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2 shrink-0">
                        <div className="flex items-center gap-2">
                          {project.tags.slice(0, 2).map((t) => (
                            <span key={t} className="tag">{t}</span>
                          ))}
                        </div>
                        <span className="text-accent text-sm font-semibold shrink-0">&rarr;</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-8 text-center">
              <a href="https://www.behance.net/adegbesanjoshua" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View All Projects &rarr;
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider" />

      {/* ===== SOME UI ===== */}
      <section className="section-compact relative z-10" style={{ background: "var(--bg-alt)" }}>
        <div className="shell">
          <ScrollReveal>
            <div className="section-h text-center">
              <p className="label">Gallery</p>
              <h2 className="h2">Some UI</h2>
              <p className="text-secondary text-sm leading-relaxed mt-2 mx-auto" style={{ maxWidth: 480 }}>
                A selection of UI and product design explorations.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="mt-10">
          <DesignSlideshow />
        </div>
      </section>

      <div className="divider" />

      {/* ===== THINGS I'VE BUILT ===== */}
      <section className="section-compact px-5 sm:px-6 relative z-10">
        <div className="shell">
          <ScrollReveal>
            <div className="section-h">
              <p className="label">Products</p>
              <h2 className="h2">Things I&apos;ve Built</h2>
              <p className="text-secondary text-sm leading-relaxed mt-2 max-w-[560px]">Building products beyond the design file and bringing ideas to life.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-10">
            {products.map((p) => (
              <ScrollReveal key={p.slug} stagger>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="block card p-5 md:p-6 h-full group">
                    <div className="flex items-start justify-between mb-4">
                    <div
                      className="rounded-lg flex items-center justify-center shrink-0"
                      style={{ width: 40, height: 40, background: p.iconBg, color: p.iconColor }}
                    >
                      <ProductIcon slug={p.slug} />
                    </div>
                    <span className="text-tertiary text-xs transition-colors" style={{ color: "var(--text-tertiary)" }}>↗</span>
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

      <div className="divider" />

      {/* ===== ABOUT ===== */}
      <section className="section-compact px-5 sm:px-6 relative z-10">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
            <ScrollReveal>
              <p className="label">About</p>
              <h2 className="h2" style={{ fontSize: "1.375rem" }}>Designing Beyond the Interface.</h2>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: "1+", label: "Years Experience" },
                  { value: "1", label: "Products Shipped" },
                  { value: "2", label: "Startups Helped" },
                  { value: "4", label: "Products Live" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl" style={{ background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
                    <p className="font-bold text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--accent)" }}>{stat.value}</p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 mt-4">
                <div className="p-4 rounded-xl" style={{ background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
                  <p className="font-bold text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--accent)" }}>5+</p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>Case Studies</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal stagger>
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
                Based in {personal.location}, I&apos;m continuously expanding my AI capabilities to build products that create meaningful impact.
              </p>
              <div className="mt-5">
                <Link href="/about" className="btn btn-secondary">
                  More About Me &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== CAPABILITIES ===== */}
      <section className="section-compact px-5 sm:px-6 relative z-10">
        <div className="shell">
          <ScrollReveal>
            <div className="section-h">
              <p className="label">Capabilities</p>
              <h2 className="h2">What I Work With</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {capabilities.map((c, i) => (
              <ScrollReveal key={i} stagger>
                <div className="card p-3 md:p-5 h-full group cap-card">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-md flex items-center justify-center" style={{ background: "var(--bg-alt)" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {c.category === "Design" && <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></>}
                        {c.category === "Strategy" && <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>}
                        {c.category === "Build" && <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>}
                        {c.category === "AI" && <><path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.57-3.25 3.92L12 22"/><path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.57 3.25 3.92"/></>}
                      </svg>
                    </div>
                    <p className="text-tertiary" style={{ fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{c.category}</p>
                  </div>
                  <p className="font-semibold text-xs md:text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{c.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== EXPERIENCE ===== */}
      <section className="section-compact px-5 sm:px-6 relative z-10">
        <div className="shell max-w-[720px]">
          <ScrollReveal>
            <div className="section-h">
              <p className="label">Experience</p>
              <h2 className="h2">Where I&apos;ve Worked</h2>
            </div>
          </ScrollReveal>

          <div className="mt-10 relative exp-timeline" style={{ paddingLeft: 10 }}>
            <div className="absolute left-[5px] top-0 bottom-0 w-px" style={{ background: "var(--border)" }} />
            {experience.map((exp, i) => (
              <ScrollReveal key={i} stagger>
                <div className="relative flex flex-col md:flex-row gap-2 md:gap-10 py-6 md:py-8 border-b last:border-0">
                  <div className="absolute exp-dot -left-[10px] top-[30px] w-[10px] h-[10px] rounded-full border-2" style={{ borderColor: "var(--accent)", background: "var(--bg)" }} />
                  <p className="text-xs sm:text-sm font-medium shrink-0 md:w-[140px]" style={{ color: "var(--text-secondary)" }}>{exp.date}</p>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>{exp.company}</h3>
                    <p className="text-xs sm:text-sm font-medium mb-2" style={{ color: "var(--accent)", fontWeight: 600 }}>{exp.role}</p>
                    <ul className="space-y-2">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="text-xs sm:text-sm leading-relaxed" style={{ position: "relative", paddingLeft: 16, color: "var(--text-secondary)" }}>
                          <span style={{ position: "absolute", left: 0, color: "var(--text-tertiary)" }}>&mdash;</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== CONTACT ===== */}
      <section className="section px-5 sm:px-6 text-center relative z-10 overflow-visible">
        <div className="shell mx-auto" style={{ maxWidth: 640 }}>
          <ScrollReveal>
            <p className="label">Contact</p>
            <h2 className="font-bold leading-[1.05] mb-6 tracking-tight" style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", fontFamily: "'Space Grotesk', sans-serif" }}>
              Have an idea worth building?
            </h2>
            <p className="text-secondary text-sm md:text-base leading-relaxed max-w-[480px] mx-auto mb-10">
              Whether you&apos;re launching an AI product, building a startup, or improving an existing platform, I&apos;d love to help shape the next version of it.
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
          </ScrollReveal>
        </div>

        <Mascot />
      </section>

      <footer className="text-center py-10 px-5 sm:px-6 border-t text-tertiary text-xs">
        <div className="shell flex flex-col md:flex-row items-center justify-between gap-3">
          <p>&copy; 2026 {personal.name}</p>
          <p>Lagos, Nigeria</p>
        </div>
      </footer>
    </>
  )
}
