import React from 'react';
import { ExternalLink, Code, ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Kepo-in Anonymous Platform",
      descriptionKey: "kepoInDesc",
      url: "https://kepo-in.vercel.app",
      image: "https://files.catbox.moe/g2l6h2.png",
      tech: ["React", "Anonymous", "Messaging"],
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "UnindraFess",
      descriptionKey: "unindraFessDesc",
      url: "https://unindrafess.vercel.app",
      image: "https://files.catbox.moe/xgdwn9.png",
      tech: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Maba Validator",
      descriptionKey: "mabaValidatorDesc",
      url: "https://maba2025.vercel.app",
      image: "https://files.catbox.moe/lqu5xc.png",
      tech: ["React", "Database", "Validation"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Unindra AI Chatbot",
      descriptionKey: "unindraAiDesc",
      url: "https://unindra.info",
      image: "https://files.catbox.moe/86pabc.png",
      tech: ["AI", "Chatbot", "JavaScript"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Belajar Bareng",
      descriptionKey: "belajarBarengDesc",
      url: "https://belajarbareng.vercel.app",
      image: "https://files.catbox.moe/lr7coh.png",
      tech: ["React", "Education", "Collaboration"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "RajaSusu Invoice Generator",
      descriptionKey: "rajaSusuDesc",
      url: "https://invoge.vercel.app",
      image: "https://files.catbox.moe/ih4u26.png",
      tech: ["React", "PDF", "Business"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Hadein! Image Enhancer",
      descriptionKey: "hadeinDesc",
      url: "https://hadein.vercel.app",
      tech: ["AI", "Image Processing", "React"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "ByJoyFactory",
      descriptionKey: "byJoyFactoryDesc",
      url: "https://byjoyfactory.vercel.app",
      tech: ["React", "Web Development", "UI/UX"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "RESTful API",
      descriptionKey: "apiDesc",
      url: "https://apiahmad.vercel.app",
      tech: ["Node.js", "REST API", "Backend"],
      gradient: "from-teal-500 to-green-500"
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 pb-24 md:pb-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 12, 
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
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 mb-8 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="w-5 h-5" />
            <span className="text-sm font-semibold">{t('portfolioLabel')}</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('featuredProjects')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
            {t('projectsDesc')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white/80 dark:bg-gray-800/80 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden">
                {project.image ? (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                ) : (
                  <div className={`h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      animate={{
                        background: [
                          "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <Code className="w-16 h-16 text-white relative z-10" />
                  </div>
                )}
                <motion.div 
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                />
                <motion.div 
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-medium">
                  {t(project.descriptionKey)}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold border border-gray-200 dark:border-gray-600"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(59, 130, 246, 0.1)"
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-all duration-200 group/link"
                  whileHover={{ x: 5 }}
                >
                  <span>{t('visitProject')}</span>
                  <motion.div
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;