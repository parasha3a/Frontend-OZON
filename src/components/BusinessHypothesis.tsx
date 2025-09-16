import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, TrendingUp, Award } from 'lucide-react'

const BusinessHypothesis: React.FC = () => {
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const hypotheses = [
    {
      number: "1",
      type: "Do X",
      title: "Оптимизация маршрутов курьеров",
      content: "Учет микрополигонов. Учет сервис-времени. Минимизация общего времени доставки.",
      icon: Target,
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50"
    },
    {
      number: "2", 
      type: "Get Y",
      title: "Повышение эффективности логистики",
      content: "Снижение времени доставки. Увеличение количества доставляемых заказов курьером за смену. Сокращение порожних пробегов.",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      number: "3",
      type: "Доп. ценность",
      title: "Reproducible solution",
      content: "Быстрое внедрение. Масштабирование решения в реальных условиях. Гарантия качества и предсказуемости.",
      icon: Award,
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
    }
  ]

  return (
    <section id="business-hypothesis" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50" ref={ref}>
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
            Бизнес-гипотезы и метрики
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8 max-w-6xl mx-auto"
        >
          {hypotheses.map((hypothesis, index) => (
            <motion.div
              key={hypothesis.number}
              variants={cardVariants}
              className={`${hypothesis.bgColor} rounded-3xl p-8 border-2 border-white shadow-xl hover:shadow-2xl transition-all duration-300`}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${hypothesis.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                    <span className="text-2xl font-bold text-white">{hypothesis.number}</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 shadow-md">
                      {hypothesis.type}
                    </span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center mb-4">
                    <hypothesis.icon className="w-6 h-6 text-gray-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">{hypothesis.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {hypothesis.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Результирующие метрики */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 text-white">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-4">Ключевые метрики успеха</h4>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={itemVariants} className="text-center">
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">⏱️</div>
                  <div className="text-lg font-semibold mb-1">Время доставки</div>
                  <div className="text-indigo-100 text-sm">Минимизация общего времени</div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center">
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">📦</div>
                  <div className="text-lg font-semibold mb-1">Заказы/смену</div>
                  <div className="text-indigo-100 text-sm">Увеличение производительности</div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center">
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">🎯</div>
                  <div className="text-lg font-semibold mb-1">Качество</div>
                  <div className="text-indigo-100 text-sm">Воспроизводимость решения</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BusinessHypothesis
