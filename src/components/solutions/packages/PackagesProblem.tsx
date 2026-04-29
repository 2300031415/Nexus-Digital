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
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p) => (
            <motion.div key={p.title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-full bg-blue-50 p-3 mx-auto mb-3">
                <p.icon className="w-full h-full text-nexus-blue" />
              </div>
              <h3 className="text-base font-semibold text-nexus-dark mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
