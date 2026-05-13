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
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="flex flex-col md:flex-row items-start justify-between gap-4 relative mt-12">
          <div className="hidden md:block absolute top-14 left-[15%] right-[15%] h-0 border-t border-dashed border-nexus-blue/40 z-0"></div>
          {steps.map((s, idx) => (
            <div key={s.title} className="flex-1 w-full text-center relative z-10 px-2">
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-nexus-blue text-white font-bold text-[10px] flex items-center justify-center mb-3 shadow-sm">{s.num}</div>
                <div className="w-16 h-16 rounded-full bg-white shadow-md border-4 border-white flex items-center justify-center mb-4">
                  <s.icon className="w-7 h-7 text-nexus-blue" />
                </div>
                <h3 className="font-bold text-nexus-dark mb-2 text-[14px]">{s.title}</h3>
                <p className="text-[12px] text-gray-500 max-w-[240px] mx-auto leading-relaxed">{s.desc}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
