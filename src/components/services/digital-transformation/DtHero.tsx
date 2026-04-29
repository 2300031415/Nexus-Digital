"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiBarChart2, FiCloud, FiCpu, FiLink2, FiPieChart, FiSettings, FiTrendingUp, FiUsers } from "react-icons/fi";

const satellites = [
  { icon: FiCpu, label: "AI & Automation", pos: "top-4 left-6", move: [0, -6, 0] },
  { icon: FiCloud, label: "Cloud & Infrastructure", pos: "top-6 right-4", move: [0, -8, 0] },
  { icon: FiPieChart, label: "Data & Analytics", pos: "top-36 -left-2", move: [0, -5, 0] },
  { icon: FiSettings, label: "Process Automation", pos: "top-36 right-0", move: [0, -7, 0] },
  { icon: FiLink2, label: "System Integration", pos: "bottom-8 left-1/2 -translate-x-1/2", move: [0, -6, 0] },
] as const;

export function DtHero() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs text-nexus-blue font-semibold uppercase tracking-[0.2em] mb-3">DIGITAL TRANSFORMATION</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-nexus-navy mb-4">
            Digital Transformation <span className="text-nexus-blue">That Drives</span>
            <br />
            Real Business Growth
          </h1>
          <p className="text-gray-600 text-[15px] leading-relaxed max-w-xl">
            We help businesses modernise systems, automate operations, and scale using AI, cloud, and intelligent technology. Turn outdated
            processes into high-performance digital ecosystems.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <motion.button 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }} 
              onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
              className="bg-nexus-blue text-white px-6 h-12 rounded-lg text-sm font-semibold"
            >
              Book Free Strategy Session →
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="border-2 border-nexus-blue text-nexus-blue px-6 h-12 rounded-lg text-sm font-semibold">
              Get Your Digital Audit +
            </motion.button>
          </div>
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-600 font-medium">
            <p className="flex items-center gap-2"><FiCpu className="text-nexus-blue" />AI + Automation Experts</p>
            <p className="flex items-center gap-2"><FiUsers className="text-nexus-blue" />IT &amp; Business Specialists</p>
            <p className="flex items-center gap-2"><FiTrendingUp className="text-nexus-blue" />Built for ROI</p>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <Image 
            src="/Catalog/DigitalTransformation_1.png" 
            alt="Digital Transformation" 
            width={800} 
            height={600}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </motion.section>
  );
}
