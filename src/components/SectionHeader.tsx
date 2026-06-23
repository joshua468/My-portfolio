"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <motion.div
      className="max-w-5xl mx-auto mb-16"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <span className="inline-block text-[0.7rem] tracking-[0.12em] uppercase font-semibold text-[#7C6FFF] mb-4">
        {eyebrow}
      </span>
      <h2 className="font-['Space_Grotesk'] text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[-0.03em] leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="text-[rgba(250,250,250,0.5)] mt-3 text-base leading-relaxed max-w-[560px]">
          {description}
        </p>
      )}
    </motion.div>
  )
}
