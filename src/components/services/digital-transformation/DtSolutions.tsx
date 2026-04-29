"use client";

import { motion } from "framer-motion";
import { FiCloud, FiGlobe, FiLink2, FiPieChart, FiZap } from "react-icons/fi";

const items = [
  { icon: FiZap, title: "AI & Automation", desc: "Automate workflows, customer interactions, and decision-making processes." },
  { icon: FiCloud, title: "Cloud & Infrastructure", desc: "Modern, secure, and scalable systems that support your growth." },
  { icon: FiLink2, title: "System Integration", desc: "Connect CRM, marketing, finance, and operations into one ecosystem." },
  { icon: FiPieChart, title: "Data & Business Intelligence", desc: "Gain real-time insights to make better decisions faster." },
  { icon: FiGlobe, title: "Digital Experience & Websites", desc: "Optimise your digital presence for performance and conversions." },
];

export function DtSolutions() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-nexus-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexus-blue mb-3">OUR SOLUTIONS</p>
        <h2 className="text-4xl font-bold text-nexus-navy mb-10">End-to-End Digital Transformation Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3"><item.icon className="text-nexus-blue" /></div>
              <h3 className="text-sm font-bold text-nexus-dark mb-2">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
