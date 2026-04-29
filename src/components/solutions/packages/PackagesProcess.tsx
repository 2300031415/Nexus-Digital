"use client";

import { motion } from "framer-motion";
import { FiSearch, FiTool, FiTrendingUp } from "react-icons/fi";

const steps = [
  {
    num: "1",
    icon: FiSearch,
    title: "Strategy & Planning",
    desc: "We learn about your business, define your goals, audience, and create a customised strategy.",
  },
  {
    num: "2",
    icon: FiTool,
    title: "Build & Launch",
    desc: "We build your website, set up your marketing, automation and tracking, then launch your system.",
  },
  {
    num: "3",
    icon: FiTrendingUp,
    title: "Optimise & Scale",
    desc: "We optimise performance, improve results, and scale your system to give more growth.",
  },
];

export function PackagesProcess() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-16 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-8">OUR PROCESS</p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {steps.map((s, idx) => (
            <div key={s.title} className="relative">
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-nexus-light-bg rounded-xl p-6">
                <div className="w-8 h-8 rounded-full bg-nexus-blue text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">{s.num}</div>
                <s.icon className="w-6 h-6 text-nexus-blue mx-auto mb-2" />
                <h3 className="font-semibold text-nexus-dark mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </motion.div>
              {idx < steps.length - 1 && (
                <svg className="hidden md:block absolute top-1/2 -right-5 w-10 h-3" viewBox="0 0 40 12">
                  <motion.line x1="0" y1="6" x2="30" y2="6" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" initial={{ strokeDashoffset: 30 }} whileInView={{ strokeDashoffset: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
                  <polygon points="31,2 39,6 31,10" fill="#3B82F6" />
                </svg>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
