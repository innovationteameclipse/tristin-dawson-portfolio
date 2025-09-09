'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - 100 // Account for fixed nav height
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveSection(elementId)
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
    e.preventDefault()
    smoothScrollTo(elementId)
    // Remove focus after click to hide the focus ring
    setTimeout(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
    }, 100)
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'skills', 'testimonials', 'faq']
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 md:top-6 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2" role="navigation" aria-label="Main navigation">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-4 py-3 md:px-8 md:py-4 shadow-xl">
        <div className="flex items-center justify-between md:justify-center space-x-2 md:space-x-8 overflow-x-auto" role="menubar">
          <a 
            href="#home" 
            className={`cursor-pointer rounded-lg px-2 py-1 whitespace-nowrap transition-colors focus:outline-none ${
              activeSection === 'home' 
                ? 'text-white font-semibold' 
                : 'text-neutral-300 hover:text-white'
            }`}
            onClick={(e) => handleClick(e, 'home')}
            role="menuitem"
          >
            Tristin
          </a>
          <a 
            href="#projects" 
            className={`cursor-pointer rounded-lg px-2 py-1 whitespace-nowrap transition-colors focus:outline-none ${
              activeSection === 'projects' 
                ? 'text-white font-semibold' 
                : 'text-neutral-300 hover:text-white'
            }`}
            onClick={(e) => handleClick(e, 'projects')}
            role="menuitem"
          >
            Projects
          </a>
          <a 
            href="#about" 
            className={`cursor-pointer rounded-lg px-2 py-1 whitespace-nowrap transition-colors focus:outline-none ${
              activeSection === 'about' 
                ? 'text-white font-semibold' 
                : 'text-neutral-300 hover:text-white'
            }`}
            onClick={(e) => handleClick(e, 'about')}
            role="menuitem"
          >
            About
          </a>
          <a 
            href="#skills" 
            className={`cursor-pointer rounded-lg px-2 py-1 whitespace-nowrap transition-colors focus:outline-none ${
              activeSection === 'skills' 
                ? 'text-white font-semibold' 
                : 'text-neutral-300 hover:text-white'
            }`}
            onClick={(e) => handleClick(e, 'skills')}
            role="menuitem"
          >
            Skills
          </a>
          <a 
            href="#testimonials" 
            className={`cursor-pointer rounded-lg px-2 py-1 whitespace-nowrap transition-colors focus:outline-none ${
              activeSection === 'testimonials' 
                ? 'text-white font-semibold' 
                : 'text-neutral-300 hover:text-white'
            }`}
            onClick={(e) => handleClick(e, 'testimonials')}
            role="menuitem"
          >
            Accolades
          </a>
          <a 
            href="#faq" 
            className={`cursor-pointer rounded-lg px-2 py-1 whitespace-nowrap transition-colors focus:outline-none ${
              activeSection === 'faq' 
                ? 'text-white font-semibold' 
                : 'text-neutral-300 hover:text-white'
            }`}
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
