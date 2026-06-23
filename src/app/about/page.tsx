"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import { personal, experience } from "@/lib/data"

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

export default function About() {
  return (
    <>
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="shell max-w-[780px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-14"
          >
            <p className="label">About</p>
            <h1 className="font-['Space_Grotesk'] text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.05]">
              Designing beyond the interface.
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16">
            <FadeUp>
              <Image
                src="/Portfolio%20image.png"
                alt={personal.name}
                width={180}
                height={180}
                className="rounded-2xl mb-6 object-cover"
                style={{ width: 180, height: 180 }}
              />
              <p className="text-[#6B6B68] text-sm leading-relaxed mb-5">
                I work at the intersection of product design, AI, and technology.
              </p>
              <p className="text-[#6B6B68] text-sm leading-relaxed mb-5">
                My focus goes beyond screens. I help define product direction, shape user experiences, and design functional systems that translate ideas into real, usable products.
              </p>
              <p className="text-[#6B6B68] text-sm leading-relaxed mb-5">
                With a foundation in design and growing technical expertise, I bridge the gap between product strategy, user needs, and execution.
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <p className="text-[#6B6B68] text-sm leading-relaxed mb-5">
                I've designed AI-driven healthcare interfaces (HealthAI), built and shipped live products (CrampAI, Grade Calculator), created a Figma plugin (FrameForge), and led end-to-end product design for multi-screen applications like Cirql.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href={`mailto:${personal.email}`} className="btn btn-primary">
                  Email &rarr;
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

          <div className="divider mb-16" />

          <FadeUp>
            <div className="mb-10">
              <p className="label mb-4">Experience</p>
              <h2 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight">Where I've Worked</h2>
            </div>
          </FadeUp>

          <div>
            {experience.map((exp, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-8 border-b border-[#E5E4E0] last:border-0">
                  <p className="text-sm text-[#9A9A96] font-medium shrink-0 md:w-[140px]">{exp.date}</p>
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#1C1C1A]">{exp.company}</h3>
                    <p className="text-[#7C6FFF] text-sm font-medium mb-3">{exp.role}</p>
                    <ul className="space-y-1.5">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="text-[#6B6B68] text-sm leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-[#9A9A96]">
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

      <footer className="text-center py-8 px-6 border-t border-[#E5E4E0] text-[#9A9A96] text-xs">
        <div className="shell flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 {personal.name} &middot; Lagos, Nigeria</p>
          <p>Lagos, Nigeria</p>
        </div>
      </footer>
    </>
  )
}
