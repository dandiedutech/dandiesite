import React from 'react';
import { Code, Database, Monitor, Wrench, Users, Brain, Award } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const technicalSkills = [
    { name: "HTML", icon: "🌐", color: "from-red-500 to-orange-500" },
    { name: "CSS", icon: "🎨", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-500 to-orange-500" },
    { name: "React.js", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "PostgreSQL", icon: "🐘", color: "from-indigo-500 to-purple-500" },
    { name: "MySQL", icon: "🗄️", color: "from-orange-500 to-red-500" },
    { name: "Git & GitHub", icon: "🔧", color: "from-purple-500 to-pink-500" }
  ];

  const softSkills = [
    { name: t('timeManagement'), icon: "⏰" },
    { name: t('quickAdaptation'), icon: "🚀" },
    { name: t('criticalThinking'), icon: "🧠" },
    { name: t('communication'), icon: "🤝" }
  ];

  const systemSkills = [
    "OS Installation & Configuration",
    "Hardware/Software Maintenance",
    "Troubleshooting",
    "Windows & Linux",
    "Cloud Server",
    "MS Office"
  ];

  const certifications = [
    "Computer Operator Certification",
    "Multimedia Competency P1 BNSP",
    "Multimedia Competency P2 BSrE",
    "JavaScript Programming Dicoding",
    "Backend Development MySkill",
    "Java Complete Course Udemy"
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium backdrop-blur-sm mb-4">
            <Brain className="w-4 h-4 mr-2" />
            {t('expertiseLabel')}
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {t('skillsTitle')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('skillsDesc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <div className="animate-fade-in-up">
            <div className="p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20 shadow-xl">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('technicalSkills')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 text-center">
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <span className="font-semibold text-gray-900 dark:text-white text-sm">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-fade-in-up delay-200">
            <div className="p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20 shadow-xl">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('softSkills')}</h3>
              </div>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* System & Tools */}
          <div className="animate-fade-in-up delay-300">
            <div className="p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20 shadow-xl">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 mr-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('systemTools')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {systemSkills.map((skill, index) => (
                  <div key={index} className="p-4 rounded-2xl bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-center font-medium text-gray-900 dark:text-white hover:from-orange-200 hover:to-red-200 dark:hover:from-orange-900/50 dark:hover:to-red-900/50 transition-all duration-300 transform hover:scale-105 cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-fade-in-up delay-400">
            <div className="p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20 shadow-xl">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('certifications')}</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-gray-900 dark:text-white font-medium hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-900/50 dark:hover:to-pink-900/50 transition-all duration-300 transform hover:scale-105 cursor-default">
                    {cert}
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

export default Skills;