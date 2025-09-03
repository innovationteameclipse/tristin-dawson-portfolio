'use client'

import { Instagram, Linkedin, Dribbble, Palette } from 'lucide-react'

interface HeroProps {
  gradientClass: string
}

export default function Hero({ gradientClass }: HeroProps) {

  return (
    <section className="max-w-5xl mx-auto px-8 py-20 text-center">
      {/* Profile Picture */}
      <div className="mb-8">
        <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${gradientClass} p-0 overflow-hidden`}>
          <img 
            src="/images/tristin.png" 
            alt="Tristin Dawson" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Name and Title */}
      <h1 className="mb-4">
        <div className="text-5xl font-bold text-white">
          Hey, I'm Tristin
        </div>
        <div className="text-5xl font-bold text-white">
          Dawson, Digital Designer
        </div>
        <div className="text-5xl font-bold text-white">
          Web/UX/UI
        </div>
      </h1>

      {/* Description */}
      <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
        Self-taught creative professional with a deep passion for design. Specializing in Website and UI Design, creating user-friendly experiences with Figma and Adobe Creative Suite.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex items-center justify-center space-x-8 mb-8">
        <button className="px-6 py-3 bg-white text-neutral-950 font-medium rounded-2xl hover:bg-neutral-100 transition-colors">
          View My Work
        </button>
        <div className="flex items-center space-x-5">
          <div className="relative">
            {/* Second ring effect - positioned directly on the red dot */}
            <div className="absolute -top-1.5 -left-1.5 w-6 h-6 bg-red-500 rounded-full animate-ping opacity-75"></div>
            {/* Original red dot */}
            <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
          </div>
          <span className="text-red-500 text-sm font-medium">Not Open To New Opportunities</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center space-x-6">
        <a href="https://www.linkedin.com/in/tristin-dawson/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://www.starbright.co.za" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors">
          <Palette size={24} />
        </a>
        <a href="#" className="text-neutral-300 hover:text-white transition-colors">
          <Dribbble size={24} />
        </a>
        <a href="#" className="text-neutral-300 hover:text-white transition-colors">
          <Instagram size={24} />
        </a>
      </div>
    </section>
  )
}
