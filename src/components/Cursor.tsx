import { useEffect, useSyncExternalStore } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const subscribeTouch = (callback: () => void) => {
  const m = window.matchMedia("(pointer: coarse)")
  m.addEventListener("change", callback)
  return () => m.removeEventListener("change", callback)
}
const getTouch = () => window.matchMedia("(pointer: coarse)").matches
const getServerTouch = () => false

export default function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const trailX = useMotionValue(-100)
  const trailY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  const trailScale = useSpring(1, { damping: 20, stiffness: 300 })
  const isTouchDevice = useSyncExternalStore(subscribeTouch, getTouch, getServerTouch)

  useEffect(() => {
    if (isTouchDevice) return

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setTimeout(() => {
        trailX.set(e.clientX)
        trailY.set(e.clientY)
      }, 60)
    }

    const onEnter = () => trailScale.set(2.5)
    const onLeave = () => trailScale.set(1)

    document.addEventListener("mousemove", move)

    const observe = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter)
        el.addEventListener("mouseleave", onLeave)
      })
    }

    observe()
    const observer = new MutationObserver(observe)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener("mousemove", move)
      observer.disconnect()
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
    }
  }, [cursorX, cursorY, trailX, trailY, trailScale])

  if (isTouchDevice) return null

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full mix-blend-difference"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%", background: "var(--accent)" }}
      />
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border mix-blend-difference"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: 36,
          height: 36,
          borderColor: "rgba(124,111,255,0.4)",
          scale: trailScale,
        }}
      />
    </>
  )
}
