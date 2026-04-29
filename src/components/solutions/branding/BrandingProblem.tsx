"use client";

import { motion } from "framer-motion";
import { FiAward, FiEdit, FiEye, FiMessageCircle, FiTrendingDown, FiUsers } from "react-icons/fi";

const cards = [
  { icon: FiEye, title: "No Clear Identity", desc: "Your brand doesn't communicate what makes you different." },
  { icon: FiMessageCircle, title: "Inconsistent Messaging", desc: "Mixed messages confuse customers and weaken trust." },
  { icon: FiEdit, title: "Weak Visual Presence", desc: "Outdated or generic design doesn't capture attention or build credibility." },
  { icon: FiUsers, title: "No Differentiation", desc: "You blend in with competitors and compete on price." },
  { icon: FiTrendingDown, title: "Low Perceived Value", desc: "A weak brand makes it hard to justify premium pricing." },
  { icon: FiAward, title: "Unclear Brands Lose Opportunities", desc: "When your brand is unclear, customers hesitate.", featured: true },
];

export function BrandingProblem() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-2">THE PROBLEM</p>
        <h2 className="text-nexus-dark text-[2rem] font-extrabold">Most Businesses Look Like Everyone Else</h2>
      </div>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cards.map((card) => (
          <motion.div key={card.title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className={`${card.featured ? "bg-nexus-light-bg border-blue-100" : "bg-white border-gray-100"} border rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200`}>
            <div className="w-12 h-12 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center text-nexus-blue text-xl">
              <card.icon />
            </div>
            <p className="text-nexus-dark font-bold text-sm mb-2">{card.title}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
