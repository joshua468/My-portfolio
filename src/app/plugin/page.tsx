"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"

const ease = [0.22, 1, 0.36, 1]

interface PluginFeature {
  title: string
  desc: string
  icon: React.ReactNode
}

interface PluginCardData {
  slug: string
  name: string
  tagline: string
  badge: string
  isNew?: boolean
  accentColor: string
  accentBg: string
  accentBorder: string
  gradient: string
  description: string
  url: string
  icon: React.ReactNode
  stats: { value: string; label: string }[]
  features: PluginFeature[]
}

const pluginData: PluginCardData[] = [
  {
    slug: "modal-builder",
    name: "Modal Builder",
    tagline: "Prompt to Production Modal",
    badge: "New Release",
    isNew: true,
    accentColor: "#D97706",
    accentBg: "rgba(245, 158, 11, 0.08)",
    accentBorder: "rgba(245, 158, 11, 0.2)",
    gradient: "linear-gradient(90deg, #F59E0B, #EA580C)",
    description: "Turns plain-language descriptions into complete, production-ready modals styled by your design-system tokens or a custom color.",
    url: "https://www.figma.com/community/plugin/1683918906023341306/modal-builder?fuid=1072226195916375247",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
    stats: [
      { value: "Instant", label: "Prompt to Modal" },
      { value: "Tokens", label: "Design System Aware" },
      { value: "Free", label: "Figma Community" },
    ],
    features: [
      {
        title: "Natural Language Prompts",
        desc: "Describe dialogs in a sentence ('Confirm destructive change', 'Login modal') and generate them instantly.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" /><path d="M19 17v4" />
          </svg>
        ),
      },
      {
        title: "Token & Variable Aware",
        desc: "Automatically styled by your local design-system tokens, variables, or custom brand palettes.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z" />
          </svg>
        ),
      },
      {
        title: "Complete Dialog Patterns",
        desc: "Confirmations, alerts, forms, action sheets, and mobile bottom sheets with prompt-aware controls.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" /><path d="M9 15h6" />
          </svg>
        ),
      },
    ],
  },
  {
    slug: "frameforge",
    name: "FrameForge",
    tagline: "React Export",
    badge: "Developer Tool",
    accentColor: "#7C6FFF",
    accentBg: "rgba(124, 111, 255, 0.08)",
    accentBorder: "rgba(124, 111, 255, 0.2)",
    gradient: "linear-gradient(90deg, #7C6FFF, #4A8BF7)",
    description: "Turn any Figma frame into clean, production-ready React components, and move from design to code faster with less repetitive work.",
    url: "https://www.figma.com/community/plugin/1648400984820108659/frameforge-react-export",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C6FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
    stats: [
      { value: "100%", label: "Type-safe output" },
      { value: "Clean", label: "Production-ready JSX" },
      { value: "Free", label: "Figma Community" },
    ],
    features: [
      {
        title: "One-Click Export",
        desc: "Export any Figma frame into structured, clean React components in a single click.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C6FFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
          </svg>
        ),
      },
      {
        title: "Clean Code Output",
        desc: "Generates readable, idiomatic React and Tailwind/CSS code without bloated markup.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C6FFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 6-6 6 6 6" /><path d="m16 6 6 6-6 6" /><path d="m14 4-4 16" />
          </svg>
        ),
      },
      {
        title: "Design to Development",
        desc: "Bridge Figma designs directly into codebase assets with an intuitive, repeatable workflow.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C6FFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
          </svg>
        ),
      },
    ],
  },
]

function PluginCard({ plugin, index }: { plugin: PluginCardData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay: index * 0.1 }}
      className="card flex flex-col h-full relative overflow-hidden p-6 sm:p-8"
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* Top accent gradient bar */}
      <span
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: plugin.gradient }}
      />

      {/* Card Header: Icon + Badge */}
      <div className="flex items-center justify-between mb-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: plugin.accentBg, border: `1px solid ${plugin.accentBorder}` }}
        >
          {plugin.icon}
        </div>
        <span
          className="font-semibold uppercase rounded-full inline-flex items-center shrink-0"
          style={{
            fontSize: "10px",
            lineHeight: 1,
            letterSpacing: "0.07em",
            padding: "5px 9px",
            background: plugin.accentBg,
            color: plugin.accentColor,
            border: `1px solid ${plugin.accentBorder}`,
          }}
        >
          {plugin.badge}
        </span>
      </div>

      {/* Title & Tagline */}
      <div className="mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1C1A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {plugin.name}
        </h2>
        <p className="text-sm font-semibold tracking-wide uppercase mt-1" style={{ color: plugin.accentColor, fontFamily: "'Space Grotesk', sans-serif" }}>
          {plugin.tagline}
        </p>
      </div>

      {/* Description */}
      <p className="text-secondary text-sm leading-relaxed mb-6">
        {plugin.description}
      </p>

      {/* Key Features List — clean without stroke, proper generous spacing */}
      <div style={{ marginTop: "24px", marginBottom: "26px" }}>
        <p
          className="text-tertiary uppercase font-semibold tracking-wider"
          style={{ fontSize: "11px", letterSpacing: "0.08em", marginBottom: "16px" }}
        >
          Key Capabilities
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {plugin.features.map((f) => (
            <div
              key={f.title}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                padding: "12px 14px",
                borderRadius: "10px",
                background: "var(--bg-alt)",
                border: "none",
              }}
            >
              <div style={{ flexShrink: 0, marginTop: "2px" }}>{f.icon}</div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <h3 style={{ fontSize: "13px", fontWeight: 700, color: "#1C1C1A", lineHeight: 1.3, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {f.title}
                </h3>
                <p className="text-secondary" style={{ fontSize: "12px", lineHeight: 1.6, marginTop: "4px" }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div
        className="grid grid-cols-3 gap-2 text-center"
        style={{
          paddingTop: "16px",
          paddingBottom: "16px",
          marginBottom: "24px",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {plugin.stats.map((s) => (
          <div key={s.label}>
            <p className="text-base sm:text-lg font-bold text-[#1C1C1A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {s.value}
            </p>
            <p style={{ fontSize: "11px", color: "var(--text-tertiary)", marginTop: "2px" }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="mt-auto flex flex-col sm:flex-row gap-3" style={{ paddingTop: "8px" }}>
        <a
          href={plugin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary flex-1 justify-center"
        >
          Install on Figma &rarr;
        </a>
        <a
          href={plugin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary justify-center text-xs"
        >
          Figma Community ↗
        </a>
      </div>
    </motion.div>
  )
}

export default function Plugin() {
  return (
    <>
      <Navigation />

      <section className="section px-5 sm:px-6" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="shell">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-center mx-auto mb-16"
            style={{ maxWidth: "680px", marginTop: "10px" }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{
                background: "rgba(124,111,255,0.08)",
                border: "1px solid rgba(124,111,255,0.2)",
                marginBottom: "24px",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C6FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
              </svg>
              <span style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5B47D1" }}>
                Figma Community
              </span>
            </div>

            <h1 className="h2 mb-4">
              Figma Plugins
            </h1>

            <p
              className="text-secondary text-sm md:text-base leading-relaxed mx-auto"
              style={{ maxWidth: "660px" }}
            >
              Workflow utilities crafted for designers and builders to automate UI generation,<br />
              streamline tokens, and bridge design directly into production code.
            </p>
          </motion.div>

          {/* Side-by-side Dual Plugin Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {pluginData.map((plugin, index) => (
              <PluginCard key={plugin.slug} plugin={plugin} index={index} />
            ))}
          </div>

          {/* Bottom Community banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 text-center text-xs text-tertiary"
          >
            <p>Built by Joshua Temitope • Available worldwide on the Figma Community</p>
          </motion.div>
        </div>
      </section>

      <footer className="text-center py-10 px-5 sm:px-6 border-t border-[var(--border)] text-tertiary text-xs">
        <div className="shell flex flex-col md:flex-row items-center justify-between gap-3">
          <p>&copy; 2026 Adegbesan Joshua Temitope</p>
          <p>Lagos, Nigeria</p>
        </div>
      </footer>
    </>
  )
}


