"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "We understand your business, your goals, and what success looks like for you.",
  },
  {
    title: "Design & Build",
    desc: "We create a custom, high-performance website tailored to your needs.",
  },
  {
    title: "Launch & Optimise",
    desc: "We launch your website and continuously optimise for performance and growth.",
  },
];

export function WdProcess() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-nexus-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-nexus-navy text-center mb-10">Our Process</h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div key={step.title} variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }} className="bg-white border border-gray-100 rounded-xl p-6">
              <p className="w-8 h-8 rounded-full bg-nexus-blue text-white font-bold flex items-center justify-center mb-3">{i + 1}</p>
              <h3 className="text-lg font-bold text-nexus-dark mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
