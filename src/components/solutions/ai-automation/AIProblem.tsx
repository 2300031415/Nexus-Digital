"use client";

import { motion } from "framer-motion";
import { FiAlertCircle, FiClock, FiDollarSign, FiFileText, FiSliders, FiTrendingUp } from "react-icons/fi";

const cards = [
  { icon: FiFileText, title: "Repetitive Admin Work", desc: "Your team spends hours on manual tasks that could be automated." },
  { icon: FiClock, title: "Slow Response Times", desc: "Delayed responses lead to lost leads and unhappy customers." },
  { icon: FiAlertCircle, title: "Missed Opportunities", desc: "Leads slip through the cracks without instant follow-up." },
  { icon: FiSliders, title: "Inefficient Workflows", desc: "Disconnected systems and manual processes slow your business down." },
  { icon: FiDollarSign, title: "High Operational Costs", desc: "More manual work means higher costs and lower profit margins." },
  { icon: FiTrendingUp, title: "Limited Growth", desc: "Manual processes limit your ability to scale efficiently.", featured: true },
];

export default function AIProblem() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="text-center max-w-3xl mx-auto mb-12 px-6">
        <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-2">THE PROBLEM</p>
        <h2 className="text-nexus-dark text-[2rem] font-extrabold">Most Businesses Are Wasting Time on Manual Work</h2>
      </div>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden">
        {cards.map((card, idx) => (
          <motion.div key={card.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className={`p-6 text-center ${idx !== cards.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-gray-100' : ''}`}>
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center text-nexus-blue text-3xl"><card.icon /></div>
            <p className="text-nexus-dark font-bold text-[13px] mb-2 leading-tight">{card.title}</p>
            <p className="text-gray-500 text-[11px] leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
