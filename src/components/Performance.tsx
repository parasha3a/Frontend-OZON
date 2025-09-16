import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Clock, MemoryStick, Zap, Database, Container, Globe, Shield } from 'lucide-react'

const Performance: React.FC = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.2, 
    triggerOnce: true 
  })

  const performanceMetrics = [
    {
      metric: 'Время обработки',
      target: '< 3 часа',
      achieved: '~7.5 минут',
      status: 'success',
      icon: Clock,
      improvement: '24x быстрее'
    },
    {
      metric: 'Использование памяти',
      target: '< 32GB',
      achieved: '< 16GB',
      status: 'success',
      icon: MemoryStick,
      improvement: '50% экономии'
    },
    {
      metric: 'Сжатие графа',
      target: '400M → ~1M рёбер',
      achieved: '99.75% сжатие',
      status: 'success',
      icon: Database,
      improvement: 'Фантастический результат'
    },
    {
      metric: 'Загрузка данных',
      target: '< 5 минут',
      achieved: '4.2 минуты',
      status: 'success',
      icon: Zap,
      improvement: '16% экономии'
    }
  ]

  const deploymentFeatures = [
    {
      icon: Container,
      title: 'Docker контейнеризация',
      description: 'Multi-stage build для оптимизированного деплоя'
    },
    {
      icon: Globe,
      title: 'REST API',
      description: 'FastAPI с JSON входными/выходными данными'
    },
    {
      icon: Shield,
      title: 'Мониторинг',
      description: 'Health checks и метрики производительности'
    },
    {
      icon: Zap,
      title: 'Масштабирование',
      description: 'Поддержка оркестрации контейнеров'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const tableVariants = {
    hidden: { opacity: 0, rotateX: -15 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const rowVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section id="performance" className="performance" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants}>Производительность</motion.h2>
        </motion.div>

        {/* Performance Table */}
        <motion.div
          variants={tableVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="perf-table"
        >
          <table>
            <thead>
              <tr>
                <th>Метрика</th>
                <th>Цель</th>
                <th>Достигнуто</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              {performanceMetrics.map((item, index) => (
                <motion.tr
                  key={index}
                  variants={rowVariants}
                  whileHover={{ backgroundColor: "rgba(102, 126, 234, 0.05)" }}
                >
                  <td>{item.metric}</td>
                  <td>{item.target}</td>
                  <td>{item.achieved}</td>
                  <td>
                    <span className="status-success">✅</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Deployment Readiness */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="deployment-info"
        >
          <motion.h3 variants={itemVariants}>🚀 Готовность к продакшену</motion.h3>

          <div className="deployment-grid">
            {deploymentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="deploy-item"
                whileHover={{ y: -5 }}
              >
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default Performance
