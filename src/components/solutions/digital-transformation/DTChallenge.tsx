"use client";

import { motion } from "framer-motion";
import { FiEye, FiGitBranch, FiPhone, FiRefreshCw, FiZap } from "react-icons/fi";

const cards = [
  { icon: FiPhone, label: "Manual processes slowing you down" },
  { icon: FiGitBranch, label: "Disconnected systems creating inefficiencies" },
  { icon: FiEye, label: "Poor visibility across your business" },
  { icon: FiRefreshCw, label: "Teams stuck doing repetitive work" },
];

export default function DTChallenge() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-14 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="max-w-xs">
            <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-2">THE CHALLENGE</p>
            <h2 className="text-nexus-dark text-2xl font-extrabold leading-snug mb-3">Most Businesses Are Operating on Outdated Systems</h2>
            <p className="text-gray-500 text-sm">You might have tools... but they don&apos;t work together.</p>
          </div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="flex flex-wrap gap-4 flex-1 justify-end">
            {cards.map((card) => (
              <motion.div key={card.label} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center w-36">
                <div className="w-11 h-11 bg-blue-50 rounded-full flex items-center justify-center text-nexus-blue text-xl mb-3">
                  <card.icon />
                </div>
                <p className="text-nexus-dark font-semibold text-xs leading-snug">{card.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl py-4 px-6 flex items-center justify-center gap-3 mt-8">
          <FiZap className="text-nexus-blue text-xl" />
          <p className="text-nexus-dark font-semibold text-[15px]">
            This isn&apos;t a people problem - it&apos;s a <span className="text-nexus-blue">system problem.</span>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
