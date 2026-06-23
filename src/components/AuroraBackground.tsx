"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AuroraBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute rounded-full opacity-[0.12]"
        style={{
          width: 800,
          height: 800,
          background: "#7C6FFF",
          filter: "blur(150px)",
          left: mousePos.x * 40 - 20,
          top: mousePos.y * 30 - 15,
        }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full opacity-[0.08]"
        style={{
          width: 600,
          height: 600,
          background: "#3B82F6",
          top: "30%",
          right: "10%",
          filter: "blur(150px)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: -7 }}
      />
      <motion.div
        className="absolute rounded-full opacity-[0.08]"
        style={{
          width: 500,
          height: 500,
          background: "#a855f7",
          bottom: "10%",
          left: "20%",
          filter: "blur(150px)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: -14 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050507]/60 pointer-events-none" />
    </div>
  )
}
