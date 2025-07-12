import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    projects: 'Projects',
    skills: 'Skills',
    experience: 'Experience',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Ahmad Dandi Subhani',
    heroSubtitle: 'Informatic Engineering Student at Universitas Indraprasta PGRI with deep interest in IT Support and Helpdesk',
    downloadCV: 'Download CV',
    getInTouch: 'Get In Touch',
    itSpecialist: 'Informatic Engineering Student',
    passionateTech: 'Passionate about technology and problem-solving',
    
    // Projects
    portfolioLabel: 'Portfolio',
    featuredProjects: 'Featured Projects',
    projectsDesc: 'A collection of web applications and tools I\'ve built to solve real-world problems',
    visitProject: 'Visit Project',
    
    // Project Descriptions
    kepoInDesc: 'Anonymous messaging platform for secure communication with privacy focus',
    unindraFessDesc: 'Anonymous confession platform for university students with real-time messaging',
    mabaValidatorDesc: 'New student validation system for university enrollment with automated verification',
    unindraAiDesc: 'AI-powered chatbot for university assistance and student support with intelligent responses',
    belajarBarengDesc: 'Collaborative learning platform for students with interactive features',
    rajaSusuDesc: 'Professional invoice generation and management system for businesses',
    hadeinDesc: 'AI-powered image enhancement and processing tool with advanced algorithms',
    byJoyFactoryDesc: 'Creative digital solutions and web development services portfolio',
    apiDesc: 'Comprehensive API service for various applications with robust endpoints',
    
    // Skills
    expertiseLabel: 'Expertise',
    skillsTitle: 'Skills & Expertise',
    skillsDesc: 'Technical and non-technical skills developed through education and hands-on experience',
    technicalSkills: 'Technical Skills',
    softSkills: 'Soft Skills',
    systemTools: 'System & Tools',
    certifications: 'Certifications',
    
    // Experience
    journeyLabel: 'Journey',
    experienceEducation: 'Experience & Education',
    experienceDesc: 'Professional journey and educational background in technology and IT support',
    workExperience: 'Work Experience',
    education: 'Education',
    
    // Contact
    contactLabel: 'Contact',
    getInTouchTitle: 'Get In Touch',
    contactDesc: 'Let\'s connect and discuss opportunities, projects, or just have a chat about technology',
    contactInfo: 'Contact Information',
    sendMessage: 'Send a Message',
    yourName: 'Your Name',
    emailAddress: 'Email Address',
    message: 'Message',
    sendWhatsApp: 'Send Message via WhatsApp',
    
    // Footer
    madeWithLove: 'Made with ❤️ by @dandisubhani_',
    
    // Soft Skills
    timeManagement: 'Effective Time Management',
    quickAdaptation: 'Quick Adaptation',
    criticalThinking: 'Critical & Analytical Thinking',
    communication: 'Communication & Teamwork'
  },
  id: {
    // Navigation
    home: 'Beranda',
    projects: 'Proyek',
    skills: 'Keahlian',
    experience: 'Pengalaman',
    contact: 'Kontak',
    
    // Hero
    heroTitle: 'Ahmad Dandi Subhani',
    heroSubtitle: 'Mahasiswa Teknik Informatika Universitas Indraprasta PGRI dengan minat mendalam di bidang IT Support dan Helpdesk.',
    downloadCV: 'Unduh CV',
    getInTouch: 'Hubungi Saya',
    itSpecialist: 'Mahasiswa Teknik Informatika',
    passionateTech: 'Passionate tentang teknologi dan pemecahan masalah',
    
    // Projects
    portfolioLabel: 'Portofolio',
    featuredProjects: 'Proyek Unggulan',
    projectsDesc: 'Kumpulan aplikasi web dan tools yang telah saya buat untuk menyelesaikan masalah nyata',
    visitProject: 'Kunjungi Proyek',
    
    // Project Descriptions
    kepoInDesc: 'Platform pesan anonim untuk komunikasi aman dengan fokus privasi',
    unindraFessDesc: 'Platform confess anonim untuk mahasiswa universitas dengan pesan real-time',
    mabaValidatorDesc: 'Sistem validasi mahasiswa baru untuk pendaftaran universitas dengan verifikasi otomatis',
    unindraAiDesc: 'Chatbot bertenaga AI untuk bantuan universitas dan dukungan mahasiswa dengan respons cerdas',
    belajarBarengDesc: 'Platform pembelajaran kolaboratif untuk mahasiswa dengan fitur interaktif',
    rajaSusuDesc: 'Sistem pembuatan dan manajemen invoice profesional untuk bisnis',
    hadeinDesc: 'Tool peningkatan dan pemrosesan gambar bertenaga AI dengan algoritma canggih',
    byJoyFactoryDesc: 'Solusi digital kreatif dan portofolio layanan pengembangan web',
    apiDesc: 'Layanan API komprehensif untuk berbagai aplikasi dengan endpoint yang robust',
    
    // Skills
    expertiseLabel: 'Keahlian',
    skillsTitle: 'Keahlian',
    skillsDesc: 'Keterampilan teknis dan non-teknis yang dikembangkan melalui pendidikan dan pengalaman langsung',
    technicalSkills: 'Keterampilan Teknis',
    softSkills: 'Keterampilan Non-Teknis',
    systemTools: 'Sistem & Tools',
    certifications: 'Sertifikasi',
    
    // Experience
    journeyLabel: 'Perjalanan',
    experienceEducation: 'Pengalaman & Pendidikan',
    experienceDesc: 'Perjalanan profesional dan latar belakang pendidikan di bidang teknologi dan IT support',
    workExperience: 'Pengalaman Kerja',
    education: 'Pendidikan',
    
    // Contact
    contactLabel: 'Kontak',
    getInTouchTitle: 'Mari Terhubung',
    contactDesc: 'Mari terhubung dan diskusikan peluang, proyek, atau sekadar mengobrol tentang teknologi',
    contactInfo: 'Informasi Kontak',
    sendMessage: 'Kirim Pesan',
    yourName: 'Nama Anda',
    emailAddress: 'Alamat Email',
    message: 'Pesan',
    sendWhatsApp: 'Kirim Pesan via WhatsApp',
    
    // Footer
    madeWithLove: 'Dibuat dengan ❤️ oleh @dandisubhani_',
    
    // Soft Skills
    timeManagement: 'Manajemen Waktu yang Efektif',
    quickAdaptation: 'Adaptasi Cepat',
    criticalThinking: 'Berpikir Kritis dan Analitis',
    communication: 'Komunikasi dan Kerja Sama Tim'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};