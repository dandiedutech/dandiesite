import React from 'react';
import { Github, Linkedin, Instagram, Mail, MessageCircle, Heart, Sparkles } from 'lucide-react';
// useLanguage hook tidak disertakan dalam contoh ini agar tetap sederhana
// import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const FooterModernAurora: React.FC = () => {
  // const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: "https://github.com/dandiedutech", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/dandisubhani", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/dandisubhani_", label: "Instagram" },
    { icon: Mail, href: "mailto:dandiedutech@gmail.com", label: "Email" },
    { icon: MessageCircle, href: "https://wa.me/6289636035164", label: "WhatsApp" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-black text-white py-16 md:py-20 relative overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-400" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-5xl">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Logo and Name */}
          <motion.div
            className="mb-10"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center gap-4 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center shadow-lg border border-white/10"
                whileHover={{ rotate: -5 }}
              >
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">
                  ADS
                </span>
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-100">
                Ahmad Dandi Subhani
              </h2>
            </motion.div>
            <motion.p
              className="text-neutral-400 max-w-md mx-auto text-base"
              variants={itemVariants}
            >
              Mahasiswa Teknik Informatika & Spesialis IT dengan semangat untuk menciptakan solusi digital.
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4 mb-10"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
          
          {/* Copyright */}
          <motion.div
            className="pt-8 border-t border-white/10 text-sm"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-neutral-500">
                &copy; {new Date().getFullYear()} Ahmad Dandi Subhani. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-neutral-500">
                <span>Dibuat dengan</span>
                <Heart className="w-4 h-4 text-cyan-500" />
                <span>dan</span>
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>di Indonesia</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterModernAurora;