"use client";

import { motion } from "framer-motion";
import { FiMonitor, FiSearch, FiZap } from "react-icons/fi";

const steps = [
  {
    icon: FiSearch,
    title: "Audit & Strategy",
    desc: "We assess your current systems, processes, and data to identify gaps and opportunities.",
  },
  {
    icon: FiMonitor,
    title: "Design & Integration",
    desc: "We design your future-state architecture and implement the right technology solutions.",
  },
  {
    icon: FiZap,
    title: "Optimise & Scale",
    desc: "We continuously monitor, optimise, and scale your systems for maximum performance.",
  },
];

export default function DTApproach() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-20">
      <div className="text-center mb-12 px-6">
        <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-2">OUR APPROACH</p>
        <h2 className="text-nexus-dark text-3xl font-extrabold">A Proven Process for Lasting Transformation</h2>
      </div>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start gap-4">
        {steps.map((step, idx) => (
          <div key={step.title} className="flex items-start w-full">
            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center flex-1">
              <div className="w-10 h-10 rounded-full bg-nexus-blue text-white font-extrabold text-base flex items-center justify-center mx-auto mb-4 shadow-md">{idx + 1}</div>
              <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="w-16 h-16 mx-auto mb-4 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-nexus-blue text-2xl shadow-sm">
                <step.icon />
              </motion.div>
              <p className="text-nexus-dark font-bold text-base mb-2">{step.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
            </motion.div>
            {idx < steps.length - 1 && <div className="hidden md:block border-t-2 border-dashed border-gray-200 w-16 mt-14 flex-shrink-0" />}
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
