import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

const ParticleBackground: React.FC = () => {
  const particles = useMemo(() => {
    return [...Array(50)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.slice(0, 20).map((particle, i) => {
          const nextParticle = particles[(i + 1) % 20]
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${particle.x}%`}
              y1={`${particle.y}%`}
              x2={`${nextParticle.x}%`}
              y2={`${nextParticle.y}%`}
              stroke="rgba(102, 126, 234, 0.1)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default ParticleBackground
