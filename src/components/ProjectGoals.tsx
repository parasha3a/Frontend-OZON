import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Settings, Clock, Database } from 'lucide-react'

const ProjectGoals: React.FC = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.3, 
    triggerOnce: true 
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
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

  const requirementVariants = {
    hidden: { x: 100, opacity: 0 },
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

  return (
    <section id="goals" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100" ref={ref}>
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
            Цели проекта
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Задачи */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Задачи</h3>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Разработать алгоритм для VRP с особенностями городской 
                    логистики Ozon. Учесть микрополигоны, индивидуальные 
                    сервис-времена. Максимальное время работы курьера — 12 
                    часов (8:00–20:00). Обеспечить воспроизводимость и 
                    документированность решения. Запуск в Docker-контейнере 
                    на 4 CPU и 32 GB RAM.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Требования */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={requirementVariants} className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Требования</h3>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Алгоритм должен решать задачу Vehicle Routing Problem 
                    (VRP). Особое внимание уделяется специфике городской 
                    логистики Ozon. Необходимо учитывать работу с 
                    микрополигонами. Индивидуальные сервис-времена для 
                    каждого курьера являются важным параметром. Максимальное 
                    время работы курьера ограничено 12 часами. 
                    Воспроизводимость и документированность — ключевые 
                    требования.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Технические характеристики */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-purple-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">Временные ограничения</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Рабочий день: 8:00 - 20:00</li>
                <li>• Максимум 12 часов на курьера</li>
                <li>• Индивидуальные сервис-времена</li>
                <li>• Учет времени между точками</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={requirementVariants}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-indigo-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">Технические требования</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Docker контейнеризация</li>
                <li>• 4 CPU + 32 GB RAM</li>
                <li>• Документированный код</li>
                <li>• Воспроизводимые результаты</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectGoals
