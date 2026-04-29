"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { FiBarChart, FiBriefcase, FiCheckCircle, FiClock, FiCoffee, FiDollarSign, FiHeart, FiHome, FiLayers, FiPackage, FiRefreshCw, FiSearch, FiShoppingCart, FiSmile, FiTool, FiTrendingUp, FiZap } from "react-icons/fi";

type Item = { icon: ComponentType<{ className?: string }>; label: string };

const industries: Item[] = [
  { icon: FiBriefcase, label: "Professional Services" },
  { icon: FiHome, label: "Real Estate" },
  { icon: FiHeart, label: "Healthcare" },
  { icon: FiTool, label: "Trades & Construction" },
  { icon: FiShoppingCart, label: "eCommerce" },
  { icon: FiCoffee, label: "Hospitality" },
  { icon: FiPackage, label: "Logistics" },
  { icon: FiTrendingUp, label: "Marketing" },
  { icon: FiSearch, label: "Legal" },
];

const delivers: Item[] = [
  { icon: FiZap, label: "Save Time Across Your Business" },
  { icon: FiDollarSign, label: "Reduce Operational Costs" },
  { icon: FiTrendingUp, label: "Increase Efficiency & Productivity" },
  { icon: FiClock, label: "Faster Response Times" },
  { icon: FiRefreshCw, label: "24/7 Business Operations" },
  { icon: FiLayers, label: "Scalable Systems Without Hiring" },
  { icon: FiSmile, label: "Enhanced Customer Experience" },
  { icon: FiBarChart, label: "Data-Driven Decisions" },
  { icon: FiCheckCircle, label: "Zero Error Rate" },
];

export function AiIndustries() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Industries Column */}
          <div className="text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-8">AI & AUTOMATION ACROSS INDUSTRIES</p>
            <div className="grid grid-cols-3 gap-y-10 gap-x-6">
               {industries.map((item) => (
                 <div key={item.label} className="flex flex-col items-center gap-2">
                   <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shadow-sm">
                     <item.icon className="w-6 h-6 text-[#3B82F6]" />
                   </div>
                   <p className="text-[11px] font-bold text-[#0F172A]">{item.label}</p>
                 </div>
               ))}
             </div>
          </div>

          {/* Delivers Column */}
          <div className="text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-8">WHAT AI & AUTOMATION DELIVERS</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {delivers.map((item) => (
                <div key={item.label} className="bg-[#F8FAFC] rounded-2xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mx-auto">
                    <item.icon className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <p className="text-[10px] font-bold text-[#0F172A] mt-3 leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Tagline */}
        <div className="mt-16 text-center">
          <p className="text-[15px] text-gray-400 italic">
            If your business has processes - it can be automated.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
