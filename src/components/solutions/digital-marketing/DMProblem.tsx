"use client";

import { motion } from "framer-motion";
import { FiAlertCircle, FiCompass, FiDollarSign, FiEyeOff, FiSliders, FiUserX } from "react-icons/fi";

const cards = [
  { icon: FiUserX, title: "Low-Quality Leads", desc: "Leads that don't convert and waste your time." },
  { icon: FiDollarSign, title: "High Cost Per Click", desc: "Rising ad costs with poor returns." },
  { icon: FiCompass, title: "No Clear Strategy", desc: "Random activity with no clear direction." },
  { icon: FiSliders, title: "Poor Conversion Rates", desc: "Traffic doesn't convert into customers." },
  { icon: FiEyeOff, title: "No Tracking", desc: "No visibility, no data, no improvements." },
  { icon: FiAlertCircle, title: "Marketing Without a System = Wasted Money", desc: "Turn marketing into an investment, not an expense.", featured: true },
];

export default function DMProblem() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="text-center max-w-3xl mx-auto mb-12 px-6">
        <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-2">THE PROBLEM</p>
        <h2 className="text-nexus-dark text-[2rem] font-extrabold">Most Businesses Waste Money on Marketing</h2>
      </div>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cards.map((card) => (
          <motion.div key={card.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className={`${card.featured ? "bg-nexus-light-bg border-blue-100" : "bg-white border-gray-100"} border rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200`}>
            <div className="w-12 h-12 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center text-nexus-blue text-xl"><card.icon /></div>
            <p className="text-nexus-dark font-bold text-sm mb-2">{card.title}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
