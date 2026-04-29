"use client";

import { motion } from "framer-motion";
import { FiAlertCircle, FiClock, FiGlobe, FiSearch, FiSend } from "react-icons/fi";

const items = [
  { icon: FiAlertCircle, text: "It doesn't generate consistent leads" },
  { icon: FiGlobe, text: "It looks outdated or unprofessional" },
  { icon: FiClock, text: "It's slow, clunky, or hard to use" },
  { icon: FiSearch, text: "It's not optimised for SEO" },
  { icon: FiAlertCircle, text: "Visitors leave without taking action" },
];

export function WdProblem() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-nexus-blue mb-3">THE PROBLEM</p>
        <h2 className="text-4xl font-bold text-nexus-navy mb-10">Most Websites Don&apos;t Convert - They Just Exist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <div key={item.text} className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-2"><item.icon className="text-nexus-blue" /></div>
              <p className="text-sm font-semibold text-nexus-dark">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 border border-blue-100 bg-blue-50 rounded-xl p-4 text-sm text-nexus-dark inline-flex items-center gap-2">
          <FiSend className="text-nexus-blue" />
          A bad <span className="text-nexus-blue font-semibold">website</span> isn&apos;t just a problem - it&apos;s <span className="text-nexus-blue font-bold">lost revenue.</span>
        </div>
      </div>
    </motion.section>
  );
}
