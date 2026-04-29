"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiBarChart2, FiCalendar, FiCpu, FiPhoneCall, FiRefreshCw, FiUserCheck } from "react-icons/fi";

const cards = [
  { icon: FiPhoneCall, title: "AI Receptionist", desc: "Handles calls, answers questions, captures leads, and routes enquiries." },
  { icon: FiUserCheck, title: "AI Lead Qualification", desc: "Qualifies leads, asks the right questions, and sends only high-quality leads." },
  { icon: FiCalendar, title: "AI Booking Systems", desc: "Books appointments, manages calendars, and reduces no-shows." },
  { icon: FiRefreshCw, title: "Workflow Automation", desc: "Automates repetitive tasks and connects your tools and systems." },
  { icon: FiCpu, title: "AI Assistants", desc: "AI-powered assistants that support your team and customers." },
  { icon: FiBarChart2, title: "Data & Reporting Automation", desc: "Automated reports and dashboards with real-time business insights." },
];

export default function AIServices() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="text-center mb-12 px-6">
        <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-2">OUR AI & AUTOMATION SOLUTIONS</p>
      </div>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cards.map((card) => (
          <motion.div key={card.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="w-14 h-14 mx-auto mb-3 bg-blue-50 rounded-2xl flex items-center justify-center text-nexus-blue text-2xl"><card.icon /></div>
            <p className="text-nexus-dark font-bold text-sm mb-2">{card.title}</p>
            <p className="text-gray-500 text-xs leading-relaxed mb-3">{card.desc}</p>
            <p className="text-nexus-blue text-xs font-semibold hover:underline flex items-center justify-center gap-1">
              Learn more <FiArrowRight className="text-[10px]" />
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
