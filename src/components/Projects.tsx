import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Layers,
  BookOpen,
} from 'lucide-react';
import ProjectCaseStudyModal, { ProjectData } from './ProjectCaseStudyModal';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectData | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & ML Systems' },
    { id: 'fullstack', label: 'Full-Stack Web' },
    { id: 'mobile', label: 'Mobile Engineering' },
  ];

  const projects: ProjectData[] = [
    {
      id: 'hostel-hub-pro',
      title: 'Hostel Hub Pro – Smart Hostel Management System',
      subtitle: 'Production Multi-Role Web Platform',
      category: 'fullstack',
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'TanStack Router', 'Tailwind CSS', 'QR Code'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-cyan-500 to-blue-600',
      problem:
        'Hostel management in educational institutions faced manual paper logs, security bottlenecks at gates, delay in parent permission approvals, and poor visibility into student whereabouts.',
      solution:
        'Architected a full-stack multi-tenant platform serving Students, Parents, Staff, and Security Guards. Built QR-code gate scanner logic, automated time-restricted leave approvals, and multi-hostel admin analytics.',
      architecture: [
        'Multi-Role Authorization (Student, Parent, Staff, Security Guard)',
        'Time-Restricted QR Permission Engine for Gate Scanners',
        'Real-Time Student Flow & Hostel Occupancy Dashboard',
        'Production Deployment on Plesk Infrastructure with MySQL',
      ],
      challenges: [
        'Preventing unauthorized cross-hostel access for staff assigned to all hostels vs specific hostels',
        'Strict date/time calculations ensuring gate permissions expire dynamically after 24 hours',
      ],
      impact: [
        'Eliminated manual paper logs across multi-building student accommodation',
        'Sub-second QR gate validation response time',
      ],
    },
    {
      id: 'signage-hub',
      title: 'SignageHub – Hybrid Digital Signage & TV Network',
      subtitle: 'Cloud Control + Offline Edge Android TV Architecture',
      category: 'fullstack',
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'Kotlin', 'Jetpack Compose', 'Ktor', 'SQLite'],
      image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-600 to-indigo-500',
      problem:
        'Commercial digital signage screens require zero downtime during internet outages and seamless zero-configuration device pairing across retail locations.',
      solution:
        'Built a hybrid cloud dashboard coupled with a compiled local Windows server bundle that broadcasts UDP local discovery packets to auto-pair native Android TV apps.',
      architecture: [
        'Cloud Control Dashboard for central media scheduling & dynamic layouts',
        'UDP Broadcast Discovery for zero-config local TV pairing',
        'SQLite local caching on Android TV units ensuring uninterrupted offline playlist playback',
      ],
      challenges: [
        'Maintaining frame-accurate video and image transitions on Android TV under memory constraints',
        'Bi-directional sync between local Windows SQLite server and cloud Supabase database',
      ],
      impact: [
        '100% display uptime guaranteed via offline fallback cache',
        'Zero manual IP configuration required for screen deployment',
      ],
    },
    {
      id: 'feedback-flow',
      title: 'Feedback Flow – Enterprise Kiosk Survey & Device Network',
      subtitle: 'Offline-First Tablet Management & Live Canvas Builder',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'Express', 'SQLite', 'Jetpack Compose', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-teal-500 to-emerald-600',
      problem:
        'Brick-and-mortar storefronts struggle with collecting customer feedback due to lost internet connectivity on kiosk tablets and rigid non-customizable survey UI.',
      solution:
        'Engineered an offline-first survey engine featuring a drag-and-drop live brand canvas builder and sub-admin licensing for remote tablet fleets.',
      architecture: [
        'Drag-and-Drop Live Canvas Builder for instant brand styling',
        'Native Jetpack Compose Android app with local SQLite queued responses',
        'Automatic batch upload sync when network connectivity is restored',
      ],
      challenges: [
        'Preventing customer data loss during abrupt tablet power losses',
        'Sub-admin multi-device licensing verification',
      ],
      impact: [
        'Guaranteed zero feedback loss in offline retail environments',
        'Customizable theme engine for multi-brand storefront deployments',
      ],
    },
    {
      id: 'samarth',
      title: 'Samarth – Intelligent Agriculture & Climate Q&A Engine',
      subtitle: 'Natural Language to SQL Conversational Analytics',
      category: 'ai',
      tech: ['FastAPI', 'DuckDB', 'Python', 'SQL', 'NLP', 'Streamlit'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/gangireddymayur/Samarth-theChatBot',
      color: 'from-emerald-500 to-teal-500',
      problem:
        'Non-technical agricultural policy makers and researchers struggle to extract actionable insights from vast, tabular Indian government crop yield and rainfall datasets.',
      solution:
        'Developed an end-to-end NLP Question-Answering system that converts natural-language queries into audited SQL statements executed against DuckDB.',
      architecture: [
        'FastAPI backend with schema-aware SQL translation layer',
        'DuckDB in-memory analytical database for high-speed aggregation',
        'Streamlit interactive dashboard with downloadable analytical charts and query audit logs',
      ],
      challenges: [
        'Eliminating SQL injection risks and LLM query hallucinations on complex joins',
        'Ensuring exact state and district name matching across historical datasets',
      ],
      impact: [
        'Instant cross-domain query resolution without writing manual SQL queries',
        '100% auditability with live generated SQL view for researchers',
      ],
    },
    {
      id: 'ship-detection',
      title: 'Post-CNN Framework for Satellite Ship Detection (YOLOv8)',
      subtitle: 'High-Resolution Optical Satellite Imagery Analysis',
      category: 'ai',
      tech: ['Python', 'YOLOv8', 'Computer Vision', 'PyTorch', 'OpenCV', 'Streamlit'],
      image: 'https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: 'https://shipdetectionyolov8.streamlit.app/',
      github: 'https://github.com/gangireddymayur/Ship_Detection_YOLOv8',
      color: 'from-indigo-500 to-blue-600',
      problem:
        'Maritime surveillance requires precise extraction of ship vessels from high-resolution satellite imagery across vast ocean surfaces with heavy cloud clutter.',
      solution:
        'Designed a post-CNN framework implementing water/non-water land masking followed by YOLOv8 deep learning vessel detection with confidence-aware bounding boxes.',
      architecture: [
        'Preprocessing pipeline for cloud artifact removal and land masking',
        'YOLOv8 convolutional neural network trained on satellite vessel datasets',
        'Interactive Streamlit inference interface for image uploads and real-time bounding box visualization',
      ],
      challenges: [
        'Distinguishing small vessels from wave crests and wakes',
        'Optimizing model inference time for high-resolution satellite tiles',
      ],
      impact: [
        'High precision detection rate across varied maritime environments',
        'Published live interactive Streamlit web application',
      ],
    },
    {
      id: 'multimodal-emotion',
      title: 'Multimodal Emotion Detection System (Face + Voice)',
      subtitle: 'Dual-Stream Deep Learning Fusion Model',
      category: 'ai',
      tech: ['Python', 'Streamlit', 'PyTorch', 'EfficientNet-B4', 'OpenCV', 'Librosa', 'MFCC'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/gangireddymayur/Multimodal-Emotion-Detection-System--Face---Voice-/tree/main',
      color: 'from-violet-500 to-purple-600',
      problem:
        'Single-modality emotion recognition (facial only or voice only) fails in real-world scenarios due to ambiguous expressions or noisy audio environments.',
      solution:
        'Engineered a multimodal fusion AI system combining facial emotion predictions (EfficientNet-B4) and speech audio features (MFCCs + MLP) to yield robust final predictions.',
      architecture: [
        'Facial pipeline: OpenCV frame extraction + EfficientNet-B4 CNN',
        'Audio pipeline: Librosa MFCC extraction + Multi-Layer Perceptron (MLP)',
        'Decision-level fusion network combining confidence scores from both modalities',
      ],
      challenges: [
        'Synchronizing video frames with speech audio timestamps during real-time webcam streams',
        'Fusing conflicting predictions between facial expressions and tone of voice',
      ],
      impact: [
        'Improved emotion classification accuracy over single-modality models',
        'Real-time webcam mode and uploaded video processing',
      ],
    },
    {
      id: 'criminal-laws-tgpa',
      title: 'Criminal Laws by TGPA – Official Android Application',
      subtitle: 'Telangana State Police Academy (Published on Play Store)',
      category: 'mobile',
      tech: ['Android SDK', 'Java', 'XML', 'Mobile Security', 'Google Play Store'],
      image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: 'https://play.google.com/store/apps/details?id=com.sphn.tgpa&hl=en_IN',
      color: 'from-red-500 to-orange-500',
      problem:
        'Law enforcement officers needed instant, offline access to complex Indian criminal legal codes, including comparative analysis between old and new criminal laws during field operations.',
      solution:
        'Developed an official Android application for the Telangana State Police Academy featuring categorized legal chapters, old vs new law comparison tools, and fast search indexing.',
      architecture: [
        'Structured local database for instant offline law search',
        'Comparative side-by-side legal text viewing engine',
        'Collaborated with TGPA officials and faculty for verification',
      ],
      challenges: [
        'Optimizing legal text indexing for instant keyword search results without latency',
        'Meeting Google Play Store official government app publishing guidelines',
      ],
      impact: [
        'Published live on Google Play Store used by Telangana police personnel',
        'Significantly reduced time required for officers to verify legal sections',
      ],
    },
    {
      id: 'chit-fund-sys',
      title: 'Chit Fund Management System – Live Financial Platform',
      subtitle: 'Private Client Production System Deployed on Render',
      category: 'fullstack',
      tech: ['Python', 'Flask', 'Firebase', 'Server-Side Auth', 'Render'],
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-slate-600 to-gray-800',
      problem:
        'Private financial firm needed a secure, accurate financial ledger system to track monthly member subscriptions, auctions, payout balances, and late payment penalties.',
      solution:
        'Built a production Flask web system backed by Firebase Realtime Database with strict server-side financial calculations and access controls.',
      architecture: [
        'Flask backend API handling financial transaction formulas',
        'Firebase Realtime Database for instant balance updates',
        'Server-side authenticated session management deployed live on Render',
      ],
      challenges: [
        'Ensuring zero penny rounding errors in complex monthly dividend split calculations',
        'Strict audit logging for financial compliance',
      ],
      impact: [
        'Successfully managed client financial schemes with 100% ledger accuracy',
        'Continuous live production operation',
      ],
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured Production Projects
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Real-world systems, machine learning pipelines, and mobile applications built for production clients and institutional deployments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-indigo-600 text-white border border-indigo-400/40 shadow-lg shadow-indigo-600/30'
                  : 'bg-[#111113] text-zinc-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-3xl bg-[#111113] border border-white/10 overflow-hidden hover:border-indigo-500/40 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Card Media */}
                  <div className="relative aspect-video overflow-hidden bg-zinc-900">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity z-10`}
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent opacity-90 z-20" />
                    
                    <div className="absolute top-4 left-4 z-30">
                      <span className="px-3 py-1 rounded-md bg-[#111113]/90 text-white text-[11px] font-mono border border-white/10 backdrop-blur-md">
                        {project.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-mono mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
                      {project.solution}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-zinc-400 text-[11px] font-mono border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 mt-4">
                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 rounded-xl text-xs font-semibold border border-indigo-500/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-zinc-400 hover:text-white bg-white/5 rounded-lg border border-white/10 transition-colors"
                        title="Live Demo / Store"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-zinc-400 hover:text-white bg-white/5 rounded-lg border border-white/10 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Case Study Drawer Modal */}
        <ProjectCaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />

      </div>
    </section>
  );
};

export default Projects;
