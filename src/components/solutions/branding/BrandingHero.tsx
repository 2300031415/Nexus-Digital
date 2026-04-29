"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiPhone, FiStar, FiTarget, FiTrendingUp } from "react-icons/fi";
import Image from "next/image";

export function BrandingHero() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em] mb-3">BRANDING &amp; CREATIVE SERVICES</p>
          <h1 className="text-[2.75rem] leading-tight font-extrabold text-[#0F172A] mb-4">
            Branding That
            <br />
            Positions You to <span className="text-[#3B82F6]">Win</span>
          </h1>
          <p className="text-[#64748B] text-[15px] leading-relaxed max-w-[420px] mb-6">
            We create powerful brands that build trust, communicate value, and drive business growth.
            <br />
            Because how your brand is perceived determines how much you can charge.
          </p>
          <div className="flex gap-3">
            <button 
              onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
              className="bg-[#10B981] text-white font-semibold text-sm px-5 py-3 rounded-lg flex items-center gap-2 hover:brightness-110 transition"
            >
              <FiPhone /> Book Free Branding Strategy Call
            </button>
            <button className="border border-[#E5E7EB] text-[#0F172A] font-medium text-sm px-5 py-3 rounded-lg flex items-center gap-2 hover:border-[#3B82F6] hover:text-[#3B82F6] transition">
              Get a Brand Audit <FiArrowRight />
            </button>
          </div>
          <div className="flex gap-6 mt-6">
            <p className="flex items-center gap-2 text-[#64748B] text-xs font-medium"><FiTarget className="text-[#3B82F6]" />Strategy-Led Branding</p>
            <p className="flex items-center gap-2 text-[#64748B] text-xs font-medium"><FiStar className="text-[#3B82F6]" />Premium Visual Identity</p>
            <p className="flex items-center gap-2 text-[#64748B] text-xs font-medium"><FiTrendingUp className="text-[#3B82F6]" />Built for Growth</p>
          </div>
        </div>

        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="relative flex items-center justify-center">
          <Image 
            src="/Catalog/lead 4.png" 
            alt="Branding & Creative Services" 
            width={800} 
            height={600}
            className="w-full h-auto rounded-2xl shadow-2xl border border-[#E5E7EB]"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
