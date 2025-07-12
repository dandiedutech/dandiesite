import React from 'react';
import { Github, Linkedin, Instagram, Mail, MessageCircle, Heart } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: "https://github.com/dandiedutech", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/dandisubhani", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/dandisubhani_", label: "Instagram" },
    { icon: Mail, href: "mailto:dandiedutech@gmail.com", label: "Email" },
    { icon: MessageCircle, href: "https://wa.me/6289636035164", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Logo and Name */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <span className="text-xl font-bold text-white">ADS</span>
              </div>
              <div className="text-2xl font-bold">Ahmad Dandi Subhani</div>
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              Informatic Engineering Student & IT Specialist passionate about creating digital solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Quick Contact */}
          <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
            <a
              href="mailto:dandiedutech@gmail.com"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email Me</span>
            </a>
            
            <a
              href="https://wa.me/6289636035164"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-green-600 hover:bg-green-700 text-white transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Ahmad Dandi Subhani. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>using React & TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;