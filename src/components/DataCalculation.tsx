import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, AlertTriangle, Zap, Database, Clock, Cpu, TrendingUp, Shield } from 'lucide-react'

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

  const techSpecs = [
    {
      icon: Database,
      title: "400M записей",
      subtitle: "Матрица времени",
      description: "Предрассчитанная матрица расстояний между всеми точками доставки",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Cpu,
      title: "GPU-ускорение",
      subtitle: "NVIDIA cuOpt",
      description: "Использование современных алгоритмов оптимизации на GPU для реального времени",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Временные окна",
      subtitle: "Гибкие ограничения",
      description: "Поддержка сложных временных ограничений и сервис-таймов",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Масштабируемость",
      subtitle: "До 1000+ точек",
      description: "Решение задач любой сложности от локальных до федеральных маршрутов",
      color: "from-orange-500 to-red-600"
    }
  ]

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
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            🚀 Данные для расчета
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Современное решение на базе <span className="font-bold text-blue-600">NVIDIA cuOpt</span> и 
            <span className="font-bold text-green-600"> Google OR-Tools</span> для промышленной оптимизации маршрутов
          </motion.p>
        </motion.div>

        {/* Технические спецификации */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {techSpecs.map((spec, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center mb-4`}>
                <spec.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-1">{spec.title}</h4>
              <p className="text-sm font-medium text-gray-500 mb-2">{spec.subtitle}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{spec.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Входные данные и ограничения */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mr-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Входные данные</h3>
                <p className="text-gray-600">Промышленные объемы</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-blue-800">Матрица времени перемещений</h4>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">400M записей</span>
                </div>
                <p className="text-blue-700 mb-4">
                  Предрассчитанная матрица содержит время перемещения между всеми точками доставки. 
                  Учитывает реальную дорожную ситуацию и персональные сервис-таймы.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">200</div>
                    <div className="text-sm text-blue-600">курьеров</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">20,160</div>
                    <div className="text-sm text-blue-600">заказов</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-gray-800 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-600" />
                  Гарантии качества данных
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Реальные временные матрицы от OZON
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Учет микрополигонов и зон доставки
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Персональные сервис-таймы курьеров
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Алгоритмические возможности */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mr-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Алгоритмические решения</h3>
                <p className="text-gray-600">Мирового уровня</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-green-800">Гибридная оптимизация</h4>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">GPU + CPU</span>
                </div>
                <p className="text-green-700 mb-4">
                  Сочетание NVIDIA cuOpt для GPU-ускорения и Google OR-Tools для комплексных ограничений. 
                  Решение задач реального времени для больших объемов.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">&lt;5мин</div>
                    <div className="text-sm text-green-600">время решения</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">1000+</div>
                    <div className="text-sm text-green-600">точек</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-gray-800 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                  Продвинутые возможности
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Гетерогенный автопарк (разные типы ТС)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Динамические временные окна
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    Мультиполигонные маршруты
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Неограниченное количество заказов
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Преимущества для бизнеса */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-blue-600/90 to-indigo-700/90"></div>
            <div className="relative z-10">
              <motion.div variants={itemVariants} className="text-center mb-8">
                <h4 className="text-3xl font-bold mb-4">💼 Ценность для бизнеса</h4>
                <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                  Решение мирового уровня, превосходящее промышленные стандарты
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div variants={itemVariants} className="text-center">
                  <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-4xl font-bold mb-2">24x</div>
                    <div className="text-purple-100 font-medium">быстрее конкурентов</div>
                    <div className="text-sm text-purple-200 mt-2">7.5 минут вместо 3 часов</div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="text-center">
                  <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-4xl font-bold mb-2">50%</div>
                    <div className="text-purple-100 font-medium">экономия ресурсов</div>
                    <div className="text-sm text-purple-200 mt-2">16GB вместо 32GB RAM</div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="text-center">
                  <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-4xl font-bold mb-2">99.75%</div>
                    <div className="text-purple-100 font-medium">оптимизация данных</div>
                    <div className="text-sm text-purple-200 mt-2">сжатие графа 400M→1M</div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DataCalculation
