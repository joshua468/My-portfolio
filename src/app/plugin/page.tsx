"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"

const ease = [0.22, 1, 0.36, 1]

export default function Plugin() {
  return (
    <>
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="shell max-w-[780px] text-center">
          <motion.div
            className="inline-flex items-center gap-2 border border-[#E5E4E0] rounded-full px-4 py-1.5 text-[0.65rem] font-semibold tracking-wider uppercase text-[#6B6B68] bg-white/50 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            🔌 Figma Plugin
          </motion.div>

          <motion.h1
            className="font-['Space_Grotesk'] text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            FrameForge
            <br />
            <span className="text-[#7C6FFF]">React Export</span>
          </motion.h1>

          <motion.p
            className="text-[#6B6B68] text-base leading-relaxed max-w-[560px] mx-auto mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            A Figma plugin that exports your designed frames directly to clean, production-ready React components — bridging the gap between design and engineering.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-20"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
          >
            <a
              href="https://www.figma.com/community/plugin/1648400984820108659/frameforge-react-export"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Install Plugin &rarr;
            </a>
            <a
              href="https://www.figma.com/community/plugin/1648400984820108659/frameforge-react-export"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View on Figma Community
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
          >
            {[
              { icon: "⚡", title: "One-Click Export", desc: "Select any frame in Figma and export it as a React component in seconds." },
              { icon: "🎯", title: "Clean Code Output", desc: "Generates readable, maintainable React code — not the noise that other export tools produce." },
              { icon: "🔗", title: "Design-Dev Bridge", desc: "Built because I was tired of manually translating every frame I designed." },
            ].map((f) => (
              <div key={f.title} className="card p-6">
                <p className="text-2xl mb-4">{f.icon}</p>
                <h3 className="font-['Space_Grotesk'] font-bold text-base text-[#1C1C1A] mb-2">{f.title}</h3>
                <p className="text-[#6B6B68] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="card p-8 md:p-10 text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="label mb-4">The origin story</p>
            <p className="text-[#6B6B68] text-sm leading-relaxed">
              FrameForge was born out of frustration. Every time I completed a high-fidelity prototype, the handoff to engineers involved endless back-and-forth on spacing, colors, and component structure. I built FrameForge to export Figma frames directly into usable React components — removing the translation layer entirely. It's the most direct expression of my hybrid design-build identity.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="text-center py-8 px-6 border-t border-[#E5E4E0] text-[#9A9A96] text-xs">
        <div className="shell flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 Adegbesan Joshua Temitope</p>
          <p>Lagos, Nigeria</p>
        </div>
      </footer>
    </>
  )
}
