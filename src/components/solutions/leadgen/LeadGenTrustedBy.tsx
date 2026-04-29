"use client";

import { motion } from "framer-motion";
import { FiActivity, FiHeart, FiHome, FiMapPin, FiTool, FiZap } from "react-icons/fi";

export default function LeadGenTrustedBy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-nexus-light-bg py-10 px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#64748B] mb-7">TRUSTED BY BUSINESSES ACROSS AUSTRALIA</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-[#94A3B8]">
          {[
            { name: "APEX ELECTRICAL", icon: FiZap },
            { name: "URBAN INTERIORS", icon: FiHome },
            { name: "BRIGHT DENTAL", icon: FiHeart },
            { name: "SPARK FITNESS", icon: FiActivity },
            { name: "PEAK PROPERTY", icon: FiMapPin },
            { name: "SUMMIT CONSTRUCTION", icon: FiTool },
          ].map((brand) => (
            <div key={brand.name} className="flex items-center gap-2">
              <brand.icon className="w-4 h-4" />
              <span className="text-[14px] font-bold">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
