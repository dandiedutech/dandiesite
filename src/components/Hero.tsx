import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Download, Code, Cpu, Database, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/60 dark:from-gray-900 dark:via-slate-900/95 dark:to-indigo-950/40">
          {/* Animated code symbols */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
            <div className="absolute top-[10%] left-[5%] text-4xl md:text-6xl text-blue-500 rotate-12 animate-pulse">{'<>'}</div>
            <div className="absolute top-[20%] right-[8%] text-3xl md:text-4xl text-purple-500 -rotate-12 animate-pulse delay-500">{'{ }'}</div>
            <div className="absolute bottom-[25%] left-[10%] text-4xl md:text-5xl text-cyan-500 rotate-45 animate-pulse delay-1000">{'</>'}</div>
            <div className="absolute bottom-[15%] right-[5%] text-2xl md:text-3xl text-pink-500 -rotate-45 animate-pulse delay-1500">{'[ ]'}</div>
            <div className="absolute top-[50%] left-[15%] text-3xl md:text-4xl text-emerald-500 rotate-90 animate-pulse delay-2000">{'()'}</div>
            <div className="absolute top-[70%] right-[20%] text-2xl md:text-3xl text-orange-500 -rotate-90 animate-pulse delay-2500">{'#'}</div>
          </div>
        </div>
        
        {/* Enhanced floating orbs */}
        <div className="absolute top-[15%] left-[10%] w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[20%] right-[15%] w-56 h-56 md:w-80 md:h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-[40%] right-[5%] w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[40%] left-[5%] w-40 h-40 md:w-56 md:h-56 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-float delay-2000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:48px_48px] md:bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Content section - Mobile first, then desktop */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 md:space-y-8 lg:space-y-10 animate-fade-in-up text-center lg:text-left order-2 lg:order-1">
            
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/30 dark:border-blue-800/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Welcome to my portfolio</span>
            </div>

            {/* Main heading */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block mb-2">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                    Ahmad Dandi
                  </span>
                </span>
                <span className="block">
                  <TypeAnimation
                    sequence={['Subhani', 5000]}
                    wrapper="span"
                    speed={50}
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 dark:from-purple-400 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent"
                    repeat={Infinity}
                  />
                </span>
              </h1>
              
              {/* Animated underline */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-24 md:w-32 lg:w-40 h-1 md:h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Role badge with enhanced design */}
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                <Code className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-gray-900 dark:text-white font-semibold text-sm md:text-base lg:text-lg">
                <TypeAnimation
                  sequence={[
                    'Informatic Engineering Student', 2500,
                    'IT Specialist', 2500,
                    'Web Developer', 2500,
                    'Freelancer', 2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </div>

            {/* Description with better mobile layout */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="p-6 md:p-8 rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                  {t('heroSubtitle')}
                </p>
              </div>
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="/dandi-cv.pdf"
                download="Ahmad_Dandi_Subhani_CV.pdf"
                className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-2xl font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Download className="w-5 h-5 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">{t('downloadCV')}</span>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </a>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-2xl font-semibold text-sm md:text-base lg:text-lg backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>{t('getInTouch')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Enhanced Photo section */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-center animate-fade-in-up order-1 lg:order-2">
            <div className="relative group">
              {/* Enhanced glow effect */}
              <div className="absolute -inset-6 md:-inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[2rem] md:rounded-[3rem] blur-2xl md:blur-3xl group-hover:blur-3xl md:group-hover:blur-[50px] transition-all duration-700 animate-pulse"></div>
              
              {/* Secondary glow */}
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-cyan-400/15 via-indigo-400/15 to-purple-400/15 rounded-[1.5rem] md:rounded-[2.5rem] blur-xl md:blur-2xl group-hover:blur-2xl md:group-hover:blur-3xl transition-all duration-500"></div>
              
              <div className="relative">
                {/* Main image container */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-3xl md:rounded-[2.5rem] overflow-hidden border-4 border-white/30 dark:border-gray-800/30 shadow-2xl backdrop-blur-sm group-hover:border-white/50 dark:group-hover:border-gray-700/50 transition-all duration-500">
                  <img
                    src="https://files.catbox.moe/i4vpso.jpg"
                    alt="Ahmad Dandi Subhani"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-500"></div>
                </div>
                
                {/* Enhanced floating icons */}
                <div className="absolute -top-4 -right-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl animate-bounce delay-300 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Cpu className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl animate-pulse flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Database className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                
                {/* Additional floating element */}
                <div className="absolute -top-2 -left-6 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl animate-bounce delay-700 flex items-center justify-center shadow-lg opacity-80">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;