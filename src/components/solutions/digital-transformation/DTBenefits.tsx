"use client";

import { motion } from "framer-motion";
import { FiDollarSign, FiEye, FiMaximize, FiSettings, FiTrendingUp, FiZap } from "react-icons/fi";

const cards = [
  { icon: FiZap, title: "Increased Efficiency", desc: "Streamline operations and eliminate bottlenecks." },
  { icon: FiSettings, title: "Reduced Manual Work", desc: "Automate repetitive tasks and save time." },
  { icon: FiDollarSign, title: "Lower Operational Costs", desc: "Reduce waste and improve profitability." },
  { icon: FiTrendingUp, title: "Faster Decision-Making", desc: "Access real-time data and actionable insights." },
  { icon: FiEye, title: "Real-Time Visibility", desc: "See everything in one place across your business." },
  { icon: FiMaximize, title: "Scalable Growth", desc: "Build systems designed to grow with you." },
];

export default function DTBenefits() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="text-center mb-12 px-6">
        <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-2">THE BENEFITS</p>
        <h2 className="text-nexus-dark text-3xl font-extrabold">What Digital Transformation Delivers</h2>
      </div>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cards.map((card) => (
          <motion.div key={card.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center text-nexus-blue text-xl">
              <card.icon />
            </div>
            <p className="text-nexus-dark font-bold text-sm mb-1">{card.title}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
