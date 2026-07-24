import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Github,
  Linkedin,
  ArrowRight,
  Layers,
  Cpu,
  Smartphone,
  Globe,
  Award,
} from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
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

  const stats = [
    { label: 'Production Projects', value: '10+', icon: Layers, color: 'text-indigo-400' },
    { label: 'AI & ML Systems', value: '5+', icon: Cpu, color: 'text-cyan-400' },
    { label: 'Mobile Apps', value: '2', icon: Smartphone, color: 'text-emerald-400' },
    { label: 'Google Play Store App', value: '1', icon: Globe, color: 'text-amber-400' },
    { label: 'SIH Finalist', value: 'National', icon: Award, color: 'text-rose-400' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-grid-pattern overflow-hidden"
    >
      {/* Radial Gradient Glowing Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111113]/90 border border-white/10 text-xs font-medium backdrop-blur-md shadow-inner"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-zinc-300">Available for Full-Time Roles</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400">Remote / Hybrid</span>
            </motion.div>

            {/* Main Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Mayur Gangireddy
              </h1>
              
              <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl lg:text-2xl font-semibold text-zinc-300">
                <span className="text-indigo-400">Software Engineer</span>
                <span className="text-zinc-600">•</span>
                <span className="text-cyan-400">AI & Machine Learning Specialist</span>
                <span className="text-zinc-600">•</span>
                <span className="text-emerald-400">Full Stack Engineer</span>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal"
            >
              Building production-grade AI systems, cloud platforms, mobile applications, and scalable backend software. Specialized in transforming complex deep learning models and enterprise requirements into high-performing, resilient applications.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 border border-indigo-400/40 flex items-center gap-2 cursor-pointer group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="px-6 py-3.5 bg-[#111113] hover:bg-white/10 text-white rounded-xl font-semibold text-sm transition-all duration-200 border border-white/10 hover:border-white/20 flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume PDF</span>
              </button>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/gangireddymayur"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 bg-[#111113] hover:bg-white/10 text-zinc-400 hover:text-white rounded-xl border border-white/10 hover:border-indigo-500/40 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="http://www.linkedin.com/in/mayur-gangireddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 bg-[#111113] hover:bg-white/10 text-zinc-400 hover:text-white rounded-xl border border-white/10 hover:border-cyan-500/40 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Card / Profile Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative max-w-md mx-auto"
            >
              {/* Outer Glow Card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse-slow"></div>

              {/* Main Photo Card */}
              <div className="relative bg-[#111113] border border-white/10 rounded-2xl overflow-hidden p-3 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900">
                  <img
                    src="/image.png"
                    alt="Mayur Gangireddy"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#111113]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">Mayur Gangireddy</p>
                      <p className="text-[11px] text-zinc-400 font-mono">B.Tech CSE (AI & ML) '25</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 text-[10px] font-mono border border-indigo-500/30">
                      Hyderabad, IN
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Quick Stats Grid Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#111113]/80 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  Metric
                </span>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white tracking-tight font-mono">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-zinc-400 mt-1">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
