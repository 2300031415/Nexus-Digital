"use client";

import { motion } from "framer-motion";
import { FiAlertCircle, FiBarChart2, FiClipboard, FiClock, FiDollarSign, FiShuffle } from "react-icons/fi";

const cards = [
  { icon: FiClipboard, title: "Repetitive Admin Work", desc: "Your team spends hours on manual tasks that could be automated." },
  { icon: FiClock, title: "Slow Response Times", desc: "Delayed responses lead to lost leads and unhappy customers." },
  { icon: FiAlertCircle, title: "Missed Opportunities", desc: "Leads slip through the cracks without instant follow-up." },
  { icon: FiShuffle, title: "Inefficient Workflows", desc: "Disconnected systems and manual processes slow your business down." },
  { icon: FiDollarSign, title: "High Operational Costs", desc: "More manual work means higher costs and lower profit margins." },
  { icon: FiBarChart2, title: "Limited Growth", desc: "Manual processes limit your ability to scale efficiently." },
];

export function AiProblem() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-3">THE PROBLEM</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-12">Most Businesses Are Wasting Time on Manual Work</h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {cards.map((c) => (
            <motion.div key={c.title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <c.icon className="w-[22px] h-[22px] text-[#3B82F6]" />
              </div>
              <h3 className="text-sm font-semibold text-[#0F172A] mt-3 mb-2">{c.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
