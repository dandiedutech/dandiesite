import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Download, Code, ArrowRight, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 md:pt-16 pb-20 md:pb-0">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Content */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for work</span>
            </div>

            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Ahmad Dandi
                <br />
                <span className="text-blue-600 dark:text-blue-400">Subhani</span>
              </h1>
              
              <div className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-400">
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
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                  <div className="font-medium text-gray-900 dark:text-white">Jakarta, Indonesia</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                  <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Experience</div>
                  <div className="font-medium text-gray-900 dark:text-white">3+ Years</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('heroSubtitle')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="/dandi-cv.pdf"
                download="Ahmad_Dandi_Subhani_CV.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 w-full sm:w-auto justify-center"
              >
                <Download className="w-5 h-5" />
                <span>{t('downloadCV')}</span>
              </a>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium border border-gray-300 dark:border-gray-600 transition-colors duration-200 w-full sm:w-auto justify-center"
              >
                <span>{t('getInTouch')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Tech Stack */}
            <div className="pt-8">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tech Stack</div>
              <div className="flex flex-wrap justify-center gap-3">
                {['React', 'Node.js', 'PostgreSQL', 'JavaScript', 'HTML/CSS', 'Git'].map((tech) => (
                  <div key={tech} className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-gray-700">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;