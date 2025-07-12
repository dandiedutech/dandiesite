import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Code, 
  Award, 
  Briefcase, 
  Mail, 
  Download,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  MapPin,
  Calendar,
  MessageCircle,
  Phone,
  Users,
  Wrench,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  Send
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

const CardLanding: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  // Tech stack icons for background animation
  const techIcons = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS3" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
  ];

  const navigationItems = [
    { id: 'about', label: language === 'id' ? 'Tentang' : 'About', icon: User },
    { id: 'projects', label: language === 'id' ? 'Proyek' : 'Projects', icon: Code },
    { id: 'skills', label: language === 'id' ? 'Keahlian' : 'Skills', icon: Award },
    { id: 'experience', label: language === 'id' ? 'Pengalaman' : 'Experience', icon: Briefcase },
    { id: 'contact', label: language === 'id' ? 'Kontak' : 'Contact', icon: Mail }
  ];

  const projects = [
    {
      title: "Kepo-in Anonymous Platform",
      description: language === 'id' ? "Platform pesan anonim untuk komunikasi aman dengan fokus privasi" : "Anonymous messaging platform for secure communication with privacy focus",
      url: "https://kepo-in.vercel.app",
      image: "https://files.catbox.moe/g2l6h2.png",
      tech: ["React", "Anonymous", "Messaging"],
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "UnindraFess",
      description: language === 'id' ? "Platform confess anonim untuk mahasiswa universitas dengan pesan real-time" : "Anonymous confession platform for university students with real-time messaging",
      url: "https://unindrafess.vercel.app",
      image: "https://files.catbox.moe/xgdwn9.png",
      tech: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Maba Validator",
      description: language === 'id' ? "Sistem validasi mahasiswa baru untuk pendaftaran universitas dengan verifikasi otomatis" : "New student validation system for university enrollment with automated verification",
      url: "https://maba2025.vercel.app",
      image: "https://files.catbox.moe/lqu5xc.png",
      tech: ["React", "Database", "Validation"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Unindra AI Chatbot",
      description: language === 'id' ? "Chatbot bertenaga AI untuk bantuan universitas dan dukungan mahasiswa dengan respons cerdas" : "AI-powered chatbot for university assistance and student support with intelligent responses",
      url: "https://unindra.info",
      image: "https://files.catbox.moe/86pabc.png",
      tech: ["AI", "Chatbot", "JavaScript"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Belajar Bareng",
      description: language === 'id' ? "Platform pembelajaran kolaboratif untuk mahasiswa dengan fitur interaktif" : "Collaborative learning platform for students with interactive features",
      url: "https://belajarbareng.vercel.app",
      image: "https://files.catbox.moe/lr7coh.png",
      tech: ["React", "Education", "Collaboration"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "RajaSusu Invoice Generator",
      description: language === 'id' ? "Sistem pembuatan dan manajemen invoice profesional untuk bisnis" : "Professional invoice generation and management system for businesses",
      url: "https://invoge.vercel.app",
      image: "https://files.catbox.moe/ih4u26.png",
      tech: ["React", "PDF", "Business"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const technicalSkills = [
    { 
      name: "HTML", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "CSS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "from-blue-500 to-blue-600"
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "from-yellow-400 to-yellow-500"
    },
    { 
      name: "React.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-cyan-400 to-blue-500"
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "from-green-500 to-green-600"
    },
    { 
      name: "PostgreSQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "from-blue-600 to-indigo-600"
    },
    { 
      name: "MySQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "from-blue-500 to-orange-500"
    },
    { 
      name: "Git", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "from-red-500 to-orange-500"
    }
  ];

  const softSkills = [
    { name: language === 'id' ? 'Manajemen Waktu yang Efektif' : 'Effective Time Management', icon: "⏰", color: "from-blue-500 to-purple-500" },
    { name: language === 'id' ? 'Adaptasi Cepat' : 'Quick Adaptation', icon: "🚀", color: "from-green-500 to-teal-500" },
    { name: language === 'id' ? 'Berpikir Kritis dan Analitis' : 'Critical & Analytical Thinking', icon: "🧠", color: "from-purple-500 to-pink-500" },
    { name: language === 'id' ? 'Komunikasi dan Kerja Sama Tim' : 'Communication & Teamwork', icon: "🤝", color: "from-orange-500 to-red-500" }
  ];

  const systemSkills = [
    { name: "OS Installation", icon: "💻", color: "from-gray-600 to-gray-700" },
    { name: "Hardware Maintenance", icon: "🔧", color: "from-blue-600 to-indigo-600" },
    { name: "Troubleshooting", icon: "🔍", color: "from-green-600 to-emerald-600" },
    { name: "Windows & Linux", icon: "🖥️", color: "from-purple-600 to-violet-600" },
    { name: "Cloud Server", icon: "☁️", color: "from-cyan-500 to-blue-500" },
    { name: "MS Office", icon: "📊", color: "from-orange-500 to-amber-500" }
  ];

  const certifications = [
    { name: "Computer Operator Certification", icon: "🏆", year: "2023" },
    { name: "Multimedia Competency P1 BNSP", icon: "🎨", year: "2023" },
    { name: "Multimedia Competency P2 BSrE", icon: "🎬", year: "2023" },
    { name: "JavaScript Programming Dicoding", icon: "💻", year: "2024" },
    { name: "Backend Development MySkill", icon: "⚙️", year: "2024" },
    { name: "Java Complete Course Udemy", icon: "☕", year: "2024" }
  ];

  const workExperience = language === 'id' ? [
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2024 - Sekarang",
      location: "Remote",
      description: [
        "Mengembangkan situs web dan tools kustom secara end-to-end, mulai dari analisis kebutuhan klien, perancangan, pengembangan, hingga peluncuran",
        "Menerjemahkan kebutuhan bisnis klien menjadi solusi teknis yang fungsional menggunakan teknologi modern seperti HTML, CSS, JavaScript, React.js, dan Node.js, PostgreSQL",
        "Merancang dan membangun antarmuka yang tidak hanya responsif di semua perangkat, tetapi juga memberikan pengalaman pengguna yang intuitif, menarik, dan menyenangkan (engaging & enjoyable)",
        "Memberikan dampak positif bagi klien dengan meningkatkan efisiensi kerja melalui tools yang dikembangkan dan meningkatkan interaksi pengguna pada platform digital mereka"
      ]
    },
    {
      title: "Teknisi IT",
      company: "Kelurahan Rawa Bunga Jakarta Timur",
      period: "Desember 2024 - Januari 2025",
      location: "Jakarta Timur",
      description: [
        "Mendiagnosis dan mengatasi masalah performa pada PC AIO Client, melakukan optimasi sistem dan software untuk meningkatkan kecepatan dan kelancaran",
        "Melakukan instalasi dan konfigurasi PC serta printer, memastikan perangkat terhubung dengan baik dan siap digunakan untuk berbagai kebutuhan",
        "Melakukan perbaikan laptop dari berbagai kerusakan, termasuk penggantian sparepart, instalasi ulang sistem operasi, hingga upgrade komponen untuk performa yang lebih baik",
        "Mengidentifikasi dan menyelesaikan masalah IT dengan cepat dan efisien, mencegah masalah serupa terulang kembali"
      ]
    },
    {
      title: "Asisten Direktur Music",
      company: "Radio Alaikassalam 95.5 FM",
      period: "Januari 2022 - Maret 2022",
      location: "Jakarta",
      description: [
        "Merancang dan memproduksi insert radio untuk keperluan rekaman dan siaran",
        "Membuat presentasi profil perusahaan yang informatif dan menarik, menggambarkan visi, misi, nilai-nilai dan pencapaian perusahaan secara profesional",
        "Bekerja sama dengan staf perusahaan untuk mengelola dan menyortir dokumen-dokumen perusahaan, memastikan dokumen-dokumen tersebut terarsip dengan baik dan mudah diakses"
      ]
    }
  ] : [
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2024 - Present",
      location: "Remote",
      description: [
        "Developing end-to-end websites and custom tools from client requirement analysis to launch",
        "Translating business needs into functional technical solutions using HTML, CSS, JavaScript, React.js, Node.js, and PostgreSQL",
        "Designing responsive interfaces that provide intuitive, engaging user experiences across all devices",
        "Delivering positive impact by improving work efficiency and user interaction on digital platforms"
      ]
    },
    {
      title: "IT Technician",
      company: "Kelurahan Rawa Bunga Jakarta Timur",
      period: "December 2024 - January 2025",
      location: "Jakarta Timur",
      description: [
        "Diagnosed and resolved performance issues on PC AIO Client, optimizing systems and software for improved speed and efficiency",
        "Installed and configured PCs and printers, ensuring proper device connectivity for various operational needs",
        "Repaired laptops with various damages including spare part replacement, OS reinstallation, and component upgrades",
        "Identified and resolved IT issues quickly and efficiently, preventing similar problems from recurring"
      ]
    },
    {
      title: "Assistant Music Director",
      company: "Radio Alaikassalam 95.5 FM",
      period: "January 2022 - March 2022",
      location: "Jakarta",
      description: [
        "Designed and produced radio inserts for recording and broadcasting purposes",
        "Created informative and engaging company profile presentations showcasing vision, mission, values, and achievements",
        "Collaborated with company staff to manage and organize corporate documents for easy access and archival"
      ]
    }
  ];

  const education = {
    degree: language === 'id' ? "S1 Teknik Informatika" : "Bachelor of Informatic Engineering",
    institution: "Universitas Indraprasta PGRI",
    period: language === 'id' ? "September 2023 - Sekarang" : "September 2023 - Present",
    activities: language === 'id' ? [
      "Mengerjakan Tugas Mata Kuliah Wajib Kurikulum Berbasis Proyek",
      "Mengadakan Seminar Literasi Digital ke Sekolah dan Masyarakat",
      "Bergabung dengan Komunitas BELAJAR BARENG yang dibuat oleh beberapa Mahasiswa",
      "Membuat beberapa Website Tools sesuai permintaan Pengguna / Client",
      "Membuat Bot WhatsApp untuk mendownload Materi dari LMS berdasarkan Prodi dan Mata Kuliah"
    ] : [
      "Completing project-based curriculum assignments",
      "Organizing Digital Literacy Seminars for schools and communities",
      "Joining the BELAJAR BARENG community created by students",
      "Building website tools based on user/client requests",
      "Creating WhatsApp Bot for downloading LMS materials by program and subject"
    ]
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dandiedutech@gmail.com",
      link: "mailto:dandiedutech@gmail.com",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "089636035164",
      link: "https://wa.me/6289636035164",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jakarta Timur, Indonesia",
      link: "",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "dandisubhani",
      link: "https://linkedin.com/in/dandisubhani",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@dandisubhani_",
      link: "https://instagram.com/dandisubhani_",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@dandiedutech",
      link: "https://github.com/dandiedutech",
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="text-center space-y-3 md:space-y-4">
              <motion.div 
                className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl md:text-4xl font-bold shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                ADS
              </motion.div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Ahmad Dandi Subhani
              </h1>
              <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs md:text-sm font-medium">
                  {language === 'id' ? 'Tersedia untuk bekerja' : 'Available for work'}
                </span>
              </div>
              <p className="text-lg md:text-xl text-gray-300">
                {language === 'id' ? 'Mahasiswa Teknik Informatika & IT Specialist' : 'Informatic Engineering Student & IT Specialist'}
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {language === 'id' 
                  ? "Mahasiswa Teknik Informatika Universitas Indraprasta PGRI dengan minat mendalam di bidang IT Support dan Helpdesk. Passionate tentang teknologi dan pemecahan masalah dengan pengalaman dalam pengembangan web dan sistem informasi."
                  : "Informatic Engineering Student at Universitas Indraprasta PGRI with deep interest in IT Support and Helpdesk. Passionate about technology and problem-solving with experience in web development and information systems."
                }
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <motion.a
                href="/dandi-cv.pdf"
                download="Ahmad_Dandi_Subhani_CV.pdf"
                className="flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                {language === 'id' ? 'Unduh CV' : 'Download CV'}
              </motion.a>
              
              <div className="flex gap-2 md:gap-3 justify-center">
                {[
                  { icon: Github, href: "https://github.com/dandiedutech", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/dandisubhani", label: "LinkedIn" },
                  { icon: Instagram, href: "https://instagram.com/dandisubhani_", label: "Instagram" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 'projects':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white text-center">
              {language === 'id' ? 'Proyek Unggulan' : 'Featured Projects'}
            </h2>
            <div className="grid gap-3 md:gap-4 max-h-[400px] md:max-h-[500px] overflow-y-auto pr-2">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-32 md:h-full object-cover"
                        />
                      ) : (
                        <div className={`h-32 md:h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                          <Code className="w-8 h-8 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 p-4 md:p-6">
                      <div className="flex justify-between items-start mb-2 md:mb-3">
                        <h3 className="text-base md:text-lg font-semibold text-white pr-2">{project.title}</h3>
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors flex-shrink-0"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                        </motion.a>
                      </div>
                      <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 md:px-3 md:py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'skills':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white text-center">
              {language === 'id' ? 'Keahlian & Expertise' : 'Skills & Expertise'}
            </h2>
            
            <div className="space-y-4 md:space-y-6 max-h-[400px] md:max-h-[500px] overflow-y-auto pr-2">
              {/* Technical Skills */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  {language === 'id' ? 'Keterampilan Teknis' : 'Technical Skills'}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 rounded-lg p-3 md:p-4 text-center hover:bg-white/20 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img src={skill.icon} alt={skill.name} className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
                      <span className="text-white font-medium text-xs md:text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-400" />
                  {language === 'id' ? 'Keterampilan Non-Teknis' : 'Soft Skills'}
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 md:p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-lg md:text-xl">{skill.icon}</span>
                      <span className="text-white font-medium text-xs md:text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* System & Tools */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-orange-400" />
                  {language === 'id' ? 'Sistem & Tools' : 'System & Tools'}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                  {systemSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-lg md:text-xl mb-2 block">{skill.icon}</span>
                      <span className="text-white font-medium text-xs">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  {language === 'id' ? 'Sertifikasi' : 'Certifications'}
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 md:p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-lg md:text-xl">{cert.icon}</span>
                      <div className="flex-1">
                        <div className="text-white font-medium text-xs md:text-sm">{cert.name}</div>
                        <div className="text-gray-400 text-xs">{cert.year}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'experience':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white text-center">
              {language === 'id' ? 'Pengalaman & Pendidikan' : 'Experience & Education'}
            </h2>
            
            <div className="space-y-4 md:space-y-6 max-h-[400px] md:max-h-[500px] overflow-y-auto pr-2">
              {/* Education */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                  {language === 'id' ? 'Pendidikan' : 'Education'}
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-white">{education.degree}</h4>
                    <p className="text-blue-400 text-sm md:text-base">{education.institution}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 text-xs md:text-sm">{education.period}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {education.activities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs md:text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  {language === 'id' ? 'Pengalaman Kerja' : 'Work Experience'}
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {workExperience.map((job, index) => (
                    <motion.div
                      key={index}
                      className="border-l-2 border-blue-400/30 pl-4 md:pl-6 pb-4 md:pb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <h4 className="text-base md:text-lg font-semibold text-white">{job.title}</h4>
                      <p className="text-blue-400 text-sm md:text-base font-medium">{job.company}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                          <span className="text-gray-300 text-xs md:text-sm">{job.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                          <span className="text-gray-300 text-xs md:text-sm">{job.location}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {job.description.map((desc, descIndex) => (
                          <div key={descIndex} className="flex items-start gap-2 text-xs md:text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{desc}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white text-center">
              {language === 'id' ? 'Mari Terhubung' : 'Get In Touch'}
            </h2>
            
            <div className="space-y-3 md:space-y-4 max-h-[400px] md:max-h-[500px] overflow-y-auto pr-2">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-br ${info.gradient} shadow-lg`}>
                      <info.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-1 text-sm md:text-base">{info.label}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium text-xs md:text-sm break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-300 font-medium text-xs md:text-sm">{info.value}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.a
                href="https://wa.me/6289636035164"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                {language === 'id' ? 'Kirim Pesan WhatsApp' : 'Send WhatsApp Message'}
              </motion.a>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-3 md:p-4">
      {/* Animated Tech Stack Background */}
      <div className="absolute inset-0">
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="absolute opacity-5 md:opacity-10"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: [
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              ],
              y: [
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img src={tech.icon} alt={tech.name} className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" />
          </motion.div>
        ))}
      </div>

      {/* Abstract Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-4 md:p-6 border-b border-white/10">
            <div className="flex items-center gap-2 md:gap-3">
              <motion.div 
                className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm md:text-base"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                ADS
              </motion.div>
              <span className="text-white font-semibold text-sm md:text-base">Portfolio</span>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 md:px-3 md:py-1 rounded text-xs md:text-sm font-medium transition-all ${
                    language === 'en' ? 'bg-white/20 text-white' : 'text-gray-400'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('id')}
                  className={`px-2 py-1 md:px-3 md:py-1 rounded text-xs md:text-sm font-medium transition-all ${
                    language === 'id' ? 'bg-white/20 text-white' : 'text-gray-400'
                  }`}
                >
                  ID
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 min-h-[500px] md:min-h-[600px]">
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
          </div>

          {/* Bottom Navigation */}
          <div className="border-t border-white/10 p-3 md:p-4">
            <div className="flex justify-center">
              <div className="flex gap-1 md:gap-2 bg-white/5 rounded-xl p-1 md:p-2 backdrop-blur-sm overflow-x-auto">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex flex-col items-center gap-1 px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium transition-all whitespace-nowrap min-w-[60px] md:min-w-[80px] ${
                      activeTab === item.id
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xs md:text-sm">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardLanding;