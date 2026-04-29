"use client";

import { motion } from "framer-motion";
import { FiHeart, FiHome, FiShield, FiStar, FiTrendingUp, FiTriangle } from "react-icons/fi";

export function AiLogoBar() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-10 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <p className="text-center text-xs text-gray-400 tracking-widest uppercase mb-8">TRUSTED BY BUSINESSES ACROSS AUSTRALIA</p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="w-full flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-gray-400">
          <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="inline-flex items-center gap-2 text-base font-bold tracking-wide whitespace-nowrap"><FiTriangle className="w-4 h-4" /> PEAK PROPERTY</motion.p>
          <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="inline-flex items-center gap-2 text-base font-bold tracking-wide whitespace-nowrap"><FiTrendingUp className="w-4 h-4" /> ELEVATE FINANCIAL</motion.p>
          <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="inline-flex items-center gap-2 text-base font-bold tracking-wide whitespace-nowrap"><FiHeart className="w-4 h-4" /> BRIGHT DENTAL</motion.p>
          <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="inline-flex items-center gap-2 text-base font-bold tracking-wide whitespace-nowrap"><FiShield className="w-4 h-4" /> SUMMIT CONSTRUCTIONS</motion.p>
          <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="inline-flex items-center gap-2 text-base font-bold tracking-wide whitespace-nowrap"><FiHome className="w-4 h-4" /> URBAN INTERIORS</motion.p>
          <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="inline-flex items-center gap-2 text-base font-bold tracking-wide whitespace-nowrap"><FiStar className="w-4 h-4" /> PRESTIGE LEGAL</motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
