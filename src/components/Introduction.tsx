import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Truck, Clock, Users } from 'lucide-react'

const Introduction: React.FC = () => {
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

  const features = [
    {
      icon: Target,
      title: "Оптимизация маршрутов",
      description: "Алгоритм для эффективного планирования доставки"
    },
    {
      icon: Users,
      title: "200 курьеров",
      description: "Масштабируемое решение для крупной логистической сети"
    },
    {
      icon: Truck,
      title: "Микрополигоны",
      description: "Учет территориальных ограничений и сервис-таймов"
    },
    {
      icon: Clock,
      title: "12-часовое окно",
      description: "Ограничения по времени работы курьеров"
    }
  ]

  return (
    <section id="introduction" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Введение в проект
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Хакатон E-CUP 2025 ставит задачу разработки масштабируемого 
              алгоритма построения маршрутов. Требуется оптимизировать логистику 
              для <span className="font-bold text-blue-600">200 курьеров Ozon</span>. 
              Алгоритм должен учитывать ограничения по времени работы и 
              индивидуальные сервис-таймы. Цель — минимизация суммарного времени 
              работы курьеров при строгих ограничениях.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Introduction
