'use client'

import { useState, useEffect, useRef } from 'react'

interface Skill {
  name: string
  percentage: number
  category: string
  isLearning?: boolean
}

interface SkillsProps {
  gradientClass: string
}

const Skills = ({ gradientClass }: SkillsProps) => {
  const [animatedPercentages, setAnimatedPercentages] = useState<{ [key: string]: number }>({})
  const skillsRef = useRef<HTMLDivElement>(null)

  const skills: Skill[] = [
    { name: "Figma", percentage: 90, category: "Design Tools" },
    { name: "Adobe Photoshop", percentage: 88, category: "Design Tools" },
    { name: "Adobe Illustrator", percentage: 85, category: "Design Tools" },
    { name: "Adobe After Effects", percentage: 82, category: "Design Tools" },
    { name: "Adobe Premiere Pro", percentage: 80, category: "Design Tools" },
    { name: "UI/UX Design", percentage: 88, category: "Design Skills" },
    { name: "Website Design", percentage: 92, category: "Design Skills" },
    { name: "Brand Identity", percentage: 87, category: "Design Skills" },
    { name: "Email Marketing", percentage: 85, category: "Design Skills" },
    { name: "Responsive Design", percentage: 90, category: "Design Skills" },
    { name: "Client Communication", percentage: 88, category: "Soft Skills" },
    { name: "Project Management", percentage: 82, category: "Soft Skills" },
    { name: "Creative Problem Solving", percentage: 90, category: "Soft Skills" },
    { name: "Team Collaboration", percentage: 95, category: "Soft Skills" },
    { name: "Vibecoding", percentage: 100, category: "Development" },
    { name: "HTML", percentage: 65, category: "Development" },
    { name: "CSS", percentage: 70, category: "Development" }
  ]

  const learningSkills: Skill[] = [
    { name: "React", percentage: 11, category: "Learning" },
    { name: "Next.js", percentage: 8, category: "Learning" }
  ]

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as { [key: string]: Skill[] })

  // Animate progress bars when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation for each skill with staggered timing
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedPercentages(prev => ({
                  ...prev,
                  [skill.name]: skill.percentage
                }))
              }, index * 100) // Stagger by 100ms for each skill
            })
            
            // Start animation for learning skills with staggered timing
            learningSkills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedPercentages(prev => ({
                  ...prev,
                  [skill.name]: skill.percentage
                }))
              }, (skills.length + index) * 100) // Continue staggering after main skills
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    // Fallback: ensure all skills show after 2 seconds even if intersection observer fails
    const fallbackTimer = setTimeout(() => {
      const allPercentages = [...skills, ...learningSkills].reduce((acc, skill) => {
        acc[skill.name] = skill.percentage
        return acc
      }, {} as { [key: string]: number })
      setAnimatedPercentages(allPercentages)
    }, 2000)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <section id="skills" className="mb-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            A comprehensive overview of my design and technical capabilities, developed through years of hands-on experience and continuous learning.
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-neutral-600 pb-2">
                {category}
              </h3>
              
              <div className="space-y-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-white font-semibold">
                        {skill.isLearning ? "Learning" : `${animatedPercentages[skill.name] || 0}%`}
                      </span>
                    </div>
                    
                    <div className="w-full bg-neutral-800 rounded-2xl h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${gradientClass} rounded-2xl transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${animatedPercentages[skill.name] || 0}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Currently Learning</h3>
            <p className="text-lg text-neutral-300">
              Technologies I'm actively exploring and developing skills in
            </p>
          </div>
          
          <div className="space-y-6">
            {learningSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium text-lg">{skill.name}</span>
                  <span className="text-blue-400 font-semibold text-lg">Learning</span>
                </div>
                
                <div className="w-full bg-neutral-800 rounded-2xl h-4 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${animatedPercentages[skill.name] || 0}%`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Additional Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "ComfyUI", "Everlytic", "Mailchimp", "Elementor", "WordPress", 
              "Cursor", "Canva", "Leadtrekker", "Zoho CRM"
            ].map((tool) => (
              <span 
                key={tool}
                className="px-4 py-2 bg-neutral-800/50 border border-neutral-600 rounded-2xl text-neutral-300 hover:text-white hover:border-green-500 transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
