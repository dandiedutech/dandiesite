import React from 'react';
import { Github, Linkedin, Instagram, Mail, MessageCircle, ArrowRight } from 'lucide-react';
// Hapus import useLanguage jika tidak digunakan di sini, atau biarkan jika diperlukan.
// import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  // const { t } = useLanguage(); // Hapus atau sesuaikan jika perlu

  const socialLinks = [
    { icon: Github, href: "https://github.com/dandiedutech", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/dandisubhani", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/dandisubhani_", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-black text-slate-800 dark:text-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.02] bg-[bottom_1px_center]"></div>
        {/* Animated Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 leading-tight">
              {/* Gradient Text for Light and Dark Mode */}
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Mari Ciptakan Sesuatu yang Hebat
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed font-medium">
              Punya ide atau proyek? Saya selalu terbuka untuk diskusi dan kolaborasi. Jangan ragu untuk menghubungi saya.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              {/* Mail Button */}
              <a
                href="mailto:dandiedutech@gmail.com"
                className="group inline-flex items-center gap-x-3 bg-slate-900 text-white hover:bg-slate-800 dark:bg-gradient-to-r dark:from-blue-500 dark:via-purple-600 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:via-purple-700 dark:hover:to-cyan-600 font-bold px-8 py-4 sm:px-10 sm:py-5 rounded-2xl sm:rounded-3xl shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-3xl transform dark:hover:scale-105 transition-all duration-300 text-base sm:text-lg"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Hubungi Saya</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/6289636035164"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-x-3 bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-gradient-to-r dark:from-green-500 dark:to-emerald-600 dark:hover:from-green-600 dark:hover:to-emerald-700 dark:text-white font-bold px-8 py-4 sm:px-10 sm:py-5 rounded-2xl sm:rounded-3xl shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-3xl transform dark:hover:scale-105 transition-all duration-300 text-base sm:text-lg"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>WhatsApp</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-700/50 pt-12 sm:pt-16">
            <div className="flex justify-center space-x-6 sm:space-x-8 mb-8 sm:mb-12">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group p-3 sm:p-4 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 dark:border-slate-700/50 dark:hover:border-slate-600/50 dark:text-slate-400 dark:hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg dark:hover:shadow-xl dark:backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
                &copy; {new Date().getFullYear()} Ahmad Dandi Subhani. All rights reserved.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 mt-2">
                Built with ❤️ using React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;