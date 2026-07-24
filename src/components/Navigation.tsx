import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'architecture', 'projects', 'experience', 'achievements', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mayur_Gangireddy_Resume.pdf';
    link.download = 'Mayur_Gangireddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'blog', label: 'Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090B]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2.5 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#111113] rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
              <Terminal className="w-5 h-5 text-indigo-400 group-hover:text-white transition-colors" />
            </div>
          </div>
          <div>
            <span className="text-white font-bold tracking-tight text-lg group-hover:text-indigo-400 transition-colors">
              Mayur Gangireddy
            </span>
            <span className="block text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
              Software & AI Engineer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111113]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-indigo-600/80 rounded-full border border-indigo-400/30 -z-10 shadow-lg shadow-indigo-600/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button: Resume */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 border border-indigo-400/30 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={handleDownloadResume}
            className="p-2 text-xs font-medium text-white bg-indigo-600/80 rounded-lg flex items-center gap-1"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white bg-[#111113] rounded-lg border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090B]/95 backdrop-blur-2xl border-b border-white/10 px-4 py-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                      : 'text-zinc-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/10 mt-2 flex flex-col gap-3">
                <button
                  onClick={handleDownloadResume}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-indigo-600/30"
                >
                  <Download className="w-4 h-4" />
                  Download Resume PDF
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
