"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiCheckCircle, FiGlobe, FiMessageCircle, FiSearch, FiZap } from "react-icons/fi";

const benefits = [
  [FiMessageCircle, "More Leads & Enquiries"],
  [FiCheckCircle, "Higher Conversion Rates"],
  [FiSearch, "Better SEO Rankings"],
  [FiZap, "Automated Lead Capture & Follow-Up"],
  [FiGlobe, "Stronger Online Presence"],
  [FiBarChart2, "Scalable Growth"],
] as const;

export function WdBenefits() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexus-blue mb-3">THE BENEFITS</p>
          <h2 className="text-4xl font-bold text-nexus-navy leading-tight">
            What a High-Performing Website <span className="text-nexus-blue">Delivers</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {benefits.map(([Icon, label]) => (
            <div key={label} className="bg-nexus-light-bg border border-gray-100 rounded-xl p-4 text-center">
              <Icon className="text-nexus-blue mx-auto mb-2" />
              <p className="text-xs font-semibold text-nexus-dark">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
