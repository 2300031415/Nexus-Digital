"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiCpu, FiCreditCard, FiLayout, FiLock, FiMail, FiMessageSquare, FiSearch, FiShoppingCart, FiSmartphone, FiStar, FiTruck, FiZap } from "react-icons/fi";

const items = [
  [FiLayout, "Custom Store Design"],
  [FiSmartphone, "Mobile Optimised"],
  [FiZap, "Fast Loading Speeds"],
  [FiSearch, "SEO-Ready Structure"],
  [FiStar, "Product Page Optimisation"],
  [FiLock, "Secure Checkout Integration"],
  [FiCreditCard, "Payment Gateway Setup"],
  [FiTruck, "Shipping & Logistics Integration"],
  [FiMail, "Email Marketing Integration"],
  [FiMessageSquare, "AI Chatbot / AI Sotegration"],
  [FiCpu, "AI Chatbot / AI Sales Agent"],
  [FiBarChart2, "Analytics & Conversion Tracking"],
] as const;

export default function EcIncludes() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3B82F6] text-center">WHAT'S INCLUDED IN EVERY ECOMMERCE BUILD</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 mt-12 max-w-6xl mx-auto">
          {items.map(([Icon, label]) => (
            <div key={label} className="flex flex-col items-center text-center w-[120px]">
              <div className="w-14 h-14 bg-[#EFF6FF] rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-blue-50">
                <Icon className="w-6 h-6 text-[#3B82F6]" />
              </div>
              <p className="text-[11px] font-bold text-[#0F172A] leading-tight tracking-tight px-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
