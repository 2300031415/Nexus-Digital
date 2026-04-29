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
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.div key={item.title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 mx-auto flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-nexus-blue" />
              </div>
              <h3 className="text-base font-semibold text-nexus-navy mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
