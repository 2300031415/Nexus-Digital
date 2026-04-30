"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiHome, FiHeart, FiShoppingBag, FiShoppingCart, FiMoreHorizontal, FiBarChart, FiTrendingDown, FiTarget, FiRepeat, FiFastForward, FiTrendingUp } from 'react-icons/fi';

const industries = [
  { img: "/Catalog/PeakProperty.png", label: "Real Estate" },
  { img: "/Catalog/BrightDental.png", label: "Healthcare" },
  { img: "/Catalog/ApexElectrical.png", label: "Trades & Construction" },
  { img: "/Catalog/PureGlow.png", label: "eCommerce" },
  { icon: FiMoreHorizontal, label: "And Many More..." },
];

const benefits = [
  { icon: FiBarChart, title: "Increased Productivity" },
  { icon: FiTrendingDown, title: "Reduced Costs" },
  { icon: FiTarget, title: "Improved Performance" },
  { icon: FiRepeat, title: "Automation of Repetitive Tasks" },
];

const IndustriesAndBenefits = () => {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: Industries */}
        <div className="flex flex-col h-full">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue mb-6 block min-h-[40px]">
            INDUSTRIES WE SERVE
          </span>
          <div className="flex flex-col gap-4 flex-grow justify-between">
            {industries.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-4">
                  {item.img ? (
                    <div className="w-10 h-10 rounded-lg border border-gray-100 overflow-hidden shadow-sm flex-shrink-0">
                      <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      {item.icon && <item.icon className="w-5 h-5 text-nexus-blue" />}
                    </div>
                  )}
                  <span className="text-[15px] text-[#0F172A] font-semibold">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* MIDDLE COLUMN: Benefits */}
        <div className="flex flex-col h-full">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue mb-6 block min-h-[40px]">
            BENEFITS OF AI BUSINESS TOOLS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl border border-[#E2E8F0] text-center shadow-sm flex flex-col items-center justify-center gap-3 h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-1">
                    <Icon className="w-6 h-6 text-nexus-blue" />
                  </div>
                  <h3 className="text-[14px] font-semibold text-[#0F172A] leading-tight">{item.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Popular Tools */}
        <div className="flex flex-col h-full">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue mb-6 block min-h-[40px]">
            POPULAR AI TOOLS WE WORK WITH
          </span>
          <div className="grid grid-cols-3 gap-6 flex-grow">
            {/* 1. ChatGPT */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] flex flex-col items-center justify-center h-full p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <img src="/Catalog/chatgpt.png" alt="ChatGPT" className="w-8 h-8 mb-2 object-contain" />
              <span className="text-[10px] font-bold text-[#0F172A]">ChatGPT</span>
            </div>
            {/* 2. Claude */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] flex flex-col items-center justify-center h-full p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <img src="/Catalog/claude.png" alt="Claude" className="w-8 h-8 mb-2 object-contain" />
              <span className="text-[10px] font-bold text-[#0F172A]">Claude</span>
            </div>
            {/* 3. HubSpot */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] flex flex-col items-center justify-center h-full p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <img src="/Catalog/Hub spot.png" alt="HubSpot" className="w-8 h-8 mb-2 object-contain" />
              <span className="text-[10px] font-bold text-[#0F172A]">HubSpot</span>
            </div>
            {/* 4. Make */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] flex flex-col items-center justify-center h-full p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <img src="/Catalog/make.png" alt="Make" className="w-8 h-8 mb-2 object-contain" />
              <span className="text-[10px] font-bold text-[#0F172A]">Make</span>
            </div>
            {/* 5. Zapier */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] flex flex-col items-center justify-center h-full p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <img src="/Catalog/zapier.png" alt="Zapier" className="w-8 h-8 mb-2 object-contain" />
              <span className="text-[10px] font-bold text-[#0F172A]">Zapier</span>
            </div>
            {/* 6. Airtable */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] flex flex-col items-center justify-center h-full p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <img src="/Catalog/airtable.png" alt="Airtable" className="w-8 h-8 mb-2 object-contain" />
              <span className="text-[10px] font-bold text-[#0F172A]">Airtable</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesAndBenefits;
