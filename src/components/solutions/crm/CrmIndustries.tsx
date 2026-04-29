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
          <div className="space-y-3">
            {CRM_INDUSTRIES.map(([Icon, label]) => (
              <div key={String(label)} className="inline-flex items-center gap-3 mr-3 mb-2 bg-nexus-light-bg border border-gray-100 rounded-xl px-4 py-2">

                <Icon className="text-nexus-blue" />
                <span className="text-sm font-medium text-nexus-navy">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-base leading-relaxed mt-5">If you have customers, you need a system.</p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-4">BENEFITS OF CRM AUTOMATION</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CRM_BENEFITS.map(([Icon, label]) => (
              <div key={String(label)} className="bg-nexus-light-bg rounded-xl border border-gray-100 p-4 text-center">

                <Icon className="w-6 h-6 text-nexus-blue mx-auto mb-2" />
                <p className="text-xs font-semibold text-nexus-navy">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
