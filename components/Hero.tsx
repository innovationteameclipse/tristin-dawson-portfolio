'use client'

import { Instagram, Linkedin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  gradientClass: string
}

export default function Hero({ gradientClass }: HeroProps) {

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Main content">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-label="Abstract wave animation background"
        preload="metadata"
      >
        <source src="/images/wave-background-compressed.mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" label="English captions" />
        Your browser does not support the video tag.
      </video>
      
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Dot Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
      {/* Profile Picture */}
      <div className="mb-8">
        <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${gradientClass} p-0 overflow-hidden`}>
          <Image 
            src="/images/tristin.png" 
            alt="Tristin Dawson" 
            width={128}
            height={128}
            className="w-full h-full object-cover rounded-full"
            priority
          />
        </div>
      </div>

      {/* Name and Title */}
      <h1 className="mb-4">
        <div className="text-5xl font-bold text-white">
          Hey, I'm Tristin Dawson
        </div>
        <div className="text-3xl font-semibold text-neutral-300 mt-2">
          Digital Designer - Web/UX/UI
        </div>
      </h1>

      {/* Description */}
      <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
        Self-taught creative professional with a deep passion for design. Specializing in Website and UI Design, creating user-friendly experiences with Figma and Adobe Creative Suite.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex items-center justify-center space-x-8 mb-8">
        <button className="px-8 py-4 bg-white text-neutral-950 font-medium rounded-2xl hover:bg-neutral-100 transition-colors min-h-[48px] min-w-[140px]">
          View My Work
        </button>
        <div className="flex items-center space-x-5">
          <div className="relative">
            {/* Second ring effect - positioned directly on the red dot */}
            <div className="absolute -top-1.5 -left-1.5 w-6 h-6 bg-green-500 rounded-full animate-ping opacity-75"></div>
            {/* Original red dot */}
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
          </div>
          <span className="text-green-500 text-sm font-medium">Open To New Opportunities</span>
        </div>
      </div>

      {/* Contact & Social Links */}
      <div className="flex items-center justify-center space-x-8 mt-12">
        <a href="tel:+27672356770" className="text-neutral-300 hover:text-white transition-colors p-3 min-w-[48px] min-h-[48px] flex items-center justify-center" title="Call 067 235 6770" aria-label="Call 067 235 6770">
          <Phone size={24} />
        </a>
        <a href="mailto:tristin.dawson@gmail.com" className="text-neutral-300 hover:text-white transition-colors p-3 min-w-[48px] min-h-[48px] flex items-center justify-center" title="Email tristin.dawson@gmail.com" aria-label="Email tristin.dawson@gmail.com">
          <Mail size={24} />
        </a>
        <a href="https://www.linkedin.com/in/tristin-dawson/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors p-3 min-w-[48px] min-h-[48px] flex items-center justify-center" aria-label="Visit Tristin's LinkedIn profile">
          <Linkedin size={24} />
        </a>
        <a href="https://www.instagram.com/triiistiiin/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors p-3 min-w-[48px] min-h-[48px] flex items-center justify-center" aria-label="Visit Tristin's Instagram profile">
          <Instagram size={24} />
        </a>
      </div>
      </div>
    </section>
  )
}
