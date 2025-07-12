import React from 'react';
import { Code, Users, Wrench, Award } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const technicalSkills = [
    { 
      name: "HTML", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "CSS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "from-blue-500 to-blue-600"
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "from-yellow-400 to-yellow-500"
    },
    { 
      name: "React.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-cyan-400 to-blue-500"
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "from-green-500 to-green-600"
    },
    { 
      name: "PostgreSQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "from-blue-600 to-indigo-600"
    },
    { 
      name: "MySQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "from-blue-500 to-orange-500"
    },
    { 
      name: "Git", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "from-red-500 to-orange-500"
    }
  ];

  const softSkills = [
    { name: t('timeManagement'), icon: "⏰", color: "from-blue-500 to-purple-500" },
    { name: t('quickAdaptation'), icon: "🚀", color: "from-green-500 to-teal-500" },
    { name: t('criticalThinking'), icon: "🧠", color: "from-purple-500 to-pink-500" },
    { name: t('communication'), icon: "🤝", color: "from-orange-500 to-red-500" }
  ];

  const systemSkills = [
    { name: "OS Installation", icon: "💻", color: "from-gray-600 to-gray-700" },
    { name: "Hardware Maintenance", icon: "🔧", color: "from-blue-600 to-indigo-600" },
    { name: "Troubleshooting", icon: "🔍", color: "from-green-600 to-emerald-600" },
    { name: "Windows & Linux", icon: "🖥️", color: "from-purple-600 to-violet-600" },
    { name: "Cloud Server", icon: "☁️", color: "from-cyan-500 to-blue-500" },
    { name: "MS Office", icon: "📊", color: "from-orange-500 to-amber-500" }
  ];

  const certifications = [
    { name: "Computer Operator Certification", icon: "🏆", year: "2023" },
    { name: "Multimedia Competency P1 BNSP", icon: "🎨", year: "2023" },
    { name: "Multimedia Competency P2 BSrE", icon: "🎬", year: "2023" },
    { name: "JavaScript Programming Dicoding", icon: "💻", year: "2024" },
    { name: "Backend Development MySkill", icon: "⚙️", year: "2024" },
    { name: "Java Complete Course Udemy", icon: "☕", year: "2024" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 pb-24 md:pb-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-40 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200/50 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 mb-8 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-5 h-5" />
            <span className="text-sm font-semibold">{t('expertiseLabel')}</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('skillsTitle')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
            {t('skillsDesc')}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Technical Skills */}
          <motion.div 
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{t('technicalSkills')}</h3>
            </div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="group flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-700/50 dark:to-gray-800/50 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white text-center text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div 
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{t('softSkills')}</h3>
            </div>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-700/50 dark:to-gray-800/50 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg text-2xl`}>
                    {skill.icon}
                  </div>
                  <span className="text-gray-900 dark:text-white font-semibold text-lg">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* System & Tools */}
          <motion.div 
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{t('systemTools')}</h3>
            </div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {systemSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 text-center font-semibold text-gray-900 dark:text-white border border-orange-200/50 dark:border-orange-800/50 hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg mb-3 text-2xl`}>
                    {skill.icon}
                  </div>
                  <span className="text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{t('certifications')}</h3>
            </div>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 text-gray-900 dark:text-white font-semibold border border-purple-200/50 dark:border-purple-800/50 hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg text-2xl">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold">{cert.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{cert.year}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;