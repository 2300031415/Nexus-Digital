"use client";

import { motion } from "framer-motion";
import { FiActivity, FiBarChart2, FiClock, FiDollarSign, FiEye, FiZap } from "react-icons/fi";

const benefits = [
  { icon: FiZap, title: "Increased Efficiency", desc: "Streamline operations and eliminate bottlenecks." },
  { icon: FiClock, title: "Reduced Manual Work", desc: "Automate repetitive tasks and save time." },
  { icon: FiDollarSign, title: "Lower Operational Costs", desc: "Reduce waste and improve profitability." },
  { icon: FiBarChart2, title: "Faster Decision-Making", desc: "Access real-time data and actionable insights." },
  { icon: FiEye, title: "Real-Time Visibility", desc: "See everything in one place across your business." },
  { icon: FiActivity, title: "Scalable Growth", desc: "Build systems designed to grow with you." },
];

export function DtBenefits() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexus-blue mb-3">THE BENEFITS</p>
        <h2 className="text-4xl font-bold text-nexus-navy mb-10">What Digital Transformation Delivers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {benefits.map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-2"><item.icon className="text-nexus-blue" /></div>
              <h3 className="text-sm font-bold text-nexus-dark mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
