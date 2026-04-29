"use client";

import { motion } from "framer-motion";

export function DtCta() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-navy py-20 bg-[radial-gradient(circle,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:22px_22px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold text-white">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mt-3 text-base">Stop operating with outdated systems. Start building a business designed for growth.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }} 
            onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
            className="bg-nexus-blue text-white px-8 py-4 rounded-lg font-semibold"
          >
            Book Your Free Strategy Session →
          </motion.button>
          <p className="text-sm text-gray-400">Join 100+ Australian businesses growing with AI.</p>
        </div>
      </div>
    </motion.section>
  );
}
