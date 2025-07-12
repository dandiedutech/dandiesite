# 🌟 DandieSite - Personal Portfolio

> Modern, responsive portfolio website showcasing Ahmad Dandi Subhani's journey as an Informatic Engineering Student and IT Specialist.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4.1-cyan)

## 🚀 Live Demo

Visit the live portfolio: [dandisubhani.web.id](https://dandisubhani.web.id)

## ✨ Features

### 🎨 **Modern Design**
- **Flat Modern UI** with smooth animations
- **Dark/Light Mode** toggle
- **Responsive Design** optimized for all devices
- **Framer Motion** animations for enhanced UX

### 🌐 **Multi-language Support**
- English and Indonesian language options
- Dynamic content switching
- Localized project descriptions

### 📱 **Mobile-First Approach**
- Bottom navigation for mobile devices
- Touch-friendly interactions
- Optimized typography scaling

### 🛠️ **Tech Stack Display**
- Visual tech stack with official logos
- Skills categorization (Technical, Soft Skills, System & Tools)
- Certification showcase

### 📊 **Portfolio Sections**
- **Hero** - Introduction with animated typing effect
- **Projects** - Featured projects with live links
- **Skills** - Technical and soft skills with visual icons
- **Experience** - Work experience and education timeline
- **Contact** - Multiple contact methods with form

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Type Animation** - Typing effects

### Development Tools
- **Vite** - Build tool
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Deployment
- **Vercel** - Hosting platform
- **Custom Domain** - dandisubhani.web.id

## 📁 Project Structure

```
dandiesite/
├── public/
│   ├── dandi-cv.pdf
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeContext.tsx
│   │   └── LanguageContext.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dandiedutech/dandiesite.git
   cd dandiesite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Theme Configuration
The portfolio supports dark/light mode switching. Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Content Updates
- **Personal Info**: Update in `src/components/Hero.tsx`
- **Projects**: Modify project array in `src/components/Projects.tsx`
- **Skills**: Update skills arrays in `src/components/Skills.tsx`
- **Experience**: Edit experience data in `src/components/Experience.tsx`

### Language Support
Add new languages by extending the translations object in `src/components/LanguageContext.tsx`.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (Bottom navigation)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (Top navigation)

## 🔧 Performance Optimizations

- **Lazy Loading** for images
- **Code Splitting** with React.lazy
- **Optimized Animations** with Framer Motion
- **Efficient Re-renders** with React Context
- **Compressed Assets** in production build

## 📈 SEO Features

- **Meta Tags** for social sharing
- **Open Graph** protocol support
- **Structured Data** (JSON-LD)
- **Semantic HTML** structure
- **Accessible** design patterns

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Ahmad Dandi Subhani**
- 🎓 Informatic Engineering Student at Universitas Indraprasta PGRI
- 💼 IT Specialist & Web Developer
- 📍 Jakarta, Indonesia
- 🌐 [Portfolio](https://dandisubhani.web.id)
- 📧 [dandiedutech@gmail.com](mailto:dandiedutech@gmail.com)

### Connect with me:
[![LinkedIn](https://img.shields.io/badge/LinkedIn-dandisubhani-blue?style=flat&logo=linkedin)](https://linkedin.com/in/dandisubhani)
[![GitHub](https://img.shields.io/badge/GitHub-dandiedutech-black?style=flat&logo=github)](https://github.com/dandiedutech)
[![Instagram](https://img.shields.io/badge/Instagram-@dandisubhani_-purple?style=flat&logo=instagram)](https://instagram.com/dandisubhani_)

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Vercel** for seamless deployment
- **DevIcons** for technology logos

---

<div align="center">
  <p>Made with ❤️ by Ahmad Dandi Subhani</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>