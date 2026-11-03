import React from 'react';
import { Brain, Globe, Smartphone, Layers } from 'lucide-react';
import type { ProjectData } from './ProjectCaseStudyModal';

const categoryIcons: Record<string, React.ElementType> = {
  ai: Brain,
  fullstack: Globe,
  mobile: Smartphone,
};

// Priority: real app screenshots (shown as a phone-mockup fan), then a single
// project image, then a generated cover (gradient + category icon + key tech).
const ProjectCover: React.FC<{ project: ProjectData; className?: string }> = ({ project, className = '' }) => {
  const shots = project.screenshots?.slice(0, 3) ?? [];

  if (shots.length > 0) {
    // Put the first screenshot in the middle, in front
    const ordered = shots.length === 3 ? [shots[1], shots[0], shots[2]] : shots;
    return (
      <div className={`relative w-full h-full flex items-end justify-center gap-3 pt-6 bg-zinc-950 overflow-hidden ${className}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`} />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        {ordered.map((src, idx) => {
          const isCenter = ordered.length === 3 ? idx === 1 : true;
          return (
            <img
              key={src}
              src={src}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className={`relative object-cover object-top rounded-t-2xl border-x-2 border-t-2 border-white/15 shadow-2xl shadow-black/60 ${
                isCenter ? 'h-[92%] z-10' : 'h-[78%] opacity-80'
              }`}
              style={{ aspectRatio: '9 / 19' }}
            />
          );
        })}
      </div>
    );
  }

  if (project.image) {
    return <img src={project.image} alt={project.title} className={`w-full h-full object-cover ${className}`} />;
  }

  const Icon = categoryIcons[project.category] ?? Layers;
  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center gap-3 bg-zinc-950 ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-25`} />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="relative w-14 h-14 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-sm flex items-center justify-center">
        <Icon className="w-7 h-7 text-white/90" />
      </div>
      <p className="relative px-6 text-center text-[11px] font-mono text-white/70 line-clamp-1">
        {project.tech.slice(0, 3).join(' · ')}
      </p>
    </div>
  );
};

export default ProjectCover;
