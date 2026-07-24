import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ShieldCheck, Award, Building2, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const endorsements = [
    {
      quote:
        'Mayur contributed significantly to structuring our criminal laws repository app. His ability to build an efficient offline search engine and side-by-side law comparison UI delivered immense value to our academy officers.',
      author: 'Telangana State Police Academy (TGPA)',
      role: 'Institutional Collaboration & Play Store App Project',
      icon: ShieldCheck,
      badge: 'Official Play Store Release',
      color: 'text-emerald-400',
    },
    {
      quote:
        'Demonstrated strong proficiency in building full-stack web microservices, REST API integration, and modern React component design during the 6-week MERN stack internship program.',
      author: 'EY Global Delivery Services × AICTE',
      role: 'Web Development Internship Cohort',
      icon: Building2,
      badge: 'Industry Program Verification',
      color: 'text-amber-400',
    },
    {
      quote:
        'Mayur brings end-to-end technical ownership to machine learning disaggregation and OCR tasks. He seamlessly bridges the gap between Python deep learning research and production backend deployment.',
      author: 'Bharat Smart Services Team',
      role: 'Machine Learning Engineering Collaboration',
      icon: Award,
      badge: 'Production Engineering Peer Review',
      color: 'text-cyan-400',
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-[#09090B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>INSTITUTIONAL ENDORSEMENTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Collaboration & Feedback
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Recognition and feedback from institutional project stakeholders, academic mentorship, and production engineering peers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {endorsements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#111113] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between relative group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-indigo-500/30 group-hover:text-indigo-400 transition-colors" />
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-[10px] font-mono text-zinc-400 border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed italic font-normal">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {item.author}
                    </h4>
                    <p className="text-[11px] text-zinc-400 font-mono">
                      {item.role}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
