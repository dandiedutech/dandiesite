import React from 'react';
import { ExternalLink, Code, Zap, ArrowUpRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Kepo-in Anonymous Platform",
      descriptionKey: "kepoInDesc",
      url: "https://kepo-in.vercel.app",
      image: "https://files.catbox.moe/g2l6h2.png",
      tech: ["React", "Anonymous", "Messaging"],
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "UnindraFess",
      descriptionKey: "unindraFessDesc",
      url: "https://unindrafess.vercel.app",
      image: "https://files.catbox.moe/xgdwn9.png",
      tech: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Maba Validator",
      descriptionKey: "mabaValidatorDesc",
      url: "https://maba2025.vercel.app",
      image: "https://files.catbox.moe/lqu5xc.png",
      tech: ["React", "Database", "Validation"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Unindra AI Chatbot",
      descriptionKey: "unindraAiDesc",
      url: "https://unindra.info",
      image: "https://files.catbox.moe/86pabc.png",
      tech: ["AI", "Chatbot", "JavaScript"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Belajar Bareng",
      descriptionKey: "belajarBarengDesc",
      url: "https://belajarbareng.vercel.app",
      image: "https://files.catbox.moe/lr7coh.png",
      tech: ["React", "Education", "Collaboration"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "RajaSusu Invoice Generator",
      descriptionKey: "rajaSusuDesc",
      url: "https://invoge.vercel.app",
      image: "https://files.catbox.moe/ih4u26.png",
      tech: ["React", "PDF", "Business"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Hadein! Image Enhancer",
      descriptionKey: "hadeinDesc",
      url: "https://hadein.vercel.app",
      tech: ["AI", "Image Processing", "React"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "ByJoyFactory",
      descriptionKey: "byJoyFactoryDesc",
      url: "https://byjoyfactory.vercel.app",
      tech: ["React", "Web Development", "UI/UX"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "RESTful API",
      descriptionKey: "apiDesc",
      url: "https://apiahmad.vercel.app",
      tech: ["Node.js", "REST API", "Backend"],
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="projects" className="pt-24 sm:pt-32 pb-20 sm:pb-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute top-20 sm:top-40 left-4 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-4 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-green-400/15 to-emerald-400/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-24 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 text-blue-600 dark:text-blue-400 text-sm sm:text-base font-semibold backdrop-blur-sm mb-6 border border-blue-200/50 dark:border-blue-700/50 shadow-lg">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            {t('portfolioLabel')}
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              {t('featuredProjects')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {t('projectsDesc')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative p-6 sm:p-8 rounded-3xl sm:rounded-[2rem] bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.05] hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}/5 rounded-3xl sm:rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Project Preview Image */}
                  <div className="h-48 sm:h-56 lg:h-64 rounded-2xl sm:rounded-3xl overflow-hidden mb-6 sm:mb-8 relative shadow-xl">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className={`h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10 text-center">
                          <Code className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-4 group-hover:animate-pulse" />
                          <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white mx-auto" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                      <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg font-medium">
                      {t(project.descriptionKey)}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full sm:w-auto space-x-3 px-6 py-4 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg group/button"
                    >
                      <span>{t('visitProject')}</span>
                      <ArrowUpRight className="w-5 h-5 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;