import React from 'react';
import { Code, Users, Wrench, Award } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const technicalSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "MySQL", level: 78 },
    { name: "Git & GitHub", level: 82 }
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
    <section id="skills" className="py-20 md:py-32 pb-24 md:pb-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">{t('expertiseLabel')}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('skillsTitle')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('skillsDesc')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('technicalSkills')}</h3>
            </div>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('softSkills')}</h3>
            </div>
            
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                  <div className="text-2xl">{skill.icon}</div>
                  <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* System & Tools */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-900/30">
                <Wrench className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('systemTools')}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {systemSkills.map((skill, index) => (
                <div key={index} className="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 text-center font-medium text-gray-900 dark:text-white hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors duration-200 border border-orange-200 dark:border-orange-800">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('certifications')}</h3>
            </div>
            
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-gray-900 dark:text-white font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200 border border-purple-200 dark:border-purple-800">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;