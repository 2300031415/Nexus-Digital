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
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 text-[#64748B]">
          {[
            { name: "APEX\nELECTRICAL", icon: FiZap },
            { name: "URBAN\nINTERIORS", icon: FiHome },
            { name: "BRIGHT\nDENTAL", icon: FiHeart },
            { name: "SPARK\nFITNESS", icon: FiActivity },
            { name: "PEAK\nPROPERTY", icon: FiMapPin },
            { name: "SUMMIT\nCONSTRUCTION", icon: FiTool },
          ].map((brand) => (
            <div key={brand.name} className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <brand.icon className="w-8 h-8" />
              <span className="text-[11px] font-bold tracking-[0.2em] whitespace-pre-line text-center leading-tight">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
