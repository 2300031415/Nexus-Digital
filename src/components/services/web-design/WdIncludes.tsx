"use client";

import { motion } from "framer-motion";
import { FiActivity, FiCode, FiMessageSquare, FiMonitor, FiPieChart, FiSearch, FiSettings, FiSmartphone, FiZap } from "react-icons/fi";

const items = [
  [FiCode, "Custom Design (No Templates)"],
  [FiSmartphone, "Mobile-Responsive Design"],
  [FiSearch, "SEO-Ready Structure"],
  [FiZap, "Fast Loading Speeds"],
  [FiMonitor, "Conversion-Focused Layout"],
  [FiMessageSquare, "Lead Capture Forms"],
  [FiSettings, "CRM & Marketing Integration"],
  [FiMessageSquare, "AI Chatbot Integration"],
  [FiPieChart, "Analytics & Tracking Setup"],
] as const;

export function WdIncludes() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-nexus-blue font-semibold uppercase tracking-[0.2em] mb-8">WHAT&apos;S INCLUDED IN EVERY WEBSITE</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3">
          {items.map(([Icon, label]) => (
            <div key={label} className="bg-nexus-light-bg border border-gray-100 rounded-xl p-3 text-center">
              <Icon className="text-nexus-blue mx-auto mb-2" />
              <p className="text-xs font-semibold text-nexus-dark">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
