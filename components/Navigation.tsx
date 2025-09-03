'use client'

import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
      applyTheme(savedTheme === 'dark')
    }
  }, [])

  const applyTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    
    // Apply theme
    applyTheme(newTheme)
  }

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
          <Link href="/about" className="text-neutral-300 hover:text-white transition-colors flex items-center">
            About
            <div className="ml-2 w-2 h-2 bg-green-500 rounded-full shadow-sm"></div>
          </Link>
          <div className="ml-8 border-l border-neutral-600/20 pl-8">
            <button 
              onClick={toggleTheme}
              className="text-white hover:text-green-500 transition-colors flex items-center justify-center"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
