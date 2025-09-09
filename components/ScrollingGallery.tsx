'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ScrollingGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const galleryItems = [
    {
      title: "PG Bison",
      image: "/images/pg_bison.webp",
      category: "Website Design",
      rotation: "rotate-1",
      iframeUrl: "https://embed.figma.com/proto/OdUyTugin1jQ0eKUNJ3qw5/PG-Bison-Website?node-id=409-1026&scaling=scale-down-width&content-scaling=fixed&page-id=409%3A138&embed-host=share"
    },
    {
      title: "Korridor",
      image: "/images/korridor.webp",
      category: "Website Design",
      rotation: "-rotate-1",
      iframeUrl: "https://embed.figma.com/proto/qyH3PPJJErFZ8avnv20ZzA/Son-Sound-Concept?node-id=1-2&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&embed-host=share"
    },
    {
      title: "Son Sound",
      image: "/images/son-sound.webp",
      category: "Brand Design",
      rotation: "rotate-1",
      iframeUrl: "https://embed.figma.com/proto/qyH3PPJJErFZ8avnv20ZzA/Son-Sound-Concept?node-id=1-2&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&embed-host=share"
    },
    {
      title: "Starbright",
      image: "/images/starbright.webp",
      category: "Brand Design",
      rotation: "-rotate-1",
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

  // Carousel navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    )
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

  return (
    <section id="projects" className="mb-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 text-white">Recent Projects</h2>
          <p className="text-xl text-neutral-300">A showcase of my latest design work</p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-neutral-800/90 hover:bg-neutral-700/90 text-white p-3 rounded-full transition-colors pointer-events-auto touch-manipulation"
            aria-label="Previous project"
            style={{ minWidth: '48px', minHeight: '48px' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-neutral-800/90 hover:bg-neutral-700/90 text-white p-3 rounded-full transition-colors pointer-events-auto touch-manipulation"
            aria-label="Next project"
            style={{ minWidth: '48px', minHeight: '48px' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative aspect-video w-full">
              {galleryItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    index === currentIndex 
                      ? 'opacity-100 z-10' 
                      : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <button 
                    className="relative group cursor-pointer block w-full h-full"
                    onClick={() => openModal(item)}
                    aria-label={`View ${item.title} project prototype`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-2xl shadow-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 900px"
                      quality={90}
                      priority={index === 0}
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
              ))}
            </div>
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