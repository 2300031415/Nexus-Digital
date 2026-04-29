"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiDollarSign, FiEye, FiHeart, FiHome, FiMail, FiMaximize, FiShoppingCart, FiTool, FiTrendingUp, FiUsers } from "react-icons/fi";

const industries = [
  [FiBriefcase, "Professional Services"],
  [FiHome, "Real Estate"],
  [FiHeart, "Healthcare"],
  [FiTool, "Trades & Construction"],
  [FiShoppingCart, "eCommerce"],
] as const;

const delivers = [
  [FiUsers, "More Qualified Leads"],
  [FiDollarSign, "Higher ROI on Ad Spend"],
  [FiEye, "Clear Visibility & Tracking"],
  [FiTrendingUp, "Faster Growth"],
  [FiMail, "Automated Lead Nurturing"],
  [FiMaximize, "Scalable Campaigns"],
] as const;

export default function DMIndustriesDelivers() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">MARKETING SOLUTIONS ACROSS INDUSTRIES</p>
          <div className="flex flex-wrap gap-4 mb-4">
            {industries.map(([Icon, label]) => (
              <div key={label} className="flex flex-col items-center gap-1 w-20">
                <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-nexus-blue text-xl shadow-sm"><Icon /></div>
                <p className="text-nexus-dark font-medium text-xs text-center">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-2">If your business relies on leads - marketing matters.</p>
        </div>
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">WHAT EFFECTIVE MARKETING DELIVERS</p>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="flex flex-wrap gap-4 justify-start">
            {delivers.map(([Icon, label]) => (
              <motion.div key={label} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center w-20">
                <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-nexus-blue text-xl shadow-sm mb-2"><Icon /></div>
                <p className="text-nexus-dark font-semibold text-[10px] leading-snug text-center">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
