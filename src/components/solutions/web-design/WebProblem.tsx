"use client";

import { motion } from "framer-motion";
import { FiAlertCircle, FiEyeOff, FiSlash, FiSmartphone, FiTrendingDown, FiXCircle } from "react-icons/fi";

const cards = [
  { icon: FiSlash, title: "Slow Load Speeds", desc: "Visitors leave before the page loads, costing you leads." },
  { icon: FiSmartphone, title: "Not Mobile-Friendly", desc: "Over 60% of traffic is mobile - poor mobile UX loses customers." },
  { icon: FiTrendingDown, title: "Poor Conversion Rate", desc: "Visitors browse but don't take action or make enquiries." },
  { icon: FiAlertCircle, title: "No Clear Call-to-Action", desc: "Confusing layouts leave visitors unsure what to do next." },
  { icon: FiEyeOff, title: "Poor SEO", desc: "Your website isn't visible on Google, so leads go to competitors." },
  { icon: FiXCircle, title: "Outdated Design", desc: "An old or generic website damages credibility and trust." },
];

export default function WebProblem() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="text-center max-w-3xl mx-auto mb-12 px-6">
        <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-2">THE PROBLEM</p>
        <h2 className="text-nexus-dark text-[2rem] font-extrabold">Most Business Websites Fail to Generate Results</h2>
      </div>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cards.map((card) => (
          <motion.div key={card.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center text-nexus-blue text-xl"><card.icon /></div>
            <p className="text-nexus-dark font-bold text-sm mb-2">{card.title}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
