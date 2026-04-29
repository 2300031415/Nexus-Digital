"use client";

import { motion } from "framer-motion";
import { FiLayers, FiPercent, FiRefreshCw, FiShoppingCart, FiTrendingUp, FiUsers } from "react-icons/fi";

const items = [
  [FiTrendingUp, "Increased Sales & Revenue"],
  [FiPercent, "Higher Conversion Rates"],
  [FiShoppingCart, "Improved Cart Completion"],
  [FiUsers, "Better Customer Insights"],
  [FiRefreshCw, "Increased Repeat Purchases"],
  [FiLayers, "Scalable Growth"],
] as const;

export default function EcBenefits() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3B82F6]">THE BENEFITS</p>
          <h2 className="text-4xl font-bold text-[#0F172A] mt-3 leading-tight">What a High-Performing eCommerce Store Delivers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-6 lg:mt-0">
          {items.map(([Icon, label]) => (
            <div key={label} className="bg-[#F8FAFC] rounded-xl p-5 flex flex-col items-center text-center border border-[#E5E7EB]">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center"><Icon className="w-[22px] h-[22px] text-[#3B82F6]" /></div>
              <p className="text-[13px] font-semibold text-[#0F172A] mt-3 leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
