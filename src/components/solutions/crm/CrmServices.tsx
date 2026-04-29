"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiCalendar, FiCpu, FiGitMerge, FiLayout, FiMail, FiSettings } from "react-icons/fi";

const services = [
  { icon: FiSettings, title: "CRM Setup & Configuration", desc: "Configure a CRM foundation tailored to your processes." },
  { icon: FiCpu, title: "Workflow Automation", desc: "Automate repetitive tasks, routing, and operational sequences." },
  { icon: FiLayout, title: "Pipeline Design & Optimisation", desc: "Design high-performing pipeline stages and conversion paths." },
  { icon: FiMail, title: "Email & SMS Automation", desc: "Launch nurture journeys and reminders without manual effort." },
  { icon: FiCalendar, title: "Appointment & Booking Integration", desc: "Connect calendars, booking pages, and reminders seamlessly." },
  { icon: FiBarChart2, title: "Reporting & Analytics Dashboards", desc: "Measure performance with clear dashboards and KPIs." },
  { icon: FiGitMerge, title: "Integration With Your Tools", desc: "Sync CRM with marketing, finance, support, and sales tools." },
];

export function CrmServices() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-3 text-center">END-TO-END CRM AUTOMATION & INTEGRATION</p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 mt-10">
          {services.map((s) => (
            <motion.div key={s.title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                <s.icon className="w-5 h-5 text-nexus-blue" />
              </div>
              <h3 className="text-sm font-semibold text-nexus-navy mb-2">{s.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
