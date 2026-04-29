"use client";

import { motion } from "framer-motion";
import { FiCheck, FiX } from "react-icons/fi";

const rows = [
  { feature: "Website", starter: "check", accel: "check", advanced: "check" },
  { feature: "SEO", starter: "Basic", accel: "Advanced", advanced: "Advanced" },
  { feature: "Paid Ads", starter: "x", accel: "check", advanced: "check" },
  { feature: "AI Automation", starter: "x", accel: "check", advanced: "check" },
  { feature: "CRM Integration", starter: "check", accel: "check", advanced: "check" },
  { feature: "Ongoing Optimisation", starter: "x", accel: "check", advanced: "check" },
  { feature: "Monthly Strategy Call", starter: "x", accel: "Monthly", advanced: "Weekly" },
];

function renderCell(v: string) {
  if (v === "check") return <FiCheck className="text-nexus-green text-lg mx-auto" />;
  if (v === "x") return <FiX className="text-red-400 text-lg mx-auto" />;
  return <span className={`text-sm ${v === "Advanced" ? "text-nexus-green font-semibold" : "text-gray-500"}`}>{v}</span>;
}

export function PackagesComparisonTable() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-16 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-4 pl-4">WHAT&apos;S INCLUDED</p>
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="bg-nexus-light-bg border-b border-gray-200">
                <th className="w-1/4 text-left px-6 py-4 font-bold text-nexus-dark border-r border-gray-200">Feature</th>
                <th className="text-sm font-bold text-nexus-dark px-6 py-4 text-center border-r border-gray-200">Starter Growth</th>
                <th className="text-sm font-bold bg-nexus-blue text-white px-6 py-4 text-center border-r border-nexus-blue">Growth Accelerator</th>
                <th className="text-sm font-bold text-nexus-dark px-6 py-4 text-center">Advanced Growth System</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((r, i) => (
                <motion.tr key={r.feature} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-nexus-dark border-r border-gray-200">{r.feature}</td>
                  <td className="px-6 py-4 text-center border-r border-gray-200">{renderCell(r.starter)}</td>
                  <td className="px-6 py-4 text-center bg-blue-50/50 border-r border-nexus-blue/20">{renderCell(r.accel)}</td>
                  <td className="px-6 py-4 text-center">{renderCell(r.advanced)}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  );
}
