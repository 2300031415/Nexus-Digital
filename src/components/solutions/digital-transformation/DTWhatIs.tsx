"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiCloud, FiCpu, FiSettings, FiUser } from "react-icons/fi";

const cards = [
  { icon: FiSettings, label: "Business Process Automation" },
  { icon: FiCpu, label: "AI Integration" },
  { icon: FiCloud, label: "Cloud Infrastructure" },
  { icon: FiBarChart2, label: "Data & Reporting Systems" },
  { icon: FiUser, label: "Customer Journey Optimisation" },
];

export default function DTWhatIs() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">WHAT IS DIGITAL TRANSFORMATION?</p>
          <h2 className="text-nexus-dark text-[1.85rem] font-extrabold leading-tight mb-4">More Than Technology. It&apos;s a Smarter Way to Work.</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-sm">
            Digital transformation is the process of integrating modern technology into every part of your business to improve efficiency,
            performance, and scalability.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            It&apos;s not just about software - it&apos;s about redesigning how your business operates.
          </p>
        </div>
        <div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="flex flex-wrap gap-3 justify-start">
            {cards.map((card) => (
              <motion.div key={card.label} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center w-28">
                <div className="w-14 h-14 bg-nexus-light-bg border border-gray-100 rounded-2xl flex items-center justify-center text-nexus-blue text-2xl mb-2 shadow-sm">
                  <card.icon />
                </div>
                <p className="text-nexus-dark font-semibold text-xs leading-snug">{card.label}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-nexus-dark font-semibold text-sm text-right mt-6">
            The goal: A <span className="text-nexus-blue italic">smarter, faster, more scalable</span> business.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
