"use client";

import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";

export default function EcCta() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-[#0F172A] py-20 overflow-hidden relative">
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(#3B82F6_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center relative z-10">
        <div>
          <h2 className="text-3xl font-bold text-white leading-tight">Ready to Turn Your Store<br />Into a <span className="text-[#3B82F6]">Sales Machine?</span></h2>
          <p className="text-[14px] text-[#9CA3AF] leading-relaxed mt-3">Let's build an eCommerce system that drives real results and scales your business.</p>
        </div>
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-[#1E3A5F] border-2 border-[#3B82F6] flex items-center justify-center"><FiShoppingCart size={36} className="text-[#3B82F6]" /></div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-white font-semibold text-[15px]">Book Your Free eCommerce Strategy Call</p>
            <p className="text-[#9CA3AF] text-[13px] mt-1 leading-relaxed">Get a customised strategy tailored to your products, audience, and growth goals.</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }} 
            transition={{ type: "spring", stiffness: 400 }} 
            onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
            className="bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold text-[15px] hover:bg-[#2563EB] transition-colors flex items-center gap-2 w-full justify-center"
          >
            Book Free Strategy Call →
          </motion.button>
          <div className="flex items-center gap-3 mt-4">
            <div className="flex -space-x-2">
              {['JT','SM','MR','AK','BL'].map((a)=><div key={a} className="w-8 h-8 rounded-full bg-[#1E3A5F] border-2 border-[#0F172A] flex items-center justify-center text-white text-[10px] font-bold">{a}</div>)}
            </div>
            <p className="text-[#9CA3AF] text-[12px]">Join 100+ Australian businesses growing with Nexus.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
