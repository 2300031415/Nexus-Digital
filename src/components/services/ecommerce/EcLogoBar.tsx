"use client";

import { motion } from "framer-motion";
import { FiActivity, FiHeart, FiHome, FiMenu, FiShield, FiStar, FiTriangle, FiZap } from "react-icons/fi";

const logos = [
  { name: "TRUE NUTRITION", sub: "", icon: FiMenu },
  { name: "LUXE LIVING", sub: "", icon: FiHome },
  { name: "VITAL", sub: "SUPPLEMENTS", icon: FiZap },
  { name: "IRON HOUSE", sub: "", icon: FiShield },
  { name: "PURE GLOW", sub: "SKINCARE", icon: FiHeart },
  { name: "WILD PEAK", sub: "OUTDOORS", icon: FiTriangle },
];

export default function EcLogoBar() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-white border-t border-b border-[#E5E7EB] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <span className="text-[11px] font-medium text-[#9CA3AF] uppercase tracking-[0.15em] text-center mb-8 block">TRUSTED BY GROWING BRANDS ACROSS AUSTRALIA</span>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="flex items-center justify-between max-w-6xl mx-auto px-6 flex-wrap gap-10">
          {logos.map((logo) => (
            <motion.div key={logo.name} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }} className="text-center">
              <logo.icon className="text-gray-300 mx-auto mb-2" size={18} />
              {logo.name === "LUXE LIVING" ? (
                <p className="text-lg font-light text-[#4B5563] tracking-[0.4em] uppercase whitespace-nowrap">{logo.name}</p>
              ) : logo.name === "VITAL" ? (
                <>
                  <p className="text-xl font-black text-[#1E293B] tracking-tight mb-0.5">{logo.name}</p>
                  <p className="text-[9px] font-bold text-[#94A3B8] tracking-[0.2em] text-center uppercase">{logo.sub}</p>
                </>
              ) : logo.name === "IRON HOUSE" ? (
                <p className="text-lg font-extrabold text-[#1E293B] tracking-[0.15em] uppercase whitespace-nowrap">{logo.name}</p>
              ) : logo.name === "PURE GLOW" ? (
                <>
                  <p className="text-sm font-bold text-[#4B5563] tracking-[0.2em]">{logo.name}</p>
                  <p className="text-[9px] font-medium text-[#94A3B8] tracking-[0.25em] text-center uppercase mt-1">{logo.sub}</p>
                </>
              ) : logo.name === "WILD PEAK" ? (
                <>
                  <p className="text-sm font-bold text-[#4B5563] tracking-[0.15em]">{logo.name}</p>
                  <p className="text-[9px] font-medium text-[#94A3B8] tracking-[0.2em] text-center uppercase mt-1">{logo.sub}</p>
                </>
              ) : (
                <>
                  <p className="text-[11px] font-black text-[#4B5563] tracking-[0.25em] leading-tight">TRUE</p>
                  <p className="text-[11px] font-black text-[#4B5563] tracking-[0.25em] leading-tight">NUTRITION</p>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
