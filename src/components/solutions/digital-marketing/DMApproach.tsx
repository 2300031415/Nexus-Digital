"use client";

import { motion } from "framer-motion";
import { FiCode, FiLayout, FiMonitor, FiSettings, FiTarget } from "react-icons/fi";

const steps = [
  { num: 1, icon: FiTarget, title: "Strategy & Positioning", desc: "We define your audience, offer, and competitive advantage." },
  { num: 2, icon: FiLayout, title: "Funnel Design", desc: "We build landing pages and conversion pathways." },
  { num: 3, icon: FiCode, title: "Traffic Generation", desc: "We drive targeted traffic through paid and organic channels." },
  { num: 4, icon: FiMonitor, title: "Conversion Optimisation", desc: "We optimise performance to increase leads and sales." },
  { num: 5, icon: FiSettings, title: "Automation & Scaling", desc: "We implement systems to scale results efficiently." },
];

export default function DMApproach() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">OUR APPROACH</p>
          <h2 className="text-nexus-dark text-[1.9rem] font-extrabold leading-tight mb-4">
            We Build Marketing
            <br />
            Systems That Generate
            <br />
            <span className="text-nexus-blue">Predictable Growth</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-5">
            We build end-to-end marketing systems that attract high-intent customers, convert traffic into leads, nurture prospects
            automatically, and scale revenue consistently.
          </p>
          <div className="bg-white border border-blue-100 rounded-xl p-4 flex items-center gap-3 max-w-sm shadow-sm">
            <FiTarget className="text-nexus-blue text-xl flex-shrink-0" />
            <p className="text-nexus-dark font-semibold text-sm leading-snug">Marketing should produce consistent, measurable results.</p>
          </div>
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="flex items-start gap-2 w-full">
          {steps.map((step, idx) => (
            <motion.div key={step.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="flex items-start flex-1">
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-9 h-9 rounded-full bg-nexus-blue text-white font-extrabold text-sm flex items-center justify-center mx-auto mb-3 shadow-md">{step.num}</div>
                <div className="w-14 h-14 mx-auto mb-2 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-nexus-blue text-2xl shadow-sm"><step.icon /></div>
                <p className="font-bold text-nexus-dark text-xs mb-1">{step.title}</p>
                <p className="text-gray-500 text-[10px] leading-relaxed">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && <div className="flex-1 border-t-2 border-dashed border-blue-200 mt-4 flex-shrink-0" />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
