"use client";

import { motion } from "framer-motion";
import { FiRefreshCw, FiSearch, FiShield, FiShoppingCart, FiStar, FiTarget, FiTrendingUp, FiTruck, FiZap } from "react-icons/fi";

import Image from "next/image";

export default function EcHero() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3B82F6] mb-4 block">ECOMMERCE DEVELOPMENT</span>
          <h1 className="text-5xl font-extrabold leading-[1.1] text-[#0F172A]">
            eCommerce Websites Built to Drive Sales &
            <span className="text-[#3B82F6] block">Scale Revenue</span>
          </h1>
          <div className="mt-5 mb-0 text-[15px] leading-[1.7] text-[#4B5563] space-y-3 max-w-[620px]">
            <p>We design and develop high-performance online stores that convert traffic into customers and maximise lifetime value.</p>
            <p>More than a store — a complete sales system.</p>
          </div>
          <div className="mt-8 flex gap-4 items-center flex-wrap">
            <motion.button 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }} 
              transition={{ type: "spring", stiffness: 400 }} 
              onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
              className="h-12 px-6 bg-[#3B82F6] text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] transition-colors flex items-center gap-2"
            >
              Book Free eCommerce Strategy Call →
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400 }} className="h-12 px-6 border-2 border-[#3B82F6] text-[#3B82F6] text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 bg-white">Get a Store Audit →</motion.button>
          </div>
          <div className="mt-6 flex items-center gap-8 flex-wrap">
            <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center"><FiTarget className="w-4 h-4 text-[#3B82F6]" /></div><span className="text-[13px] font-medium text-[#4B5563]">Conversion-Focused Design</span></div>
            <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center"><FiZap className="w-4 h-4 text-[#3B82F6]" /></div><span className="text-[13px] font-medium text-[#4B5563]">Built for Speed & Scalability</span></div>
            <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center"><FiTrendingUp className="w-4 h-4 text-[#3B82F6]" /></div><span className="text-[13px] font-medium text-[#4B5563]">Optimised for Sales</span></div>
          </div>
        </div>

        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="relative flex items-center justify-center">
          <Image 
            src="/Catalog/ecommerce_1.png" 
            alt="eCommerce Development" 
            width={800} 
            height={600}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
