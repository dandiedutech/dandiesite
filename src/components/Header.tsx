import React from 'react';
import { Moon, Sun, Menu, X, Globe, Code } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'projects', label: t('projects') },
    { id: 'skills', label: t('skills') },
    { id: 'experience', label: t('experience') },
    { id: 'contact', label: t('contact') }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/95 dark:bg-gray-900/95 border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 shadow-2xl shadow-gray-900/10 dark:shadow-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              ADS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2.5 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 backdrop-blur-sm'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-1 border border-gray-200/50 dark:border-gray-700/50">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-700/50'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('id')}
                className={`px-3 py-1.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  language === 'id'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-700/50'
                }`}
              >
                ID
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-2xl bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
            >
              {theme === 'light' ?
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" /> :
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              }
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-2xl bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {isMenuOpen ?
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" /> :
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 sm:mx-6">
            <nav className="p-6 rounded-3xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-gray-900/20 dark:shadow-white/10">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 shadow-lg shadow-blue-500/25'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;