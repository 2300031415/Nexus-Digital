"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiBriefcase, FiClock, FiHeart, FiHome, FiShoppingCart, FiTool, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

const CRM_INDUSTRIES = [
  [FiBriefcase, "Professional Services"],
  [FiHome, "Real Estate"],
  [FiHeart, "Healthcare"],
  [FiTool, "Trades & Construction"],
  [FiShoppingCart, "eCommerce"],
] as const;

const CRM_BENEFITS = [
  [FiTrendingUp, "Higher Conversion Rates"],
  [FiUsers, "Reduced Manual Workload"],
  [FiBarChart2, "Better Visibility & Tracking"],
  [FiClock, "Automated Follow-Ups"],
  [FiZap, "Increased Revenue"],
  [FiTool, "Scalable Operations"],
] as const;

export function CrmIndustries() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-4">CRM SOLUTIONS ACROSS INDUSTRIES</p>
          <div className="flex items-start justify-between gap-2 mt-6">
            {CRM_INDUSTRIES.map(([Icon, label]) => (
              <div key={String(label)} className="flex-1 text-center flex flex-col items-center">
                <Icon className="text-nexus-blue w-7 h-7 mb-2" />
                <span className="text-[10px] font-bold text-nexus-navy leading-tight">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-base leading-relaxed mt-5">If you have customers, you need a system.</p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-4">BENEFITS OF CRM AUTOMATION</p>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 mt-6">
            {CRM_BENEFITS.map(([Icon, label]) => (
              <div key={String(label)} className="bg-transparent p-0 text-center flex flex-col items-center">
                <Icon className="w-8 h-8 text-nexus-blue mx-auto mb-2" />
                <p className="text-[10px] font-bold text-nexus-navy leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
