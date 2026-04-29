"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiClock, FiDollarSign, FiHeart, FiHome, FiMaximize, FiRefreshCw, FiShoppingCart, FiSun, FiTool, FiZap } from "react-icons/fi";

const industries = [
  [FiBriefcase, "Professional Services"],
  [FiHome, "Real Estate"],
  [FiHeart, "Healthcare"],
  [FiTool, "Trades & Construction"],
  [FiShoppingCart, "eCommerce"],
] as const;

const delivers = [
  [FiClock, "Save Time Across Your Business"],
  [FiDollarSign, "Reduce Operational Costs"],
  [FiZap, "Increase Efficiency & Productivity"],
  [FiRefreshCw, "Faster Response Times"],
  [FiSun, "24/7 Business Operations"],
  [FiMaximize, "Scalable Systems Without Hiring"],
] as const;

export default function AIIndustriesDelivers() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">AI & AUTOMATION ACROSS INDUSTRIES</p>
          <div className="flex flex-wrap gap-4 mb-4">
            {industries.map(([Icon, label]) => (
              <div key={label} className="flex flex-col items-center gap-1 w-20">
                <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-nexus-blue text-xl shadow-sm"><Icon /></div>
                <p className="text-nexus-dark font-medium text-xs text-center">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-2">If your business has processes-it can be automated.</p>
        </div>
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">WHAT AI & AUTOMATION DELIVERS</p>
          <div className="grid grid-cols-3 gap-3">
            {delivers.map(([Icon, label]) => (
              <div key={label} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-nexus-blue text-lg shadow-sm mb-2"><Icon /></div>
                <p className="text-nexus-dark font-semibold text-xs leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
