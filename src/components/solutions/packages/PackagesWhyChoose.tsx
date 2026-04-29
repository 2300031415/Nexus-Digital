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
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <motion.div key={it.title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-full bg-blue-50 p-3 mx-auto mb-3">
                <it.icon className="w-full h-full text-nexus-blue" />
              </div>
              <h3 className="font-semibold text-nexus-dark mb-2">{it.title}</h3>
              <p className="text-sm text-gray-500">{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
