import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Database, Code, Settings } from 'lucide-react'

const Team: React.FC = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.2, 
    triggerOnce: true 
  })

  const teamMembers = [
    {
      role: 'ML Engineer',
      title: 'Специалист по машинному обучению',
      expertise: 'Graph Neural Networks & Reinforcement Learning',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      skills: ['PyTorch', 'GNN', 'RL', 'Optimization']
    },
    {
      role: 'Data Engineer',
      title: 'Инженер данных',
      expertise: 'Big Data Infrastructure & Memory Optimization',
      icon: Database,
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['Big Data', 'Memory Mapping', 'Performance', 'Architecture']
    },
    {
      role: 'Backend Engineer',
      title: 'Бэкенд разработчик',
      expertise: 'Production Deployment & API Development',
      icon: Code,
      gradient: 'from-green-500 to-emerald-500',
      skills: ['FastAPI', 'Python', 'REST', 'Microservices']
    },
    {
      role: 'DevOps Engineer',
      title: 'DevOps инженер',
      expertise: 'Container Orchestration & Performance Monitoring',
      icon: Settings,
      gradient: 'from-orange-500 to-red-500',
      skills: ['Docker', 'Kubernetes', 'Monitoring', 'CI/CD']
    }
  ]

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
    hidden: { y: 50, opacity: 0, rotateY: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section id="team" className="team" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants}>Команда разработки</motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="team-grid"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="team-member cursor-target"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="member-avatar"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              />

              <motion.h3 
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                {member.role}
              </motion.h3>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.7 }}
              >
                {member.title}
              </motion.p>

              <motion.p 
                className="member-role"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.9 }}
              >
                {member.expertise}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}

export default Team
