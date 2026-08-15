"use client"

import { useState, useEffect, useRef, useCallback } from "react"

const GREETING = "Hey! \u{1F44B} Got an idea worth building?"
const HOVER_MESSAGES = [
  "Click below to say hi!",
  "I read every message myself",
  "Let\u2019s build something \u{1F680}",
  "Your idea deserves a great design",
  "I\u2019d love to hear about it",
]

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function Mascot() {
  const [showGreeting, setShowGreeting] = useState(false)
  const [greetingDismissed, setGreetingDismissed] = useState(false)
  const [hoverMsg, setHoverMsg] = useState<string | null>(null)
  const [hoverVisible, setHoverVisible] = useState(false)
  const [waving, setWaving] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const greetingTimer = useRef<ReturnType<typeof setTimeout>[]>([])
  const prefersReduced = useRef(false)

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Show greeting 1s after mount
    const t1 = setTimeout(() => {
      setShowGreeting(true)
      // Auto-dismiss after 5s
      const t2 = setTimeout(() => {
        setShowGreeting(false)
        setGreetingDismissed(true)
      }, 5000)
      greetingTimer.current.push(t2)
    }, 1000)
    greetingTimer.current.push(t1)

    // Dismiss greeting on scroll or click anywhere else
    const dismiss = () => {
      greetingTimer.current.forEach(clearTimeout)
      greetingTimer.current = []
      setShowGreeting(false)
      setGreetingDismissed(true)
    }

    const onScroll = () => { dismiss(); window.removeEventListener("scroll", onScroll) }
    const onClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        dismiss()
        document.removeEventListener("click", onClick)
      }
    }

    window.addEventListener("scroll", onScroll, { once: true })
    document.addEventListener("click", onClick)

    return () => {
      greetingTimer.current.forEach(clearTimeout)
      window.removeEventListener("scroll", onScroll)
      document.removeEventListener("click", onClick)
    }
  }, [])

  const handleMouseEnter = useCallback(() => {
    if (prefersReduced.current) return
    setWaving(true)
    setTimeout(() => setWaving(false), 800)

    if (greetingDismissed || !showGreeting) {
      setHoverMsg(randomFrom(HOVER_MESSAGES))
      setHoverVisible(true)
    }
  }, [greetingDismissed, showGreeting])

  const handleMouseLeave = useCallback(() => {
    setHoverVisible(false)
    setHoverMsg(null)
  }, [])

  const bubbleClass = prefersReduced.current
    ? "mascot-bubble mascot-bubble--visible"
    : `mascot-bubble${showGreeting ? " mascot-bubble--visible" : ""}${hoverVisible && hoverMsg ? " mascot-bubble--visible" : ""}`

  const bubbleText = showGreeting ? GREETING : hoverMsg

  return (
    <div
      ref={wrapperRef}
      className="mascot-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Speech bubble */}
      {(showGreeting || (hoverVisible && hoverMsg)) && bubbleText && (
        <div className={bubbleClass}>
          <span>{bubbleText}</span>
          <div className="mascot-bubble-pointer" />
        </div>
      )}

      {/* Fox image */}
      <img
        src="/Mascott.png"
        alt="Friendly fox mascot waving"
        loading="lazy"
        className={`mascot-img${waving ? " mascot-img--waving" : ""}`}
      />
    </div>
  )
}
