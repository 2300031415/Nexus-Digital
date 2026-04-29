"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiBarChart2, FiCalendar, FiCircle, FiCpu, FiMail, FiPhone, FiSettings, FiTrendingUp, FiUsers, FiX } from "react-icons/fi";

const stats = [
  { label: "Tasks Automated", value: "1,248", delta: "↑28% vs last month" },
  { label: "Hours Saved", value: "520", delta: "↑34% vs last month" },
  { label: "Cost Saved", value: "$18,650", delta: "↑26% vs last month" },
  { label: "Leads Captured", value: "2,139", delta: "↑21% vs last month" },
];

export default function AIHero() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">AI &amp; AUTOMATION</p>
          <h1 className="text-[2.75rem] leading-[1.15] font-extrabold mb-5">
            <span className="text-nexus-dark">AI &amp; Automation</span>
            <br />
            <span className="text-nexus-dark">That Works Like a</span>
            <br />
            <span className="text-nexus-blue">Digital Workforce</span>
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-[420px] mb-6">
            We design and deploy AI-powered systems that automate operations, reduce costs, and scale your business-without increasing
            headcount.
            <br />
            Turn repetitive work into intelligent automation.
          </p>
          <div className="flex gap-3 mt-2">
            <button className="bg-nexus-green text-white font-semibold text-sm px-5 py-3 rounded-lg flex items-center gap-2 hover:brightness-110 transition">
              <FiPhone /> Book Free AI Strategy Call
            </button>
            <button className="border border-gray-300 text-nexus-dark font-medium text-sm px-5 py-3 rounded-lg flex items-center gap-2 hover:border-nexus-blue hover:text-nexus-blue transition">
              Get an AI Audit <FiArrowRight />
            </button>
          </div>
          <div className="flex flex-wrap gap-8 mt-7">
            <p className="flex items-center gap-2 text-gray-500 text-xs font-medium"><FiCpu className="text-nexus-blue" />AI-Powered Systems</p>
            <p className="flex items-center gap-2 text-gray-500 text-xs font-medium"><FiSettings className="text-nexus-blue" />Automation Experts</p>
            <p className="flex items-center gap-2 text-gray-500 text-xs font-medium"><FiTrendingUp className="text-nexus-blue" />Built for ROI</p>
          </div>
        </div>

        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="relative w-full h-[460px]">
          <div className="absolute top-0 left-0 right-10 h-72 bg-nexus-navy rounded-2xl shadow-2xl p-5 text-white overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold text-sm">Automation Overview</p>
              <FiX className="text-gray-400 text-xs" />
            </div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="grid grid-cols-4 gap-2 mb-4">
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }} className="bg-white/10 rounded-lg p-3">
                  <p className="text-gray-400 text-[10px] mb-1">{stat.label}</p>
                  <p className="text-white font-bold text-xl">{stat.value}</p>
                  <p className="text-nexus-green text-[10px]">{stat.delta}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-gray-400 text-[10px] mb-2">Automation Performance</p>
                <svg viewBox="0 0 160 62" className="w-full h-16">
                  <polyline points="10,52 28,48 46,43 64,39 82,33 100,28 118,21 140,14" stroke="#3B82F6" strokeWidth="2" fill="none" />
                </svg>
                <p className="text-[8px] text-gray-500">Jan Feb Mar Apr May Jun Jul</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-gray-400 text-[10px] mb-2">Leads by Source</p>
                <div className="flex items-center">
                  <svg viewBox="0 0 80 80" className="w-14 h-14">
                    <circle cx="40" cy="40" r="28" fill="none" stroke="#3B82F6" strokeWidth="10" strokeDasharray="52 176" transform="rotate(-90 40 40)" />
                    <circle cx="40" cy="40" r="28" fill="none" stroke="#16A34A" strokeWidth="10" strokeDasharray="38 176" strokeDashoffset="-52" transform="rotate(-90 40 40)" />
                    <circle cx="40" cy="40" r="28" fill="none" stroke="#F59E0B" strokeWidth="10" strokeDasharray="28 176" strokeDashoffset="-90" transform="rotate(-90 40 40)" />
                    <circle cx="40" cy="40" r="28" fill="none" stroke="#8B5CF6" strokeWidth="10" strokeDasharray="24 176" strokeDashoffset="-118" transform="rotate(-90 40 40)" />
                    <circle cx="40" cy="40" r="28" fill="none" stroke="#6B7280" strokeWidth="10" strokeDasharray="20 176" strokeDashoffset="-142" transform="rotate(-90 40 40)" />
                  </svg>
                  <div className="text-[8px] text-gray-400 space-y-0.5 ml-2">
                    <p>● Website</p>
                    <p>● AI Chat</p>
                    <p>● Phone</p>
                    <p>● Social</p>
                    <p>● Other</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 mt-2">
              <p className="text-gray-400 text-[10px] mb-2">Recent Automations</p>
              <div className="space-y-1">
                {["AI Receptionist", "Lead Qualification", "Appointment Booking", "Email Follow-up"].map((row) => (
                  <div key={row} className="flex items-center justify-between">
                    <p className="flex items-center text-white text-[10px] font-medium"><FiCircle className="text-nexus-blue text-[8px] mr-2" />{row}</p>
                    <span className="bg-nexus-green/20 text-nexus-green text-[9px] px-2 py-0.5 rounded-full">Active</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute bottom-0 right-0 w-40 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mx-auto mb-3 relative shadow-inner">
              <div className="absolute top-4 left-3 w-4 h-4 rounded-full bg-nexus-blue"><div className="w-2 h-2 rounded-full bg-white absolute top-1 left-1" /></div>
              <div className="absolute top-4 right-3 w-4 h-4 rounded-full bg-nexus-blue"><div className="w-2 h-2 rounded-full bg-white absolute top-1 left-1" /></div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-6 h-1.5 rounded-full bg-nexus-blue/40" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-gray-400 rounded-full"><div className="w-2 h-2 rounded-full bg-nexus-blue absolute -top-1 -left-0.5" /></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-nexus-blue text-white font-extrabold text-[10px] flex items-center justify-center">N</div>
            </div>
            <p className="text-nexus-dark font-extrabold text-xl">24/7</p>
            <p className="text-nexus-dark font-bold text-sm">AI Systems</p>
            <p className="text-gray-500 text-xs">Working for You</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
