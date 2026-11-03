import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Server,
  Layout,
  Smartphone,
  Database,
  Wrench,
  Cpu,
} from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ai');

  const categories = [
    { id: 'ai', label: 'AI & Machine Learning', icon: Brain },
    { id: 'backend', label: 'Backend & Cloud', icon: Server },
    { id: 'frontend', label: 'Frontend & Web', icon: Layout },
    { id: 'mobile', label: 'Mobile Engineering', icon: Smartphone },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'tools', label: 'DevOps & Tools', icon: Wrench },
  ];

  const skillItems = [
    // Languages
    { name: 'Python', category: 'backend', badge: 'Core' },
    { name: 'Java', category: 'backend', badge: 'Core' },
    { name: 'TypeScript', category: 'frontend', badge: 'Advanced' },
    { name: 'JavaScript (ES6+)', category: 'frontend', badge: 'Advanced' },
    { name: 'Kotlin', category: 'mobile', badge: 'Mobile Core' },
    { name: 'C / C++', category: 'backend', badge: 'Systems' },
    { name: 'Dart', category: 'mobile', badge: 'Flutter' },

    // AI & ML
    { name: 'PyTorch', category: 'ai', badge: 'Deep Learning' },
    { name: 'TensorFlow & Keras', category: 'ai', badge: 'Deep Learning' },
    { name: 'Scikit-Learn & XGBoost', category: 'ai', badge: 'ML Modeling' },
    { name: 'YOLOv8 & OpenCV', category: 'ai', badge: 'Computer Vision' },
    { name: 'XGBoost & Time-Series NILM', category: 'ai', badge: 'Disaggregation AI' },
    { name: 'CNNs & Transformers (NILM)', category: 'ai', badge: 'Deep Learning' },
    { name: 'Agentic AI & LangChain', category: 'ai', badge: 'LLMs & Agents' },
    { name: 'Model Context Protocol (MCP)', category: 'ai', badge: 'Agent Architecture' },
    { name: 'OCR & Image Extraction', category: 'ai', badge: 'CV Pipeline' },

    // Backend & Cloud
    { name: 'Node.js & Express', category: 'backend', badge: 'Microservices' },
    { name: 'FastAPI & Flask', category: 'backend', badge: 'Python APIs' },
    { name: 'REST API Design', category: 'backend', badge: 'Architecture' },
    { name: 'Supabase & Firebase', category: 'backend', badge: 'Cloud BaaS' },
    { name: 'Plesk Server Deployment', category: 'backend', badge: 'DevOps' },
    { name: 'Ktor (Local Embedded Server)', category: 'backend', badge: 'Mobile Server' },

    // Frontend & Web
    { name: 'React.js', category: 'frontend', badge: 'Frontend Core' },
    { name: 'Tailwind CSS', category: 'frontend', badge: 'Styling' },
    { name: 'TanStack Start & Router', category: 'frontend', badge: 'Full-Stack SSR' },
    { name: 'Vite & Webpack', category: 'frontend', badge: 'Build Tools' },
    { name: 'Streamlit', category: 'frontend', badge: 'AI Dashboards' },

    // Mobile & Hardware
    { name: 'Android SDK & Studio', category: 'mobile', badge: 'Android' },
    { name: 'Capacitor.js (iOS & Android)', category: 'mobile', badge: 'Cross-Platform Bridge' },
    { name: 'Jetpack Compose & Compose for TV', category: 'mobile', badge: 'Android TV & Mobile' },
    { name: 'USB Serial / IRDA Protocols', category: 'mobile', badge: 'Hardware Telemetry' },
    { name: 'Flutter & Dart', category: 'mobile', badge: 'Cross-Platform' },
    { name: 'XML & Java Mobile Apps', category: 'mobile', badge: 'Play Store Published' },

    // Databases
    { name: 'MySQL', category: 'databases', badge: 'Relational DB' },
    { name: 'PostgreSQL', category: 'databases', badge: 'Relational DB' },
    { name: 'DuckDB & Analytical SQL', category: 'databases', badge: 'Analytical DB' },
    { name: 'SQLite (Mobile & Local Sync)', category: 'databases', badge: 'Embedded DB' },

    // Tools & DevOps
    { name: 'Git & GitHub', category: 'tools', badge: 'Version Control' },
    { name: 'Docker', category: 'tools', badge: 'Containers' },
    { name: 'macOS / Unix Shell', category: 'tools', badge: 'Environment' },
    { name: 'Windows OS', category: 'tools', badge: 'Environment' },
    { name: 'Android Studio', category: 'tools', badge: 'IDE' },
    { name: 'Xcode', category: 'tools', badge: 'iOS / macOS IDE' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skillItems
      : skillItems.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & Tech Stack
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            The languages, frameworks and infrastructure behind the projects below.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white border border-indigo-400/40 shadow-lg shadow-indigo-600/30'
                    : 'bg-[#111113] text-zinc-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl bg-[#111113] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-md group hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white text-base group-hover:text-indigo-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
                    {skill.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
