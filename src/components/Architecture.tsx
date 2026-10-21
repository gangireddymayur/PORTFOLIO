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

interface FlowNode {
  label: string;
  sub: string;
  icon: any;
  highlight?: boolean;
}

interface SystemFlow {
  id: string;
  tabName: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  nodes: FlowNode[];
  lanes?: { title: string; nodes: FlowNode[] }[];
  keyHighlights: string[];
}

const renderRow = (nodes: FlowNode[], compact = false) => (
  <div className={`flex flex-col ${compact ? 'xl:flex-row' : 'lg:flex-row'} items-center justify-center gap-4 lg:gap-3 pb-2`}>
    {nodes.map((node, index) => {
      const NodeIcon = node.icon;
      return (
        <React.Fragment key={index}>
          <div
            className={`w-full ${compact ? 'xl:w-auto xl:flex-1 xl:min-w-0' : 'lg:w-48'} p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center ${
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
            <p className="text-xs font-bold text-white leading-tight">{node.label}</p>
            <p className="text-[10px] text-zinc-400 font-mono mt-1">{node.sub}</p>
          </div>
          {index < nodes.length - 1 && (
            <div className="flex items-center text-zinc-600 py-1">
              <ArrowRight className={`w-5 h-5 hidden ${compact ? 'xl:block' : 'lg:block'} text-indigo-400/60 animate-pulse`} />
              <ArrowRight className={`w-5 h-5 ${compact ? 'xl:hidden' : 'lg:hidden'} text-indigo-400/60 rotate-90 my-1 animate-pulse`} />
            </div>
          )}
        </React.Fragment>
      );
    })}
  </div>
);

const renderBars = (nodes: FlowNode[]) => (
  <div className="flex flex-col items-stretch gap-2 w-full max-w-3xl mx-auto">
    {nodes.map((node, index) => {
      const NodeIcon = node.icon;
      return (
        <React.Fragment key={index}>
          <div
            className={`w-full px-5 py-3 rounded-xl border flex items-center gap-4 ${
              node.highlight
                ? 'bg-indigo-950/40 border-indigo-500/50 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-500/30'
                : 'bg-zinc-900/80 border-white/10'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                node.highlight ? 'bg-indigo-600 text-white' : 'bg-white/5 text-indigo-400'
              }`}
            >
              <NodeIcon className="w-4 h-4" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
              <p className="text-xs font-bold text-white leading-tight">{node.label}</p>
              <p className="text-[10px] text-zinc-400 font-mono">{node.sub}</p>
            </div>
          </div>
          {index < nodes.length - 1 && (
            <div className="flex justify-center">
              <ArrowRight className="w-4 h-4 rotate-90 text-indigo-400/60 animate-pulse" />
            </div>
          )}
        </React.Fragment>
      );
    })}
  </div>
);

const Architecture: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<string>('bss-connect');

  const systems: SystemFlow[] = [
    {
      id: 'bss-connect',
      tabName: 'BSS Smart Connect',
      title: 'Bharat Smart Connect App Architecture',
      subtitle: 'React Web UI + Capacitor Bridge + Native Android/iOS Shells + USB IR Dongle + Home Screen Widgets',
      category: 'Mobile, IoT & Utility Billing',
      description:
        'A React and Vite single-page app, wrapped by Capacitor for Android and iOS, for smart meter reading, billing and live energy monitoring. The web UI talks to the native shells through the Capacitor bridge. On Android, the Java shell uses the USB Serial Host API to read meters through an optical IR/IRDA dongle, and AppWidgetManager to drive home screen widgets. On iOS, the Swift shell drives widgets through WidgetKit.',
      nodes: [
        { label: 'React / Vite Web UI', sub: 'TypeScript, API Layer & Dashboards', icon: Activity },
        { label: 'Capacitor Bridge', sub: 'Custom Native Plugins', icon: Zap, highlight: true },
      ],
      lanes: [
        {
          title: 'Android',
          nodes: [
            { label: 'Android Shell (Java)', sub: 'USB Handling & Background Serial Service', icon: Server },
            { label: 'USB IR / IRDA Dongle', sub: 'USB Serial Host API to Meter Optical Port', icon: Cpu },
            { label: 'Android Widgets', sub: 'AppWidgetManager', icon: Smartphone },
          ],
        },
        {
          title: 'iOS',
          nodes: [
            { label: 'iOS Shell (Swift)', sub: 'App Lifecycle & Widget Sync', icon: Server },
            { label: 'iOS Widgets', sub: 'WidgetKit Extension', icon: Smartphone },
          ],
        },
      ],
      keyHighlights: [
        'Web layer holds the UI and business logic; every backend call goes through one cached, de-duplicated API client',
        'Custom native plugins run camera OCR and the USB IR dongle scan natively, since browsers cannot access USB serial ports',
        'A background serial service handles the dongle handshake and meter registers off the main thread, then return parsed readings to React',
        'A widget bridge syncs Power Factor, Excess Units, Power and Target to Android and iOS home screen widgets',
      ],
    },
    {
      id: 'nilm',
      tabName: 'Smart Meter AI',
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
      id: 'temple-hub',
      tabName: 'Temple Kiosk & TV',
      title: 'Temple Devotee Donation Kiosk & Android TV Network',
      subtitle: 'Freelance Client Production Deployment on Cloud & Android TV',
      category: 'Full-Stack Web & Android TV',
      description:
        'A devotional donation and digital signage ecosystem. Interactive devotee donation kiosks generate dynamic zero-fee UPI QR codes and accept Razorpay payments, verified through an Express backend into MySQL, while native Android TVs pair via 6-digit codes and cache video playlists offline via ExoPlayer.',
      nodes: [
        { label: 'Devotee Donation Kiosk', sub: 'Interactive Touch Panel', icon: Globe },
        { label: 'Dynamic UPI QR Engine', sub: 'Zero-Fee Payment Generator', icon: Zap, highlight: true },
        { label: 'Node.js Express Server', sub: 'REST API & Webhooks', icon: Server },
        { label: 'MariaDB / MySQL', sub: 'Automated Migration Schema', icon: Database },
        { label: 'Android TV Player', sub: 'Jetpack Compose & ExoPlayer', icon: Smartphone },
      ],
      keyHighlights: [
        'Dynamic zero-transaction-fee UPI QR payment generation with automatic status verification',
        'Native Android TV player in Kotlin & Compose with 6-character registration claiming code',
        'ExoPlayer disk caching ensuring 24/7 continuous video and pooja playlist playback without downtime',
        'Automatic database migrations on startup for seamless Plesk / MariaDB deployments',
      ],
    },
    {
      id: 'hostel-hub',
      tabName: 'Hostel Hub Pro',
      title: 'Hostel Hub Pro & Flutter App Architecture',
      subtitle: 'TanStack Start Web Portal + Companion Flutter App + Express REST API + MySQL on Plesk',
      category: 'Full-Stack Web, Flutter & MySQL',
      description:
        'A production multi-client campus accommodation platform connecting institutional administrators, hostel wardens, students, parents, and gate security. The administrative web portal is built with TanStack Start SSR and React for high-throughput room allocation and bulk roster management. The companion Flutter app serves students, parents, caretakers, and security guards with parent-approved 24-hour time-restricted QR gate passes verified by camera scanners in real time against a Plesk-hosted MySQL backend.',
      nodes: [
        { label: 'Express REST Server & RBAC Engine', sub: 'JWT Authentication, Role Middleware & Expiry Scheduler', icon: Server, highlight: true },
        { label: 'MySQL Database on Plesk', sub: 'Student Rosters, Room Master, QR Pass Records & Gate Movement Logs', icon: Database },
      ],
      lanes: [
        {
          title: 'ADMINISTRATIVE WEB PLATFORM (TANSTACK START)',
          nodes: [
            { label: 'Admin Web Portal', sub: 'TanStack Start SSR & React', icon: Globe },
            { label: 'Roster & Room Allocation', sub: 'Bulk CSV Imports & Bed Mapping', icon: Layers },
            { label: 'Campus Analytics', sub: 'Real-Time Occupancy & Attendance', icon: Activity },
          ],
        },
        {
          title: 'COMPANION MOBILE APP (FLUTTER FOR ANDROID & IOS)',
          nodes: [
            { label: 'Student & Parent Portal', sub: 'Leave Requests & Parent Approvals', icon: Smartphone },
            { label: 'Dynamic QR Pass Engine', sub: '24-Hour Time-Restricted Token', icon: Zap, highlight: true },
            { label: 'Guard Camera Scanner', sub: 'Sub-Second Gate Pass Verification', icon: ShieldCheck },
          ],
        },
      ],
      keyHighlights: [
        'Multi-tenant Role-Based Access Control (RBAC): Distinct permission tiers for Super Admin, Hostel Admin, Caretaker, Security Guard, Parent, and Student',
        'TanStack Start full-stack SSR web portal for rapid bulk CSV student onboarding, room allocations, and live campus occupancy tracking',
        'Cross-platform Flutter mobile app handling end-to-end leave lifecycle: student requests, parent in-app approvals, and caretaker floor oversight',
        'Cryptographic dynamic QR gate passes with strict 24-hour expiration window preventing reuse or forged passes',
        'Live camera barcode/QR scanner on guard devices verifying entry/exit against Plesk MySQL records in under 500ms',
      ],
    },
    {
      id: 'samarth',
      tabName: 'Samarth SQL',
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
      tabName: 'SignageHub TV',
      title: 'SignageHub Hybrid Local & Cloud Management System',
      subtitle: 'Enterprise Digital Signage Architecture',
      category: 'Hybrid Cloud & Mobile App',
      description:
        'A multi-mode hybrid digital signage network that coordinates content delivery across a cloud dashboard, a compiled Windows offline server, and a native Android TV client. Supports automated local UDP broadcast discovery, database synchronization, and local caching.',
      nodes: [
        { label: 'Cloud Control Panel', sub: 'React & Supabase Creator', icon: Globe },
        { label: 'Database Sync', sub: 'SQLite / Backup Sync', icon: Database },
        { label: 'UDP Local Discovery', sub: 'Multicast Auto-Pairing', icon: Activity },
        { label: 'Local Edge Server', sub: 'Windows EXE / Ktor Netty Server', icon: Server, highlight: true },
        { label: 'Android TV Player', sub: 'Jetpack Compose Playback', icon: Smartphone },
      ],
      keyHighlights: [
        'Multi Mode Parent-Child Hierarchy: A single local Windows server (Parent) acts as a local cloud hosting a local dashboard for multiple paired TV screens (Children)',
        'Solo Standalone Mode: A self-contained deployment where the TV app runs its own embedded Ktor Netty server, eliminating the need for an external server PC',
        'Zero-config local pairing via UDP multicast discovery on port 9999 utilizing Android WifiManager MulticastLock',
        'Self-healing keystore state: Auto-recovers from EncryptedSharedPreferences KeyStoreException corruption',
        'Offline-first playbacks cached locally in SQLite ensuring zero content playback downtime during internet outages',
      ],
    },
  ];

  const currentSystem = systems.find((s) => s.id === selectedSystem) || systems[0];

  return (
    <section id="architecture" className="py-24 relative bg-[#09090B] border-t border-white/5">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
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
              <span>{sys.tabName}</span>
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

            {/* Description - spans full width with no empty right gap */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed w-full">
              {currentSystem.description}
            </p>

            {/* Visual Animated Flow Diagrams */}
            <div className="py-8">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 text-center">
                Data & Execution Flow
              </h4>

              {currentSystem.lanes ? renderBars(currentSystem.nodes) : renderRow(currentSystem.nodes)}

              {currentSystem.lanes && (
                <>
                  <div className="flex justify-center py-3">
                    <ArrowRight className="w-5 h-5 rotate-90 text-indigo-400/60 animate-pulse" />
                  </div>
                  <div className="grid lg:grid-cols-2 gap-6">
                    {currentSystem.lanes.map((lane) => (
                      <div key={lane.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-indigo-300 text-center mb-4">
                          {lane.title}
                        </p>
                        {renderRow(lane.nodes, true)}
                      </div>
                    ))}
                  </div>
                </>
              )}
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
