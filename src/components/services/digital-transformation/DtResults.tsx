"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const targets = [60, 120, 35];

export function DtResults() {
  const [values, setValues] = useState([0, 0, 0]);

  useEffect(() => {
    let frame = 0;
    const max = 30;
    const timer = window.setInterval(() => {
      frame += 1;
      setValues(targets.map((t) => Math.round((t * frame) / max)));
      if (frame >= max) window.clearInterval(timer);
    }, 30);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[38%_42%_20%] gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexus-blue mb-3">REAL RESULTS</p>
          <h2 className="text-4xl font-bold text-nexus-navy mb-6">Transformation That Creates Real Impact</h2>
          <div className="space-y-2">
            {["Streamlined operations", "Better customer experiences", "Increased revenue", "Reduced costs", "Improved team productivity"].map((item) => (
              <p key={item} className="flex items-center gap-2 text-sm font-medium text-nexus-dark"><FiCheckCircle className="text-nexus-green" />{item}</p>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-nexus-light-bg border border-gray-100 rounded-xl p-4">
            <p className="text-xs text-gray-500">Operational Efficiency</p>
            <p className="text-3xl font-extrabold text-nexus-blue">{values[0]}%</p>
            <p className="text-sm font-semibold text-nexus-dark">Reduction in manual work</p>
            <p className="text-xs text-gray-500 mt-1">Through automation and system integration, resulting in significant time and cost savings.</p>
            <p className="text-xs font-bold mt-2 text-gray-500">APEX ELECTRICAL</p>
          </div>
          <div className="bg-nexus-light-bg border border-gray-100 rounded-xl p-4">
            <p className="text-xs text-gray-500">Revenue Growth</p>
            <p className="text-3xl font-extrabold text-nexus-blue">{values[1]}%</p>
            <p className="text-sm font-semibold text-nexus-dark">Increase in qualified leads</p>
            <p className="text-xs text-gray-500 mt-1">Automated lead capture and follow-ups improved conversion and pipeline.</p>
            <p className="text-xs font-bold mt-2 text-gray-500">URBAN INTERIORS</p>
          </div>
          <div className="bg-nexus-light-bg border border-gray-100 rounded-xl p-4">
            <p className="text-xs text-gray-500">Cost Savings</p>
            <p className="text-3xl font-extrabold text-nexus-blue">{values[2]}%</p>
            <p className="text-sm font-semibold text-nexus-dark">Lower operational costs</p>
            <p className="text-xs text-gray-500 mt-1">Cloud migration and automation reduced overhead and improved resource allocation.</p>
            <p className="text-xs font-bold mt-2 text-gray-500">PEAK PROPERTY</p>
          </div>
        </div>
        <div className="rounded-2xl bg-nexus-navy p-6 text-white bg-[radial-gradient(circle,rgba(59,130,246,0.25)_1px,transparent_1px)] bg-[size:14px_14px] flex items-center">
          <p className="text-2xl font-bold leading-tight">Future-Ready Businesses Outperform The Competition.</p>
        </div>
      </div>
    </motion.section>
  );
}
