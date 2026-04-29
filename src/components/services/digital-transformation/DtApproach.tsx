"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Audit & Strategy",
    desc: "We assess your current systems, processes, and data to identify gaps and opportunities.",
  },
  {
    title: "Design & Integration",
    desc: "We design your future-state architecture and implement the right technology solutions.",
  },
  {
    title: "Optimise & Scale",
    desc: "We continuously monitor, optimise, and scale your systems for maximum performance.",
  },
];

export function DtApproach() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-nexus-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexus-blue mb-3">OUR APPROACH</p>
        <h2 className="text-4xl font-bold text-nexus-navy mb-10">A Proven Process for Lasting Transformation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="w-10 h-10 rounded-full bg-nexus-blue text-white mx-auto flex items-center justify-center font-extrabold">{i + 1}</div>
              {i < 2 && <div className="hidden md:block absolute top-5 -right-8 w-16 border-t-2 border-dashed border-blue-200" />}
              <h3 className="mt-4 text-base font-bold text-nexus-dark">{step.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
