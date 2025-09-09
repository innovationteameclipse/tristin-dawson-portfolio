'use client'

import Link from 'next/link'

export default function Navigation() {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - 100 // Account for fixed nav height
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
    e.preventDefault()
    smoothScrollTo(elementId)
  }

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 md:top-6 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2" role="navigation" aria-label="Main navigation">
      <div className="bg-neutral-800/80 backdrop-blur-md border border-neutral-600/20 rounded-2xl px-4 py-3 md:px-8 md:py-4 shadow-lg">
        <div className="flex items-center justify-between md:justify-center space-x-2 md:space-x-8 overflow-x-auto" role="menubar">
          <a 
            href="#home" 
            className="text-white font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-800 rounded-lg px-2 py-1 whitespace-nowrap"
            onClick={(e) => handleClick(e, 'home')}
            role="menuitem"
          >
            Tristin
          </a>
          <a 
            href="#projects" 
            className="text-neutral-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-800 rounded-lg px-2 py-1 whitespace-nowrap"
            onClick={(e) => handleClick(e, 'projects')}
            role="menuitem"
          >
            Projects
          </a>
          <a 
            href="#about" 
            className="text-neutral-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-800 rounded-lg px-2 py-1 whitespace-nowrap"
            onClick={(e) => handleClick(e, 'about')}
            role="menuitem"
          >
            About
          </a>
          <a 
            href="#skills" 
            className="text-neutral-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-800 rounded-lg px-2 py-1 whitespace-nowrap"
            onClick={(e) => handleClick(e, 'skills')}
            role="menuitem"
          >
            Skills
          </a>
          <a 
            href="#testimonials" 
            className="text-neutral-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-800 rounded-lg px-2 py-1 whitespace-nowrap"
            onClick={(e) => handleClick(e, 'testimonials')}
            role="menuitem"
          >
            Accolades
          </a>
          <a 
            href="#faq" 
            className="text-neutral-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-800 rounded-lg px-2 py-1 whitespace-nowrap"
            onClick={(e) => handleClick(e, 'faq')}
            role="menuitem"
          >
            FAQ
          </a>
        </div>
      </div>
    </nav>
  )
}
