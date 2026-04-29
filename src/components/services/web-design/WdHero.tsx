"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiTarget, FiTrendingUp, FiZap } from "react-icons/fi";

export function WdHero() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexus-blue mb-3">WEB DESIGN &amp; DEVELOPMENT</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-nexus-navy leading-tight mb-4">
            Websites Built to Generate Leads,
            <br />
            <span className="text-nexus-blue">Not Just Look Good</span>
          </h1>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            We design and develop high-performance websites that convert visitors into enquiries, customers, and revenue. Your website should
            be your best salesperson - working 24/7.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <motion.button 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }} 
              onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
              className="h-12 px-6 rounded-lg bg-nexus-blue text-white text-sm font-semibold"
            >
              Book Free Website Strategy Call →
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="h-12 px-6 rounded-lg border-2 border-nexus-blue text-nexus-blue text-sm font-semibold">
              Get a Free Website Audit →
            </motion.button>
          </div>
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-600">
            <p className="flex items-center gap-2"><FiTarget className="text-nexus-blue" />Conversion-Focused Design</p>
            <p className="flex items-center gap-2"><FiZap className="text-nexus-blue" />Built for Speed &amp; SEO</p>
            <p className="flex items-center gap-2"><FiTrendingUp className="text-nexus-blue" />Designed for ROI</p>
          </div>
        </div>
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
          className="relative flex items-center justify-center"
        >
          <Image 
            src="/Catalog/webdesignpackage_1.png" 
            alt="Web Design Package" 
            width={800} 
            height={600}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
