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
  Layers,
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
    { name: 'Python', category: 'backend', level: 92, badge: 'Core', experience: '4+ Yrs' },
    { name: 'Java', category: 'backend', level: 85, badge: 'Core', experience: '3+ Yrs' },
    { name: 'TypeScript', category: 'frontend', level: 88, badge: 'Advanced', experience: '3+ Yrs' },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 90, badge: 'Advanced', experience: '4+ Yrs' },
    { name: 'Kotlin', category: 'mobile', level: 85, badge: 'Mobile Core', experience: '2+ Yrs' },
    { name: 'C / C++', category: 'backend', level: 78, badge: 'Systems', experience: '2+ Yrs' },
    { name: 'Dart', category: 'mobile', level: 80, badge: 'Flutter', experience: '2+ Yrs' },

    // AI & ML
    { name: 'PyTorch', category: 'ai', level: 88, badge: 'Deep Learning', experience: '3+ Yrs' },
    { name: 'TensorFlow & Keras', category: 'ai', level: 82, badge: 'Deep Learning', experience: '2+ Yrs' },
    { name: 'Scikit-Learn & XGBoost', category: 'ai', level: 90, badge: 'ML Modeling', experience: '3+ Yrs' },
    { name: 'YOLOv8 & OpenCV', category: 'ai', level: 86, badge: 'Computer Vision', experience: '2+ Yrs' },
    { name: 'CNNs & Time-Series NILM', category: 'ai', level: 90, badge: 'Specialized', experience: '2+ Yrs' },
    { name: 'Agentic AI & LangChain', category: 'ai', level: 85, badge: 'LLMs & Agents', experience: '1+ Yrs' },
    { name: 'OCR & Image Extraction', category: 'ai', level: 88, badge: 'CV Pipeline', experience: '2+ Yrs' },

    // Backend & Cloud
    { name: 'Node.js & Express', category: 'backend', level: 88, badge: 'Microservices', experience: '3+ Yrs' },
    { name: 'FastAPI & Flask', category: 'backend', level: 86, badge: 'Python APIs', experience: '3+ Yrs' },
    { name: 'REST API Design', category: 'backend', level: 92, badge: 'Architecture', experience: '4+ Yrs' },
    { name: 'Supabase & Firebase', category: 'backend', level: 88, badge: 'Cloud BaaS', experience: '3+ Yrs' },
    { name: 'Plesk Server Deployment', category: 'backend', level: 82, badge: 'DevOps', experience: '2+ Yrs' },
    { name: 'Ktor (Local Embedded Server)', category: 'backend', level: 80, badge: 'Mobile Server', experience: '1+ Yrs' },

    // Frontend & Web
    { name: 'React.js', category: 'frontend', level: 90, badge: 'Frontend Core', experience: '3+ Yrs' },
    { name: 'Tailwind CSS', category: 'frontend', level: 92, badge: 'Styling', experience: '3+ Yrs' },
    { name: 'TanStack Router & Query', category: 'frontend', level: 85, badge: 'State & Routing', experience: '2+ Yrs' },
    { name: 'Vite & Webpack', category: 'frontend', level: 88, badge: 'Build Tools', experience: '3+ Yrs' },
    { name: 'Streamlit', category: 'frontend', level: 92, badge: 'AI Dashboards', experience: '3+ Yrs' },

    // Mobile
    { name: 'Android SDK & Studio', category: 'mobile', level: 90, badge: 'Android', experience: '3+ Yrs' },
    { name: 'Jetpack Compose', category: 'mobile', level: 86, badge: 'Modern Android', experience: '2+ Yrs' },
    { name: 'Flutter', category: 'mobile', level: 80, badge: 'Cross-Platform', experience: '2+ Yrs' },
    { name: 'XML & Java Mobile Apps', category: 'mobile', level: 88, badge: 'Play Store Published', experience: '3+ Yrs' },

    // Databases
    { name: 'MySQL', category: 'databases', level: 88, badge: 'Relational DB', experience: '3+ Yrs' },
    { name: 'PostgreSQL', category: 'databases', level: 82, badge: 'Relational DB', experience: '2+ Yrs' },
    { name: 'DuckDB & Analytical SQL', category: 'databases', level: 85, badge: 'Analytical DB', experience: '2+ Yrs' },
    { name: 'SQLite (Mobile & Local Sync)', category: 'databases', level: 90, badge: 'Embedded DB', experience: '3+ Yrs' },

    // Tools & DevOps
    { name: 'Git & GitHub', category: 'tools', level: 92, badge: 'Version Control', experience: '4+ Yrs' },
    { name: 'Docker', category: 'tools', level: 78, badge: 'Containers', experience: '2+ Yrs' },
    { name: 'macOS / Unix Shell', category: 'tools', level: 90, badge: 'Environment', experience: '4+ Yrs' },
    { name: 'Windows OS', category: 'tools', level: 88, badge: 'Environment', experience: '4+ Yrs' },
    { name: 'Antigravity AI', category: 'tools', level: 92, badge: 'AI IDE & Tooling', experience: '1+ Yrs' },
    { name: 'VS Code', category: 'tools', level: 95, badge: 'IDE', experience: '4+ Yrs' },
    { name: 'Android Studio', category: 'tools', level: 92, badge: 'IDE', experience: '3+ Yrs' },
    { name: 'Xcode', category: 'tools', level: 82, badge: 'iOS / macOS IDE', experience: '2+ Yrs' },
    { name: 'PyCharm', category: 'tools', level: 90, badge: 'Python IDE', experience: '3+ Yrs' },
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
            A comprehensive overview of programming languages, frameworks, AI tools, and infrastructure I work with daily.
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white text-base group-hover:text-indigo-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
                    {skill.badge}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                  <span className="font-mono text-[11px]">Proficiency</span>
                  <span className="font-mono font-semibold text-indigo-400">{skill.level}%</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
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
