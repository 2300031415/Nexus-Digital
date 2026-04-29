"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiHeart, FiHome, FiShield, FiTriangle } from "react-icons/fi";

const brands = [
  { icon: FiTriangle, name: "PEAK", sub: "PROPERTY" },
  { icon: FiBarChart2, name: "ELEVATE", sub: "FINANCIAL" },
  { icon: FiHeart, name: "BRIGHT", sub: "DENTAL" },
  { icon: FiTriangle, name: "SUMMIT", sub: "CONSTRUCTIONS" },
  { icon: FiHome, name: "URBAN", sub: "INTERIORS" },
  { icon: FiShield, name: "PRESTIGE", sub: "LEGAL" },
];

export default function AITrustedBy() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-10 border-t border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-gray-400 text-xs uppercase tracking-[0.2em] mb-6">TRUSTED BY BUSINESSES ACROSS AUSTRALIA</p>
        <div className="flex justify-around items-center flex-wrap gap-6">
          {brands.map((brand) => (
            <div key={brand.name} className="flex flex-col items-center gap-1">
              <brand.icon className="w-7 h-7 text-gray-300 mb-1" />
              <p className="text-gray-400 font-bold text-sm uppercase tracking-wide">{brand.name}</p>
              <p className="text-gray-400 text-[9px] uppercase tracking-widest">{brand.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
