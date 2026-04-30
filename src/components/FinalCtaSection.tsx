"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const FinalCtaSection = () => {
  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border border-[#E2E8F0] rounded-[32px] p-12 lg:p-20 shadow-sm">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[36px] font-bold leading-[1.2] text-[#0F172A] mb-4">
            Ready to Turn Your Business Into a <br />
            <span className="text-nexus-blue">Growth Machine?</span>
          </h2>
          <p className="text-[16px] text-[#475569] leading-relaxed">
            Book a free strategy session and see exactly how we can help.
          </p>
        </motion.div>

        {/* Right Column */}
        <div className="flex flex-col items-center lg:items-start w-full">
          <div className="flex flex-wrap gap-6 mb-8 w-full justify-center lg:justify-start">
            {['Free Strategy Call', 'No Obligation', 'Tailored For You'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-[16px] text-[#0F172A] font-medium">
                <FiCheck className="w-5 h-5 text-nexus-green" />
                {badge}
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
            className="bg-nexus-green hover:bg-[#15803d] text-white w-full py-5 rounded-full text-[16px] font-bold transition-all shadow-lg mb-6"
          >
            Book My Free Strategy Call →
          </motion.button>

          <div className="flex items-center gap-4">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
              ))}
            </div>
            <p className="text-[12px] text-[#475569] font-medium">
              Join 100+ Australian businesses growing with AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
