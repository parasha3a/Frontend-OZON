import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Users, Settings } from 'lucide-react'

const RussiaMarket: React.FC = () => {
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
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const marketSections = [
    {
      number: "1",
      title: "Ключевые игроки",
      content: "Рынок логистики России трансформируется цифровизацией. Растет e-commerce и развивается логистическая инфраструктура. Деловые Линии, ПЭК, СДЭ, Байкал Сервис, DPD.",
      icon: MapPin,
      gradient: "from-red-500 to-orange-600"
    },
    {
      number: "2",
      title: "Потребности рынка", 
      content: "Крупные ритейлеры и маркетплейсы заинтересованы в оптимизации маршрутов. Они ищут технологии автоматизации логистики. Цель — повышение эффективности и снижение затрат.",
      icon: Users,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      number: "3",
      title: "Адаптация к РФ",
      content: "Продукт адаптирован к российским условиям. Поддерживаются форматы и ограничения российской логистики. Учитывается работа с микрополигонами и индивидуальные параметры.",
      icon: Settings,
      gradient: "from-green-500 to-emerald-600"
    }
  ]

  return (
    <section id="russia-market" className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - карта/изображение */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-red-600 to-orange-700 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Рынок России</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-xl">OZON - ключевой партнер</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                    <span className="text-xl">Развитая логистическая сеть</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                    <span className="text-xl">Растущий e-commerce</span>
                  </div>
                </div>
              </div>
              
              {/* Декоративные элементы */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
            </motion.div>
          </motion.div>

          {/* Правая часть - контент */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {marketSections.map((section, index) => (
              <motion.div
                key={section.number}
                variants={cardVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${section.gradient} rounded-xl flex items-center justify-center`}>
                    <span className="text-lg font-bold text-white">{section.number}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center mb-3">
                      <section.icon className="w-5 h-5 text-gray-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Нижняя статистика */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 text-white">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-4">Ключевые факторы успеха</h4>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div variants={itemVariants}>
                <div className="text-3xl font-bold mb-2 text-red-400">OZON</div>
                <div className="text-gray-300">стратегический партнер</div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="text-3xl font-bold mb-2 text-orange-400">ML</div>
                <div className="text-gray-300">технологии оптимизации</div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="text-3xl font-bold mb-2 text-yellow-400">РФ</div>
                <div className="text-gray-300">адаптация под рынок</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RussiaMarket
