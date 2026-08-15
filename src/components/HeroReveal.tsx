"use client"

import { useRef, useEffect, ReactNode } from "react"

export default function HeroReveal({
  words,
  subElements,
}: {
  words: string
  subElements: ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      containerRef.current?.querySelectorAll(".hero-word, .hero-sub").forEach((el) => {
        el.classList.add("is-visible")
      })
      return
    }

    const wordEls = containerRef.current?.querySelectorAll(".hero-word") ?? []
    const subEls = containerRef.current?.querySelectorAll(".hero-sub") ?? []

    // Stagger words by 60ms each
    wordEls.forEach((el, i) => {
      setTimeout(() => el.classList.add("is-visible"), i * 60)
    })

    // Sub elements start 150ms after last word finishes
    const lastWordDelay = wordEls.length * 60 + 150
    subEls.forEach((el) => {
      setTimeout(() => el.classList.add("is-visible"), lastWordDelay)
    })
  }, [])

  const wordList = words.split(" ")

  return (
    <div ref={containerRef}>
      <h1
        className="font-bold leading-[0.92]"
        style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)", letterSpacing: "-0.04em", fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {wordList.map((word, i) => (
          <span key={i} className="hero-word">
            {word}{i < wordList.length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </h1>
      {subElements}
    </div>
  )
}
