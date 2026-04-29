"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FinalCta = () => {
  return (
    <section className="bg-nexus-dark py-20 px-8 text-white relative overflow-hidden">


      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* LEFT COLUMN */}
        <div className="md:w-1/2">
          <h2 className="text-[32px] font-bold text-white leading-tight">
            Ready to Use AI Tools
          </h2>
          <h2 className="text-[32px] font-bold text-nexus-blue leading-tight mb-4">
            That Actually Work?
          </h2>
          <p className="text-[15px] text-[#E0E7FF] leading-relaxed max-w-lg mt-4">
            Let's identify and implement the right AI tools that drive efficiency, save time, and grow your business.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
            className="bg-nexus-green hover:bg-green-700 text-white py-4 px-8 rounded-full w-full md:w-auto text-[16px] font-bold shadow-lg transition-colors"
          >
            Book Your Free AI Tools Demo →
          </motion.button>
          
          <div className="flex items-center gap-3 mt-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-[28px] h-[28px] rounded-full border-2 border-white bg-gray-300 overflow-hidden relative">
                   {/* Avatar placeholder */}
                   <div className="absolute inset-0 bg-blue-100 flex justify-center items-end">
                     <div className="w-4 h-4 bg-blue-300 rounded-t-full"></div>
                   </div>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-[#E0E7FF] font-medium">
              Join 100+ Australian businesses using AI tools to grow.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCta;
