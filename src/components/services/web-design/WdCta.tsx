"use client";

import { motion } from "framer-motion";

export function WdCta() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-nexus-navy bg-[radial-gradient(circle,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:22px_22px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <h2 className="text-3xl font-bold text-white">Ready to Turn Your Website Into a <span className="text-nexus-blue">Lead Machine?</span></h2>
        <p className="text-gray-300">Let&apos;s build a website that works for your business - not against it.</p>
        <div className="text-left lg:text-right">
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }} 
            onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
            className="bg-nexus-blue text-white px-8 py-4 rounded-lg font-semibold"
          >
            Book Your Free Website Strategy Call! →
          </motion.button>
          <p className="text-xs text-gray-400 mt-3">Join 100+ Australian businesses growing with Nexus.</p>
        </div>
      </div>
    </motion.section>
  );
}
