"use client";

import { motion } from "framer-motion";
import { FiActivity, FiAlertCircle, FiBell, FiHelpCircle, FiRefreshCw, FiTrendingDown } from "react-icons/fi";

const problems = [
  [FiRefreshCw, "Inconsistent Lead Flow", "Leads come in randomly and stop without warning."],
  [FiHelpCircle, "Marketing Guesswork", "Unclear strategy leads to wasted time and budget."],
  [FiAlertCircle, "Low Quality Leads", "Unqualified leads waste your time and resources."],
  [FiBell, "Missed Follow-Ups", "Leads slip through the cracks and go to competitors."],
  [FiTrendingDown, "Poor Conversion Rates", "Weak funnels and offers lose potential customers."],
  [FiActivity, "Unstable Growth", "Without a system, your business growth is unpredictable."],
] as const;

export default function LeadGenProblem() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20 px-8 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-nexus-blue mb-3">THE PROBLEM</p>
        <h2 className="text-3xl font-bold text-nexus-dark mb-12">Most Businesses Struggle to Generate Consistent Leads</h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map(([Icon, title, desc]) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <Icon className="w-10 h-10 text-nexus-blue mx-auto mb-4" />
              <h3 className="text-[16px] font-semibold text-nexus-navy mb-2">{title}</h3>
              <p className="text-[14px] text-[#475569]">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
