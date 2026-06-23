"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import { personal } from "@/lib/data"

const ease = [0.22, 1, 0.36, 1]

export default function Contact() {
  return (
    <>
      <Navigation />

      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-[640px] mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 border border-[#E5E4E0] rounded-full px-4 py-1.5 text-[0.65rem] font-medium tracking-wider uppercase text-[#6B6B68] bg-white/50 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
            Open to opportunities
          </motion.div>

          <motion.h1
            className="font-['Space_Grotesk'] text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-tight leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            Have an idea worth building?
          </motion.h1>

          <motion.p
            className="text-[#6B6B68] text-base leading-relaxed max-w-[480px] mx-auto mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            Whether it's an AI product, startup concept or existing platform, I'd love to help shape the next version of it.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
          >
            <a href={`mailto:${personal.email}`} className="btn btn-primary">
              Email Me &rarr;
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              LinkedIn
            </a>
            <a href={personal.behance} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Behance
            </a>
          </motion.div>

          <motion.p
            className="text-[#9A9A96] text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Lagos, Nigeria &middot; Usually responds within 24 hours
          </motion.p>
        </div>
      </section>

      <footer className="text-center py-8 px-6 border-t border-[#E5E4E0] text-[#9A9A96] text-xs">
        <div className="shell flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 {personal.name}</p>
          <p>Lagos, Nigeria</p>
        </div>
      </footer>
    </>
  )
}
