import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
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
  Send,
  Moon,
  Sun
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

const CardLanding: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const tabs = [
    { id: 'about', label: language === 'id' ? 'Tentang' : 'About', icon: User },
    { id: 'projects', label: language === 'id' ? 'Proyek' : 'Projects', icon: Code },
    { id: 'skills', label: language === 'id' ? 'Keahlian' : 'Skills', icon: Award },
    { id: 'experience', label: language === 'id' ? 'Pengalaman' : 'Experience', icon: Briefcase },
    { id: 'contact', label: language === 'id' ? 'Kontak' : 'Contact', icon: Mail }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: language === 'id' 
        ? "Platform e-commerce modern dengan fitur lengkap, payment gateway, dan admin dashboard"
        : "Modern e-commerce platform with complete features, payment gateway, and admin dashboard",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "#"
    },
    {
      title: "Task Management App",
      description: language === 'id'
        ? "Aplikasi manajemen tugas dengan real-time collaboration dan notifikasi"
        : "Task management application with real-time collaboration and notifications",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: language === 'id'
        ? "Website portfolio responsif dengan animasi smooth dan dark mode"
        : "Responsive portfolio website with smooth animations and dark mode",
      tech: ["React", "TypeScript", "Framer Motion"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "#"
    }
  ];

  const skills = {
    technical: [
      { name: "JavaScript", icon: "⚡" },
      { name: "TypeScript", icon: "🔷" },
      { name: "React.js", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "HTML/CSS", icon: "🎨" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Git", icon: "📝" }
    ],
    soft: [
      { name: language === 'id' ? "Komunikasi" : "Communication", icon: "💬" },
      { name: language === 'id' ? "Kerja Tim" : "Teamwork", icon: "👥" },
      { name: language === 'id' ? "Problem Solving" : "Problem Solving", icon: "🧩" },
      { name: language === 'id' ? "Manajemen Waktu" : "Time Management", icon: "⏰" }
    ],
    tools: [
      { name: "VS Code", icon: "💻" },
      { name: "Figma", icon: "🎨" },
      { name: "Postman", icon: "📮" },
      { name: "Docker", icon: "🐳" }
    ]
  };

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
        "Memberikan dampak positif bagi klien dengan meningkatkan efisiensi kerja melalui tools yang dikembangkan dan meningkatkan interaksi pengguna pada platform digital mereka",
        "Menjamin kualitas, performa, dan keamanan aplikasi dengan melakukan pengujian, debugging, dan pemeliharaan secara rutin"
      ]
    },
    {
      title: "Teknisi IT",
      company: "Kelurahan Rawa Bunga Jakarta Timur",
      period: "Desember 2024 - Januari 2025",
      location: "Jakarta",
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
    },
    {
      title: "Freelance Teknisi Laptop & Ponsel",
      company: "Self-Employed",
      period: "Januari 2022",
      location: "Jakarta",
      description: [
        "Mendiagnosis kerusakan yang terjadi pada Laptop dan Ponsel dengan kerusakan ringan",
        "Mengganti Sparepart LCD, Fleksibel, Baterai dan lain-lain",
        "Upgrade Komponen Laptop (RAM, SSD/HDD)",
        "Instalasi Sistem Operasi dan Aktivasi dan mengoptimalkannya"
      ]
    },
    {
      title: "E-Commerce Manager",
      company: "Berbagai Platform",
      period: "Juli 2019",
      location: "Jakarta",
      description: [
        "Berpengalaman dalam mengelola toko online di berbagai platform e-commerce dan media sosial, termasuk Shopee, Carousell, Tokopedia, dan Facebook Marketplace, baik untuk keperluan pribadi maupun bisnis",
        "Bertanggung jawab atas seluruh operasional toko online, mulai dari mengunggah produk, memproses pesanan (mempacking dan mengirim barang sesuai jadwal), hingga memberikan pelayanan pelanggan yang responsif dan memuaskan",
        "Mampu membuat deskripsi produk yang menarik dan lengkap untuk meningkatkan visibilitas produk di platform e-commerce dan menarik minat pembeli",
        "Memahami dan menguasai berbagai fitur yang tersedia di masing-masing platform e-commerce dan media sosial untuk memaksimalkan efektivitas penjualan dan pengelolaan toko online"
      ]
    }
  ] : [
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2024 - Present",
      location: "Remote",
      description: [
        "Develop custom websites and tools end-to-end, from client needs analysis, design, development, to deployment",
        "Translate client business needs into functional technical solutions using modern technologies like HTML, CSS, JavaScript, React.js, Node.js, and PostgreSQL",
        "Design and build interfaces that are not only responsive across all devices, but also provide intuitive, engaging, and enjoyable user experiences",
        "Provide positive impact for clients by improving work efficiency through developed tools and enhancing user interaction on their digital platforms",
        "Ensure application quality, performance, and security through regular testing, debugging, and maintenance"
      ]
    },
    {
      title: "IT Technician",
      company: "Kelurahan Rawa Bunga Jakarta Timur",
      period: "December 2024 - January 2025",
      location: "Jakarta",
      description: [
        "Diagnose and resolve performance issues on PC AIO Client, perform system and software optimization to improve speed and smoothness",
        "Install and configure PCs and printers, ensuring devices are properly connected and ready for various needs",
        "Repair laptops from various damages, including spare part replacement, OS reinstallation, to component upgrades for better performance",
        "Identify and resolve IT problems quickly and efficiently, preventing similar issues from recurring"
      ]
    },
    {
      title: "Assistant Music Director",
      company: "Radio Alaikassalam 95.5 FM",
      period: "January 2022 - March 2022",
      location: "Jakarta",
      description: [
        "Design and produce radio inserts for recording and broadcasting purposes",
        "Create informative and engaging company profile presentations, depicting company vision, mission, values and achievements professionally",
        "Collaborate with company staff to manage and sort company documents, ensuring documents are well archived and easily accessible"
      ]
    },
    {
      title: "Freelance Laptop & Phone Technician",
      company: "Self-Employed",
      period: "January 2022",
      location: "Jakarta",
      description: [
        "Diagnose damage occurring on Laptops and Phones with minor damage",
        "Replace spare parts LCD, Flexible, Battery and others",
        "Upgrade Laptop Components (RAM, SSD/HDD)",
        "Install and activate Operating System and optimize it"
      ]
    },
    {
      title: "E-Commerce Manager",
      company: "Various Platforms",
      period: "July 2019",
      location: "Jakarta",
      description: [
        "Experienced in managing online stores on various e-commerce platforms and social media, including Shopee, Carousell, Tokopedia, and Facebook Marketplace, for both personal and business purposes",
        "Responsible for entire online store operations, from uploading products, processing orders (packing and shipping goods on schedule), to providing responsive and satisfying customer service",
        "Able to create attractive and complete product descriptions to increase product visibility on e-commerce platforms and attract buyer interest",
        "Understand and master various features available on each e-commerce platform and social media to maximize sales effectiveness and online store management"
      ]
    }
  ];

  const education = language === 'id' ? [
    {
      degree: "Teknik Informatika",
      school: "Universitas Bina Sarana Informatika",
      period: "2022 - Sekarang",
      location: "Jakarta"
    }
  ] : [
    {
      degree: "Informatics Engineering",
      school: "Bina Sarana Informatika University",
      period: "2022 - Present",
      location: "Jakarta"
    }
  ];

  const techIcons = [
    { name: 'React', icon: '⚛️', x: 10, y: 20 },
    { name: 'JavaScript', icon: '⚡', x: 80, y: 10 },
    { name: 'TypeScript', icon: '🔷', x: 20, y: 70 },
    { name: 'Node.js', icon: '🟢', x: 90, y: 60 },
    { name: 'CSS', icon: '🎨', x: 60, y: 30 },
    { name: 'HTML', icon: '📄', x: 30, y: 50 },
    { name: 'Git', icon: '📝', x: 70, y: 80 },
    { name: 'Database', icon: '🗄️', x: 50, y: 15 }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <div className="relative mx-auto w-32 h-32 lg:w-40 lg:h-40">
                <img
                  src="https://files.catbox.moe/i4vpso.jpg"
                  alt="Ahmad Dandi Subhani"
                  className="w-full h-full rounded-full object-cover shadow-lg ring-4 ring-blue-500/20 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
              </div>
              
              <div className="space-y-2">
                <motion.h1 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Ahmad
                  </motion.span>{' '}
                  <motion.span
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Dandi
                  </motion.span>{' '}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    Subhani
                  </motion.span>
                </motion.h1>
                
                <div className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 h-8">
                  <TypeAnimation
                    sequence={[
                      language === 'id' ? 'Mahasiswa Teknik Informatika' : 'Informatics Engineering Student',
                      2000,
                      language === 'id' ? 'Spesialis IT' : 'IT Specialist',
                      2000,
                      language === 'id' ? 'Web Developer' : 'Web Developer',
                      2000,
                      language === 'id' ? 'Freelancer' : 'Freelancer',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 lg:p-6">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {language === 'id' 
                  ? "Saya adalah mahasiswa Teknik Informatika yang passionate dalam pengembangan web dan teknologi. Dengan pengalaman sebagai freelance web developer dan teknisi IT, saya selalu antusias untuk belajar teknologi baru dan menciptakan solusi inovatif."
                  : "I am an Informatics Engineering student passionate about web development and technology. With experience as a freelance web developer and IT technician, I am always enthusiastic about learning new technologies and creating innovative solutions."
                }
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <motion.a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="text-sm lg:text-base">Download CV</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/ahmaddandi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="text-sm lg:text-base">GitHub</span>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/ahmaddandi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="text-sm lg:text-base">LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        );

      case 'projects':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white text-center">
              {language === 'id' ? 'Proyek Terbaru' : 'Latest Projects'}
            </h2>
            
            <div className="grid gap-4 lg:gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="lg:w-1/3">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-32 lg:h-24 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="lg:w-2/3 space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg lg:text-xl font-semibold text-gray-800 dark:text-white">
                          {project.title}
                        </h3>
                        <motion.a
                          href={project.link}
                          className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
                      
                      <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 lg:px-3 lg:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs lg:text-sm rounded-full"
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
            className="space-y-6"
          >
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white text-center">
              {language === 'id' ? 'Keahlian & Kemampuan' : 'Skills & Abilities'}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {language === 'id' ? 'Keahlian Teknis' : 'Technical Skills'}
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {skills.technical.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-3 lg:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl lg:text-3xl mb-2">{skill.icon}</div>
                      <div className="text-sm lg:text-base font-medium text-gray-800 dark:text-white">
                        {skill.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {language === 'id' ? 'Soft Skills' : 'Soft Skills'}
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {skills.soft.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-3 lg:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl lg:text-3xl mb-2">{skill.icon}</div>
                      <div className="text-sm lg:text-base font-medium text-gray-800 dark:text-white">
                        {skill.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {language === 'id' ? 'Tools & Software' : 'Tools & Software'}
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {skills.tools.map((tool, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-3 lg:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl lg:text-3xl mb-2">{tool.icon}</div>
                      <div className="text-sm lg:text-base font-medium text-gray-800 dark:text-white">
                        {tool.name}
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
            className="space-y-6"
          >
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white text-center">
              {language === 'id' ? 'Pengalaman & Pendidikan' : 'Experience & Education'}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  {language === 'id' ? 'Pengalaman Kerja' : 'Work Experience'}
                </h3>
                
                <div className="space-y-4 max-h-64 lg:max-h-80 overflow-y-auto scrollbar-hide">
                  {workExperience.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                        <div>
                          <h4 className="text-base lg:text-lg font-semibold text-gray-800 dark:text-white">
                            {exp.title}
                          </h4>
                          <p className="text-sm lg:text-base text-blue-600 dark:text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 mt-1 lg:mt-0 lg:text-right">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-1 text-xs lg:text-sm text-gray-600 dark:text-gray-300">
                        {exp.description.map((desc, descIndex) => (
                          <li key={descIndex} className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  {language === 'id' ? 'Pendidikan' : 'Education'}
                </h3>
                
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <h4 className="text-base lg:text-lg font-semibold text-gray-800 dark:text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-sm lg:text-base text-blue-600 dark:text-blue-400 font-medium">
                            {edu.school}
                          </p>
                        </div>
                        <div className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 mt-1 lg:mt-0 lg:text-right">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                            {edu.location}
                          </div>
                        </div>
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
            className="space-y-6"
          >
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white text-center">
              {language === 'id' ? 'Hubungi Saya' : 'Get In Touch'}
            </h2>
            
            <div className="text-center">
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-6">
                {language === 'id' 
                  ? "Tertarik untuk berkolaborasi? Mari kita diskusikan proyek Anda!"
                  : "Interested in collaborating? Let's discuss your project!"
                }
              </p>
            </div>

            <div className="grid gap-4 lg:gap-6">
              <motion.a
                href="mailto:ahmaddandisubhani@gmail.com"
                className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">ahmaddandisubhani@gmail.com</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto" />
              </motion.a>

              <motion.a
                href="https://wa.me/6285156123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-800 dark:text-white">WhatsApp</h3>
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">+62 851-5612-3456</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto" />
              </motion.a>

              <motion.a
                href="tel:+6285156123456"
                className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-800 dark:text-white">
                    {language === 'id' ? 'Telepon' : 'Phone'}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">+62 851-5612-3456</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/ahmaddandi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-800 dark:text-white">LinkedIn</h3>
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">linkedin.com/in/ahmaddandi</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto" />
              </motion.a>

              <motion.a
                href="https://instagram.com/ahmaddandi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full">
                  <Instagram className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-800 dark:text-white">Instagram</h3>
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">@ahmaddandi</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto" />
              </motion.a>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    } relative overflow-hidden`}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Tech Stack Icons */}
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl lg:text-4xl opacity-10 dark:opacity-5"
            style={{ left: `${tech.x}%`, top: `${tech.y}%` }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
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
          className="absolute bottom-20 right-10 w-24 h-24 lg:w-36 lg:h-36 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 lg:p-8">
        <div className="w-full max-w-4xl lg:max-w-6xl xl:max-w-7xl">
          
          {/* Header with Logo and Controls */}
          <motion.div
            className="flex items-center justify-between mb-6 lg:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="relative"
                animate={{
                  background: [
                    'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                    'linear-gradient(45deg, #8b5cf6, #ec4899)',
                    'linear-gradient(45deg, #ec4899, #3b82f6)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                }}
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-lg relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-white/30 to-transparent"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full"
                    animate={{
                      x: [0, 10, -10, 0],
                      y: [0, -10, 10, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${20 + i * 20}%`,
                    }}
                  />
                ))}
                
                <span className="relative z-10">DS</span>
              </motion.div>
              
              <motion.span
                className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Portfolio
              </motion.span>
            </motion.div>

            {/* Controls */}
            <div className="flex items-center gap-2 lg:gap-3">
              <motion.button
                onClick={toggleLanguage}
                className="px-3 py-2 lg:px-4 lg:py-2 bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg text-sm lg:text-base font-medium text-gray-800 dark:text-white hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300 border border-white/20 dark:border-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'id' ? 'EN' : 'ID'}
              </motion.button>
              
              <motion.button
                onClick={toggleTheme}
                className="p-2 lg:p-3 bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg text-gray-800 dark:text-white hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300 border border-white/20 dark:border-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
            </div>
          </motion.div>

          {/* Main Card */}
          <motion.div
            className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Content Area */}
            <div className="p-6 lg:p-8 min-h-[500px] lg:min-h-[650px]">
              <AnimatePresence mode="wait">
                {renderContent()}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="border-t border-white/20 dark:border-gray-700/50 bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm">
              <div className="flex w-full max-w-md mx-auto">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex flex-col items-center gap-1 lg:gap-2 py-3 lg:py-4 px-2 transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'text-blue-600 dark:text-blue-400 bg-white/10 dark:bg-blue-900/20'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                      <span className="text-xs lg:text-sm font-medium">{tab.label}</span>
                      {activeTab === tab.id && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                          layoutId="activeTab"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CardLanding;