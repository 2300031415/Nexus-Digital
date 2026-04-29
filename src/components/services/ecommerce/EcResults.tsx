"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EcResults() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3B82F6]">REAL RESULTS</p>
          <h2 className="text-4xl font-bold text-[#0F172A] mt-3 leading-tight">Real Stores.<br />Real Results.</h2>
          <p className="text-[14px] font-medium text-[#3B82F6] mt-5 flex items-center gap-1 hover:underline cursor-pointer">View All Case Studies →</p>
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* True Nutrition */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm group">
            <div className="h-44 relative overflow-hidden">
              <Image 
                src="/Catalog/TrueNutrition.png" 
                alt="True Nutrition Store" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-5">
              <p className="text-[10px] font-bold text-[#3B82F6] uppercase tracking-[0.15em]">SUPPLEMENTS STORE</p>
              <p className="text-[15px] font-bold text-[#0F172A] mt-1">True Nutrition</p>
              <p className="text-[12px] text-[#6B7280] mt-1.5 leading-relaxed">Complete store redesign and conversion optimisation.</p>
              <p className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-[0.15em] mt-4 mb-2">RESULTS</p>
              <p className="text-[13px] font-semibold text-[#16A34A] leading-relaxed">+ 62% Increase in Revenue</p>
              <p className="text-[13px] font-semibold text-[#16A34A] leading-relaxed">+ 41% Increase in AOV</p>
            </div>
          </div>
          
          {/* Luxe Living */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm group">
            <div className="h-44 relative overflow-hidden">
              <Image 
                src="/Catalog/LuxeLiving.png" 
                alt="Luxe Living Store" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-5">
              <p className="text-[10px] font-bold text-[#3B82F6] uppercase tracking-[0.15em]">FASHION STORE</p>
              <p className="text-[15px] font-bold text-[#0F172A] mt-1">Luxe Living</p>
              <p className="text-[12px] text-[#6B7280] mt-1.5 leading-relaxed">UX redesign, product page optimisation, and upsell funnels.</p>
              <p className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-[0.15em] mt-4 mb-2">RESULTS</p>
              <p className="text-[13px] font-semibold text-[#16A34A] leading-relaxed">+ 58% Increase in Sales</p>
              <p className="text-[13px] font-semibold text-[#16A34A] leading-relaxed">+ 36% Increase in Conversion Rate</p>
            </div>
          </div>

          {/* Pure Glow */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm group">
            <div className="h-44 relative overflow-hidden">
              <Image 
                src="/Catalog/PureGlow.png" 
                alt="Pure Glow Skincare Store" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-5">
              <p className="text-[10px] font-bold text-[#3B82F6] uppercase tracking-[0.15em]">SKINCARE STORE</p>
              <p className="text-[15px] font-bold text-[#0F172A] mt-1">Pure Glow Skincare</p>
              <p className="text-[12px] text-[#6B7280] mt-1.5 leading-relaxed">New store build with email flows and abandoned cart recovery.</p>
              <p className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-[0.15em] mt-4 mb-2">RESULTS</p>
              <p className="text-[13px] font-semibold text-[#16A34A] leading-relaxed">+ 45% Increase in Revenue</p>
              <p className="text-[13px] font-semibold text-[#16A34A] leading-relaxed">+ 28% Reduction in Cart Abandonment</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
