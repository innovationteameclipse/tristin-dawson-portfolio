'use client'

import { Instagram, Linkedin, Dribbble, Palette } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-800 border-t border-neutral-600">
      <div className="max-w-[1200px] mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-neutral-300 text-sm mb-4 md:mb-0">
            Copyright © 2025 Tristin Dawson. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://www.linkedin.com/in/tristin-dawson/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.starbright.co.za" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors">
              <Palette size={20} />
            </a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">
              <Dribbble size={20} />
            </a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
