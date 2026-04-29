"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Metric = {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
};

const metrics: Metric[] = [
  { prefix: "-", value: 65, suffix: "%", label: "Reduction in Manual Workload" },
  { prefix: "+", value: 42, suffix: "%", label: "Increase in Lead Conversion" },
  { prefix: "-", value: 40, suffix: "%", label: "Reduction in Operational Costs" },
  { prefix: "+", value: 36, suffix: "x", label: "Increase in Productivity Across Teams" },
];

export function AiResults() {
  const [vals, setVals] = useState<number[]>(metrics.map(() => 0));

  useEffect(() => {
    let tick = 0;
    const max = 35;
    const timer = window.setInterval(() => {
      tick += 1;
      setVals(metrics.map((m) => Math.round((m.value * tick) / max)));
      if (tick >= max) window.clearInterval(timer);
    }, 30);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">REAL RESULTS. REAL IMPACT.</p>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {metrics.map((m, i) => (
            <div key={m.label}>
              <p className="text-4xl font-black text-[#3B82F6]">
                {m.prefix ?? ""}
                {m.suffix === "x" ? (vals[i] / 10).toFixed(1) : vals[i]}
                {m.suffix ?? ""}
              </p>
              <p className="text-sm font-semibold text-[#0F172A] mt-1">{m.label}</p>
              <p className="text-xs text-gray-500 mt-1">
                {i === 0 && "Reduction in Manual Workload"}
                {i === 1 && "Increase in Lead Conversion"}
                {i === 2 && "Reduction in Operational Costs"}
                {i === 3 && "Increase in Productivity Across Teams"}
              </p>
            </div>
          ))}
          <div>
            <div className="flex items-end gap-1 mb-3">
              {["h-3", "h-5", "h-7", "h-9", "h-12"].map((h) => (
                <div key={h} className={`w-4 rounded-sm bg-[#3B82F6] ${h}`} />
              ))}
            </div>
            <p className="text-sm font-semibold text-[#0F172A]">See How We Drive Results</p>
            <a className="text-sm text-[#3B82F6] font-medium mt-1 inline-block" href="/#results">
              Explore Case Studies →
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
