'use client'

import { useRef, useEffect, useState } from 'react'

export default function ScrollingGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const [isHovered, setIsHovered] = useState(false)

  const galleryItems = [
    {
      title: "Website Redesign",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop",
      category: "Web Design",
      rotation: "rotate-1"
    },
    {
      title: "Mobile App UI",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=500&fit=crop",
      category: "UI Design",
      rotation: "-rotate-1"
    },
    {
      title: "Brand Identity",
      image: "https://images.unsplash.com/photo-1561070791-2526d41294b5?w=500&h=500&fit=crop",
      category: "Branding",
      rotation: "rotate-2"
    },
    {
      title: "Dashboard Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop",
      category: "UX Design",
      rotation: "-rotate-2"
    },
    {
      title: "Print Materials",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop",
      category: "Print Design",
      rotation: "rotate-1"
    },
    {
      title: "Social Media",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=500&fit=crop",
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
        // Only scroll if not hovered
        if (!isHovered) {
          // Check if we've scrolled past the first set of images
          if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
            // Reset to beginning of first set without visual jump
            scrollContainer.scrollLeft = 0
          } else {
            scrollContainer.scrollLeft += scrollSpeed
          }
        }
        lastTime = currentTime
      }

      // Always continue the animation loop
      animationRef.current = requestAnimationFrame(scroll)
    }

    animationRef.current = requestAnimationFrame(scroll)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <section className="mb-16">
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
            className="flex space-x-16 py-8 px-8 overflow-x-auto scrollbar-hide"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {duplicatedItems.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <div className={`w-64 h-64 ${item.rotation} transition-transform hover:scale-105`}>
                  <div className="relative group cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.title}
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
