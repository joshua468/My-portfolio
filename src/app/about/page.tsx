"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import { personal } from "@/lib/data"

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

      <section className="pt-40 sm:pt-52 pb-16 sm:pb-20 px-5 sm:px-6" style={{ position: "relative", zIndex: 1 }}>
        <div className="shell max-w-[780px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-10 mt-16 sm:mt-20"
          >
            <p className="label">About</p>
            <h1 className="font-['Space_Grotesk'] text-[1.375rem] md:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.1]">
              Designing beyond the interface.
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <FadeUp>
              <div className="rounded-lg overflow-hidden mb-6" style={{ aspectRatio: "4/4" }}>
                <Image
                  src="/Portfolio%20image.png"
                  alt={personal.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.05}>
              <p className="text-[#6B6B68] text-sm leading-relaxed mb-5">
                I work at the intersection of product design, AI, and technology.
              </p>
              <p className="text-[#6B6B68] text-sm leading-relaxed mb-5">
                My focus goes beyond screens. I help define product direction, shape user experiences, and design functional systems that translate ideas into real, usable products.
              </p>
              <p className="text-[#6B6B68] text-sm leading-relaxed mb-5">
                With a foundation in design and growing technical expertise, I bridge the gap between product strategy, user needs, and execution.
              </p>
              <p className="text-[#6B6B68] text-sm leading-relaxed mb-6">
                I&apos;ve designed AI-driven healthcare interfaces (HealthAI), built and shipped live products (CrampAI, Grade Calculator), created Figma plugins (FrameForge, Modal Builder), and led end-to-end product design for multi-screen applications like Cirql.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 mb-10 sm:max-w-md">
                <a href={`mailto:${personal.email}`} className="btn btn-primary flex-1 justify-center">
                  Email
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary flex-1 justify-center">
                  LinkedIn
                </a>
                <a href={personal.behance} target="_blank" rel="noopener noreferrer" className="btn btn-secondary flex-1 justify-center">
                  Behance
                </a>
              </div>
            </FadeUp>
          </div>

          <div className="mt-16 pt-2 text-center">
            <FadeUp>
              <p className="text-[#6B6B68] text-sm mb-6">Want to see my full work history?</p>
              <Link href="/#experience" className="btn btn-secondary">
                View Experience &rarr;
              </Link>
            </FadeUp>
          </div>

          <FadeUp>
            <div className="mt-16 rounded-lg border border-[#E5E4E0] bg-[#FAFAF7] p-6 sm:p-8 text-center">
              <p className="label mb-3">New Release</p>
              <p className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold tracking-[-0.02em] mb-2">
                The Complete Guide to Context Engineering
              </p>
              <p className="text-[#6B6B68] text-sm leading-relaxed mb-5 max-w-md mx-auto">
                A practical guide to designing context systems for AI products — from prompt architecture to production workflows.
              </p>
              <a
                href="https://selar.com/038p8xz8a7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Buy Now &rarr;
              </a>
            </div>
          </FadeUp>
          <div className="divider mt-16" />
        </div>
      </section>

      <footer className="text-center py-10 px-5 sm:px-6 border-t border-[#E5E4E0] text-[#9A9A96] text-xs">
        <div className="shell flex flex-col md:flex-row items-center justify-between gap-3">
          <p>&copy; 2026 {personal.name} &middot; Lagos, Nigeria</p>
          <p>Lagos, Nigeria</p>
        </div>
      </footer>
    </>
  )
}
