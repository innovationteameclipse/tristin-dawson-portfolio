'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState('experience')

  const faqCategories = {
    experience: {
      title: "Experience & Background",
      questions: [
        {
          question: "Tell me about your design experience and background?",
          answer: "I'm a Digital Designer with over 5 years of experience in corporate marketing, specializing in web design, UI/UX, and brand identity. I'm self-taught, which has given me a unique perspective and strong problem-solving skills. I've worked with major brands across manufacturing, fintech, events, marketing, cybersecurity, and legal sectors, delivering high-quality designs that drive business results."
        },
        {
          question: "What industries have you worked in?",
          answer: "I've worked across diverse industries including manufacturing, fintech, events, marketing, cybersecurity, legal, automotive, and various other sectors. This exposure has taught me to quickly understand different business models, target audiences, and industry-specific design requirements. I can adapt my design approach to any industry."
        },
        {
          question: "How do you handle tight deadlines and pressure?",
          answer: "I thrive under pressure and have consistently delivered quality work under tight deadlines. For example, I once received nine client mailers at 1:30 PM on a Friday and stayed late to complete them all by 3 PM. I prioritise tasks, communicate clearly with stakeholders, and maintain high standards even when working quickly."
        }
      ]
    },
    skills: {
      title: "Technical Skills & Tools",
      questions: [
        {
          question: "What design tools and software are you proficient in?",
          answer: "My primary tools include Figma for UI/UX design, Adobe Creative Suite (Photoshop, Illustrator, InDesign, XD) for graphic design, and I have solid knowledge of HTML/CSS and JavaScript. I'm also experienced with email marketing platforms like Leadtrekker and Everlytic. I'm always learning new tools and staying current with industry trends."
        },
        {
          question: "How do you stay updated with design trends and technology?",
          answer: "I'm constantly learning and experimenting with new design approaches. I follow industry leaders, participate in design communities, and regularly explore new tools and techniques. My self-taught background means I'm comfortable learning new skills quickly and adapting to changing technology requirements."
        },
        {
          question: "Can you work with development teams and understand technical constraints?",
          answer: "Yes, I have a strong understanding of web development principles and can communicate effectively with developers. I design with technical feasibility in mind and can provide detailed specifications for implementation. I've worked closely with development teams to ensure designs are both beautiful and technically sound."
        }
      ]
    },
    workstyle: {
      title: "Work Style & Collaboration",
      questions: [
        {
          question: "How do you handle feedback and criticism?",
          answer: "I actively seek feedback and see it as essential for growth. When I hit creative blocks, I open myself up to critique and actively seek support from team members. I believe constructive feedback makes designs stronger, and I'm always willing to iterate and improve based on input from clients, stakeholders, and team members."
        },
        {
          question: "Describe a challenging project and how you handled it?",
          answer: "One challenging project was an email newsletter campaign where the client provided unclear information. I took the initiative to call them directly, resolve the confusion, and worked after hours to deliver the designs by morning. Despite the complexity, I maintained calm communication and delivered high-quality work that exceeded expectations."
        },
        {
          question: "How do you collaborate with team members and stakeholders?",
          answer: "I believe in open communication and proactive support. I'm always willing to help teammates with design challenges, technical issues, or creative inspiration. I take initiative to improve processes, like suggesting we test the Event Planner on Discord for better team coordination. I build strong working relationships and ensure everyone feels supported."
        }
      ]
    },
    growth: {
      title: "Growth & Future Goals",
      questions: [
        {
          question: "Where do you see yourself in 5 years?",
          answer: "I'm passionate about design and see myself growing into a senior design role where I can mentor junior designers while continuing to create impactful work. I want to expand my expertise in emerging technologies like AI-assisted design tools and potentially lead design teams on larger projects. I'm excited about the evolving design landscape."
        },
        {
          question: "What motivates you in your work?",
          answer: "I'm driven by the impact my designs have on businesses and users. Seeing a website I designed drive conversions, or an email campaign achieve high engagement rates, gives me immense satisfaction. I love solving creative problems and helping clients achieve their goals through thoughtful, user-centred design."
        },
        {
          question: "How do you handle creative blocks or burnout?",
          answer: "I recognise that creative blocks are normal and have developed strategies to overcome them. I step back, seek inspiration from different sources, and ask for feedback from team members. I also take breaks when needed and focus on self-care. My experience has taught me that pushing through blocks often leads to breakthrough solutions."
        }
      ]
    }
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="mb-16">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-neutral-300 mb-12">
          Common questions recruiters ask about my experience and approach
        </p>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-neutral-800 border border-neutral-600 rounded-2xl p-1 overflow-x-auto">
            {Object.entries(faqCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-4 rounded-xl text-sm font-medium transition-colors whitespace-nowrap min-h-[48px] ${
                  activeTab === key
                    ? 'bg-white text-neutral-950'
                    : 'text-neutral-300 hover:text-white'
                }`}
                aria-selected={activeTab === key}
                role="tab"
                aria-controls={`tabpanel-${key}`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-4" role="tabpanel" id={`tabpanel-${activeTab}`}>
          {faqCategories[activeTab as keyof typeof faqCategories].questions.map((faq, index) => (
            <div key={index} className="bg-neutral-800/30 backdrop-blur-md border border-neutral-600/20 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-neutral-800/50 transition-colors min-h-[60px]"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span id={`faq-question-${index}`} className="text-white font-medium text-lg">{faq.question}</span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="text-neutral-300 w-5 h-5 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="text-neutral-300 w-5 h-5 transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="px-6 py-8 text-left min-h-[120px]">
                  <p className="text-lg text-neutral-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Funny Joke */}
        <div className="mt-12 p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl">
          <p className="text-center text-xl text-neutral-300">
            <span className="text-white font-medium">Fun fact:</span> Yes, I vibecoded this portfolio using{' '}
            <a 
              href="https://cursor.sh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-500 hover:text-white underline transition-colors"
              aria-label="Visit Cursor AI code editor website"
            >
              Cursor
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQ
