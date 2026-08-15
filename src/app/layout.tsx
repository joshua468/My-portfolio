import type { Metadata } from "next"
import { Inter, Space_Grotesk, Fraunces, IBM_Plex_Mono } from "next/font/google"
import PageTransition from "@/components/PageTransition"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Joshua Temitope — AI Product Designer",
  description:
    "AI Product Designer and Builder based in Lagos, Nigeria. I design AI-powered products, define product logic, and build real applications.",
  openGraph: {
    title: "Joshua Temitope — AI Product Designer",
    description: "I design AI-powered products, define product logic, and build real applications.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${fraunces.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen antialiased"><PageTransition>{children}</PageTransition></body>
    </html>
  )
}
