"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function LeadGenCTA() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-navy py-20 px-8 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-[34px] leading-[1.2] font-bold mb-4">
            Ready to Build a Predictable <span className="text-nexus-blue">Lead Generation Machine?</span>
          </h2>
          <p className="text-[15px] text-gray-300">
            Let&apos;s create a system that consistently brings in leads and drives revenue for your business.
          </p>
        </div>
        <div className="md:justify-self-end">
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }} 
            onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
            className="inline-flex items-center gap-2 bg-nexus-green text-white px-8 py-4 rounded-full text-[15px] font-semibold"
          >
            Book Your Free Strategy Call <FiArrowRight />
          </motion.button>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((n) => (
                <div key={n} className="w-8 h-8 rounded-full bg-white/80 border-2 border-nexus-navy" />
              ))}
            </div>
            <p className="text-sm text-gray-400">Join 100+ Australian businesses growing with Nexus.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
