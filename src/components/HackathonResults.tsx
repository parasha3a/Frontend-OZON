import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Clock, Zap, Target } from 'lucide-react'

const HackathonResults: React.FC = () => {
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

  return (
    <section id="hackathon-results" className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50" ref={ref}>
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
            Результаты хакатона
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - изображение разработчика */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Trophy className="w-12 h-12 text-yellow-300 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">E-CUP 2025</h3>
                    <p className="text-blue-100">Хакатон успешно завершен</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 rounded-xl p-4">
                    <h4 className="font-bold mb-2">🎯 Главная задача решена</h4>
                    <p className="text-blue-100 text-sm">Автопланирование курьеров Ozon</p>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 rounded-xl p-4">
                    <h4 className="font-bold mb-2">⚡ Алгоритм создан</h4>
                    <p className="text-blue-100 text-sm">Масштабируемое VRP решение</p>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 rounded-xl p-4">
                    <h4 className="font-bold mb-2">🚀 Готово к внедрению</h4>
                    <p className="text-blue-100 text-sm">Production-ready инфраструктура</p>
                  </div>
                </div>
              </div>
              
              {/* Декоративные элементы */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 opacity-20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
            </motion.div>
          </motion.div>

          {/* Правая часть - описание результатов */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Хакатон E-CUP 2025 успешно завершен. Задача автопланирования 
                курьеров Ozon решена. Разработан масштабируемый алгоритм построения 
                маршрутов. Алгоритм учитывает все заданные ограничения: время работы, 
                сервис-таймы. Цель минимизации суммарного времени достигнута.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-800">Временные рамки</h4>
                </div>
                <p className="text-gray-600">Решение выполнено в срок с соблюдением всех требований хакатона</p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-green-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-800">Точность решения</h4>
                </div>
                <p className="text-gray-600">Все ограничения учтены, алгоритм показывает стабильные результаты</p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-purple-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-800">Производительность</h4>
                </div>
                <p className="text-gray-600">Оптимизация достигает значительного сокращения времени доставки</p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Trophy className="w-8 h-8 text-yellow-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-800">Качество кода</h4>
                </div>
                <p className="text-gray-600">Высокие стандарты разработки, полная документация</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Финальное сообщение */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 text-white text-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-4">🎉 Проект успешно завершен!</h3>
              <p className="text-xl text-green-100 mb-6">
                Алгоритм готов к внедрению в реальную логистическую систему OZON
              </p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">200</div>
                  <div className="text-green-100">курьеров оптимизировано</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">12ч</div>
                  <div className="text-green-100">максимальная смена</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">VRP</div>
                  <div className="text-green-100">задача решена</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HackathonResults
