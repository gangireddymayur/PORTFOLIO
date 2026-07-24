import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, ArrowUpRight, X } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
}

const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 'nilm-engineering',
      title: 'Engineering Non-Intrusive Load Monitoring (NILM) with PyTorch & Time-Series Data',
      category: 'AI & Time-Series Modeling',
      date: 'June 2026',
      readTime: '6 min read',
      summary:
        'A deep dive into processing high-frequency 5-second interval smart meter telemetry data using sliding window segmentation and CNN models to disaggregate appliance-level energy consumption.',
      content: [
        'Non-Intrusive Load Monitoring (NILM) allows power utilities to identify individual appliance energy usage (such as air conditioners, refrigerators, and electric vehicles) from a single smart meter point.',
        'At Bharat Smart Services, we designed a pipeline that converts raw active and reactive power signals into 5-second sliding windows. Features like active power spikes, steady-state power levels, and harmonic distortions are extracted.',
        'We compared 1D CNNs against Random Forest and XGBoost classifiers. Convolutional architectures excelled at capturing temporal waveform signatures, achieving higher classification accuracy and lower Mean Absolute Error (MAE).',
        'Additionally, we coupled the disaggregation model with a Computer Vision OCR pipeline trained on physical meter displays to cross-verify cumulative energy consumption readings.',
      ],
    },
    {
      id: 'offline-kiosks',
      title: 'Architecting Offline-First Android Kiosk Networks with Ktor & Jetpack Compose',
      subtitle: 'Lessons from SignageHub and Feedback Flow',
      category: 'Mobile & Systems Architecture',
      date: 'May 2026',
      readTime: '8 min read',
      summary:
        'How to build resilient Android tablet and Android TV applications that maintain 100% display uptime during internet outages using embedded Ktor local servers and SQLite synchronization.',
      content: [
        'Commercial kiosk systems placed in retail stores or institutional lobbies face frequent network disconnects. Relying on continuous cloud connections leads to broken screens and lost user feedback.',
        'Our architecture uses a local Windows server bundle that broadcasts UDP packets across the local LAN network. Android TV units running Jetpack Compose discover the local server automatically with zero manual IP setup.',
        'Media playlists and survey templates are cached locally in SQLite. When internet connectivity drops, the local server handles all tablet requests smoothly. Queued survey responses are synced to the cloud automatically once connectivity is restored.',
      ],
    },
    {
      id: 'nl-to-sql-agents',
      title: 'Deterministic Natural Language to SQL Agents with Full Data Traceability',
      category: 'LLMs & Agentic AI',
      date: 'April 2026',
      readTime: '5 min read',
      summary:
        'Designing LLM query translation engines over government agricultural and climate datasets that guarantee zero SQL hallucinations and 100% auditability.',
      content: [
        'Large Language Models (LLMs) often suffer from hallucinations when generating SQL queries over large multi-table databases. In critical domains like agriculture and government policy, incorrect query logic is unacceptable.',
        'In the Samarth project, we implemented a schema-aware prompt architecture where the LLM is constrained to validated table schemas and strict column types. Generated SQL is validated against an Abstract Syntax Tree (AST) parser before execution.',
        'The query is executed in-memory using DuckDB for instant aggregation over millions of rows. Crucially, the system returns both the visual answer chart AND the raw generated SQL query, allowing researchers to audit every result.',
      ],
    },
  ];

  return (
    <section id="blog" className="py-24 relative bg-[#09090B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>TECHNICAL INSIGHTS & ARTICLES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Insights
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            In-depth technical articles on system architecture, machine learning disaggregation, and offline mobile networks.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-[#111113] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1 text-zinc-500">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6">
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Drawer for Reading Article */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-black/80 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#111113] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6"
              >
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2 pr-12">
                  <span className="px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-mono border border-cyan-500/20">
                    {selectedArticle.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-zinc-300 leading-relaxed font-normal">
                  {selectedArticle.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-indigo-600/30 cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Blog;
