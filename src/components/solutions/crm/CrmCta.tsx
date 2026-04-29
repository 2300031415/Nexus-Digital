"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export function CrmCta() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-24 bg-nexus-navy text-white bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:16px_16px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Ready to Turn Your CRM Into a <span className="text-nexus-blue">Growth Engine?</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Let&apos;s build a system that manages, nurtures, and converts your leads automatically.
          </p>
        </div>
        <div className="md:justify-self-end">
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }} 
            onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
            className="inline-flex items-center gap-2 bg-nexus-blue text-white px-8 py-4 rounded-full text-base font-semibold"
          >
            Book Your Free CRM Strategy Call <FiArrowRight />
          </motion.button>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((a) => (
                <div key={a} className="w-8 h-8 rounded-full bg-white/80 border-2 border-nexus-navy" />
              ))}
            </div>
            <p className="text-sm text-gray-400">Join 100+ Australian businesses growing with Nexus.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
