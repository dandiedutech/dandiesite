import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight, MapPin, Calendar, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 md:pt-16 pb-20 md:pb-0 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Main Content */}
          <div className="space-y-8 md:space-y-10">

            {/* Name and Title */}
            <div className="space-y-6">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
                  Ahmad Dandi Subhani
                </span>
              </motion.h1>
              
              {/* Available for work badge - moved here */}
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200/50 dark:border-green-800/50 text-green-700 dark:text-green-300 backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity 
                  }}
                />
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Available for work</span>
              </motion.div>
              
              <motion.div 
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-600 dark:text-gray-400 h-16 flex items-center justify-center"
                variants={itemVariants}
              >
                <TypeAnimation
                  sequence={[
                    'Informatic Engineering Student', 3000,
                    'IT Specialist', 3000,
                    'Web Developer', 3000,
                    'Freelancer', 3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
            </div>

            {/* Info Cards */}
            <motion.div 
              className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                variants={floatingVariants}
                animate="animate"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Location</div>
                  <div className="font-bold text-gray-900 dark:text-white text-lg">Jakarta, Indonesia</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '2s' }}
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Experience</div>
                  <div className="font-bold text-gray-900 dark:text-white text-lg">3+ Years</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div 
              className="max-w-4xl mx-auto"
              variants={itemVariants}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                {t('heroSubtitle')}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6"
              variants={itemVariants}
            >
              <motion.a
                href="/dandi-cv.pdf"
                download="Ahmad_Dandi_Subhani_CV.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>{t('downloadCV')}</span>
              </motion.a>
              
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-2xl font-semibold border border-gray-300/50 dark:border-gray-600/50 transition-all duration-300 w-full sm:w-auto justify-center backdrop-blur-sm shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('getInTouch')}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Tech Stack */}
            <motion.div 
              className="pt-12"
              variants={itemVariants}
            >
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">Tech Stack</div>
              <div className="flex flex-wrap justify-center gap-4">
                {['React', 'Node.js', 'PostgreSQL', 'JavaScript', 'HTML/CSS', 'Git'].map((tech, index) => (
                  <motion.div 
                    key={tech} 
                    className="px-6 py-3 rounded-xl bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 font-semibold border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-lg"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;