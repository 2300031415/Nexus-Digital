"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCloud, FiCpu, FiLink, FiPieChart, FiSettings, FiTrendingUp, FiUsers } from "react-icons/fi";

const satellites = [
  { icon: FiCpu, label: "AI & Automation", pos: "top-0 left-1/2 -translate-x-1/2" },
  { icon: FiCloud, label: "Cloud & Infrastructure", pos: "top-4 right-0" },
  { icon: FiSettings, label: "Process Automation", pos: "top-1/2 right-0 -translate-y-1/2" },
  { icon: FiLink, label: "System Integration", pos: "bottom-0 left-1/2 -translate-x-1/2" },
  { icon: FiPieChart, label: "Data & Analytics", pos: "top-1/2 left-0 -translate-y-1/2" },
] as const;

export default function DTHero() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">DIGITAL TRANSFORMATION</p>
          <h1 className="text-[2.8rem] leading-[1.15] font-extrabold mb-5">
            <span className="text-nexus-dark">Digital Transformation</span>
            <br />
            <span className="text-nexus-blue">That Drives</span> <span className="text-nexus-dark">Real</span>
            <br />
            <span className="text-nexus-dark">Business Growth</span>
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-[420px] mb-6">
            We help businesses modernise systems, automate operations, and scale using AI, cloud, and intelligent technology. Turn outdated
            processes into high-performance digital ecosystems.
          </p>
          <div className="flex gap-3 mt-2">
            <button className="bg-nexus-green text-white font-semibold text-sm px-5 py-3 rounded-lg flex items-center gap-2 hover:brightness-110 transition">
              Book Free Strategy Session <FiArrowRight />
            </button>
            <button className="border border-gray-300 text-nexus-dark font-medium text-sm px-5 py-3 rounded-lg flex items-center gap-2 hover:border-nexus-blue hover:text-nexus-blue transition">
              Get Your Digital Audit <FiArrowRight />
            </button>
          </div>
          <div className="flex flex-wrap gap-8 mt-7">
            <p className="flex items-center gap-2 text-gray-500 text-xs font-medium"><FiCpu className="text-nexus-blue" />AI + Automation Experts</p>
            <p className="flex items-center gap-2 text-gray-500 text-xs font-medium"><FiUsers className="text-nexus-blue" />IT &amp; Business Specialists</p>
            <p className="flex items-center gap-2 text-gray-500 text-xs font-medium"><FiTrendingUp className="text-nexus-blue" />Built for ROI</p>
          </div>
        </div>

        <div className="relative w-full h-[420px] flex items-center justify-center">
          <motion.div animate={{ rotate: [3, 6, 3] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-nexus-blue to-nexus-dark rounded-3xl shadow-2xl flex items-center justify-center rotate-3">
            <span className="text-white font-extrabold text-4xl">N</span>
            <div className="absolute inset-0 rounded-3xl ring-4 ring-nexus-blue/20" />
          </motion.div>
          <motion.svg initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 1.5 }} className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 420" fill="none">
            <path d="M210 210 L210 40" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.35" />
            <path d="M210 210 L370 70" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.35" />
            <path d="M210 210 L390 210" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.35" />
            <path d="M210 210 L210 380" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.35" />
            <path d="M210 210 L30 210" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.35" />
          </motion.svg>
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="absolute inset-0">
            {satellites.map((item) => (
              <motion.div key={item.label} variants={{ hidden: { opacity: 0, scale: 0 }, show: { opacity: 1, scale: 1 } }} className={`absolute ${item.pos} bg-white rounded-2xl border border-gray-100 shadow-lg px-4 py-3 flex flex-col items-center text-center w-28`}>
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-nexus-blue text-xl mb-1.5">
                  <item.icon />
                </div>
                <p className="text-nexus-dark font-semibold text-[11px] leading-tight">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
