import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, AlertTriangle } from 'lucide-react'

const DataCalculation: React.FC = () => {
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

  return (
    <section id="data-calculation" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" ref={ref}>
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
            Данные для расчета
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Специфика заказов */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mr-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Специфика заказов</h3>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Используется предрассчитанная матрица времени. Она 
                содержит около <span className="font-bold text-blue-600">400 млн записей</span>. 
                Это данные для расчета времени перемещения между точками. 
                Персональное время обслуживания учитывается для разных типов точек.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border-l-4 border-blue-500">
                <div className="flex items-center text-blue-800">
                  <span className="font-semibold">📊 Объем данных:</span>
                </div>
                <p className="text-blue-700 mt-1">400 млн записей времени перемещения</p>
              </div>
            </div>
          </motion.div>

          {/* Ограничения */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mr-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Ограничения</h3>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Отсутствуют приоритетные заказы. Временные окна не 
                учитываются. Нет ограничений по количеству заказов в рейсе. 
                Курьер может обслуживать заказы из нескольких 
                микрополигонов за один маршрут.
              </p>
              
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border-l-4 border-orange-500">
                  <div className="flex items-center text-orange-800">
                    <span className="font-semibold">⚠️ Особенности:</span>
                  </div>
                  <ul className="text-orange-700 mt-2 space-y-1">
                    <li>• Нет приоритетных заказов</li>
                    <li>• Отсутствуют временные окна</li>
                    <li>• Неограниченное количество заказов</li>
                    <li>• Мультиполигонные маршруты</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Дополнительная информация */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-8 text-white">
            <motion.div variants={itemVariants} className="text-center">
              <h4 className="text-2xl font-bold mb-4">Технические детали</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">400M</div>
                  <div className="text-purple-100">записей в матрице</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">∞</div>
                  <div className="text-purple-100">заказов в рейсе</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">N</div>
                  <div className="text-purple-100">микрополигонов</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DataCalculation
