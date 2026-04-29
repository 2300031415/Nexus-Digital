"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiCloud, FiCpu, FiLink, FiMonitor } from "react-icons/fi";

const cards = [
  { icon: FiCpu, title: "AI & Automation", desc: "Automate workflows, customer interactions, and decision-making processes." },
  { icon: FiCloud, title: "Cloud & Infrastructure", desc: "Modern, secure, and scalable systems that support your growth." },
  { icon: FiLink, title: "System Integration", desc: "Connect CRM, marketing, finance, and operations into one ecosystem." },
  { icon: FiBarChart2, title: "Data & Business Intelligence", desc: "Gain real-time insights to make better decisions faster." },
  { icon: FiMonitor, title: "Digital Experience & Websites", desc: "Optimise your digital presence for performance and conversions." },
];

export default function DTSolutions() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-20">
      <div className="text-center max-w-3xl mx-auto mb-12 px-6">
        <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-2">OUR SOLUTIONS</p>
        <h2 className="text-nexus-dark text-3xl font-extrabold">End-to-End Digital Transformation Services</h2>
      </div>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {cards.map((card) => (
          <motion.div key={card.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="w-14 h-14 mx-auto mb-4 bg-blue-50 rounded-2xl flex items-center justify-center text-nexus-blue text-2xl">
              <card.icon />
            </div>
            <p className="text-nexus-dark font-bold text-sm mb-2">{card.title}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
