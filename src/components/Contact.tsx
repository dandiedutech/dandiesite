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
      color: "bg-red-500"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "089636035164",
      link: "https://wa.me/6289636035164",
      color: "bg-green-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jakarta Timur, Indonesia",
      link: "",
      color: "bg-blue-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "dandisubhani",
      link: "https://linkedin.com/in/dandisubhani",
      color: "bg-blue-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@dandisubhani_",
      link: "https://instagram.com/dandisubhani_",
      color: "bg-pink-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@dandiedutech",
      link: "https://github.com/dandiedutech",
      color: "bg-gray-600"
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
    <section id="contact" className="py-20 md:py-32 pb-32 md:pb-40 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 mb-6">
            <Send className="w-4 h-4" />
            <span className="text-sm font-medium">{t('contactLabel')}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('getInTouchTitle')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('contactDesc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {t('contactInfo')}
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${info.color}`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{info.label}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{info.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {t('sendMessage')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-900 dark:text-white font-medium mb-2">
                  {t('yourName')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-900 dark:text-white font-medium mb-2">
                  {t('emailAddress')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-900 dark:text-white font-medium mb-2">
                  {t('message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Write your message here..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors duration-200"
              >
                <Send className="w-5 h-5" />
                <span>{t('sendWhatsApp')}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;