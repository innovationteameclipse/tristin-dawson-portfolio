import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
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
        {children}
      </body>
    </html>
  )
}
