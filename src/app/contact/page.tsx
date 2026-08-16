"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import { personal } from "@/lib/data"

const ease = [0.22, 1, 0.36, 1]

const fields = [
  { key: "name", label: "Name", type: "text", placeholder: "Your name", idx: "01" },
  { key: "email", label: "Email", type: "email", placeholder: "you@example.com", idx: "02" },
  { key: "message", label: "Message", type: "textarea", placeholder: "Tell me about your project, timeline, and what you&apos;re looking for...", idx: "03" },
] as const

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "ff765f3a-5769-49f2-838f-24d4461f706a",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New message from ${form.name}`,
          from_name: "Joshua Temitope Portfolio",
        }),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
    setSending(false)
  }

  return (
    <>
      <Navigation />

      <main className="px-5 sm:px-6 py-12 sm:py-20" style={{ background: "var(--cp-paper)", minHeight: "calc(100vh - 60px)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>

          {/* Hero banner */}
          <motion.div
            className="cp-hero"
            style={{ marginTop: 20 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="relative z-10">
              <div className="inline-flex items-center rounded-full px-4 py-1.5 mb-5"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span className="cp-pulse-dot" />
                <span style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: "0.6875rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>
                  Open to opportunities
                </span>
              </div>
              <h1 style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "white", marginBottom: 10 }}>
                Have an idea worth building?
              </h1>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.9375rem", lineHeight: 1.65, color: "rgba(255,255,255,0.85)", maxWidth: 480 }}>
                Tell me what you&apos;re building. I read every message myself and usually reply within a day.
              </p>
            </div>
          </motion.div>

          {/* Two-column section */}
          <div className="cp-two-col" style={{ marginTop: 50 }}>

            {/* Left — form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
            >
              <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "1.375rem", fontWeight: 700, color: "var(--cp-ink)", marginBottom: 8 }}>
                Let&apos;s talk
              </h2>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", color: "var(--cp-muted)", marginBottom: 40, lineHeight: 1.6 }}>
                Fill out the form and I&apos;ll get back to you as soon as possible.
              </p>

              {submitted ? (
                <motion.div
                  className="cp-success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <span className="cp-success-dot" />
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "#166534" }}>
                    Message sent — I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {fields.map((f) => (
                    <div key={f.key} className="cp-field">
                      <label htmlFor={`cp-${f.key}`} className="cp-field-label">
                        <span className="cp-field-idx">{f.idx}</span>
                        {f.label}
                      </label>
                      {f.type === "textarea" ? (
                        <textarea
                          id={`cp-${f.key}`}
                          required
                          rows={5}
                          value={form[f.key]}
                          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                          className="cp-field-input"
                          placeholder={f.placeholder}
                        />
                      ) : (
                        <input
                          id={`cp-${f.key}`}
                          type={f.type}
                          required
                          value={form[f.key as "name" | "email"]}
                          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                          className="cp-field-input"
                          placeholder={f.placeholder}
                        />
                      )}
                    </div>
                  ))}

                  <button type="submit" className="cp-submit" disabled={sending}>
                    {sending ? "Sending..." : "Send Message"}
                    {!sending && (
                      <svg className="cp-submit-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right — cards */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
            >
              {/* Currently available */}
              <div className="cp-card cp-card-dark">
                <div className="flex items-center gap-3 mb-2">
                  <span className="cp-pulse-dot" style={{ background: "#22C55E" }} />
                  <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.9375rem", fontWeight: 600 }}>
                    Currently available
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: "0.6875rem", letterSpacing: "0.04em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>
                  Usually responds within 24 hours
                </p>
              </div>

              {/* Quick contact */}
              <div className="cp-card">
                <p style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--cp-muted)", marginBottom: 20 }}>
                  Quick contact
                </p>
                <div className="flex flex-col gap-5">
                  {[
                    { icon: "mail", label: "Email", value: personal.email, href: `mailto:${personal.email}` },
                    { icon: "pin", label: "Location", value: "Lagos, Nigeria" },
                    { icon: "clock", label: "Working hours", value: "Mon – Fri, 9am – 6pm WAT" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="cp-icon-box">
                        {item.icon === "mail" && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        )}
                        {item.icon === "pin" && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                          </svg>
                        )}
                        {item.icon === "clock" && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="cp-tile-label" style={{ marginBottom: 2 }}>{item.label}</p>
                        {item.href ? (
                          <a href={item.href} style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "var(--cp-ink)", textDecoration: "none" }}>
                            {item.value}
                          </a>
                        ) : (
                          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "var(--cp-ink)" }}>
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social pills */}
              <div className="cp-social-wrap">
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="cp-social-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
                <a href={personal.behance} target="_blank" rel="noopener noreferrer" className="cp-social-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18V6h4.5a3.5 3.5 0 0 1 0 7H3" />
                    <path d="M3 12h5.5a3.5 3.5 0 0 1 0 7H3" />
                    <path d="M14 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0" />
                    <path d="M14 10h7" />
                  </svg>
                  Behance
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </main>

      <footer style={{ background: "var(--cp-paper)", marginTop: 50 }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ borderTop: "1px solid var(--cp-border)", paddingTop: 20, paddingBottom: 20, textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: "0.6875rem", letterSpacing: "0.04em", color: "var(--cp-muted)", textTransform: "uppercase" }}>
              &copy; 2026 {personal.name} &middot; Lagos, Nigeria
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
