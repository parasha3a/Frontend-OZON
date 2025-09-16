import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Target, Truck, Clock, Users, MapPin, Zap, Award, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react'

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

  const challengeStats = [
    {
      icon: Target,
      title: "E-CUP 2025",
      subtitle: "Хакатон мирового уровня",
      value: 2025,
      description: "Престижное соревнование по оптимизации",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "200",
      subtitle: "курьеров Ozon",
      value: 200,
      description: "Масштабируемое решение для крупной сети",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Truck,
      title: "20,160",
      subtitle: "заказов в день",
      value: 20160,
      description: "Промышленные объемы логистики",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "12",
      subtitle: "часов работы",
      value: 12,
      description: "Строгие временные ограничения",
      color: "from-orange-500 to-red-600"
    }
  ]

  const objectives = [
    {
      icon: MapPin,
      title: "Оптимизация маршрутов",
      description: "Алгоритм для эффективного планирования доставки с учетом микрополигонов и зон",
      features: ["Минимизация времени", "Учет пробок", "Зонирование"]
    },
    {
      icon: Zap,
      title: "Микрополигоны",
      description: "Учет территориальных ограничений и индивидуальных сервис-таймов курьеров",
      features: ["Зоны доставки", "Сервис-таймы", "Ограничения"]
    },
    {
      icon: Award,
      title: "Цель проекта",
      description: "Минимизация суммарного времени работы курьеров при строгих ограничениях",
      features: ["Оптимальные маршруты", "Экономия времени", "Высокая эффективность"]
    }
  ]

  return (
    <section id="introduction" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Заголовок и описание */}
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
            🚀 Введение в проект
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl border-l-4 border-purple-500"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Хакатон E-CUP 2025</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Престижное соревнование ставит задачу разработки масштабируемого 
                  алгоритма построения маршрутов. Требуется оптимизировать логистику 
                  для <span className="font-bold text-blue-600">200 курьеров Ozon</span>.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-200">
                  <p className="text-purple-800 font-medium">
                    🎯 <strong>Главная цель:</strong> Минимизация суммарного времени работы курьеров при строгих ограничениях
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Статистика вызова */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            📊 Масштаб задачи
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challengeStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-extrabold text-gray-800 mb-2">
                    {inView && (
                      <CountUp end={stat.value} duration={2.5} separator="," />
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">{stat.subtitle}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Цели и задачи */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            🎯 Цели проекта
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {objectives.map((obj, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mr-4">
                    <obj.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{obj.title}</h4>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{obj.description}</p>
                <div className="space-y-2">
                  {obj.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Flow Диаграмма */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90"></div>
          <div className="relative z-10">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h4 className="text-3xl font-bold mb-4">⚡ Процесс оптимизации</h4>
              <p className="text-xl text-purple-100">От данных к результату за 4 этапа</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Данные", desc: "400M записей" },
                { step: "2", title: "Алгоритм", desc: "VRP решение" },
                { step: "3", title: "Оптимизация", desc: "GPU + ML" },
                { step: "4", title: "Результат", desc: "Маршруты" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="text-center">
                  <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm mb-4">
                    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold">{item.step}</span>
                    </div>
                    <h5 className="text-lg font-bold mb-2">{item.title}</h5>
                    <p className="text-purple-100 text-sm">{item.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-white/60" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center mt-8">
              <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm inline-block">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">
                  {inView && <CountUp end={24} duration={3} />}x
                </div>
                <div className="text-purple-100">быстрее традиционных методов</div>
              </div>
            </motion.div>
          </div>
          
          {/* Декоративные элементы */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Introduction
