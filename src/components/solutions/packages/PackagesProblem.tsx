"use client";

import { motion } from "framer-motion";
import { FiGrid, FiLink, FiSlash, FiTrendingDown, FiUserX, FiXCircle } from "react-icons/fi";

const problems = [
  { icon: FiLink, title: "Nothing is Connected", desc: "Tools don't talk to each other and leads fall through the cracks." },
  { icon: FiUserX, title: "Leads Are Lost", desc: "Slow follow-ups and manual processes cost you customers." },
  { icon: FiSlash, title: "Inconsistent Marketing", desc: "No clear strategy or system leads to unpredictable results." },
  { icon: FiTrendingDown, title: "Doesn't Scale", desc: "Ad hoc efforts can't support long-term growth." },
  { icon: FiXCircle, title: "Poor Results", desc: "Wasted time, budget and missed opportunities." },
  { icon: FiGrid, title: "You Need a System", desc: "You don't need more tools - you need a complete growth system." },
];

export function PackagesProblem() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-3">THE PROBLEM</p>
        <h2 className="text-3xl font-bold text-nexus-dark mb-12">Most Businesses Are Piecing Together Tools That Don&apos;t Work</h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 gap-0 border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden mt-10">
          {problems.map((p, idx) => (
            <motion.div key={p.title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className={`p-5 lg:p-6 text-center ${idx !== problems.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-gray-100' : ''}`}>
              <div className="w-10 h-10 flex items-center justify-center mx-auto mb-4">
                <p.icon className="w-8 h-8 text-nexus-blue" />
              </div>
              <h3 className="text-[13px] font-bold text-nexus-dark mb-2 leading-tight">{p.title}</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
