import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

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
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@dandisubhani_",
      link: "https://instagram.com/dandisubhani_",
      gradient: "from-pink-500 to-rose-500"
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

  return (
    <section id="contact" className="pt-24 sm:pt-32 pb-20 sm:pb-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-800 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400/15 to-emerald-400/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-24 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-600 dark:text-purple-400 text-sm sm:text-base font-semibold backdrop-blur-sm mb-6 border border-purple-200/50 dark:border-purple-700/50 shadow-lg">
            <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            {t('contactLabel')}
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 dark:from-white dark:via-purple-200 dark:to-blue-200 bg-clip-text text-transparent">
              {t('getInTouchTitle')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {t('contactDesc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <div className="text-center lg:text-left mb-8 sm:mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t('contactInfo')}
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto lg:mx-0 rounded-full"></div>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative p-6 sm:p-8 rounded-3xl sm:rounded-[2rem] bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-1">
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient}/5 rounded-3xl sm:rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 flex items-center">
                      <div className={`p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${info.gradient} mr-6 sm:mr-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                        <info.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg sm:text-xl lg:text-2xl">{info.label}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 font-semibold text-base sm:text-lg group-hover:underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-700 dark:text-gray-300 font-semibold text-base sm:text-lg">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up delay-200">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[2rem] bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl sm:rounded-[2rem] opacity-50"></div>
              
              <div className="relative z-10">
                <div className="text-center lg:text-left mb-8 sm:mb-12">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('sendMessage')}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto lg:mx-0 rounded-full"></div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="group">
                    <label className="block text-gray-900 dark:text-white font-bold mb-4 text-base sm:text-lg">
                      {t('yourName')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 border-2 border-gray-200/50 dark:border-gray-600/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-base sm:text-lg font-medium shadow-inner group-hover:shadow-lg"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-gray-900 dark:text-white font-bold mb-4 text-base sm:text-lg">
                      {t('emailAddress')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 border-2 border-gray-200/50 dark:border-gray-600/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-base sm:text-lg font-medium shadow-inner group-hover:shadow-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-gray-900 dark:text-white font-bold mb-4 text-base sm:text-lg">
                      {t('message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 border-2 border-gray-200/50 dark:border-gray-600/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none text-base sm:text-lg font-medium shadow-inner group-hover:shadow-lg"
                      placeholder="Write your message here..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center space-x-4 px-8 py-5 sm:py-6 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white rounded-2xl sm:rounded-3xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl shadow-xl"
                  >
                    <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    <span>{t('sendWhatsApp')}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;