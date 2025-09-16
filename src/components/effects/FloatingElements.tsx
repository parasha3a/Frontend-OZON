import React from 'react'
import { motion } from 'framer-motion'

const FloatingElements: React.FC = () => {
  const elements = [
    { size: 60, delay: 0, duration: 8, x: '10%', y: '20%' },
    { size: 40, delay: 1, duration: 6, x: '80%', y: '30%' },
    { size: 80, delay: 2, duration: 10, x: '15%', y: '70%' },
    { size: 50, delay: 0.5, duration: 7, x: '70%', y: '80%' },
    { size: 30, delay: 1.5, duration: 5, x: '90%', y: '10%' },
    { size: 70, delay: 2.5, duration: 9, x: '5%', y: '90%' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white/5 border border-white/10"
          style={{
            width: element.size,
            height: element.size,
            left: element.x,
            top: element.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 360],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Gradient Orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              i % 2 === 0 
                ? 'rgba(102, 126, 234, 0.1)' 
                : 'rgba(118, 75, 162, 0.1)'
            } 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default FloatingElements
