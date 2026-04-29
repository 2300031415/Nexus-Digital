"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiCheckCircle, FiLink, FiMonitor, FiSearch, FiSmartphone, FiZap } from "react-icons/fi";

const features = [
  { icon: FiMonitor, title: "Conversion-Focused Design" },
  { icon: FiZap, title: "Fast Load Speeds" },
  { icon: FiSmartphone, title: "Mobile-First Development" },
  { icon: FiSearch, title: "SEO Optimised" },
  { icon: FiLink, title: "CRM & Tool Integration" },
  { icon: FiBarChart2, title: "Analytics & Tracking" },
];

export default function WebWhatWeBuild() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">WHAT WE BUILD</p>
          <h2 className="text-nexus-dark text-[1.9rem] font-extrabold leading-tight mb-4">
            Every Website We Build
            <br />
            Is Designed to <span className="text-nexus-blue">Convert</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
            We don&apos;t just make websites look good - we engineer them to turn visitors into leads and customers.
          </p>
          <div className="bg-white border border-blue-100 rounded-xl p-4 flex items-center gap-3 max-w-xs shadow-sm">
            <FiCheckCircle className="text-nexus-green text-xl flex-shrink-0" />
            <p className="text-nexus-dark font-semibold text-sm leading-snug">Fast. Beautiful. Built to generate leads from day one.</p>
          </div>
        </div>
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">BUILT FOR PERFORMANCE &amp; RESULTS</p>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center text-nexus-blue text-xl"><feature.icon /></div>
                <p className="text-nexus-dark font-bold text-xs leading-snug mb-1">{feature.title}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center mt-8 text-nexus-dark font-bold text-lg">
            Every element is built with one goal: <span className="text-nexus-blue">more customers.</span>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
