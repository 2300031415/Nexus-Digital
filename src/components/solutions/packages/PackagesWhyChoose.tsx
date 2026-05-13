"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiClock, FiDollarSign, FiLayers, FiTrendingUp, FiZap } from "react-icons/fi";

const items = [
  { icon: FiClock, title: "Faster Time to Results", desc: "Get up and running quickly with proven systems." },
  { icon: FiDollarSign, title: "Better ROI", desc: "Every dollar is invested with a clear return in mind." },
  { icon: FiLayers, title: "Fully Integrated", desc: "Everything works together for maximum performance." },
  { icon: FiZap, title: "Automation Built-In", desc: "Save time and scale with smart automation." },
  { icon: FiBarChart2, title: "Clear Tracking", desc: "Real-time data and reporting to track what matters." },
  { icon: FiTrendingUp, title: "Scalable Growth", desc: "Built to grow your business now and into the future." },
];

export function PackagesWhyChoose() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-8">WHY BUSINESSES CHOOSE OUR PACKAGES</p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mt-10">
          {items.map((it) => (
            <motion.div key={it.title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-transparent p-0 text-center flex flex-col items-center justify-start h-full">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 shrink-0">
                <it.icon className="w-8 h-8 text-nexus-blue" />
              </div>
              <h3 className="text-[13px] font-bold text-nexus-dark mb-2 leading-tight">{it.title}</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
