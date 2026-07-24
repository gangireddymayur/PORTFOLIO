import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Zap, CheckCircle2 } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tech: string[];
  image: string;
  demo?: string;
  github?: string;
  color: string;
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
  impact: string[];
}

interface ProjectCaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111113] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner & Title */}
          <div className="space-y-4 pr-12">
            <span className="px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs font-mono border border-indigo-500/20">
              {project.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-400 font-mono">
              {project.subtitle}
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Technologies & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-300 text-xs font-mono border border-indigo-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-2">
              <h4 className="text-sm font-bold text-rose-400 flex items-center gap-2">
                <span>The Engineering Problem</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-2">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <span>Architectural Solution</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Architecture Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              System Architecture & Core Modules
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Key Technical Challenges Solved
            </h3>
            <div className="space-y-2">
              {project.challenges.map((challenge, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-zinc-300">
                  <Zap className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors shadow-lg shadow-indigo-600/30"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo / Store</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors border border-white/10"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-zinc-300 rounded-xl text-xs font-medium border border-white/10 transition-colors cursor-pointer"
            >
              Close Case Study
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectCaseStudyModal;
