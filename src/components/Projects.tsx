import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Layers,
  BookOpen,
  Play,
  Apple,
} from 'lucide-react';
import ProjectCaseStudyModal, { ProjectData } from './ProjectCaseStudyModal';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectData | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'enterprise', label: '🏢 Bharat Smart Services' },
    { id: 'client', label: '💼 Freelance Deployments' },
    { id: 'mobile', label: 'Mobile & IoT' },
    { id: 'fullstack', label: 'Full-Stack Web' },
    { id: 'ai', label: 'AI & ML Systems' },
  ];

  const projects: ProjectData[] = [
    {
      id: 'bharat-smart-services',
      title: 'Bharat Smart Services – Smart Meter Reading, Billing & Live Energy Monitoring',
      subtitle: 'Capacitor Android/iOS App + Camera OCR + Native USB IR Dongle + Utility Billing',
      category: 'mobile',
      tag: '🏢 Bharat Smart Services (Current Role)',
      demo: 'https://play.google.com/store/apps/details?id=in.coral.met',
      playStore: 'https://play.google.com/store/apps/details?id=in.coral.met',
      appStore: 'https://apps.apple.com/in/app/bharat-smart-services/id1584345371',
      tech: ['React 18', 'TypeScript', 'Capacitor.js', 'Java Native Plugins', 'USB Serial IRDA', 'OCR', 'Firebase Messaging', 'Android Widgets', 'iOS WidgetKit', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-600 to-cyan-500',
      problem:
        'Electricity consumers and field staff across several discoms (TSSPDCL, TSNPDCL) needed one app to submit accurate meter readings, see live usage and demand, generate bills, and handle water board (HMWSSB) billing, without manual paperwork or errors from mismatched meter data.',
      solution:
        'Built a cross-platform React and Capacitor app. A user logs in with phone OTP and picks a profile, where backend-owned fields are locked and the rest can be edited. A meter reading comes from either camera OCR or a USB IR dongle, goes through a review page with checks against the previous reading, and is submitted to the billing backend. Home cards show Green Days, Demand Monitoring and Live Data using backend values.',
      architecture: [
        'Single API layer with TTL cache, in-flight de-duplication and write invalidation for all backend calls',
        'Custom Capacitor plugins for camera OCR, IR dongle scanning and home screen widgets',
        'IR dongle stack in Java: USB serial handshake, IRDA and 1/3-phase command tables, parsed readings returned to the web layer',
        'Multiple backends for main data, device telemetry, meter readings and OCR, with phone numbers for access tiers kept in one config file',
        'Push notifications through Firebase, with token re-registration when it changes',
      ],
      challenges: [
        'Keeping the camera reliable across retries and app backgrounding on different phones',
        'Matching the legacy Java app exactly when submitting readings and water bills, so backend records stay consistent',
        'Auditing app-side calculations and moving them to backend values to remove mismatched numbers',
        'Supporting new iOS UIScene requirements and an unknown IR dongle model on Android',
      ],
      impact: [
        'Live production app on Android and iOS for utility consumers',
        'Fewer server calls per screen, for example one call for all team members instead of one per member',
        'Water bills now show exactly what the water board returns',
      ],
    },
    {
      id: 'bharat-smart-home',
      title: 'Bharat Smart Home – Enterprise IoT & Lifestyle Automation Platform',
      subtitle: 'Unified Smart Home Ecosystem with Real-Time Device Orchestration',
      category: 'mobile',
      tag: '🏢 Bharat Smart Services (Current Role)',
      demo: 'https://play.google.com/store/apps/details?id=com.bharat.smarthome',
      playStore: 'https://play.google.com/store/apps/details?id=com.bharat.smarthome',
      appStore: 'https://apps.apple.com/in/app/bharat-smart-home-energy-iot/id6737525389',
      tech: ['React', 'TypeScript', 'Capacitor', 'Tailwind CSS', 'State Machine', 'WebSockets', 'IoT Protocols'],
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-indigo-600 to-purple-600',
      problem:
        'Consumer smart home applications suffer from fragmented device pairing workflows, complex industrial energy dashboards that confuse everyday users, and high command latency across distributed appliances.',
      solution:
        'Designed and built an enterprise-grade smart home automation platform featuring room-based organization, customizable lifestyle scenes, condition-based automation schedules, and clear energy intelligence disaggregation.',
      architecture: [
        'Hierarchical Room & Device Control Engine (lighting, climate, relays, smart plugs)',
        'Lifestyle Scene Orchestration & conditional automation scheduler with timer routines',
        'Cross-platform native mobile shell via Capacitor for iOS and Android',
        'Disaggregated household energy insights translating raw kWh into actionable cost savings',
      ],
      challenges: [
        'Achieving sub-100ms UI responsiveness for device toggle state updates over fluctuating Wi-Fi connections',
        'Balancing deep energy consumption intelligence with an intuitive, clutter-free lifestyle UI',
      ],
      impact: [
        'Unified multi-room appliance control with instant feedback across mobile and web',
        'V1 production platform serving next-generation residential smart home automation',
      ],
    },
    {
      id: 'temple-donation-hub',
      title: 'Temple Donation Signage Hub & Devotee Android TV Network',
      subtitle: 'Dynamic Zero-Fee UPI QR Kiosk + Native Android TV Devotee Signage',
      category: 'fullstack',
      categories: ['fullstack', 'mobile'],
      tag: '💼 Freelance Client Production',
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Kotlin', 'Jetpack Compose', 'ExoPlayer', 'UPI QR API'],
      image: 'https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-amber-500 to-orange-600',
      problem:
        'Religious institutions and temples faced slow manual paper receipt issuance, massive donation queue bottlenecks during festivals, and lacked digital signage screens to acknowledge devotees and announce pooja schedules.',
      solution:
        'Engineered an end-to-end devotional donation kiosk and digital signage TV ecosystem combining a web-based administrative hub with dynamic zero-transaction-fee UPI QR codes and a native Android TV app.',
      architecture: [
        'Devotee Donation Kiosk with dynamic instant-payment UPI QR generation and Razorpay merchant fallback',
        'Native Android TV client built in Kotlin & Jetpack Compose with simple 6-character claiming codes',
        'ExoPlayer (media3) offline video/image caching guaranteeing 100% continuous display uptime',
        'Real-time donation ledger analytics with automated database schema migrations (MariaDB/MySQL)',
      ],
      challenges: [
        'Constructing dynamic instant-settlement UPI payment payloads with automated verification polling without intermediary fees',
        'Ensuring 24/7 continuous video playlist looping without memory leaks on entry-level Android TV hardware',
      ],
      impact: [
        'Eliminated manual cash and paper receipt queues during peak festival rush',
        'Deployed live on temple donation kiosks and large devotional Android TV screens',
      ],
    },
    {
      id: 'hostel-hub-pro',
      title: 'Hostel Hub Pro & Flutter App – Smart Hostel Management System',
      subtitle: 'Multi-Tenant Web Platform (TanStack Start) + Flutter Companion App',
      category: 'fullstack',
      categories: ['fullstack', 'mobile'],
      tag: '💼 Freelance Client Production',
      tech: ['TanStack Start', 'React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Flutter', 'Dart', 'QR Code'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-cyan-500 to-blue-600',
      problem:
        'Hostel management in educational institutions faced manual paper logs, security bottlenecks at gates, delay in parent permission approvals, and poor visibility into student whereabouts.',
      solution:
        'Architected a full-stack multi-tenant platform serving Students, Parents, Staff, and Security Guards. Built QR-code gate scanner logic, automated time-restricted leave approvals, and multi-hostel admin analytics with companion Flutter mobile app.',
      architecture: [
        'Multi-Role Authorization (Student, Parent, Staff, Security Guard)',
        'Time-Restricted QR Permission Engine for Gate Scanners',
        'Companion Flutter cross-platform mobile app for students and parents',
        'Real-Time Student Flow & Hostel Occupancy Dashboard on Plesk MySQL',
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
      categories: ['fullstack', 'mobile'],
      tag: '💼 Freelance Client Production',
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
      tag: '💼 Freelance Client Production',
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
      tag: '🔬 Research & AI System',
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
      tag: '🔬 Research & AI System',
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
      tag: '🔬 Research & AI System',
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
      tag: '🏛️ Telangana State Police Academy',
      tech: ['Android SDK', 'Java', 'XML', 'Mobile Security', 'Google Play Store'],
      image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: 'https://play.google.com/store/apps/details?id=com.sphn.tgpa&hl=en_IN',
      playStore: 'https://play.google.com/store/apps/details?id=com.sphn.tgpa&hl=en_IN',
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
      tag: '💼 Freelance Client Production',
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
      : projects.filter((p) => {
          if (activeFilter === 'enterprise') return p.tag?.includes('Bharat Smart Services');
          if (activeFilter === 'client') return p.tag?.includes('Freelance');
          return p.category === activeFilter || p.categories?.includes(activeFilter);
        });

  return (
    <section id="projects" className="py-24 relative bg-[#09090B]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* Projects Grid - 4 Columns in a row */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl bg-[#111113] border border-white/10 overflow-hidden hover:border-indigo-500/40 transition-all duration-500 shadow-xl flex flex-col justify-between"
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
                    
                    <div className="absolute top-3 left-3 right-3 z-30 flex flex-wrap items-center justify-between gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#111113]/90 text-white text-[10px] font-mono border border-white/10 backdrop-blur-md">
                        {project.category.toUpperCase()}
                      </span>
                      {project.tag && (
                        <span className="px-2 py-0.5 rounded-md bg-black/80 text-indigo-300 text-[9px] font-medium border border-indigo-500/30 backdrop-blur-md">
                          {project.tag}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400 font-mono mt-1 line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
                      {project.solution}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 text-[10px] font-mono border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-5 pt-3.5 flex items-center justify-between gap-2 border-t border-white/10 mt-2">
                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="h-8 px-3 bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 rounded-lg text-xs font-semibold border border-indigo-500/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.playStore && (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-emerald-400 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
                        title="Google Play Store"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                      </a>
                    )}
                    {project.appStore && (
                      <a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-indigo-400 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
                        title="Apple App Store"
                      >
                        <Apple className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.demo && !project.playStore && !project.appStore && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
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
