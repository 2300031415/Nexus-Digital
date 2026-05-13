"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function DTCTA() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-navy py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-md">
          <h2 className="text-white text-3xl font-extrabold leading-tight">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Stop operating with outdated systems.
            <br />
            Start building a business designed for growth.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="bg-nexus-green text-white font-bold text-base px-8 py-4 rounded-xl flex items-center gap-3 shadow-lg hover:brightness-110 transition">
            Book Your Free Strategy Session <FiArrowRight />
          </motion.button>
          <div className="flex items-center gap-3 mt-1">
            <div className="flex -space-x-3">
              {[33, 47, 12, 5].map((imgId) => (
                <div key={imgId} className="w-9 h-9 rounded-full bg-gray-300 border-2 border-nexus-navy overflow-hidden shrink-0">
                  <img src={`https://i.pravatar.cc/100?img=${imgId}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs">Join 100+ Australian businesses growing with AI.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
