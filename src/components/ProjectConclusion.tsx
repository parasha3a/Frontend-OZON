import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Trophy, Briefcase } from 'lucide-react'

const ProjectConclusion: React.FC = () => {
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

  const conclusionSections = [
    {
      title: "Соответствие целям",
      content: "Проект соответствует целям хакатона E-CUP 2025. Решена актуальная бизнес-задача Ozon. Задача касается городской логистики.",
      icon: CheckCircle,
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Ключевые результаты", 
      content: "Реализовано алгоритмическое решение. Создана воспроизводимая инфраструктура. Подготовлена качественная документация. Показан высокий уровень компетенций.",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50"
    },
    {
      title: "Область применения",
      content: "Решение применимо в инфраструктурном ML. Автоматизация логистических процессов. Оптимизация работы курьерских служб.",
      icon: Briefcase,
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50"
    }
  ]

  return (
    <section id="project-conclusion" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" ref={ref}>
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
            Заключение проекта
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {conclusionSections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${section.bgColor} rounded-3xl p-8 border-2 border-white shadow-xl hover:shadow-2xl transition-all duration-300`}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${section.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {section.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Финальная секция достижений */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl p-12 text-white text-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-8">🏆 Достижения проекта</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">✅</div>
                  <div className="text-lg font-semibold mb-1">Цели достигнуты</div>
                  <div className="text-purple-100 text-sm">Полное соответствие требованиям</div>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">🚀</div>
                  <div className="text-lg font-semibold mb-1">Готово к внедрению</div>
                  <div className="text-purple-100 text-sm">Production-ready решение</div>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">📊</div>
                  <div className="text-lg font-semibold mb-1">Высокое качество</div>
                  <div className="text-purple-100 text-sm">Документация и метрики</div>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">💼</div>
                  <div className="text-lg font-semibold mb-1">Коммерческая ценность</div>
                  <div className="text-purple-100 text-sm">Реальная бизнес-задача</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectConclusion
