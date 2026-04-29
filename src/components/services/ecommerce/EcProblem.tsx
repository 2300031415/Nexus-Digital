"use client";

import { motion } from "framer-motion";
import { FiFileText, FiShoppingBag, FiShoppingCart, FiTrendingDown, FiUser, FiZap } from "react-icons/fi";

const cards = [
  { icon: FiShoppingCart, title: "High Cart Abandonment", desc: "Visitors add to cart but don't complete the purchase." },
  { icon: FiUser, title: "Poor User Experience", desc: "Confusing navigation and complicated buying journeys." },
  { icon: FiZap, title: "Slow Loading Speeds", desc: "Slow websites lose customers and hurt your rankings." },
  { icon: FiTrendingDown, title: "No Upsell or Cross-Sell Strategy", desc: "Missing opportunities to increase average order value." },
  { icon: FiFileText, title: "Weak Product Pages", desc: "Poor copy, images, and structure don't build trust." },
];

export default function EcProblem() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3B82F6] text-center">THE PROBLEM</p>
        <h2 className="text-4xl font-bold text-[#0F172A] text-center mt-3">Most Online Stores Don't Convert — They Leak Revenue</h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mt-14">
          {cards.map((card) => (
            <motion.div key={card.title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} transition={{ duration: 0.2 }} className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center mx-auto mb-4"><card.icon className="w-[22px] h-[22px] text-[#3B82F6]" /></div>
              <p className="text-[14px] font-bold text-[#0F172A] mb-2 leading-tight">{card.title}</p>
              <p className="text-[12px] text-[#6B7280] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="bg-[#EFF6FF] rounded-2xl p-6 border border-[#BFDBFE] text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mx-auto mb-4"><FiShoppingBag className="w-[22px] h-[22px] text-[#3B82F6]" /></div>
            <p className="text-[14px] font-bold text-[#0F172A] leading-tight">Traffic without conversion = <span className="text-[#3B82F6] font-semibold">wasted money.</span></p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
