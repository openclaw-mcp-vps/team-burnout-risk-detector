import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Team Burnout Risk Detector — Detect burnout before it happens',
  description: 'Analyzes work patterns, communication tone, and activity levels to identify burnout risk in team members. Built for engineering managers and HR teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f2a57c6c-6045-4eee-bf21-379bbb9dc968"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
