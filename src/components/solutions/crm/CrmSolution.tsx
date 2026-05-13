"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiCalendar, FiCpu, FiMail, FiTarget, FiTrendingUp } from "react-icons/fi";

const features = [
  { icon: FiTarget, title: "Capture & Manage Leads", desc: "Capture leads from all channels and keep everything organised." },
  { icon: FiMail, title: "Automate Follow-Ups", desc: "Nurture leads automatically with emails, SMS, and task automation." },
  { icon: FiCpu, title: "Track Every Interaction", desc: "Complete visibility into every conversation, activity, and touchpoint." },
  { icon: FiTrendingUp, title: "Improve Conversions", desc: "Streamlined processes and automations that convert more leads into customers." },
  { icon: FiBarChart2, title: "Real-Time Insights", desc: "Dashboards and reports that help you make smarter, faster decisions." },
  { icon: FiCalendar, title: "Your CRM Becomes The Central Engine Of Your Business.", desc: "A complete growth system that aligns your sales, service, and marketing operations.", highlight: true },
];

export function CrmSolution() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-nexus-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-3">THE SOLUTION</p>
        <h2 className="text-3xl md:text-4xl font-bold text-nexus-navy mb-12">We Turn Your CRM Into a Revenue-Generating System</h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="flex flex-col xl:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {features.map((f, idx) => (
            <motion.div key={f.title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className={`flex-1 p-5 lg:p-6 text-center flex flex-col items-center justify-start ${f.highlight ? "bg-[#F0F6FF] text-nexus-navy" : "bg-white text-nexus-navy"} ${idx !== features.length - 1 ? "border-b xl:border-b-0 xl:border-r border-gray-100" : ""}`}>
              <div className={`w-12 h-12 rounded-full border ${f.highlight ? "bg-nexus-blue text-white border-nexus-blue" : "border-nexus-blue/20 text-nexus-blue bg-white"} flex items-center justify-center mb-4 shrink-0`}>
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className={`text-[12px] font-bold mb-2 leading-tight ${f.highlight ? "text-nexus-blue" : ""}`}>{f.title}</h3>
              <p className={`text-[11px] leading-relaxed text-gray-600`}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
