"use client";

import { motion } from "framer-motion";

export function AiCta() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#0F172A] py-20 relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(#1E3A5F_1px,transparent_1px)] before:bg-[size:24px_24px] before:opacity-60">
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white">
            Ready to Automate &amp;
            <br />
            <span className="text-[#3B82F6]">Scale Your Business?</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base">Let&apos;s build intelligent systems that do the work for you.</p>
        </div>
        <div className="flex flex-col items-start lg:items-end gap-6">
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }} 
            onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
            className="bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#2563EB]"
          >
            Book Your Free AI Strategy Call →
          </motion.button>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["JT", "SM", "MR", "AK", "BL"].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-[#1E3A5F] border-2 border-[#0F172A] flex items-center justify-center text-white text-xs font-bold">
                  {i}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">Join 100+ Australian businesses automating with Nexus.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
