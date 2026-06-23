"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const trailX = useMotionValue(-100)
  const trailY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  const isHovering = useRef(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setTimeout(() => {
        trailX.set(e.clientX)
        trailY.set(e.clientY)
      }, 60)
    }

    const handleHoverStart = () => { isHovering.current = true }
    const handleHoverEnd = () => { isHovering.current = false }

    document.addEventListener("mousemove", move)
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart)
      el.addEventListener("mouseleave", handleHoverEnd)
    })

    return () => {
      document.removeEventListener("mousemove", move)
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [cursorX, cursorY, trailX, trailY])

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999] w-3 h-3 rounded-full bg-[#7C6FFF] mix-blend-screen"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed pointer-events-none z-[9998] w-9 h-9 rounded-full border border-[rgba(124,111,255,0.3)] mix-blend-screen"
        style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  )
}
