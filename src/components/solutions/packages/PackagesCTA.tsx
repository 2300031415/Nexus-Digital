"use client";

import { motion } from "framer-motion";

export function PackagesCTA() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-navy py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-white text-3xl font-bold leading-tight">
            Ready to Build a System That <br />
            <span className="text-nexus-blue">Grows Your Business</span>?
          </h2>
          <p className="text-gray-300 mt-3 max-w-md">
            Let&apos;s create a complete growth system tailored to your goals and deliver real results.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-end">
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }} 
            onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
            className="bg-nexus-green text-white font-bold px-8 py-4 rounded-full shadow-lg hover:brightness-110 transition"
          >
            Book Your Free Strategy Call →
          </motion.button>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[33, 47, 12, 5].map((imgId) => (
                <div key={imgId} className="w-9 h-9 rounded-full bg-gray-300 border-2 border-nexus-navy overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${imgId}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">Join 100+ Australian businesses growing with Nexus.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
