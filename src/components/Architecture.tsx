import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Layers,
  ArrowRight,
  Database,
  Server,
  Smartphone,
  Globe,
  Sparkles,
  Zap,
  ShieldCheck,
  Activity,
  CheckCircle2,
} from 'lucide-react';

interface SystemFlow {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  nodes: { label: string; sub: string; icon: any; highlight?: boolean }[];
  keyHighlights: string[];
}

const Architecture: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<string>('nilm');

  const systems: SystemFlow[] = [
    {
      id: 'nilm',
      title: 'Smart Meter NILM Energy Disaggregation & OCR Engine',
      subtitle: 'Bharat Smart Services Production AI Architecture',
      category: 'AI / Time-Series & Computer Vision',
      description:
        'A multi-model deep learning pipeline that ingests 5-second interval smart meter time-series data, segments power signals using sliding windows, passes data through CNN & XGBoost models for appliance disaggregation, and runs OCR digit extraction on meter displays.',
      nodes: [
        { label: 'Smart Meter Data', sub: '5-second Intervals', icon: Activity },
        { label: 'Signal Preprocessing', sub: 'Sliding Window Segmentation', icon: Cpu },
        { label: 'CNN & XGBoost Models', sub: 'Classification Engine', icon: Sparkles, highlight: true },
        { label: 'OCR Extraction', sub: 'Computer Vision Meter Reader', icon: Zap },
        { label: 'Disaggregation Dashboard', sub: 'Appliance Level Insights', icon: Globe },
      ],
      keyHighlights: [
        'Ingests high-frequency 5-second interval power signatures',
        'CNN models classify active appliance signatures (AC, Fridge, EV Charger)',
        'Computer Vision OCR extracts numerical readings directly from physical meter displays',
        'Hyperparameter tuned XGBoost and CNN models evaluated via MAE and RMSE metrics',
      ],
    },
    {
      id: 'hostel-hub',
      title: 'Hostel Hub Pro Multi-Tenant QR Architecture',
      subtitle: 'Production Multi-Role Web Platform Deployed on Plesk',
      category: 'Full-Stack Web & MySQL',
      description:
        'A secure, production-grade hostel management architecture supporting 4 distinct user roles (Students, Parents, Staff, Security Guards). Implements time-bound visitor permission tokens, QR scanning logic, real-time student presence monitoring, and MySQL relational integrity.',
      nodes: [
        { label: 'Client App (React)', sub: 'Role-Based Dashboard UI', icon: Globe },
        { label: 'Auth & RBAC Layer', sub: 'JWT & Security Middleware', icon: ShieldCheck },
        { label: 'Express REST Server', sub: 'Node.js Microservices', icon: Server, highlight: true },
        { label: 'MySQL Database', sub: 'Relational Schema', icon: Database },
        { label: 'QR Scanner Engine', sub: 'Gate Verification', icon: Zap },
      ],
      keyHighlights: [
        'Strict Role-Based Access Control (RBAC) preventing unauthorized cross-hostel data access',
        'Time-restricted QR code issuance for student leave permissions with parent approval workflow',
        'Real-time student check-in/check-out tracking at security gate scanner nodes',
        'Deployed on production Plesk server with automated builds and env isolation',
      ],
    },
    {
      id: 'samarth',
      title: 'Samarth Natural Language to SQL Analytics Engine',
      subtitle: 'Intelligent Agricultural & Climate Q&A Architecture',
      category: 'LLM & Analytical SQL',
      description:
        'An end-to-end Q&A system that converts natural-language queries into audited SQL statements, executing queries against Indian government rainfall and crop yield datasets via DuckDB for instant analytical results.',
      nodes: [
        { label: 'User Query', sub: 'Natural Language Prompt', icon: Globe },
        { label: 'FastAPI Gateway', sub: 'Python Backend Router', icon: Server },
        { label: 'NL-to-SQL LLM Engine', sub: 'Query Construction', icon: Sparkles, highlight: true },
        { label: 'DuckDB Engine', sub: 'In-Memory Analytics', icon: Database },
        { label: 'Traceable Output', sub: 'Audited Results & Charts', icon: CheckCircle2 },
      ],
      keyHighlights: [
        'Translates complex multi-variable agricultural questions into executable SQL queries',
        'Uses DuckDB in-memory columnar database for millisecond analytical query execution',
        'Provides full data lineage and SQL query traceability to eliminate AI hallucinations',
      ],
    },
    {
      id: 'signage',
      title: 'SignageHub Hybrid Local & Cloud Management System',
      subtitle: 'Enterprise Digital Signage Architecture',
      category: 'Hybrid Cloud & Mobile App',
      description:
        'A production digital signage network with a cloud management dashboard, local UDP broadcast auto-discovery, a compiled local Windows server bundle for offline operation, and a native Android TV player app with SQLite local caching.',
      nodes: [
        { label: 'Cloud Admin Dashboard', sub: 'React Control Panel', icon: Globe },
        { label: 'UDP Local Discovery', sub: 'Local Network Pairing', icon: Activity },
        { label: 'Local Express Server', sub: 'Compiled Offline Bundle', icon: Server, highlight: true },
        { label: 'SQLite Local Sync', sub: 'Offline Caching Engine', icon: Database },
        { label: 'Android TV App', sub: 'Jetpack Compose Player', icon: Smartphone },
      ],
      keyHighlights: [
        'Operates continuously even during internet outages via local server bundle and SQLite sync',
        'Zero-configuration device pairing using UDP broadcast discovery on local LAN networks',
        'Native Jetpack Compose player application on Android TV for smooth 60 FPS media rendering',
      ],
    },
  ];

  const currentSystem = systems.find((s) => s.id === selectedSystem) || systems[0];

  return (
    <section id="architecture" className="py-24 relative bg-[#09090B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>SYSTEM DESIGN & ARCHITECTURE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production System Diagrams
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Detailed engineering visual flows of production AI, cloud, and mobile architectures I have designed and deployed.
          </p>
        </div>

        {/* System Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {systems.map((sys) => (
            <button
              key={sys.id}
              onClick={() => setSelectedSystem(sys.id)}
              className={`px-5 py-3 rounded-2xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                selectedSystem === sys.id
                  ? 'bg-indigo-600 text-white border border-indigo-400/40 shadow-xl shadow-indigo-600/30'
                  : 'bg-[#111113] text-zinc-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>{sys.title.split(' ')[0]} {sys.title.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Selected Architecture Diagram Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSystem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#111113] border border-white/10 shadow-2xl space-y-8"
          >
            {/* Board Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-[11px] font-mono border border-indigo-500/20">
                  {currentSystem.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  {currentSystem.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-1">
                  {currentSystem.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-300 leading-relaxed max-w-4xl">
              {currentSystem.description}
            </p>

            {/* Visual Animated Flow Diagrams */}
            <div className="py-8">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 text-center">
                Data & Execution Flow
              </h4>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-3 overflow-x-auto pb-4">
                {currentSystem.nodes.map((node, index) => {
                  const NodeIcon = node.icon;
                  return (
                    <React.Fragment key={index}>
                      {/* Flow Node */}
                      <div
                        className={`w-full lg:w-48 p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center ${
                          node.highlight
                            ? 'bg-indigo-950/40 border-indigo-500/50 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-500/30'
                            : 'bg-zinc-900/80 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                            node.highlight ? 'bg-indigo-600 text-white' : 'bg-white/5 text-indigo-400'
                          }`}
                        >
                          <NodeIcon className="w-5 h-5" />
                        </div>
                        <p className="text-xs font-bold text-white leading-tight">
                          {node.label}
                        </p>
                        <p className="text-[10px] text-zinc-400 font-mono mt-1">
                          {node.sub}
                        </p>
                      </div>

                      {/* Arrow Connector (between nodes) */}
                      {index < currentSystem.nodes.length - 1 && (
                        <div className="flex lg:flex-col items-center text-zinc-600 py-1">
                          <ArrowRight className="w-5 h-5 hidden lg:block text-indigo-400/60 animate-pulse" />
                          <ArrowRight className="w-5 h-5 lg:hidden text-indigo-400/60 rotate-90 my-1 animate-pulse" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Architecture Highlights Bullet Points */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
                System Engineering Highlights
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {currentSystem.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Architecture;
