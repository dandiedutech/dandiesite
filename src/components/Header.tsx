import React from 'react';
import { Moon, Sun, Code, Home, User, Briefcase, Award, Mail } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: t('home'), icon: Home },
    { id: 'projects', label: t('projects'), icon: Code },
    { id: 'skills', label: t('skills'), icon: Award },
    { id: 'experience', label: t('experience'), icon: Briefcase },
    { id: 'contact', label: t('contact'), icon: Mail }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Animation */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <Code className="w-5 h-5 text-white" />
              </motion.div>
              <motion.div 
                className="text-xl font-bold text-gray-900 dark:text-white"
                whileHover={{ 
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                ADS
              </motion.div>
            </motion.div>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <motion.button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                    language === 'en'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  EN
                </motion.button>
                <motion.button
                  onClick={() => setLanguage('id')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                    language === 'id'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ID
                </motion.button>
              </div>

              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'light' ?
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" /> :
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                }
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Top Bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-3">
              <motion.div 
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Code className="w-4 h-4 text-white" />
              </motion.div>
              <div className="text-lg font-bold text-gray-900 dark:text-white truncate">
                ADS
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-all duration-200 ${
                    language === 'en'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('id')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-all duration-200 ${
                    language === 'id'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  ID
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                {theme === 'light' ?
                  <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" /> :
                  <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                }
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center space-y-1 transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={activeSection === item.id ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="w-5 h-5" />
              </motion.div>
              <span className="text-xs font-medium">{item.label}</span>
              {activeSection === item.id && (
                <motion.div 
                  className="w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
                  layoutId="activeIndicator"
                />
              )}
            </motion.button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;