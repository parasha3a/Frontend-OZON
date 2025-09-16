import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, Zap, Brain, Target, Rocket } from 'lucide-react'
import FloatingElements from './effects/FloatingElements'
import TypewriterEffect from './effects/TypewriterEffect'

const Hero: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const floatingIcons = [
    { icon: Brain, delay: 0, position: { top: '20%', left: '10%' } },
    { icon: Zap, delay: 0.5, position: { top: '30%', right: '15%' } },
    { icon: Target, delay: 1, position: { bottom: '30%', left: '5%' } },
    { icon: Rocket, delay: 1.5, position: { bottom: '20%', right: '10%' } },
  ]

  return (
    <section className="hero" ref={ref}>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='0.5'/></pattern></defs><rect width='100' height='100' fill='url(%23grid)'/></svg>")`,
        }}
      />
      
      <div className="container">
        <div className="hero-content">
          <TypewriterEffect
            text="OZON VRP Solution"
            className="text-5xl md:text-6xl font-bold mb-6"
          />
          <p className="hero-subtitle">
            Создаём технологии машинного обучения для оптимизации логистических маршрутов!
          </p>
                            <motion.button
                    onClick={scrollToAbout}
                    className="btn-hero cursor-target"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.25)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Посмотреть демо
                  </motion.button>
        </div>
        
        <div className="hero-images">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              className="hero-image"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 + 0.5 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
