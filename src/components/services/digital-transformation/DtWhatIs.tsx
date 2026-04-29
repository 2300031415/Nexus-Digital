"use client";

import { motion } from "framer-motion";
import { FiCloud, FiCpu, FiPieChart, FiRefreshCw, FiSettings } from "react-icons/fi";

const items = [
  { icon: FiSettings, label: "Business Process Automation" },
  { icon: FiCpu, label: "AI Integration" },
  { icon: FiCloud, label: "Cloud Infrastructure" },
  { icon: FiPieChart, label: "Data & Reporting Systems" },
  { icon: FiRefreshCw, label: "Customer Journey Optimisation" },
];

export function DtWhatIs() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexus-blue mb-3">WHAT IS DIGITAL TRANSFORMATION?</p>
          <h2 className="text-4xl font-bold text-nexus-navy leading-tight">More Than Technology. It&apos;s a Smarter Way to Work.</h2>
          <p className="text-gray-600 text-[15px] leading-relaxed mt-4">
            Digital transformation is the process of integrating modern technology into every part of your business to improve efficiency,
            performance, and scalability.
          </p>
          <p className="text-gray-600 text-[15px] leading-relaxed mt-3">
            It&apos;s not just about software - it&apos;s about redesigning how your business operates.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {items.map((item) => (
            <div key={item.label} className="bg-nexus-light-bg border border-gray-100 rounded-xl p-4 text-center">
              <div className="w-10 h-10 rounded-full bg-white border border-blue-100 mx-auto flex items-center justify-center mb-2">
                <item.icon className="text-nexus-blue" />
              </div>
              <p className="text-xs font-semibold text-nexus-dark">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-2xl font-semibold text-nexus-dark mt-10">
        The goal: A <span className="text-nexus-blue">smarter, faster, more scalable business.</span>
      </p>
    </motion.section>
  );
}
