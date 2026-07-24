import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar, CheckCircle2, Building2, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Machine Learning & Full-Stack Engineer',
      company: 'Bharat Smart Services',
      location: 'Hyderabad, India',
      period: 'Jan 2026 – Present',
      type: 'work',
      description:
        'Engineered production machine learning models, Agentic AI systems, and cloud microservices for smart meter telemetry and energy disaggregation.',
      achievements: [
        'Built and trained CNN & XGBoost models for Non-Intrusive Load Monitoring (NILM) on 5-second interval smart meter time-series data',
        'Developed OCR-based computer vision pipelines for automated numerical digit extraction from physical smart meters',
        'Architected Agentic AI applications integrating LLMs, tool calling, and automated business workflows',
        'Integrated REST APIs, databases (Supabase, Firebase, MySQL), and modern web/mobile frontends',
      ],
      tech: ['Python', 'PyTorch', 'OpenCV', 'XGBoost', 'LLMs', 'React', 'Node.js', 'Supabase'],
    },
    {
      role: 'Web Development Intern (MERN Stack)',
      company: 'EY Global Delivery Services × AICTE (Edunet Foundation)',
      location: 'Virtual / Industry Program',
      period: 'Mar 2025 – Apr 2025',
      type: 'work',
      description:
        'Completed an intensive industry-focused software engineering program on full-stack web application development.',
      achievements: [
        'Developed full-stack web modules using MongoDB, Express.js, React.js, and Node.js',
        'Designed secure RESTful API endpoints and integrated responsive Tailwind CSS UI components',
        'Collaborated using Git feature branching workflows and code review practices',
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'Git'],
    },
    {
      role: 'Android Application Developer',
      company: 'Telangana State Police Academy (TGPA)',
      location: 'Hyderabad, India',
      period: 'Mar 2024 – Aug 2024',
      type: 'work',
      description:
        'Designed, built, and deployed an official legal repository Android application published on the Google Play Store.',
      achievements: [
        'Implemented structured legal section comparisons between old and new Indian criminal laws',
        'Built high-speed offline search indexing enabling instant section retrieval for officers on duty',
        'Worked directly with TGPA faculty and senior officials to ensure legal data integrity',
        'Successfully published and maintained the application live on the Google Play Store',
      ],
      tech: ['Android SDK', 'Java', 'XML', 'SQLite', 'Play Store Publishing'],
    },
    {
      role: 'Android App Development Intern',
      company: 'Acmegrade',
      location: 'Remote',
      period: 'Nov 2023 – Jan 2024',
      type: 'work',
      description:
        'Focused on core Android development fundamentals, system lifecycles, and UI architecture.',
      achievements: [
        'Designed and implemented Java-based mobile application modules with low latency',
        'Structured layout hierarchies, navigation graphs, and activity state handling',
      ],
      tech: ['Java', 'Android Studio', 'XML', 'Mobile UX'],
    },
    {
      role: 'Smart India Hackathon (SIH) 2022 – Grand Finalist',
      company: 'Ministry of Education, Government of India',
      location: 'National Grand Finale',
      period: 'August 2022',
      type: 'achievement',
      description:
        'Shortlisted among top developer teams across India for the Grand Finale of SIH 2022 (Senior Software Edition).',
      achievements: [
        'Developed a Python software application addressing a real-world national problem statement',
        'Shortlisted for the 36-hour non-stop Grand Finale hackathon held on August 25–26, 2022',
        'Demonstrated rapid prototyping, system architecture design, and team leadership',
      ],
      tech: ['Python', 'System Architecture', 'Rapid Prototyping'],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#09090B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & MILESTONES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & Milestones
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            My professional journey across machine learning engineering, enterprise app development, and national hackathons.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-transparent transform -translate-x-1/2 hidden sm:block opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Icon Node */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#111113] border-2 border-indigo-500 shadow-lg shadow-indigo-500/20 flex items-center justify-center z-10 hidden sm:flex">
                  {exp.type === 'achievement' ? (
                    <Award className="w-5 h-5 text-amber-400" />
                  ) : (
                    <Briefcase className="w-5 h-5 text-indigo-400" />
                  )}
                </div>

                {/* Content Box */}
                <div className={`w-full sm:w-1/2 ${idx % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12'}`}>
                  <div className="p-6 sm:p-8 rounded-3xl bg-[#111113] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl space-y-4 group">
                    
                    {/* Period & Location Pill */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400">
                      <div className="flex items-center gap-1.5 text-indigo-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-zinc-500">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Role & Company */}
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-indigo-400 flex items-center gap-1.5 mt-1">
                        <Building2 className="w-4 h-4 text-zinc-400" />
                        <span>{exp.company}</span>
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-zinc-400 text-[10px] font-mono border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
