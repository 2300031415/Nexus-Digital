"use client";

import { motion } from "framer-motion";
import { FiAward, FiBriefcase, FiCompass, FiHeart, FiHome, FiRepeat, FiShoppingCart, FiStar, FiTool, FiTrendingUp, FiUsers } from "react-icons/fi";

const industries = [
  [FiBriefcase, "Professional Services"],
  [FiHome, "Real Estate"],
  [FiHeart, "Healthcare"],
  [FiTool, "Trades & Construction"],
  [FiShoppingCart, "eCommerce"],
] as const;

const outcomes = [
  [FiTrendingUp, "Higher Perceived Value"],
  [FiRepeat, "Increased Conversions"],
  [FiUsers, "Stronger Customer Trust"],
  [FiCompass, "Clear Market Positioning"],
  [FiAward, "Competitive Advantage"],
  [FiStar, "Consistent Brand Experience"],
] as const;

export function BrandingIndustries() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">BRANDING ACROSS INDUSTRIES</p>
          <div className="flex flex-wrap gap-4 mb-4">
            {industries.map(([Icon, label]) => (
              <div key={label} className="flex flex-col items-center gap-1 w-20">
                <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-nexus-blue text-xl shadow-sm"><Icon /></div>
                <p className="text-nexus-dark font-medium text-xs text-center">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-2">Strong brands win in every industry.</p>
        </div>
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">WHAT STRONG BRANDING DELIVERS</p>
          <div className="grid grid-cols-3 gap-4">
            {outcomes.map(([Icon, label]) => (
              <div key={label} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-nexus-blue text-lg shadow-sm mb-2"><Icon /></div>
                <p className="text-nexus-dark font-semibold text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
