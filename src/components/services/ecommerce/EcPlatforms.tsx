"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ComponentType } from "react";
import { FiActivity, FiCode, FiHeart, FiHome, FiMoreHorizontal, FiShoppingBag, FiStar } from "react-icons/fi";

type Industry = {
  icon: ComponentType<{ className?: string }>;
  label: string;
};

const industries: Industry[] = [
  { icon: FiShoppingBag, label: "Retail & Fashion" },
  { icon: FiHeart, label: "Health & Wellness" },
  { icon: FiActivity, label: "Supplements & Peptides" },
  { icon: FiHome, label: "Home & Lifestyle" },
  { icon: FiStar, label: "Specialty Products" },
  { icon: FiMoreHorizontal, label: "and more..." },
];

export default function EcPlatforms() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3B82F6]">PLATFORMS WE WORK WITH</p>
          <p className="text-[14px] text-[#4B5563] leading-relaxed mt-3">We work with leading eCommerce platforms or build custom solutions to fit your business needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {/* Shopify */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 relative mb-4">
                <Image src="/Catalog/shopify.png" alt="Shopify" fill className="object-contain" />
              </div>
              <p className="text-lg font-bold text-[#0F172A] mb-2">Shopify</p>
              <p className="text-[12px] text-[#6B7280] leading-relaxed">The world's leading eCommerce platform for scalable growth.</p>
            </div>

            {/* WooCommerce */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 relative mb-4">
                <Image src="/Catalog/woo.png" alt="WooCommerce" fill className="object-contain" />
              </div>
              <p className="text-lg font-bold text-[#0F172A] mb-2">WooCommerce</p>
              <p className="text-[12px] text-[#6B7280] leading-relaxed">Flexible, powerful, and perfect for WordPress integrations.</p>
            </div>

            {/* Custom */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-blue-50 rounded-xl">
                <FiCode size={32} className="text-[#3B82F6]" />
              </div>
              <p className="text-lg font-bold text-[#0F172A] mb-2">Custom Solutions</p>
              <p className="text-[12px] text-[#6B7280] leading-relaxed">Tailored eCommerce solutions built for your unique business needs.</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3B82F6]">ECOMMERCE SOLUTIONS ACROSS INDUSTRIES</p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {industries.map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-4 flex flex-col items-center text-center border border-[#E5E7EB]">
                <div className="w-11 h-11 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto"><item.icon className="w-[22px] h-[22px] text-[#3B82F6]" /></div>
                <p className="text-[12px] font-semibold text-[#0F172A] mt-2 leading-tight">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
