import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const publicSans = Public_Sans({ 
  subsets: ['latin'],
  variable: '--font-public-sans',
})

export const metadata: Metadata = {
  title: 'Tristin Dawson - Digital Designer',
  description: 'Digital Designer specializing in Website and UI Design, creating user-friendly experiences with Figma and Adobe Creative Suite.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${publicSans.variable} font-sans bg-neutral-950 text-white min-h-screen`}>
        {/* Skip Navigation Link */}
        <a 
          href="#home" 
          className="absolute -top-full left-4 bg-green-500 text-white px-4 py-2 rounded-lg z-50 focus:top-4 transition-all duration-200"
        >
          Skip to main content
        </a>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
