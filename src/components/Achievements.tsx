import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, ShieldCheck, Zap, ExternalLink } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Official Google Play Store Publisher',
      category: 'Mobile Engineering',
      description:
        'Engineered and published the official "Criminal Laws by TGPA" application live on the Google Play Store for Telangana State Police Academy.',
      icon: Globe,
      color: 'text-emerald-400',
      badge: 'Play Store Published',
      link: 'https://play.google.com/store/apps/details?id=com.sphn.tgpa&hl=en_IN',
    },
    {
      title: 'Smart India Hackathon 2022 Finalist',
      category: 'National Recognition',
      description:
        'Shortlisted among top developer teams nationwide by Ministry of Education, Govt. of India for the Grand Finale Senior Software Edition.',
      icon: Award,
      color: 'text-amber-400',
      badge: 'National Finalist',
    },
    {
      title: 'Live Production Enterprise Deployments',
      category: 'Cloud & Infrastructure',
      description:
        'Architected, deployed, and currently maintain live multi-user systems on Plesk and Render with automated database backups and env isolation.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
      badge: 'Plesk & Render Production',
    },
    {
      title: 'Multi-Model AI System Design',
      category: 'Machine Learning',
      description:
        'Designed end-to-end deep learning pipelines integrating CNNs for time-series NILM disaggregation, YOLOv8 computer vision, and Agentic LLM tools.',
      icon: Zap,
      color: 'text-indigo-400',
      badge: 'PyTorch & Computer Vision',
    },
  ];

  return (
    <section id="achievements" className="py-24 relative bg-[#09090B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>PROVEN MILESTONES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key Technical Achievements
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            High-impact accomplishments demonstrating engineering rigour, product ownership, and national recognition.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-[#111113] border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-[10px] font-mono text-zinc-400 border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {item.link && (
                  <div className="pt-4 border-t border-white/5 mt-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>View on Google Play</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
