import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Database, Brain, Target, Zap } from 'lucide-react'

const Phases: React.FC = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.2, 
    triggerOnce: true 
  })

  const phases = [
    {
      number: 1,
      title: 'Data Infrastructure',
      description: 'Эффективная загрузка 14GB данных и построение k-NN sparse графа для обработки 400M записей в памяти 32GB.',
      icon: Database,
      status: 'completed',
      highlights: [
        'Memory-mapped загрузка',
        'k-NN graph construction',
        'Feature extraction',
        'Sparse representation'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: 2,
      title: 'Graph Neural Network',
      description: 'GNN энкодер с Graph Convolution и Graph Attention для вычисления контекстных эмбеддингов всех узлов.',
      icon: Brain,
      status: 'completed',
      highlights: [
        'Graph Convolution (GCN)',
        'Graph Attention (GAT)',
        'Multi-layer encoding',
        'Contextual embeddings'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: 3,
      title: 'Attention Decoder',
      description: 'Pointer Network декодер с механизмом внимания для автогрессивного построения маршрутов с учётом ограничений.',
      icon: Target,
      status: 'completed',
      highlights: [
        'Pointer Networks',
        'Attention mechanism',
        'Multi-courier coordination',
        'Constraint awareness'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      number: 4,
      title: 'Reinforcement Learning',
      description: 'Actor-Critic обучение с curriculum learning для оптимизации общего времени маршрутов и штрафов.',
      icon: Zap,
      status: 'completed',
      highlights: [
        'Actor-Critic training',
        'Curriculum learning',
        'MDP environment',
        'Policy optimization'
      ],
      gradient: 'from-orange-500 to-red-500'
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

  const cardVariants = {
    hidden: { y: 100, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  }

  return (
    <section id="phases" className="phases" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={cardVariants}>Фазы разработки</motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="phases-grid"
        >
          {phases.slice().reverse().map((phase, index) => (
            <motion.div
              key={phase.number}
              variants={cardVariants}
              className="group"
            >
              <motion.div
                className="phase-card completed cursor-target"
                whileHover={{ y: -5 }}
              >
                {/* Status Badge */}
                <motion.div
                  className="phase-status"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                >
                  ✅ Завершено
                </motion.div>

                {/* Content */}
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                >
                  {phase.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2 + 0.9 }}
                >
                  {phase.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}

export default Phases
