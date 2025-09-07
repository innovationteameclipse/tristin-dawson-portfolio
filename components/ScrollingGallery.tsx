'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

export default function ScrollingGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [velocity, setVelocity] = useState(0)
  const [lastX, setLastX] = useState(0)
  const [lastTime, setLastTime] = useState(0)

  const galleryItems = [
    {
      title: "Website Redesign",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=560&h=400&fit=crop&crop=center",
      category: "Web Design",
      rotation: "rotate-1"
    },
    {
      title: "Mobile App UI",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=560&h=400&fit=crop&crop=center",
      category: "UI Design",
      rotation: "-rotate-1"
    },
    {
      title: "Brand Identity",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=560&h=400&fit=crop&crop=center",
      category: "Branding",
      rotation: "rotate-2"
    },
    {
      title: "Dashboard Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=560&h=400&fit=crop&crop=center",
      category: "UX Design",
      rotation: "-rotate-2"
    },
    {
      title: "Print Materials",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=560&h=400&fit=crop&crop=center",
      category: "Print Design",
      rotation: "rotate-1"
    },
    {
      title: "Social Media",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=560&h=400&fit=crop&crop=center",
      category: "Digital Marketing",
      rotation: "-rotate-1"
    }
  ]

  // Duplicate items to create seamless infinite scroll
  const duplicatedItems = [...galleryItems, ...galleryItems]

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let lastTime = 0
    const scrollSpeed = 0.5

    const scroll = (currentTime: number) => {
      if (lastTime === 0) {
        lastTime = currentTime
      }

      const deltaTime = currentTime - lastTime
      if (deltaTime >= 16) {
        if (!isHovered && !isDragging) {
          if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
            scrollContainer.scrollLeft = 0
          } else {
            scrollContainer.scrollLeft += scrollSpeed
          }
        }
        lastTime = currentTime
      }

      animationRef.current = requestAnimationFrame(scroll)
    }

    animationRef.current = requestAnimationFrame(scroll)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovered, isDragging])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    // Resume auto-scroll when mouse leaves
    if (!isDragging) {
      // Force a small delay to ensure smooth transition
      setTimeout(() => {
        setIsHovered(false)
      }, 100)
    }
  }

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current
    if (!container) return
    
    setIsDragging(true)
    setStartX(e.pageX - container.offsetLeft)
    setScrollLeft(container.scrollLeft)
    container.style.cursor = 'grabbing'
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    
    const container = scrollContainerRef.current
    if (!container) return
    
    e.preventDefault()
    const x = e.pageX - container.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    container.scrollLeft = scrollLeft - walk
    
    // Calculate velocity for momentum
    const currentTime = Date.now()
    if (currentTime - lastTime > 0) {
      const newVelocity = (x - lastX) / (currentTime - lastTime) * 2
      setVelocity(newVelocity)
    }
    setLastX(x)
    setLastTime(currentTime)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    const container = scrollContainerRef.current
    if (container) {
      container.style.cursor = 'grab'
    }
    // Apply momentum
    if (Math.abs(velocity) > 0.5) {
      applyMomentum(velocity)
    }
  }

  const handleMouseLeaveDrag = () => {
    setIsDragging(false)
    const container = scrollContainerRef.current
    if (container) {
      container.style.cursor = 'grab'
    }
    // Resume auto-scroll when mouse leaves during drag
    setIsHovered(false)
  }

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const container = scrollContainerRef.current
    if (!container) return
    
    setIsDragging(true)
    setStartX(e.touches[0].pageX - container.offsetLeft)
    setScrollLeft(container.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    
    const container = scrollContainerRef.current
    if (!container) return
    
    const x = e.touches[0].pageX - container.offsetLeft
    const walk = (x - startX) * 2
    container.scrollLeft = scrollLeft - walk
    
    // Calculate velocity for momentum
    const currentTime = Date.now()
    if (currentTime - lastTime > 0) {
      const newVelocity = (x - lastX) / (currentTime - lastTime) * 2
      setVelocity(newVelocity)
    }
    setLastX(x)
    setLastTime(currentTime)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    // Apply momentum
    if (Math.abs(velocity) > 0.5) {
      applyMomentum(velocity)
    }
  }

  // Smooth momentum animation
  const applyMomentum = (initialVelocity: number) => {
    const container = scrollContainerRef.current
    if (!container) return

    let currentVelocity = initialVelocity
    const friction = 0.95
    const minVelocity = 0.1

    const animate = () => {
      if (Math.abs(currentVelocity) < minVelocity) return

      container.scrollLeft -= currentVelocity
      currentVelocity *= friction

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  return (
    <section id="projects" className="mb-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-2 text-white">Recent Projects</h3>
          <p className="text-xl text-neutral-300">A showcase of my latest design work</p>
        </div>

        <div className="relative overflow-hidden">
          {/* Fade Masks */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-neutral-950 via-neutral-950/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-16 py-8 px-8 overflow-x-auto scrollbar-hide cursor-grab select-none"
            style={{ 
              userSelect: 'none',
              scrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeaveDrag}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {duplicatedItems.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <div 
                  className={`${item.rotation} transition-transform hover:scale-105`}
                  style={{ width: '560px', height: '400px' }}
                >
                  <div className="relative group cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={560}
                      height={400}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col items-center justify-center text-white">
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-neutral-300">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
