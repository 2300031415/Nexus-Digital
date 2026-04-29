"use client";

import { motion } from "framer-motion";
import { FiEye, FiGrid, FiPhone, FiSun, FiUser } from "react-icons/fi";

const challenges = [
  { icon: FiPhone, text: "Manual processes slowing you down" },
  { icon: FiGrid, text: "Disconnected systems creating inefficiencies" },
  { icon: FiEye, text: "Poor visibility across your business" },
  { icon: FiUser, text: "Teams stuck doing repetitive work" },
];

export function DtChallenge() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexus-blue mb-3">THE CHALLENGE</p>
            <h2 className="text-4xl font-bold text-nexus-navy">Most Businesses Are Operating on Outdated Systems</h2>
            <p className="text-gray-600 mt-4 text-[15px]">You might have tools... but they don&apos;t work together.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {challenges.map((item) => (
              <div key={item.text} className="bg-white border border-gray-100 rounded-xl p-5 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0"><item.icon className="text-nexus-blue" /></div>
                <p className="text-sm font-semibold text-nexus-dark">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 bg-white border border-blue-100 rounded-xl p-4 text-sm text-nexus-dark flex items-center gap-3">
          <FiSun className="text-nexus-blue" />
          This isn&apos;t a people problem - it&apos;s a <span className="font-bold text-nexus-blue">system problem.</span>
        </div>
      </div>
    </motion.section>
  );
}
