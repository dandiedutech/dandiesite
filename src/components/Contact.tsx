import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Send, MessageCircle, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dandiedutech@gmail.com",
      link: "mailto:dandiedutech@gmail.com",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "089636035164",
      link: "https://wa.me/6289636035164",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jakarta Timur, Indonesia",
      link: "",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "dandisubhani",
      link: "https://linkedin.com/in/dandisubhani",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@dandisubhani_",
      link: "https://instagram.com/dandisubhani_",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@dandiedutech",
      link: "https://github.com/dandiedutech",
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Ahmad! I'm ${formData.name}\n\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/6289636035164?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    <section id="contact" className="py-12 md:py-20 pb-20 md:pb-32 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 md:w-80 md:h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200/50 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 mb-8 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Send className="w-5 h-5" />
            <span className="text-sm font-semibold">{t('contactLabel')}</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('getInTouchTitle')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
            {t('contactDesc')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
              {t('contactInfo')}
            </h3>
            
            <motion.div 
              className="space-y-4 md:space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white/80 dark:bg-gray-800/80 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-lg"
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center gap-3 md:gap-5">
                    <motion.div 
                      className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${info.gradient} shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <info.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1 md:mb-2 text-base md:text-lg">{info.label}</h4>
                      {info.link ? (
                        <motion.a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-semibold text-sm md:text-lg break-all"
                        >
                          {info.value}
                        </motion.a>
                      ) : (
                        <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm md:text-lg">{info.value}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white/80 dark:bg-gray-800/80 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <motion.div 
                className="p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                {t('sendMessage')}
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-gray-900 dark:text-white font-semibold mb-2 md:mb-3 text-base md:text-lg">
                  {t('yourName')}
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 md:p-4 rounded-lg md:rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-medium text-sm md:text-base"
                  placeholder="Enter your name"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-gray-900 dark:text-white font-semibold mb-2 md:mb-3 text-base md:text-lg">
                  {t('emailAddress')}
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 md:p-4 rounded-lg md:rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-medium text-sm md:text-base"
                  placeholder="Enter your email"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-gray-900 dark:text-white font-semibold mb-2 md:mb-3 text-base md:text-lg">
                  {t('message')}
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 md:p-4 rounded-lg md:rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none font-medium text-sm md:text-base"
                  placeholder="Write your message here..."
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-3 md:py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg md:rounded-xl font-semibold transition-all duration-300 shadow-lg text-sm md:text-base"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                <span>{t('sendWhatsApp')}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;