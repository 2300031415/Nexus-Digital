"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiBarChart2, FiCpu, FiTarget } from "react-icons/fi";

const sectionAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function LeadGenHero() {
  return (
    <motion.section {...sectionAnim} className="bg-white py-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-nexus-blue mb-4">LEAD GENERATION SYSTEMS</p>
          <h1 className="text-[42px] lg:text-[52px] leading-[1.15] font-extrabold text-nexus-navy mb-6">
            Lead Generation Systems That Drive <br />
            <span className="text-nexus-blue">Consistent Growth</span>
          </h1>
          <p className="text-[15px] leading-[1.6] text-[#475569] max-w-lg mb-8">
            We build end-to-end lead generation systems that attract, qualify, and convert prospects into customers -
            automatically. No more chasing leads. Just predictable growth.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <motion.button 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }} 
              onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
              className="inline-flex items-center gap-2 bg-nexus-green text-white px-6 py-3 rounded-full text-[14px] font-semibold"
            >
              Book Free Strategy Call <FiArrowRight />
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 border border-nexus-navy text-nexus-navy px-6 py-3 rounded-full text-[14px] font-semibold">
              Get a Lead Gen Audit <FiArrowRight />
            </motion.button>
          </div>

          <div className="flex flex-wrap gap-8 text-[13px] text-[#475569]">
            <div className="flex items-center gap-2"><FiTarget className="text-nexus-blue" /> Proven Lead Systems</div>
            <div className="flex items-center gap-2"><FiCpu className="text-nexus-blue" /> AI-Powered Qualification</div>
            <div className="flex items-center gap-2"><FiBarChart2 className="text-nexus-blue" /> Built for ROI</div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
          className="relative flex items-center justify-center"
        >
          <Image 
            src="/Catalog/Leadgeneration_1.png" 
            alt="Lead Generation Results" 
            width={800} 
            height={600}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
