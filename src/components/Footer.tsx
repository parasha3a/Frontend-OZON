import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Github, Mail, ExternalLink } from 'lucide-react'

const Footer: React.FC = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.3, 
    triggerOnce: true 
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="footer-content"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="footer-section">
            <h3>OZON VRP Solution</h3>
            <p>Инновационное решение для оптимизации логистических маршрутов</p>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants} className="footer-section">
            <h4>Технологии</h4>
            <ul>
              {['PyTorch', 'Graph Neural Networks', 'Reinforcement Learning', 'Docker'].map((tech, index) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Documentation */}
          <motion.div variants={itemVariants} className="footer-section">
            <h4>Документация</h4>
            <ul>
              {[
                { name: 'API Reference', href: '#' },
                { name: 'Deployment Guide', href: '#' },
                { name: 'Architecture Overview', href: '#architecture' },
                { name: 'Performance Benchmarks', href: '#performance' }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="footer-section">
            <h4>Контакты</h4>
            <p>Свяжитесь с нашей командой для получения дополнительной информации</p>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="footer-bottom"
        >
          <p>&copy; 2024 OZON VRP Solution. Все права защищены.</p>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
