import React from 'react';
import { ExternalLink, Code, ArrowUpRight } from 'lucide-react';
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
      color: "bg-red-500"
    },
    {
      title: "UnindraFess",
      descriptionKey: "unindraFessDesc",
      url: "https://unindrafess.vercel.app",
      image: "https://files.catbox.moe/xgdwn9.png",
      tech: ["React", "Node.js", "PostgreSQL"],
      color: "bg-green-500"
    },
    {
      title: "Maba Validator",
      descriptionKey: "mabaValidatorDesc",
      url: "https://maba2025.vercel.app",
      image: "https://files.catbox.moe/lqu5xc.png",
      tech: ["React", "Database", "Validation"],
      color: "bg-yellow-500"
    },
    {
      title: "Unindra AI Chatbot",
      descriptionKey: "unindraAiDesc",
      url: "https://unindra.info",
      image: "https://files.catbox.moe/86pabc.png",
      tech: ["AI", "Chatbot", "JavaScript"],
      color: "bg-blue-500"
    },
    {
      title: "Belajar Bareng",
      descriptionKey: "belajarBarengDesc",
      url: "https://belajarbareng.vercel.app",
      image: "https://files.catbox.moe/lr7coh.png",
      tech: ["React", "Education", "Collaboration"],
      color: "bg-indigo-500"
    },
    {
      title: "RajaSusu Invoice Generator",
      descriptionKey: "rajaSusuDesc",
      url: "https://invoge.vercel.app",
      image: "https://files.catbox.moe/ih4u26.png",
      tech: ["React", "PDF", "Business"],
      color: "bg-orange-500"
    },
    {
      title: "Hadein! Image Enhancer",
      descriptionKey: "hadeinDesc",
      url: "https://hadein.vercel.app",
      tech: ["AI", "Image Processing", "React"],
      color: "bg-purple-500"
    },
    {
      title: "ByJoyFactory",
      descriptionKey: "byJoyFactoryDesc",
      url: "https://byjoyfactory.vercel.app",
      tech: ["React", "Web Development", "UI/UX"],
      color: "bg-pink-500"
    },
    {
      title: "RESTful API",
      descriptionKey: "apiDesc",
      url: "https://apiahmad.vercel.app",
      tech: ["Node.js", "REST API", "Backend"],
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 pb-24 md:pb-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 mb-6">
            <Code className="w-4 h-4" />
            <span className="text-sm font-medium">{t('portfolioLabel')}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('featuredProjects')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('projectsDesc')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className={`h-full ${project.color} flex items-center justify-center relative`}>
                    <Code className="w-12 h-12 text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {t(project.descriptionKey)}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  <span>{t('visitProject')}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;