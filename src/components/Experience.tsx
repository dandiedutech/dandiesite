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
        "Memberikan dampak positif bagi klien dengan meningkatkan efisiensi kerja melalui tools yang dikembangkan dan meningkatkan interaksi pengguna pada platform digital mereka"
      ],
      color: "bg-blue-500"
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
      color: "bg-green-500"
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
      color: "bg-yellow-500"
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
      color: "bg-purple-500"
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
      color: "bg-pink-500"
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
      ],
      color: "bg-blue-500"
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
      color: "bg-green-500"
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
      color: "bg-yellow-500"
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
      color: "bg-purple-500"
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
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 pb-24 md:pb-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 mb-6">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium">{t('journeyLabel')}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('experienceEducation')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('experienceDesc')}
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
              <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{t('education')}</h3>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {education.degree}
                </h4>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-medium">
                  {education.institution}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium">
                  <Calendar className="w-4 h-4 text-indigo-500" />
                  {education.period}
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              {education.activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{t('workExperience')}</h3>
          </div>
          
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {job.title}
                    </h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-semibold">
                      {job.company}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        {job.period}
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium">
                        <MapPin className="w-4 h-4 text-green-500" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                  <div className={`w-16 h-16 rounded-xl ${job.color} mt-6 lg:mt-0 lg:ml-8 flex items-center justify-center mx-auto lg:mx-0`}>
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  {job.description.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
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