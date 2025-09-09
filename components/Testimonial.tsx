'use client'

import { Quote } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface TestimonialProps {
  gradientClass: string
}

export default function Testimonial({ gradientClass }: TestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next')
  const carouselRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      quote: "Tristin absolutely smashed designing the logo for our client. Within a few days he came up with multiple logo ideas and delivered the final set that I was absolutely obsessed with!",
      author: "Vivienne",
      role: "Former Team Member",
      image: "/images/vivienne.webp"
    },
    {
      quote: "Tristin kept a positive attitude and designed a second draft with their needs in mind. The client came back and informed us that their team LOVED it with no changes needed.",
      author: "Nici",
      role: "Team Member",
      image: "/images/nici.webp"
    },
    {
      quote: "Tristin has stepped up to the challenge and approached all new projects with a positive attitude and open mind. He's taken on additional responsibility while managing his existing workload.",
      author: "Megan",
      role: "Former Team Member",
      image: "/images/megan.webp"
    },
    {
      quote: "Tristin never turns down a request for assistance. From my first days at Starbright, I've been able to rely on him for help with design inspiration, creative challenges, and software support.",
      author: "Esma",
      role: "Former Team Member",
      image: "/images/esma.webp"
    },
    {
      quote: "Tristin delivered high quality work for our client by creating excellent email newsletters. Despite unclear client requirements, he took initiative to call them and resolve confusion.",
      author: "Lara",
      role: "Team Member",
      image: "/images/lara.webp"
    },
    {
      quote: "I asked Tristin to help design a heading and eye candy for the AOG wall. Despite being incredibly busy, he sent me 3 great designs. The wall is going to look amazing!",
      author: "Lara",
      role: "Team Member",
      image: "/images/lara.webp"
    },
    {
      quote: "Tristin went above and beyond to assist me with Haval PTA. He quickly found the client's drive path and provided access to all the images I needed.",
      author: "Dorette",
      role: "Team Member",
      image: "/images/dorette.webp"
    },
    {
      quote: "Tristin came up with the idea to test the Event Planner on Discord. Well done for being creative and taking time to improve how we do things!",
      author: "Wayne",
      role: "Technical Director",
      image: "/images/wayne.webp"
    },
    {
      quote: "Tristin demonstrated excitement for the arcade machine project I proposed. He sent design schematics, store links, and volunteered to create a Blender model. Great initiative!",
      author: "Wikus",
      role: "Team Member",
      image: "/images/wikus.webp"
    },
    {
      quote: "Tristin was tasked with creating an HTML email signature for Creodata. He persevered for days, figured it out himself, and worked after hours to meet the deadline.",
      author: "Megan",
      role: "Former Team Member",
      image: "/images/megan.webp"
    },
    {
      quote: "IB Portal campaigns were difficult with external designers. When they requested a new banner close to crunch time, Tristin jumped in and we had it ready in minutes.",
      author: "Clinton",
      role: "Team Member",
      image: "/images/clinton.webp"
    },
    {
      quote: "Tristin designed and coded a mailer for our September spring special, plus built a custom landing page with form validation and Leadtrekker integration. High-quality work delivered late into the night!",
      author: "Lourens",
      role: "Team Member",
      image: "/images/lourens.webp"
    },
    {
      quote: "Tristin focused deeply on his tasks while actively supporting teammates. His contributions to the Starbright website and rebranding have been top-tier, earning excellent feedback.",
      author: "Brendan",
      role: "Team Member",
      image: "/images/brendan.webp"
    }
  ]

  // Auto-rotate every 8 seconds (only when not hovered)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && !isTransitioning && !isHovered) {
        const nextIndex = (currentIndex + 1) % testimonials.length
        goToSlide(nextIndex)
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [isDragging, isTransitioning, isHovered, currentIndex, testimonials.length])

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setCurrentX(e.clientX)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    
    const diff = startX - currentX
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left - next
        goToSlide((currentIndex + 1) % testimonials.length)
      } else {
        // Swipe right - previous
        goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length)
      }
    }

    setIsDragging(false)
    setStartX(0)
    setCurrentX(0)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    setCurrentX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    
    const diff = startX - currentX
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left - next
        goToSlide((currentIndex + 1) % testimonials.length)
      } else {
        // Swipe right - previous
        goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length)
      }
    }

    setIsDragging(false)
    setStartX(0)
    setCurrentX(0)
  }

  // Handle hover events
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const goToSlide = (index: number) => {
    if (index === currentIndex) return
    
    // Determine slide direction
    let direction: 'next' | 'prev'
    if (index === 0 && currentIndex === testimonials.length - 1) {
      direction = 'next' // Loop from last to first
    } else if (index === testimonials.length - 1 && currentIndex === 0) {
      direction = 'prev' // Loop from first to last
    } else {
      direction = index > currentIndex ? 'next' : 'prev'
    }
    
    setSlideDirection(direction)
    setCurrentIndex(index)
    setIsTransitioning(true)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  return (
    <section id="testimonials" className="mb-16">
      <div className="max-w-[1200px] mx-auto px-8 text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Team Accolades</h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Recognition from colleagues who've witnessed my dedication, creativity, and collaborative spirit in action
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="relative overflow-hidden rounded-2xl bg-neutral-800/30 backdrop-blur-md border border-neutral-600/20 shadow-2xl w-full max-w-[1200px] mx-auto"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={handleMouseEnter}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {/* Testimonial Slides Container */}
          <div className="relative w-full min-h-[400px] md:h-[320px] p-6 md:p-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full h-full transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0 relative z-10'
                    : (() => {
                        // Handle loop transitions
                        if (currentIndex === 0 && index === testimonials.length - 1) {
                          // Going from first to last slide (backward)
                          return 'opacity-0 -translate-x-full absolute inset-0 z-0 pointer-events-none'
                        } else if (currentIndex === testimonials.length - 1 && index === 0) {
                          // Going from last to first slide (forward)
                          return 'opacity-0 translate-x-full absolute inset-0 z-0 pointer-events-none'
                        } else if (index < currentIndex) {
                          // Normal backward transition
                          return 'opacity-0 -translate-x-full absolute inset-0 z-0 pointer-events-none'
                        } else {
                          // Normal forward transition
                          return 'opacity-0 translate-x-full absolute inset-0 z-0 pointer-events-none'
                        }
                      })()
                }`}
              >
                {/* Testimonial Content - Centered */}
                <div className="flex flex-col justify-center items-center h-full">
                  {/* Quote Section */}
                  <div className="flex items-start justify-center mb-6 md:mb-8">
                    <Quote size={32} className="text-neutral-300 mr-2 md:mr-3 flex-shrink-0" />
                    <blockquote className="text-lg md:text-xl text-neutral-300 italic leading-relaxed max-w-3xl">
                      {testimonial.quote}
                    </blockquote>
                    <Quote size={32} className="text-neutral-300 ml-2 md:ml-3 transform rotate-180 flex-shrink-0" />
                  </div>

                  {/* Author Section */}
                  <div className="flex items-center justify-center space-x-6">
                    <div className={`w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br ${gradientClass} p-0`}>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          target.nextElementSibling?.classList.remove('hidden')
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg hidden">
                        {testimonial.author.charAt(0)}
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-lg text-white">{testimonial.author}</div>
                      <div className="text-neutral-300">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center space-x-2 mt-4 pt-7">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-110' 
                  : 'bg-neutral-300 hover:bg-neutral-400 hover:scale-105'
              } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
