"use client";

import { motion } from "framer-motion";
import { FiActivity, FiAlertCircle, FiBell, FiTrendingDown, FiUsers } from "react-icons/fi";

const items = [
  { title: "Leads Aren't Followed Up", desc: "Opportunities are lost because leads slip through the cracks.", icon: FiUsers },
  { title: "Data is Messy", desc: "Incomplete or inaccurate data leads to poor decisions.", icon: FiAlertCircle },
  { title: "Pipelines Are Unclear", desc: "No visibility into where deals stand or what's next.", icon: FiActivity },
  { title: "Processes Are Manual", desc: "Repetitive tasks waste time and reduce productivity.", icon: FiBell },
  { title: "Teams Don't Use It", desc: "Complicated systems lead to low adoption and poor results.", icon: FiUsers },
  { title: "Revenue Is Impacted", desc: "An underperforming CRM costs you time, money, and growth.", icon: FiTrendingDown },
];

export function CrmProblem() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-3">THE PROBLEM</p>
        <h2 className="text-3xl md:text-4xl font-bold text-nexus-navy mb-12">Most CRMs Are Underused and Overcomplicated</h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 gap-0 border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden">
          {items.map((item, idx) => (
            <motion.div key={item.title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className={`p-5 lg:p-6 text-center ${idx !== items.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-gray-100' : ''}`}>
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-nexus-blue" />
              </div>
              <h3 className="text-[13px] font-bold text-nexus-navy mb-2 leading-tight">{item.title}</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
