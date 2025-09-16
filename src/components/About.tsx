import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Database, Users, Clock, Zap } from 'lucide-react'

const About: React.FC = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.3, 
    triggerOnce: true 
  })

  const stats = [
    {
      icon: Database,
      number: 20160,
      label: 'заказов для доставки',
      suffix: '',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      number: 200,
      label: 'курьеров-оптимизаторов',
      suffix: '',
      color: 'text-green-500'
    },
    {
      icon: Clock,
      number: 1,
      label: 'час время решения задачи',
      suffix: '<',
      color: 'text-purple-500'
    },
    {
      icon: Zap,
      number: 99.75,
      label: 'сжатие графа (400M → 1M рёбер)',
      suffix: '%',
      color: 'text-orange-500'
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
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants}>О проекте</motion.h2>
          <motion.p variants={itemVariants} className="section-description">
            Инновационное решение для задачи Vehicle Routing Problem (VRP) с использованием 
            Graph Neural Networks и Reinforcement Learning для оптимизации маршрутов 200 курьеров 
            и 20,160 заказов с учётом сложных ограничений.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="about-stats"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="stat-card"
              whileHover={{ y: -5 }}
            >
              <motion.h3
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 100 }}
              >
                {stat.suffix === '<' && <span>&lt;</span>}
                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2}
                    delay={index * 0.2 + 0.5}
                    decimals={stat.number % 1 !== 0 ? 2 : 0}
                    separator=","
                  />
                )}
                {stat.suffix === '%' && <span>%</span>}
              </motion.h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
