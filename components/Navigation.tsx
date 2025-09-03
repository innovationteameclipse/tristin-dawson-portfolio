'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-neutral-800/80 backdrop-blur-md border border-neutral-600/20 rounded-2xl px-8 py-4 shadow-lg">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-white font-semibold">
            Home
          </Link>
          <Link href="/projects" className="text-neutral-300 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-neutral-300 hover:text-white transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
