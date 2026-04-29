"use client";

import { motion } from "framer-motion";
import { FiAward, FiHeart, FiShield, FiStar, FiTriangle, FiZap } from "react-icons/fi";

const brands = [
  { icon: FiAward, name: "HARBOUR", sub: "GROUP" },
  { icon: FiTriangle, name: "NORTHCLIFF", sub: "PROPERTY" },
  { icon: FiZap, name: "ELEVATE", sub: "FITNESS" },
  { icon: FiHeart, name: "LUMEN", sub: "HEALTH" },
  { icon: FiTriangle, name: "SUMMIT", sub: "CONSTRUCTIONS" },
  { icon: FiShield, name: "PRESTIGE", sub: "LEGAL" },
];

export function BrandingTrustedBy() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-10 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-6">TRUSTED BY GROWING BUSINESSES ACROSS AUSTRALIA</p>
        <div className="flex flex-wrap justify-around gap-4">
          {brands.map((brand) => (
            <div key={brand.name} className="flex flex-col items-center gap-1">
              <brand.icon className="w-8 h-8 text-gray-300" />
              <p className="text-gray-400 font-bold text-sm uppercase tracking-wide">{brand.name}</p>
              <p className="text-gray-400 text-[9px] uppercase tracking-widest">{brand.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
