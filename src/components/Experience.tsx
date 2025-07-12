import React from 'react';
import { MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from './LanguageContext';

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
        "Memberikan dampak positif bagi klien dengan meningkatkan efisiensi kerja melalui tools yang dikembangkan dan meningkatkan interaksi pengguna pada platform digital mereka",
        "Menjamin kualitas, performa, dan keamanan aplikasi dengan melakukan pengujian, debugging, dan pemeliharaan secara rutin"
      ],
      gradient: "from-blue-500 to-cyan-500"
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
      ],
      gradient: "from-green-500 to-emerald-500"
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
      ],
      gradient: "from-yellow-500 to-orange-500"
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
      ],
      gradient: "from-purple-500 to-pink-500"
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
      ],
      gradient: "from-pink-500 to-rose-500"
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
        "Delivering positive impact by improving work efficiency and user interaction on digital platforms",
        "Ensuring quality, performance, and security through regular testing, debugging, and maintenance"
      ],
      gradient: "from-blue-500 to-cyan-500"
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
      ],
      gradient: "from-green-500 to-emerald-500"
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
      ],
      gradient: "from-yellow-500 to-orange-500"
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
      ],
      gradient: "from-purple-500 to-pink-500"
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
      ],
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="experience" className="pt-24 sm:pt-32 pb-20 sm:pb-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-blue-900/20">
        <div className="absolute top-20 sm:top-40 left-4 sm:left-20 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-4 sm:right-20 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-24 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 text-green-600 dark:text-green-400 text-sm sm:text-base font-semibold backdrop-blur-sm mb-6 border border-green-200/50 dark:border-green-700/50 shadow-lg">
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            {t('journeyLabel')}
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              {t('experienceEducation')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {t('experienceDesc')}
          </p>
        </div>

        {/* Education */}
        <div className="mb-20 sm:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mr-4 shadow-lg">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              {t('education')}
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="animate-fade-in-up max-w-5xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[2rem] bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02] group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl sm:rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-8">
                  <div className="flex-1">
                    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                      {education.degree}
                    </h4>
                    <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
                      {education.institution}
                    </p>
                    <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold shadow-md">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-indigo-500" />
                      {education.period}
                    </div>
                  </div>
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mt-6 xl:mt-0 xl:ml-8 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500 mx-auto xl:mx-0">
                    <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
                  </div>
                </div>
                
                <div className="grid gap-4 sm:gap-6">
                  {education.activities.map((activity, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 mr-4 sm:mr-6 flex-shrink-0 shadow-lg group-hover/item:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg font-medium group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mr-4 shadow-lg">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              {t('workExperience')}
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8 sm:space-y-12 lg:space-y-16 max-w-6xl mx-auto">
            {workExperience.map((job, index) => (
              <div key={index} className="animate-fade-in-up group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[2rem] bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${job.gradient.replace('from-', 'from-').replace('to-', 'to-')}/5 rounded-3xl sm:rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-8">
                      <div className="flex-1">
                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                          {job.title}
                        </h4>
                        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-semibold">
                          {job.company}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold shadow-md">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500" />
                            {job.period}
                          </div>
                          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold shadow-md">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" />
                            {job.location}
                          </div>
                        </div>
                      </div>
                      <div className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-3xl bg-gradient-to-br ${job.gradient} mt-6 xl:mt-0 xl:ml-8 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500 mx-auto xl:mx-0`}>
                        <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
                      </div>
                    </div>
                    
                    <div className="grid gap-4 sm:gap-6">
                      {job.description.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start group/item">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-4 sm:mr-6 flex-shrink-0 shadow-lg group-hover/item:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg font-medium group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;