"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiCheckCircle, FiSettings, FiTrendingUp, FiZap } from "react-icons/fi";

const PROCESS_STEPS = [
  ["1", FiSettings, "Audit & Strategy", "We assess your current systems, data, and processes to create a strategic plan."],
  ["2", FiZap, "Setup & Integration", "We configure your CRM, integrate your tools, and migrate/clean your data."],
  ["3", FiTrendingUp, "Automation & Optimisation", "We automate workflows, train your team, and continuously optimise for better results."],
] as const;

export function CrmProcess() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-nexus-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[32%_38%_30%] gap-6">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-4">WHY CHOOSE NEXUS DIGITAL GROUP?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-nexus-navy mb-4">We Don&apos;t Just Set Up CRMs - We Build Systems That Drive Results</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-5">
            We build integrated, automated ecosystems that turn your CRM into a powerful revenue engine.
          </p>
          <div className="space-y-2 text-sm text-nexus-navy">
            {["Strategy-first implementation", "Custom automation workflows", "Full system integration", "ROI-focused design", "Built for scalability"].map((i) => (
              <div key={i} className="flex items-center gap-2"><FiCheckCircle className="text-nexus-green" /> {i}</div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6">
          <h3 className="text-center text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-8">OUR CRM IMPLEMENTATION PROCESS</h3>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4 relative">
            <div className="hidden lg:block absolute top-5 left-[15%] right-[15%] h-0 border-t border-dashed border-nexus-blue/30 z-0"></div>
            {PROCESS_STEPS.map(([n, Icon, title, desc], idx) => (
              <div key={String(title)} className="flex-1 flex flex-col items-center text-center relative z-10 px-2">
                <div className="w-10 h-10 rounded-full bg-nexus-blue mx-auto mb-4 flex items-center justify-center font-bold text-white text-sm shadow-md border-4 border-white">{n}</div>
                <Icon className="w-6 h-6 mx-auto mb-2 text-nexus-blue" />
                <p className="text-[13px] font-bold text-nexus-navy mb-1 leading-tight">{title}</p>
                <p className="text-[11px] text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-nexus-navy mb-4">WHAT HAPPENS AFTER IMPLEMENTATION?</h3>
          <div className="space-y-2 text-sm text-nexus-navy mb-6">
            {["Increased lead conversion", "Faster sales cycles", "Better team efficiency", "Improved customer experience", "More predictable revenue"].map((i) => (
              <div key={i} className="flex items-center gap-2"><FiCheckCircle className="text-nexus-green" /> {i}</div>
            ))}
          </div>
          <div className="bg-nexus-light-bg rounded-xl p-4">
            <p className="text-xs font-semibold text-[#64748B] mb-2">Growth Snapshot</p>
            <div className="h-28 flex items-end gap-2">
              {["h-10", "h-14", "h-16", "h-20", "h-24"].map((h, i) => (
                <div key={i} className={`flex-1 ${h} rounded-t-md ${i < 3 ? "bg-nexus-blue/60" : "bg-nexus-green/70"}`} />
              ))}
            </div>
            <div className="mt-2 text-xs text-[#64748B] inline-flex items-center gap-1"><FiBarChart2 className="text-nexus-blue" /> Revenue trend over implementation cycle</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
