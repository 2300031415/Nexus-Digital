"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiDollarSign, FiTarget, FiTrendingUp } from "react-icons/fi";

const sectionAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function PackagesHero() {
  return (
    <motion.section {...sectionAnim} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-center">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-4">WEBSITE & MARKETING PACKAGES</p>
          <h1 className="text-4xl xl:text-5xl font-extrabold text-nexus-dark leading-tight mb-5">
            Website & Marketing <br />
            Packages Built to <br />
            <span className="text-nexus-blue">Grow Your Business</span>
          </h1>
          <p className="text-gray-600 max-w-lg text-base leading-relaxed mb-8">
            Everything you need to generate leads, convert customers, and scale - in one complete system.
            No guesswork. No piecing things together. Just results.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <button 
              onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
              className="bg-nexus-green text-white px-8 py-3 rounded-lg font-bold text-base hover:brightness-110 transition shadow-lg"
            >
              Book Free Strategy Call →
            </button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="border border-nexus-dark text-nexus-dark px-6 py-3 rounded-full font-semibold">
              View Packages ↓
            </motion.button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2"><FiTarget className="text-nexus-blue" /> All-In-One Growth Systems</span>
            <span className="inline-flex items-center gap-2"><FiDollarSign className="text-nexus-blue" /> Built for ROI</span>
            <span className="inline-flex items-center gap-2"><FiTrendingUp className="text-nexus-blue" /> Scalable Solutions</span>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
          className="relative flex items-center justify-center"
        >
          <Image 
            src="/Catalog/websitepackage_1.png" 
            alt="Website & Marketing Package" 
            width={800} 
            height={600}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
