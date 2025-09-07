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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-neutral-800/80 backdrop-blur-md border border-neutral-600/20 rounded-2xl px-8 py-4 shadow-lg">
        <div className="flex items-center space-x-8">
          <a 
            href="#home" 
            className="text-white font-semibold cursor-pointer"
            onClick={(e) => handleClick(e, 'home')}
          >
            Tristin
          </a>
          <a 
            href="#projects" 
            className="text-neutral-300 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => handleClick(e, 'projects')}
          >
            Projects
          </a>
          <a 
            href="#about" 
            className="text-neutral-300 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => handleClick(e, 'about')}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="text-neutral-300 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => handleClick(e, 'skills')}
          >
            Skills
          </a>
          <a 
            href="#testimonials" 
            className="text-neutral-300 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => handleClick(e, 'testimonials')}
          >
            Accolades
          </a>
          <a 
            href="#faq" 
            className="text-neutral-300 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => handleClick(e, 'faq')}
          >
            FAQ
          </a>
        </div>
      </div>
    </nav>
  )
}
