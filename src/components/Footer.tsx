import React from 'react';
import { Github, Linkedin, Instagram, Mail, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: "https://github.com/dandiedutech", label: "GitHub", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "https://linkedin.com/in/dandisubhani", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Instagram, href: "https://instagram.com/dandisubhani_", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Mail, href: "mailto:dandiedutech@gmail.com", label: "Email", color: "hover:text-red-400" },
    { icon: MessageCircle, href: "https://wa.me/6289636035164", label: "WhatsApp", color: "hover:text-green-400" },
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
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 dark:from-black dark:via-blue-950/30 dark:to-purple-950/30 text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 md:w-64 md:h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-56 h-56 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-6xl">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Logo and Name */}
          <motion.div 
            className="mb-8 md:mb-12"
            variants={itemVariants}
          >
            <motion.div 
              className="inline-flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 3 }}
              >
                <span className="text-lg md:text-2xl font-bold text-white">ADS</span>
              </motion.div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ahmad Dandi Subhani
              </div>
            </motion.div>
            <motion.p 
              className="text-gray-300 max-w-md mx-auto text-base md:text-lg font-medium px-4"
              variants={itemVariants}
            >
              Informatic Engineering Student & IT Specialist passionate about creating digital solutions.
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-4 md:gap-6 mb-8 md:mb-12"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="w-5 h-5 md:w-6 md:h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Contact */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-lg mx-auto mb-8 md:mb-12 px-4"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:dandiedutech@gmail.com"
              className="flex items-center justify-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transition-all duration-300 font-semibold shadow-lg text-sm md:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              <span>Email Me</span>
            </motion.a>
            
            <motion.a
              href="https://wa.me/6289636035164"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white transition-all duration-300 font-semibold shadow-lg text-sm md:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              <span>WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="pt-6 md:pt-8 border-t border-white/20"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 px-4">
              <motion.p 
                className="text-gray-400 font-medium text-sm md:text-base text-center md:text-left"
              >
                &copy; {new Date().getFullYear()} Ahmad Dandi Subhani. All rights reserved.
              </motion.p>
              <motion.div 
                className="flex items-center gap-2 md:gap-3 text-gray-400 font-medium text-sm md:text-base text-center"
              >
                <span>Made with</span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                </motion.div>
                <span>using React & TypeScript</span>
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;