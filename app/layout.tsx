import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mumphry Caparas - Computer Engineer Portfolio",
  description:
    "Fresh Computer Engineering graduate passionate about clean code, creative problem-solving, and user-centered design.",
  keywords: "Computer Engineer, Web Developer, React, JavaScript, Portfolio",
  authors: [{ name: "Mumphry Caparas" }],
  openGraph: {
    title: "Mumphry Caparas - Computer Engineer Portfolio",
    description:
      "Fresh Computer Engineering graduate passionate about clean code, creative problem-solving, and user-centered design.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
