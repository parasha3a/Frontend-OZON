import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterEffectProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  className = '',
  speed = 100,
  delay = 0
}) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      } else {
        setIsCompleted(true)
      }
    }, currentIndex === 0 ? delay : speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, speed, delay])

  return (
    <div className={className}>
      <span>{displayText}</span>
      {!isCompleted && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-1 h-8 bg-current ml-1"
        />
      )}
    </div>
  )
}

export default TypewriterEffect
