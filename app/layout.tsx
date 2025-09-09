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
  title: 'Tristin Dawson - Digital Designer | Web/UX/UI Design Portfolio',
  description: 'Self-taught Digital Designer with 5+ years experience specialising in Website Design, UI/UX, and Brand Identity. View my portfolio featuring projects for major brands across manufacturing, fintech, events, marketing, cybersecurity, and legal sectors.',
  keywords: ['Digital Designer', 'Web Design', 'UI Design', 'UX Design', 'Brand Identity', 'Figma', 'Adobe Creative Suite', 'Portfolio', 'South Africa'],
  authors: [{ name: 'Tristin Dawson' }],
  creator: 'Tristin Dawson',
  publisher: 'Tristin Dawson',
  openGraph: {
    title: 'Tristin Dawson - Digital Designer Portfolio',
    description: 'Self-taught Digital Designer specialising in Website Design, UI/UX, and Brand Identity. 5+ years experience with major brands.',
    url: 'https://tristindawson.xyz',
    siteName: 'Tristin Dawson Portfolio',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tristin Dawson - Digital Designer Portfolio',
    description: 'Self-taught Digital Designer specialising in Website Design, UI/UX, and Brand Identity.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.com" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${publicSans.variable} font-sans bg-neutral-950 text-white min-h-screen`}>
        {/* Skip Navigation Link */}
        <a 
          href="#home" 
          className="absolute -top-full left-4 bg-green-500 text-white px-4 py-2 rounded-lg z-50 focus:top-4 transition-all duration-200"
        >
          Skip to main content
        </a>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tristin Dawson",
              "jobTitle": "Digital Designer",
              "description": "Self-taught Digital Designer specialising in Website Design, UI/UX, and Brand Identity",
              "url": "https://tristindawson.xyz",
              "sameAs": [
                "https://www.linkedin.com/in/tristin-dawson/",
                "https://www.instagram.com/triiistiiin/"
              ],
              "knowsAbout": [
                "Web Design",
                "UI Design",
                "UX Design",
                "Brand Identity",
                "Figma",
                "Adobe Creative Suite",
                "Responsive Design"
              ],
              "alumniOf": "Self-taught",
              "workLocation": {
                "@type": "Place",
                "name": "South Africa"
              }
            })
          }}
        />
        
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
