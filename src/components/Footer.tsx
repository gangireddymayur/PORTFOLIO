import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-[#09090B] border-t border-white/10 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-bold tracking-tight text-sm">
                Mayur Gangireddy
              </span>
              <span className="block text-[10px] text-zinc-500 font-mono">
                Software & AI Engineer
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-white transition-colors">Skills</button>
            <button onClick={() => scrollToSection('architecture')} className="hover:text-white transition-colors">Architecture</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-white transition-colors">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button>
          </div>

          {/* Live Clock & Location */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111113] border border-white/10 font-mono text-[11px] text-zinc-300">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            <span>Hyderabad, IN: {time || 'IST'}</span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <p>© {new Date().getFullYear()} Mayur Gangireddy. Built with React, TypeScript & Tailwind CSS.</p>

          <div className="flex items-center gap-4 text-zinc-400">
            <a href="https://github.com/gangireddymayur" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="http://www.linkedin.com/in/mayur-gangireddy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:mayurgangereddy12345@gmail.com" className="hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
