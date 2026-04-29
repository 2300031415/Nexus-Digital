"use client";

import { motion } from "framer-motion";

export default function FinalCta() {
  return (
    <section className="bg-nexus-dark py-20 px-8 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-[32px] font-bold mb-4">Ready to Build Your AI Workforce?</h2>
          <p className="text-[15px] text-[#E0E7FF]">Stop losing leads. Stop relying on manual processes. Start scaling with AI.</p>
        </div>
        <div>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.98 }} 
            onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
            className="bg-nexus-green hover:bg-green-700 text-white py-4 px-8 rounded-lg text-[16px] font-bold w-full"
          >
            Book Your Free AI Strategy Call →
          </motion.button>
          <div className="flex items-center gap-3 mt-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-blue-100" />
              ))}
            </div>
            <p className="text-[12px] text-[#E0E7FF]">Join 100+ Australian businesses growing with AI.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
