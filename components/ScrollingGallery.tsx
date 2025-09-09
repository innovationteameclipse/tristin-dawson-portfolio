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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryItems = [
    {
      title: "PG Bison",
      image: "/images/pg_bison.webp",
      category: "Web Design",
      rotation: "rotate-1",
      iframeUrl: "https://embed.figma.com/proto/OdUyTugin1jQ0eKUNJ3qw5/PG-Bison-Website?node-id=409-1026&scaling=scale-down-width&content-scaling=fixed&page-id=409%3A138&embed-host=share"
    },
    {
      title: "Korridor",
      image: "/images/korridor.webp",
      category: "Website Design",
      rotation: "-rotate-1",
      iframeUrl: "https://embed.figma.com/proto/WHHuh6Yx3o8bvpXeqnUK1k/Korridor-Home-Page-Concept?node-id=6-25&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A25&embed-host=share"
    },
    {
      title: "Son Sound",
      image: "/images/son-sound.webp",
      category: "Website Design",
      rotation: "rotate-2",
      iframeUrl: "https://embed.figma.com/proto/qyH3PPJJErFZ8avnv20ZzA/Son-Sound-Concept?node-id=1-2&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&embed-host=share"
    },
    {
      title: "Starbright",
      image: "/images/starbright.webp",
      category: "Website Design",
      rotation: "-rotate-2",
      iframeUrl: "https://embed.figma.com/proto/3zur14ZBad4GiP3YCL4tZu/Collateral?node-id=5204-25310&scaling=scale-down-width&content-scaling=fixed&page-id=5204%3A25307&embed-host=share"
    },
    {
      title: "Restack",
      image: "/images/restack.webp",
      category: "Website Design",
      rotation: "rotate-1",
      iframeUrl: "https://embed.figma.com/proto/J6j1TaA5cytonFvmgYxWOL/Restack?node-id=710-292&scaling=scale-down-width&content-scaling=fixed&page-id=709%3A291&starting-point-node-id=710%3A292&embed-host=share"
    },
    {
      title: "IPP Attorneys",
      image: "/images/ipp.webp",
      category: "Website Design",
      rotation: "-rotate-1",
      iframeUrl: "https://embed.figma.com/proto/lBngJvHUw4xkcX7BaalNAE/Website-Concept?node-id=263-18&scaling=scale-down-width&content-scaling=fixed&page-id=263%3A17&starting-point-node-id=263%3A18&embed-host=share"
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

  // Modal functions
  const openModal = (item: any) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  const goToPrevious = () => {
    if (scrollContainerRef.current) {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1
      setCurrentIndex(newIndex)
      const container = scrollContainerRef.current
      const itemWidth = container.clientWidth
      container.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth'
      })
    }
  }

  const goToNext = () => {
    if (scrollContainerRef.current) {
      const newIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0
      setCurrentIndex(newIndex)
      const container = scrollContainerRef.current
      const itemWidth = container.clientWidth
      container.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth'
      })
    }
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  // Update current index on scroll
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const containerWidth = container.clientWidth
      const scrollLeft = container.scrollLeft
      const newIndex = Math.round(scrollLeft / containerWidth)
      setCurrentIndex(newIndex)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="projects" className="mb-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 text-white">Recent Projects</h2>
          <p className="text-xl text-neutral-300">A showcase of my latest design work</p>
        </div>

        <div className="relative overflow-hidden">
          {/* Mobile Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-neutral-800/80 hover:bg-neutral-700/80 text-white p-2 rounded-full transition-colors md:hidden"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-neutral-800/80 hover:bg-neutral-700/80 text-white p-2 rounded-full transition-colors md:hidden"
            aria-label="Next project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Fade Masks - Hidden on mobile */}
          <div className="hidden md:block absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10 pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-neutral-950 via-neutral-950/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-8 md:space-x-16 py-8 px-4 md:px-8 overflow-x-auto scrollbar-hide cursor-grab select-none md:overflow-x-auto snap-x snap-mandatory"
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
              <div key={index} className="flex-shrink-0 snap-center snap-always">
                <div 
                  className={`${item.rotation} transition-transform hover:scale-105 w-80 h-60 md:w-[560px] md:h-[400px]`}
                >
                  <button 
                    className="relative group cursor-pointer block w-full h-full"
                    onClick={(e) => {
                      // Prevent click if user is dragging
                      if (isDragging) {
                        e.preventDefault()
                        return
                      }
                      // Only open modal if item has iframeUrl
                      if (item.iframeUrl) {
                        openModal(item)
                      }
                    }}
                    aria-label={`View ${item.title} project prototype`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={560}
                      height={400}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                      sizes="(max-width: 768px) 320px, 560px"
                    />
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col items-center justify-center text-white p-4">
                      <h4 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 text-center">{item.title}</h4>
                      <p className="text-sm md:text-lg text-neutral-300 mb-3 md:mb-4 text-center">{item.category}</p>
                      {item.iframeUrl && (
                         <div className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg text-sm md:text-base">
                          View Prototype
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="relative bg-white rounded-2xl max-w-6xl w-full h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 id="modal-title" className="text-2xl font-bold text-gray-900">{selectedItem.title}</h3>
                <p id="modal-description" className="text-gray-600">{selectedItem.category}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="flex-1 p-6 flex flex-col">
              <div className="flex-1 w-full">
                <iframe
                  style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                  width="100%"
                  height="100%"
                  src={selectedItem.iframeUrl}
                  allowFullScreen
                  className="rounded-lg w-full h-full"
                  title={`${selectedItem.title} prototype`}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
