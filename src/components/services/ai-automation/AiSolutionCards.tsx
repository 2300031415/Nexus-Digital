"use client";

import { motion } from "framer-motion";
import { FiBarChart, FiCalendar, FiCpu, FiMessageSquare, FiSettings, FiStar, FiUserCheck } from "react-icons/fi";

const cards = [
  { icon: FiCpu, title: "AI Receptionist", desc: "Handles calls, answers questions, captures leads, and routes enquiries." },
  { icon: FiStar, title: "AI Lead Qualification", desc: "Qualifies leads, asks the right questions, and sends only high-quality leads." },
  { icon: FiCalendar, title: "AI Booking Systems", desc: "Books appointments, manages calendars, and reduces no-shows." },
  { icon: FiSettings, title: "Workflow Automation", desc: "Automates repetitive tasks and connects your tools and systems." },
  { icon: FiMessageSquare, title: "AI Assistants", desc: "AI-powered assistants that support your team and customers." },
  { icon: FiBarChart, title: "Data & Reporting Automation", desc: "Automated reports and dashboards with real-time business insights." },
];

export function AiSolutionCards() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-10">OUR AI & AUTOMATION SOLUTIONS</p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <motion.div key={c.title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <c.icon className="w-[22px] h-[22px] text-[#3B82F6]" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mt-4 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{c.desc}</p>
              <span className="text-sm text-[#3B82F6] font-medium">Learn more →</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
