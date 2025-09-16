import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Database, Network, Brain, Cpu } from 'lucide-react'

const Architecture: React.FC = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.2, 
    triggerOnce: true 
  })

  const architectureSteps = [
    {
      icon: Database,
      title: 'Memory-Mapped Duration Loader',
      description: 'Эффективный доступ к 14GB матрицы времени',
      details: ['mmap-based access', 'Batch loading', 'Memory optimization', 'Progress tracking'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Network,
      title: 'Sparse Graph Builder (k-NN)',
      description: 'Сжатие 400M рёбер до ~1M',
      details: ['k-NN computation', 'Graph connectivity', 'Binary serialization', 'NetworkX integration'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Brain,
      title: 'Feature Extraction',
      description: 'Готовые матрицы для Neural Network',
      details: ['Node features (219D)', 'Edge features', 'Normalization', 'Matrix format'],
      color: 'from-green-500 to-green-600'
    }
  ]

  const techCards = [
    {
      icon: '🔬',
      title: 'ML Pipeline',
      items: [
        'Graph Convolution Network (GCN)',
        'Graph Attention Network (GAT)', 
        'Pointer Network Decoder',
        'Actor-Critic Training (A2C/PPO)'
      ],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: '⚡',
      title: 'Оптимизации',
      items: [
        'Memory mapping для больших файлов',
        'k-NN sparse representation',
        'Batch processing',
        'Multi-threading (4 CPU cores)'
      ],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🎯',
      title: 'Ограничения',
      items: [
        'Лимит времени: 43,200с (12ч) на курьера',
        'Атомарность микрополигонов',
        'Один заказ = один курьер',
        'Штраф за неназначенные: 3000с'
      ],
      gradient: 'from-indigo-500 to-blue-500'
    }
  ]

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
    hidden: { y: 50, opacity: 0 },
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
    <section id="architecture" className="architecture" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants}>Архитектура системы</motion.h2>
        </motion.div>

        {/* Architecture Flow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="arch-flow"
        >
          {architectureSteps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                variants={itemVariants}
                className="arch-step cursor-target"
                whileHover={{ y: -5 }}
              >
                <div className="arch-icon">
                  {index === 0 && '📊'}
                  {index === 1 && '🕸️'}
                  {index === 2 && '🧠'}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>

              {index < architectureSteps.length - 1 && (
                <motion.div
                  variants={itemVariants}
                  className="arch-arrow"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Technical Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="tech-details"
        >
          {techCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="tech-card cursor-target"
              whileHover={{ y: -5 }}
            >
              <h4>{card.icon} {card.title}</h4>
              <ul>
                {card.items.map((item, iIndex) => (
                  <motion.li
                    key={iIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.2 + iIndex * 0.1 + 0.5 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}

export default Architecture
