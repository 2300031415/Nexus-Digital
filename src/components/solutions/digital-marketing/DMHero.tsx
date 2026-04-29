"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiBarChart2, FiCpu, FiPhone, FiTarget } from "react-icons/fi";
import Image from "next/image";

export default function DMHero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.5 }} 
      className="bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">DIGITAL MARKETING</p>
          <h1 className="text-[2.75rem] leading-[1.15] font-extrabold mb-5">
            <span className="text-nexus-dark">Digital Marketing</span>
            <br />
            <span className="text-nexus-dark">That Drives Leads,</span>
            <br />
            <span className="text-nexus-blue">Not Just Clicks</span>
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-[420px] mb-6">
            We create data-driven marketing systems that attract the right audience, generate qualified leads, and turn traffic into revenue.
            <br />
            No guesswork. Just measurable growth.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <button 
              onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
              className="bg-nexus-green text-white font-semibold text-sm px-6 py-3 rounded-lg flex items-center gap-2 hover:brightness-110 transition shadow-lg"
            >
              <FiPhone /> Book Free Marketing Strategy Call
            </button>
            <button className="border border-gray-300 text-nexus-dark font-medium text-sm px-6 py-3 rounded-lg flex items-center gap-2 hover:border-nexus-blue hover:text-nexus-blue transition">
              Get a Free Marketing Audit <FiArrowRight />
            </button>
          </div>
          <div className="flex flex-wrap gap-8 mt-10 border-t border-gray-100 pt-8">
            <p className="flex items-center gap-2 text-gray-500 text-[13px] font-medium"><FiTarget className="text-nexus-blue w-5 h-5" />Performance-Driven</p>
            <p className="flex items-center gap-2 text-gray-500 text-[13px] font-medium"><FiCpu className="text-nexus-blue w-5 h-5" />AI-Powered Marketing</p>
            <p className="flex items-center gap-2 text-gray-500 text-[13px] font-medium"><FiBarChart2 className="text-nexus-blue w-5 h-5" />Built for ROI</p>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="lg:w-full flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-[540px]"
          >
            <div className="rounded-3xl shadow-2xl border border-[#E5E7EB] overflow-hidden">
              <Image 
                src="/Catalog/DigitalMarketing_1.png" 
                alt="Digital Marketing Services" 
                width={800} 
                height={600}
                className="w-full h-auto"
              />
            </div>
            
            {/* Results Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <div className="text-nexus-green font-extrabold text-2xl">+42%</div>
              <div className="text-nexus-dark font-bold text-[10px] uppercase tracking-wider">More Leads</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
