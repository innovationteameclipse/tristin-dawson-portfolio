'use client'

export default function Accolades() {
  const accolades = [
    {
      title: "Digital Design Excellence",
      organization: "Starbright",
      year: "2024",
      description: "Recognized for outstanding website design and user experience improvements that increased client engagement by 40%."
    },
    {
      title: "Creative Innovation Award",
      organization: "Design Community",
      year: "2023",
      description: "Awarded for innovative approach to combining traditional design principles with modern digital tools and techniques."
    },
    {
      title: "Client Satisfaction Excellence",
      organization: "Corporate Marketing",
      year: "2022",
      description: "Achieved 95% client satisfaction rating across all design projects, demonstrating consistent quality and professionalism."
    },
    {
      title: "Self-Taught Achievement",
      organization: "Personal Development",
      year: "2021",
      description: "Successfully transitioned from corporate marketing to digital design through self-directed learning and skill development."
    }
  ]

  return (
    <section id="accolades" className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Accolades & Recognition</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Recognition and achievements that highlight my commitment to excellence in design and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accolades.map((accolade, index) => (
            <div 
              key={index}
              className="bg-neutral-800/50 border border-neutral-600/20 rounded-2xl p-8 hover:border-neutral-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{accolade.title}</h3>
                <span className="text-sm text-neutral-400 bg-neutral-700/50 px-3 py-1 rounded-full">
                  {accolade.year}
                </span>
              </div>
              <p className="text-neutral-400 text-sm mb-3">{accolade.organization}</p>
              <p className="text-neutral-300 leading-relaxed">{accolade.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
