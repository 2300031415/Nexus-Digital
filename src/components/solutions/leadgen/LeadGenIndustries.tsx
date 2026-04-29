"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiClock, FiHeart, FiHome, FiMaximize, FiRefreshCw, FiShoppingCart, FiTool, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

export default function LeadGenIndustries() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#F8FAFC] py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        <div className="lg:pr-8 lg:border-r lg:border-[#E2E8F0]">
          <p className="text-[11px] uppercase tracking-[0.15em] text-nexus-blue font-semibold mb-4">LEAD GENERATION ACROSS INDUSTRIES</p>
          <div className="flex flex-wrap gap-3">
            {([
              [FiBriefcase, "Professional Services"],
              [FiHome, "Real Estate"],
              [FiHeart, "Healthcare"],
              [FiTool, "Trades & Construction"],
              [FiShoppingCart, "eCommerce"],
            ] as const).map(([Icon, label]) => (
              <div key={label as string} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-[#E2E8F0] text-[13px] text-nexus-navy">

                <Icon className="text-nexus-blue" />
                {label}
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#475569] mt-4">Any business. Any industry. We build systems that work.</p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-nexus-blue font-semibold mb-4">WHAT A LEAD GENERATION SYSTEM DELIVERS</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {([
              [FiRefreshCw, "Consistent Lead Flow"],
              [FiTrendingUp, "Higher Conversion Rates"],
              [FiUsers, "Better Quality Prospects"],
              [FiClock, "Faster Response Times"],
              [FiZap, "Automated Processes"],
              [FiMaximize, "Scalable Growth"],
            ] as const).map(([Icon, label]) => (
              <div key={label as string} className="bg-white border border-[#E2E8F0] rounded-xl p-3 text-center">

                <Icon className="w-5 h-5 text-nexus-blue mx-auto mb-1" />
                <p className="text-[12px] font-medium text-nexus-navy">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
