"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiClock, FiHeart, FiHome, FiMaximize, FiRefreshCw, FiShoppingCart, FiTool, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

export default function LeadGenIndustries() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#F8FAFC] py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        <div className="lg:pr-8 lg:border-r lg:border-[#E2E8F0]">
          <p className="text-[11px] uppercase tracking-[0.15em] text-nexus-blue font-semibold mb-4">LEAD GENERATION ACROSS INDUSTRIES</p>
          <div className="flex flex-wrap items-start gap-8 mt-8">
            {([
              [FiBriefcase, "Professional\nServices"],
              [FiHome, "Real Estate"],
              [FiHeart, "Healthcare"],
              [FiTool, "Trades &\nConstruction"],
              [FiShoppingCart, "eCommerce"],
            ] as const).map(([Icon, label]) => (
              <div key={label as string} className="text-center flex flex-col items-center">
                <Icon className="text-nexus-blue w-7 h-7 mb-3" />
                <span className="text-[11px] font-bold text-nexus-navy whitespace-pre-line leading-tight">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#475569] mt-8 font-medium">Any business. Any industry. We build systems that work.</p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-nexus-blue font-semibold mb-4">WHAT A LEAD GENERATION SYSTEM DELIVERS</p>
          <div className="grid grid-cols-3 xl:grid-cols-6 gap-2 mt-8">
            {([
              [FiRefreshCw, "Consistent\nLead Flow"],
              [FiTrendingUp, "Higher\nConversion Rates"],
              [FiUsers, "Better Quality\nProspects"],
              [FiClock, "Faster\nResponse Times"],
              [FiZap, "Automated\nProcesses"],
              [FiMaximize, "Scalable\nGrowth"],
            ] as const).map(([Icon, label]) => (
              <div key={label as string} className="bg-transparent text-center flex flex-col items-center">
                <Icon className="w-8 h-8 text-nexus-blue mx-auto mb-3" />
                <p className="text-[11px] font-bold text-nexus-navy whitespace-pre-line leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
