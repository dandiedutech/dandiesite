import React from 'react';
import { MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const { t, language } = useLanguage();

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
      title: "Mengelola E-Commerce",
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
    },
    {
      title: "Freelance Laptop & Mobile Technician",
      company: "Self-Employed",
      period: "January 2022",
      location: "Jakarta",
      description: [
        "Diagnosed minor damages on laptops and mobile devices",
        "Replaced spare parts including LCD, flexible cables, batteries, and other components",
        "Upgraded laptop components (RAM, SSD/HDD)",
        "Installed, activated, and optimized operating systems"
      ]
    },
    {
      title: "E-Commerce Manager",
      company: "Various Platforms",
      period: "July 2019",
      location: "Jakarta",
      description: [
        "Managed online stores across multiple e-commerce platforms including Shopee, Carousell, Tokopedia, and Facebook Marketplace",
        "Handled complete online store operations from product uploads to order processing and customer service",
        "Created compelling and comprehensive product descriptions to increase visibility and attract buyers",
        "Mastered various features of e-commerce platforms to maximize sales effectiveness and online store management"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 md:py-32 pb-24 md:pb-32 bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/30 dark:from-gray-900 dark:via-green-900/10 dark:to-blue-900/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 border border-green-200/50 dark:border-green-800/50 text-green-700 dark:text-green-300 mb-8 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-sm font-semibold">{t('journeyLabel')}</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('experienceEducation')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
            {t('experienceDesc')}
          </p>
        </motion.div>

        {/* Education */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{t('education')}</h3>
          </div>
          
          <motion.div 
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-xl"
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
              <div className="flex-1">
                <motion.h4 
                  className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3"
                  whileHover={{ scale: 1.02 }}
                >
                  {education.degree}
                </motion.h4>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 font-semibold">
                  {education.institution}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 font-semibold shadow-lg">
                    <Calendar className="w-5 h-5 text-indigo-500" />
                    {education.period}
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.activities.map((activity, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200/50 dark:border-indigo-800/50"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{activity}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{t('workExperience')}</h3>
          </div>
          
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {workExperience.map((job, index) => (
              <motion.div 
                key={index} 
                className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-xl"
                variants={itemVariants}
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  y: -5
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex-1">
                    <motion.h4 
                      className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3"
                      whileHover={{ scale: 1.02 }}
                    >
                      {job.title}
                    </motion.h4>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 font-bold">
                      {job.company}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.div 
                        className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 font-semibold shadow-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar className="w-5 h-5 text-blue-500" />
                        {job.period}
                      </motion.div>
                      <motion.div 
                        className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 font-semibold shadow-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <MapPin className="w-5 h-5 text-green-500" />
                        {job.location}
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {job.description.map((item, itemIndex) => (
                    <motion.div 
                      key={itemIndex} 
                      className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200/50 dark:border-blue-800/50"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <motion.div 
                        className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;