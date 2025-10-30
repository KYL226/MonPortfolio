"use client"

import Image from 'next/image'

const techLogos = [
  { src: '/images/React.svg', alt: 'React' },
  { src: '/images/TypeScript.svg', alt: 'TypeScript' },
  { src: '/images/Next.js.svg', alt: 'Next.js' },
  { src: '/images/JavaScript.svg', alt: 'JavaScript' },
  { src: '/images/Node.js.svg', alt: 'Node.js' },
  { src: '/images/Tailwind CSS.svg', alt: 'Tailwind CSS' },
  { src: '/images/CSS3.svg', alt: 'CSS3' },
  { src: '/images/HTML5.svg', alt: 'HTML5' },
  { src: '/images/Python.svg', alt: 'Python' },
  { src: '/images/MongoDB.svg', alt: 'MongoDB' },
  { src: '/images/MySQL.svg', alt: 'MySQL' },
  { src: '/images/Figma.svg', alt: 'Figma' },
  { src: '/images/api.svg', alt: 'Api' },
]

const TechSlider = () => {
  return (
    <div className="relative">
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">Technologies Maîtrisées</h3>
        
      </div>

      <div className="relative w-full overflow-hidden rounded-2xl glassmorphism p-6 neon-border group">
        <div className="flex gap-8 md:gap-16 items-center tech-scroll">
          {techLogos.concat(techLogos).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] relative hover:scale-110 transition-all duration-300 tech-logo"
            >
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                fill 
                className="object-contain hover:drop-shadow-lg transition-all duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Gradient overlays pour l'effet de fondu */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
      </div>

      <style jsx>{`
        .tech-scroll {
          animation: scroll 30s linear infinite;
          width: calc(200% + 2rem);
        }
        
        .tech-scroll:hover {
          animation-play-state: paused;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .tech-logo:hover {
          filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.5));
        }
      `}</style>
    </div>
  )
}

export default TechSlider
