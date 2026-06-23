import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
