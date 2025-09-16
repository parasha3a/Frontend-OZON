import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Award, Star } from 'lucide-react'

const ElearningMarket: React.FC = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.3, 
    triggerOnce: true 
  })

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

  const marketPoints = [
    {
      number: "1",
      title: "Целевая ниша",
      content: "Рынок корпоративного e-learning растет на 10-16% в год. Объем рынка достигает $17,89 млрд. Логистическая автоматизация также показывает высокие темпы роста.",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      number: "2", 
      title: "Развиваемые навыки",
      content: "Решение развивает навыки Industrial ML. Также прокачиваются HighLoad data processing и reproducible research. DevOps компетенции также повышаются.",
      icon: Award,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      number: "3",
      title: "Ценность портфолио",
      content: "Проект добавляет значительную ценность для портфолио. Решение привлекательно для работодателей в IT и e-commerce. Улучшает резюме специалиста.",
      icon: Star,
      gradient: "from-purple-500 to-pink-600"
    }
  ]

  return (
    <section id="elearning-market" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
          >
            Рынок E-learning
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8 max-w-5xl mx-auto"
        >
          {marketPoints.map((point, index) => (
            <motion.div
              key={point.number}
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-6">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${point.gradient} rounded-2xl flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">{point.number}</span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center mb-4">
                    <point.icon className="w-6 h-6 text-gray-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">{point.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {point.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Статистика */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 text-white">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-4">Ключевые показатели рынка</h4>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div variants={itemVariants}>
                <div className="text-4xl font-bold mb-2">10-16%</div>
                <div className="text-indigo-100">годовой рост e-learning</div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="text-4xl font-bold mb-2">$17.89B</div>
                <div className="text-indigo-100">объем рынка</div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="text-4xl font-bold mb-2">High</div>
                <div className="text-indigo-100">востребованность ML навыков</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ElearningMarket
