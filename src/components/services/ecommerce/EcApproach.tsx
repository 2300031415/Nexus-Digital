"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiCheckCircle, FiCode, FiLayout, FiLink, FiTarget } from "react-icons/fi";

const steps = [
  { num: 1, icon: FiTarget, title: "Strategy & Planning", desc: "We analyse your products, market, and competitors to build the right strategy." },
  { num: 2, icon: FiLayout, title: "UX & Conversion Design", desc: "We design seamless experiences that drive engagement and sales." },
  { num: 3, icon: FiCode, title: "High-Performance Development", desc: "Fast, secure, and scalable stores built for performance and growth." },
  { num: 4, icon: FiBarChart2, title: "Conversion Optimisation", desc: "Upsells, cross-sells, and full funnel optimisation to increase AOV." },
  { num: 5, icon: FiLink, title: "Integration & Automation", desc: "Connected to CRM, email marketing, AI tools, and analytics." },
];

export default function EcApproach() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3B82F6]">OUR APPROACH</span>
          <h2 className="text-4xl font-bold text-[#0F172A] mt-3 leading-tight">We Build eCommerce Systems That Turn Traffic Into <span className="text-[#3B82F6]">Revenue</span></h2>
          <p className="text-[15px] leading-[1.7] text-[#4B5563] mt-5">We create conversion-driven eCommerce ecosystems that attract the right customers, guide them through the buying journey, increase average order value, and maximise repeat purchases.</p>
          <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-4 flex items-start gap-3 mt-6 max-w-xs"><FiCheckCircle className="w-[18px] h-[18px] text-[#3B82F6] mt-0.5 flex-shrink-0" /><p className="text-[14px] font-medium text-[#1E3A5F] leading-relaxed">Your store becomes a sales engine, not just a catalogue.</p></div>
        </div>
        <div className="flex items-start justify-between gap-2 mt-6 lg:mt-0">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex items-start flex-1">
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-9 h-9 rounded-full bg-[#3B82F6] text-white font-bold text-sm flex items-center justify-center mx-auto">{step.num}</div>
                <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mt-3"><step.icon className="w-5 h-5 text-[#3B82F6]" /></div>
                <p className="text-[13px] font-bold text-[#0F172A] mt-3 leading-tight">{step.title}</p>
                <p className="text-[11px] text-[#6B7280] mt-1.5 leading-relaxed">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && <div className="flex-1 border-t-2 border-dashed border-[#BFDBFE] mt-[18px] mx-1" />}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
