import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Database,
  Layout,
  Server,
  GitBranch,
  Figma,
  ExternalLink,
  User,
  Briefcase,
  FolderGit2,
  MessageCircle,
  ChevronDown,
} from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { TechStackIcon } from './components/TechStackIcon';
import { TechBadge } from './components/TechBadge';
import { ExperienceCard } from './components/ExperienceCard';
import { CertificateCard } from './components/CertificateCard';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-['Inter',sans-serif] overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Eska Natasia Silaen
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex gap-8"
            >
              {['About', 'Tech Stack', 'Projects', 'Certifications', 'Activities', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                  Available for Internship
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Eska Natasia Silaen
                </span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-slate-300 mb-6"
              >
                Aspiring Web Developer
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-slate-400 text-lg mb-8 leading-relaxed"
              >
              Interested in building web applications and information systems, and learning how technology can solve real-world problems.              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'https://drive.google.com/file/d/16qC5nFd3sWj8iBh4MFoh8OwifqF5cNv0/view?usp=sharing';
                    link.download = 'Eska Natasia Silaen - CV.pdf';
                    link.click();
                  }}
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download CV
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Me
                </button>
              </motion.div>
              
              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 mt-8"
              >
                {[
                  { icon: Github, href: 'https://github.com/Eskasilaen', label: 'GitHub' },
                  { icon: Linkedin, href: 'www.linkedin.com/in/eska-natasia-silaen', label: 'LinkedIn' },
                  { icon: Mail, href: 'eskasln01@gmail.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 transition-all hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Right content - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl" />
                
                {/* Image container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-2xl">
                  <img
                    src="https://i.ibb.co.com/9HfX5Twm/Whats-App-Image-2026-01-15-at-23-08-42.jpg"
                    alt="Eska Natasia Silaen"
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                </div>
                
                {/* Floating tech icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Code2 className="w-8 h-8" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Database className="w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <span className="text-sm">Scroll Down</span>
              <ChevronDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <User className="w-6 h-6 text-blue-400" />
              <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-700/50 backdrop-blur-sm">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Information Systems student at Institut Teknologi Del with experience in full-stack web development, system analysis, and database design. Skilled in React.js, Node.js, Laravel, and REST APIs through academic and project-based work. Interested in building scalable web applications and improving business processes through technology.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { 
                    label: 'Education', 
                    value: 'Information Systems\nInstitut Teknologi Del\n2023–2027',
                    multiline: true
                  },
                  { label: 'Location', value: 'Medan, Indonesia' },                              
                  { label: 'Status', value: 'Open for Internship' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50"
                  >
                    <p className="text-slate-500 text-sm mb-1">{item.label}</p>
                    <p className="text-white font-medium whitespace-pre-line">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="relative py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-blue-400" />
              <h2 className="text-4xl md:text-5xl font-bold">Tech Stack</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-slate-400 mt-4 text-lg">Technologies I work with</p>
          </motion.div>
          
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
              <Layout className="w-6 h-6" />
              Frontend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'HTML', icon: <Code2 className="w-8 h-8" /> },
                { name: 'CSS3', icon: <Layout className="w-8 h-8" /> },
                { name: 'JavaScript', icon: <Code2 className="w-8 h-8" /> },
                { name: 'React', icon: <Code2 className="w-8 h-8" /> },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TechStackIcon icon={tech.icon} name={tech.name} />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center gap-2">
              <Server className="w-6 h-6" />
              Backend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'Node.js', icon: <Server className="w-8 h-8" /> },
                { name: 'Express', icon: <Server className="w-8 h-8" /> },
                { name: 'Laravel', icon: <Server className="w-8 h-8" /> },
                { name: 'REST API', icon: <Code2 className="w-8 h-8" /> },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TechStackIcon icon={tech.icon} name={tech.name} />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Database & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-green-400 flex items-center gap-2">
              <Database className="w-6 h-6" />
              Database & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'MySQL', icon: <Database className="w-8 h-8" /> },
                { name: 'PostgreSQL', icon: <Database className="w-8 h-8" /> },
                { name: 'MongoDB', icon: <Database className="w-8 h-8" /> },
                { name: 'Git', icon: <GitBranch className="w-8 h-8" /> },
                { name: 'GitHub', icon: <Github className="w-8 h-8" /> },
                { name: 'Figma', icon: <Figma className="w-8 h-8" /> },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TechStackIcon icon={tech.icon} name={tech.name} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <FolderGit2 className="w-6 h-6 text-blue-400" />
              <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-slate-400 mt-4 text-lg">Some of my recent work</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Chem Discovery – AI-Powered Chemical Discovery System',
                description: 'AI-powered web system that uses backend APIs to support automated chemical compound discovery.',
                image: 'https://i.ibb.co.com/7fb261J/proyek.png',
                tags: ['React.js', 'Express.js', 'Flask', 'MongoDB', 'AI Integration'],
                githubUrl: 'https://github.com/Eskasilaen/chemical_discovery_ai',
              },
              {
                title: '1000 Days Child Growth & Development Platform',
                description: 'Web platform for tracking child development in the first 1000 days.',
                image: 'https://i.ibb.co.com/TMX8Mkf4/Screenshot-2277.png',
                tags: ['Laravel', 'MySQL', 'REST API', 'Authentication'],
                githubUrl: 'https://github.com/Eskasilaen/Golden_Age',
              },
              {
                title: 'TOPATOP – Digital Food Marketplace System Design',
                description: 'Designed a digital food marketplace system for Lake Toba.',
                image: 'https://i.ibb.co.com/6xjyLBv/Whats-App-Image-2026-01-16-at-11-01-27.jpg',
                tags: ['BPMN', 'Use Case', 'DFD', 'ER Diagram', 'System Analysis'],
                Documentation: 'https://drive.google.com/file/d/1I1Phv6poxjKyFbsBFpr7guVFyQGvPXdN/view?usp=sharing',
              },
              {
                title: 'Rumah Kreatif Toba – UI/UX Evaluation and Redesign',
                description: 'Evaluated platform usability and redesigned the interface by creating wireframes and prototypes.',
                image: 'https://i.ibb.co.com/mCLg4DJ4/Whats-App-Image-2026-03-08-at-18-06-34.jpg',
                tags: ['Heuristic Evaluation', 'SUS', 'Figma', 'UI/UX'],
                Documentation: 'https://drive.google.com/file/d/1f_85m5EGN2h-2vdMrUm9qVGVM9PcDWEi/view?usp=sharing',
              },
              {
                title: 'Academic Process Analysis & Redesign',
                description: 'Analyzed and redesigned academic learning processes to improve efficiency.',
                image: 'https://i.ibb.co.com/1Gs6xbM2/bpmn-process.jpg',
                tags: ['BPMN', 'Process Analysis', 'Workflow Design', 'Process Redesign'],
                Documentation: 'https://drive.google.com/file/d/1NHbUgGQgjF7uF0749gYd4lHC1W2p4ILY/view?usp=sharing',
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="Certificates" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Figma className="w-6 h-6 text-blue-400" />
              <h2 className="text-4xl md:text-5xl font-bold">Certificates</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-slate-400 mt-4 text-lg">Professional certifications and achievements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Asah Program — Front-End Web & Back-End with AI',
                issuer: 'Dicoding x Accenture',
                year: 2026,
                image: 'https://i.ibb.co.com/SwKLpLSP/Whats-App-Image-2026-03-08-at-07-04-11.jpg',
              },
              {
                title: 'Best Capstone Project — Asah Program',
                issuer: 'Dicoding x Accenture',
                year: 2026,
                image: 'https://i.ibb.co.com/PzJfRDqc/Whats-App-Image-2026-03-08-at-07-45-06.jpg',
              },
              {
                title: 'Back-End Development with JavaScript',
                issuer: 'Dicoding',
                year: 2025,
                image: 'https://i.ibb.co.com/wrjQDR9h/Whats-App-Image-2026-01-16-at-12-48-37.jpg',
              },
              {
                title: 'Web Development Intermediate',
                issuer: 'Dicoding',
                year: 2025,
                image: 'https://i.ibb.co.com/V7d7g86/Whats-App-Image-2026-01-16-at-12-50-11.jpg',
              },
              {
                title: 'Front-End Web Development Fundamentals',
                issuer: 'Dicoding',
                year: 2025,
                image: 'https://i.ibb.co.com/hFNj18LZ/Whats-App-Image-2026-01-16-at-12-51-12.jpg',
              },
              {
                title: 'Git & GitHub Fundamentals',
                issuer: 'Dicoding',
                year: 2025,
                image: 'https://i.ibb.co.com/gLjW2pKp/Whats-App-Image-2026-01-16-at-12-50-45.jpg',
              },
              {
                title: 'HCIA–AI V4.0 Certification',
                issuer: 'Huawei ICT Academy',
                year: 2025,
                image: 'https://i.ibb.co.com/Q33f77s2/Sertifikat-Huawei.png',
              },
              {
                title: 'Associate Data Scientist Training',
                issuer: 'VSGA – Digital Talent Scholarship',
                year: 2025,
                image: 'https://i.ibb.co.com/MDkzt913/Whats-App-Image-2026-01-16-at-12-49-21.jpg',
              },
            ].map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CertificateCard certificate={certificate} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="Activities" className="relative py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Briefcase className="w-6 h-6 text-blue-400" />
              <h2 className="text-4xl md:text-5xl font-bold">Activities</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <ExperienceCard
                title="Secretary"
                company="Del Data Science Club"
                period="Aug 2024-Present"
                description="Handled administrative tasks including documentation, meeting notes, and communication, and supported the organization of workshops and data science activities."
                type="organization"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ExperienceCard
                title="Event Committee Member"
                company="Information Systems Student Association"
                period="Mar 2024-Present"
                description="Helped organize student events by preparing event rundowns, coordinating activities, and managing event preparations such as permits and prize distribution to ensure events ran smoothly."
                type="organization"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ExperienceCard
                title="Member-Sports Department"
                company="BEM IT Del"
                period="Nov 2024-Present"
                description="Assisted in organizing weekly student sports activities and helped coordinate the KM Cup, a campus sports competition involving multiple student organizations."
                type="organization"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <MessageCircle className="w-6 h-6 text-blue-400" />
              <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-slate-400 mt-4 text-lg">Let's discuss your next project</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'eskasln01@gmail.com',
                  href: 'mailto:eskasln01@gmail.com',
                  color: 'blue',
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/eska-natasia-silaen',
                  href: 'https://www.linkedin.com/in/eska-natasia-silaen/',
                  color: 'purple',
                },
                {
                  icon: Github,
                  label: 'GitHub',
                  value: 'github.com/Eskasilaen',
                  href: 'https://github.com/Eskasilaen',
                  color: 'green',
                },
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    group relative p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50
                    hover:border-${contact.color}-500/50 backdrop-blur-sm transition-all
                  `}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${contact.color}-500/10 flex items-center justify-center group-hover:bg-${contact.color}-500/20 transition-all`}>
                    <contact.icon className={`w-8 h-8 text-${contact.color}-400`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{contact.label}</h3>
                  <p className="text-slate-400 text-sm mb-4">{contact.value}</p>
                  <div className="flex items-center justify-center gap-2 text-blue-400 text-sm font-medium">
                    Connect
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${contact.color}-500/0 to-${contact.color}-500/0 group-hover:from-${contact.color}-500/5 group-hover:to-${contact.color}-500/5 rounded-2xl pointer-events-none transition-all duration-500`} />
                </motion.a>
              ))}
            </div>
            
            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl border border-blue-500/30 backdrop-blur-sm text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
              <p className="text-slate-400 mb-6">
                I'm currently looking for internship opportunities where I can contribute,
                learn, and grow as a developer.
              </p>
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'https://drive.google.com/file/d/16qC5nFd3sWj8iBh4MFoh8OwifqF5cNv0/view?usp=sharing';
                  link.download = 'Eska Natasia Silaen - CV.pdf';
                  link.click();
                }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download My CV
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 Eska Natasia Silaen. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {[
                { icon: Github, href: 'https://github.com/Eskasilaen' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/eska-natasia-silaen/' },
                { icon: Mail, href: 'eskasln01@gmail.com' },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
