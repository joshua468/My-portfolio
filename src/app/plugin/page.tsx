"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"

const ease = [0.22, 1, 0.36, 1]

export default function Plugin() {
  return (
    <>
      <Navigation />

      <section className="pt-24 pb-24 px-6">
        <div className="shell max-w-[780px] text-center">
          <motion.div
            className="inline-flex items-center gap-2 border border-[#E5E4E0] rounded-full px-4 py-1.5 text-[0.65rem] font-semibold tracking-wider uppercase text-[#6B6B68] bg-white/50 mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            🔌 Figma Plugin
          </motion.div>

          <motion.h1
            className="font-['Space_Grotesk'] text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.05] mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            FrameForge
            <br />
            <span className="text-[#7C6FFF]">React Export</span>
          </motion.h1>

          <motion.p
            className="text-[#6B6B68] text-base leading-relaxed max-w-[640px] mx-auto mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            A Figma plugin that transforms Figma designs into clean, production-ready React components, helping designers and developers move from design to code faster.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-14"
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
          >
            {[
              { icon: "⚡", title: "One-Click Export", desc: "Export any Figma frame to a clean React component in one click." },
              { icon: "🎯", title: "Clean Code Output", desc: "Generate readable, production-ready React code instantly." },
              { icon: "🔗", title: "Design to Development", desc: "Turn designs into code faster with a seamless workflow." },
            ].map((f) => (
              <div key={f.title} className="card p-5 flex flex-col h-full">
                <p className="text-xl mb-2">{f.icon}</p>
                <h3 className="font-['Space_Grotesk'] font-bold text-sm text-[#1C1C1A] mb-2">{f.title}</h3>
                <p className="text-[#6B6B68] text-xs leading-relaxed flex-1">{f.desc}</p>
              </div>
            ))}
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
