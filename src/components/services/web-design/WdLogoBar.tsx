"use client";

import { motion } from "framer-motion";
import { FiActivity, FiHeart, FiHome, FiShield, FiStar, FiZap } from "react-icons/fi";

const brands = [
  { name: "APEX ELECTRICAL", icon: FiZap },
  { name: "URBAN INTERIORS", icon: FiHome },
  { name: "BRIGHT DENTAL", icon: FiHeart },
  { name: "SPARK FITNESS", icon: FiActivity },
  { name: "PEAK PROPERTY", icon: FiStar },
  { name: "SUMMIT CONSTRUCTION", icon: FiShield },
];

export function WdLogoBar() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-10 bg-nexus-light-bg border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-gray-500 tracking-widest uppercase mb-7">TRUSTED BY BUSINESSES ACROSS AUSTRALIA</p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-gray-400">
          {brands.map((brand) => (
            <motion.div key={brand.name} variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="flex items-center gap-2">
              <brand.icon className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wide uppercase">{brand.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
