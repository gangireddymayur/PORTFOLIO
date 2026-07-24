import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Smartphone,
  Server,
  Code2,
  CheckCircle2,
  Sparkles,
  Terminal,
} from 'lucide-react';

const About: React.FC = () => {
  const pillars = [
    {
      icon: Brain,
      title: 'AI & Agentic Systems',
      description:
        'Designing CNNs, Computer Vision (YOLOv8), Time-Series disaggregation (NILM), and multi-step Agentic AI workflows with LLMs and tool-calling capabilities.',
      color: 'text-indigo-400',
      borderColor: 'hover:border-indigo-500/50',
      glow: 'group-hover:shadow-indigo-500/10',
    },
    {
      icon: Server,
      title: 'Backend & Cloud Platforms',
      description:
        'Architecting robust RESTful microservices and databases (MySQL, PostgreSQL, DuckDB, Supabase, Firebase) deployed on Plesk and cloud infrastructure.',
      color: 'text-cyan-400',
      borderColor: 'hover:border-cyan-500/50',
      glow: 'group-hover:shadow-cyan-500/10',
    },
    {
      icon: Smartphone,
      title: 'Mobile Engineering',
      description:
        'Building native Android apps (Kotlin, Jetpack Compose, Play Store published apps) and cross-platform mobile apps (Flutter) with local offline servers (Ktor).',
      color: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/50',
      glow: 'group-hover:shadow-emerald-500/10',
    },
    {
      icon: Code2,
      title: 'Full Stack Frontend',
      description:
        'Creating high-performance web user interfaces using React, TypeScript, Vite, Tailwind CSS, TanStack Router, and modern state management.',
      color: 'text-amber-400',
      borderColor: 'hover:border-amber-500/50',
      glow: 'group-hover:shadow-amber-500/10',
    },
  ];

  const coreStrengths = [
    'End-to-End System Ownership (Concept to Production)',
    'NILM & Smart Meter Time-Series Analytics',
    'OCR & Deep Learning Computer Vision Pipelines',
    'Offline-First Native Android Architecture',
    'Multi-Role Cloud Authentication & RBAC',
    'Deterministic NL-to-SQL Analytics Engines',
  ];

  return (
    <section id="about" className="py-24 relative bg-[#09090B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Production-Grade Software & AI
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Bridging the gap between deep machine learning research and resilient production software.
          </p>
        </div>

        {/* Story & Pillars Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Story Content */}
          <div className="lg:col-span-6 space-y-6 text-zinc-300">
            <div className="p-8 rounded-2xl bg-[#111113] border border-white/10 space-y-5">
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>Full-Spectrum Software Engineering</span>
              </h3>
              
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                As a Computer Science & AI/ML Engineer (B.Tech '25), my focus is on constructing practical, scalable systems. I don't just build machine learning models in notebooks—I wrap them in high-throughput backend APIs, build sleek frontend interfaces, and deploy them to real-world cloud and mobile environments.
              </p>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                My work spans building non-intrusive load monitoring (NILM) systems for smart meter data at <strong className="text-white">Bharat Smart Services</strong>, publishing official government law enforcement apps for the <strong className="text-white">Telangana State Police Academy</strong>, and building enterprise platforms like <strong className="text-white">Hostel Hub Pro</strong> and <strong className="text-white">SignageHub</strong>.
              </p>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
                  Core Engineering Capabilities
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {coreStrengths.map((strength, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-medium text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Pillars Cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group p-6 rounded-2xl bg-[#111113] border border-white/10 ${pillar.borderColor} transition-all duration-300 shadow-lg ${pillar.glow} flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
