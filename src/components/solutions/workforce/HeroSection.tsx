"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiBriefcase, FiCalendar, FiMail, FiPhone, FiShield, FiTrendingUp, FiUsers } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="bg-white pt-20 pb-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-nexus-blue block mb-4">
            AI AUTOMATION THAT WORKS WHILE YOU SLEEP
          </span>
          <h1 className="text-[42px] lg:text-[48px] font-extrabold leading-[1.2] mb-6">
            Build Your <span className="text-nexus-blue">AI Workforce</span> &amp; Scale Your Business 24/7
          </h1>
          <p className="text-[15px] leading-[1.6] text-[#475569] mb-8 max-w-2xl">
            Deploy intelligent AI agents that capture leads, answer enquiries, qualify prospects, and book appointments -
            automatically. AI workers that never sleep, never miss opportunities, and never drop leads.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button 
              onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
              className="bg-nexus-green text-white px-6 py-3 rounded-lg text-[14px] font-semibold hover:bg-green-700 transition"
            >
              Book Free AI Strategy Call →
            </button>
            <button className="border-2 border-[#0F172A] text-[#0F172A] px-6 py-3 rounded-lg text-[14px] font-semibold hover:bg-gray-100 transition">
              See AI Workforce in Action ▶
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#E2E8F0] pt-6">
            <div className="flex items-center gap-2 text-[14px] text-[#475569]"><FiShield className="text-[#0F172A]" /> AI-Powered Automation</div>
            <div className="flex items-center gap-2 text-[14px] text-[#475569]"><FiUsers className="text-[#0F172A]" /> Built for Australian Businesses</div>
            <div className="flex items-center gap-2 text-[14px] text-[#475569]"><FiTrendingUp className="text-[#0F172A]" /> Designed for ROI</div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[430px] hidden lg:block"
        >
          <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <Image 
            src="/Catalog/Aiworkforce_1.png" 
            alt="Nexus Dashboard Mockup" 
            width={800} 
            height={600}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
