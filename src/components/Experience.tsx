import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar, CheckCircle2, Building2, MapPin, Smartphone, Home, Sparkles, Play, Apple } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  playStore?: string;
  appStore?: string;
  achievements?: string[];
  tracks?: {
    title: string;
    points: string[];
    apps?: {
      name: string;
      desc: string;
      playStore?: string;
      appStore?: string;
    }[];
  }[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'Machine Learning & Full-Stack Engineer',
      company: 'Bharat Smart Services',
      location: 'Hyderabad, India',
      period: 'Jan 2026 – Present',
      type: 'work',
      description:
        'Dual-responsibility engineering role spanning production machine learning research and end-to-end full-stack & mobile application engineering.',
      tracks: [
        {
          title: 'AI & Machine Learning Engineering',
          points: [
            'Trained & benchmarked deep learning models (1D/2D CNNs, Time-Series Transformers) and tabular XGBoost for Non-Intrusive Load Monitoring (NILM) on 5-second interval smart meter time-series data',
            'Engineered sliding-window transient feature pipelines on total mains power paired with appliance ground-truth telemetry; selected XGBoost for superior production generalization and inference speed',
            'Achieved 97% disaggregation accuracy on Geyser (water heater) and ~85% average accuracy across dynamic multi-state appliances (AC, Refrigerator, Washing Machine)',
            'Developed OCR-based computer vision pipelines for automated numerical digit extraction from physical smart meters',
            'Architected Agentic AI applications integrating LLMs, tool calling, and automated business workflows',
          ],
        },
        {
          title: 'Full-Stack & Mobile Engineering (Flagship Production Apps)',
          points: [],
          apps: [
            {
              name: 'Bharat Smart Services',
              desc: 'Production utility app for smart meter reading, billing & live telemetry. Features custom native Java USB IRDA serial drivers, camera OCR verification review, utility billing (TSSPDCL, TSNPDCL, HMWSSB), and native iOS/Android home screen widgets.',
              playStore: 'https://play.google.com/store/apps/details?id=in.coral.met',
              appStore: 'https://apps.apple.com/in/app/bharat-smart-services/id1584345371',
            },
            {
              name: 'Bharat Smart Home',
              desc: 'Enterprise smart home & IoT lifestyle automation platform. Unified room device hierarchy, condition-based automation schedulers, scenes orchestration, and disaggregated household energy intelligence.',
              playStore: 'https://play.google.com/store/apps/details?id=com.bharat.smarthome',
              appStore: 'https://apps.apple.com/in/app/bharat-smart-home-energy-iot/id6737525389',
            },
          ],
        },
      ],
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
    },
    {
      role: 'Android Application Developer',
      company: 'Telangana State Police Academy (TGPA)',
      location: 'Hyderabad, India',
      period: 'Mar 2024 – Aug 2024',
      type: 'work',
      playStore: 'https://play.google.com/store/apps/details?id=com.sphn.tgpa&hl=en_IN',
      description:
        'Designed, built, and deployed an official legal repository Android application published on the Google Play Store.',
      achievements: [
        'Implemented structured legal section comparisons between old and new Indian criminal laws',
        'Built high-speed offline search indexing enabling instant section retrieval for officers on duty',
        'Worked directly with TGPA faculty and senior officials to ensure legal data integrity',
        'Successfully published and maintained the application live on the Google Play Store',
      ],
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

        {/* Timeline Container with Center Line */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Vertical Middle Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-indigo-500/20 transform -translate-x-1/2 hidden sm:block opacity-40 shadow-[0_0_12px_rgba(99,102,241,0.5)]" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`w-full relative flex flex-col sm:flex-row items-start ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-4 sm:left-1/2 top-6 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0E0E11] border-2 border-indigo-500 shadow-[0_0_16px_rgba(99,102,241,0.4)] flex items-center justify-center z-10 hidden sm:flex">
                  {exp.type === 'achievement' ? (
                    <Award className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-indigo-400" />
                  )}
                </div>

                {/* Content Box (Alternating Left & Right) */}
                <div className={`w-full sm:w-1/2 ${idx % 2 === 0 ? 'sm:pl-10 md:sm:pl-12' : 'sm:pr-10 md:sm:pr-12'}`}>
                  <div className="p-6 sm:p-7 rounded-3xl bg-[#111113] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl space-y-4 group">
                    
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

                    {/* Tracks (Side-by-side with vertical dividing line) */}
                    {exp.tracks ? (
                      <div className="pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
                          {/* Left Column: AI & ML */}
                          <div className="space-y-3 md:pr-5 md:border-r md:border-indigo-500/20">
                            <div className="flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                              <span className="text-xs font-bold text-purple-300">
                                {exp.tracks[0].title}
                              </span>
                            </div>
                            <div className="space-y-2">
                              {exp.tracks[0].points.map((pt, pIdx) => (
                                <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                                  <span>{pt}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Right Column: Full-Stack & Mobile Apps */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-1.5">
                              <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                              <span className="text-xs font-bold text-cyan-300">
                                {exp.tracks[1].title}
                              </span>
                            </div>
                            <div className="space-y-2.5">
                              {exp.tracks[1].apps?.map((app, aIdx) => (
                                <div
                                  key={aIdx}
                                  className="p-3.5 rounded-2xl bg-zinc-900/90 border border-white/10 hover:border-indigo-500/40 transition-all space-y-1.5"
                                >
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                                      {aIdx === 0 ? (
                                        <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                                      ) : (
                                        <Home className="w-3.5 h-3.5 text-indigo-400" />
                                      )}
                                      <span>{app.name}</span>
                                    </h4>
                                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                      Production
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-zinc-300 leading-relaxed">
                                    {app.desc}
                                  </p>

                                  {(app.playStore || app.appStore) && (
                                    <div className="flex flex-wrap items-center gap-2 pt-1">
                                      {app.playStore && (
                                        <a
                                          href={app.playStore}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono transition-colors"
                                          title="Google Play Store"
                                        >
                                          <Play className="w-2.5 h-2.5 fill-current" />
                                          <span>Google Play</span>
                                        </a>
                                      )}
                                      {app.appStore && (
                                        <a
                                          href={app.appStore}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-mono transition-colors"
                                          title="Apple App Store"
                                        >
                                          <Apple className="w-3 h-3" />
                                          <span>App Store</span>
                                        </a>
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Standard Achievements */
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        {exp.achievements?.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                        {exp.playStore && (
                          <div className="pt-2">
                            <a
                              href={exp.playStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono transition-colors"
                              title="Google Play Store"
                            >
                              <Play className="w-3 h-3 fill-current" />
                              <span>Google Play Store</span>
                            </a>
                          </div>
                        )}
                      </div>
                    )}

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
