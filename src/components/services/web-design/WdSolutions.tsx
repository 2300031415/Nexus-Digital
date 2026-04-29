"use client";

import { motion } from "framer-motion";
import { FiGrid, FiLayout, FiMonitor, FiShoppingCart } from "react-icons/fi";

const items = [
  { icon: FiMonitor, title: "Business Websites", desc: "Professional, high-converting websites that build trust and generate leads." },
  { icon: FiLayout, title: "Landing Pages", desc: "High-conversion pages designed to turn traffic into enquiries." },
  { icon: FiShoppingCart, title: "E-Commerce Websites", desc: "Online stores built to deliver seamless experience and more sales." },
  { icon: FiGrid, title: "AI-Integrated Websites", desc: "Websites powered by AI agents for automation and engagement." },
];

export function WdSolutions() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-nexus-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexus-blue mb-8">WEBSITE SOLUTIONS FOR YOUR BUSINESS</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <motion.div key={item.title} whileHover={{ scale: 1.02, y: -2 }} className="bg-white border border-gray-100 rounded-2xl p-6 text-left shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-3"><item.icon className="text-nexus-blue" /></div>
              <h3 className="text-base font-bold text-nexus-dark mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{item.desc}</p>
              <span className="text-sm text-nexus-blue font-medium">Learn More →</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
