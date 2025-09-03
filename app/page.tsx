'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ScrollingGallery from '@/components/ScrollingGallery'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Testimonial from '@/components/Testimonial'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  const [gradientClass, setGradientClass] = useState('')

  useEffect(() => {
    const gradients = [
      'from-blue-500 to-purple-600', 'from-green-500 to-blue-600', 'from-purple-500 to-pink-600',
      'from-orange-500 to-red-600', 'from-teal-500 to-indigo-600', 'from-pink-500 to-purple-600',
      'from-yellow-500 to-orange-600', 'from-indigo-500 to-blue-600', 'from-red-500 to-pink-600',
      'from-emerald-500 to-teal-600'
    ]
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)]
    setGradientClass(randomGradient)
  }, [])

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navigation />
      <div className="pt-32">
        <Hero gradientClass={gradientClass} />
        <ScrollingGallery />
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <AboutMe />
            <WorkExperience />
          </div>
          <Skills gradientClass={gradientClass} />
          <Testimonial gradientClass={gradientClass} />
          <FAQ />
        </div>
      </div>
      <Footer />
    </main>
  )
}
