"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { FiCheckCircle, FiZap } from "react-icons/fi";

type CountStatProps = {
  target: number;
};

function CountStat({ target }: CountStatProps) {
  const value = useMotionValue(0);
  const rounded = useTransform(value, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(value, target, { duration: 1.5, ease: "easeOut" });
    return () => controls.stop();
  }, [target, value]);

  return <motion.span>{rounded}</motion.span>;
}

export default function DTResults() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">REAL RESULTS</p>
          <h3 className="text-nexus-dark text-2xl font-extrabold leading-tight mb-5">Transformation That Creates Real Impact</h3>
          <div className="space-y-3">
            {["Streamlined operations", "Better customer experiences", "Increased revenue", "Reduced costs", "Improved team productivity"].map((item) => (
              <p key={item} className="flex items-center gap-2 text-sm text-nexus-dark font-medium"><FiCheckCircle className="text-nexus-green text-base flex-shrink-0" />{item}</p>
            ))}
          </div>
        </div>

        <div className="bg-nexus-light-bg rounded-2xl p-6 border border-gray-100 h-full">
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.18em] mb-2">Operational Efficiency</p>
          <p className="text-nexus-blue font-extrabold text-5xl mb-1"><CountStat target={60} />%</p>
          <p className="text-nexus-dark font-bold text-sm mb-3">Reduction in manual work</p>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">Through automation and system integration, resulting in significant time and cost savings.</p>
          <p className="font-extrabold text-nexus-dark text-base">APEX</p>
          <p className="text-gray-400 text-[9px] tracking-widest flex items-center gap-1"><FiZap className="text-nexus-blue text-xs" />ELECTRICAL</p>
        </div>

        <div className="bg-nexus-light-bg rounded-2xl p-6 border border-gray-100 h-full">
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.18em] mb-2">Revenue Growth</p>
          <p className="text-nexus-blue font-extrabold text-5xl mb-1"><CountStat target={120} />%</p>
          <p className="text-nexus-dark font-bold text-sm mb-3">Increase in qualified leads</p>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">Automated lead capture and follow-ups improved conversion and pipeline.</p>
          <p className="font-extrabold text-nexus-dark text-base">URBAN</p>
          <p className="text-gray-400 text-[9px] tracking-widest">INTERIORS</p>
        </div>

        <div>
          <div className="bg-nexus-light-bg rounded-2xl p-6 border border-gray-100 mb-4">
            <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.18em] mb-2">Cost Savings</p>
            <p className="text-nexus-blue font-extrabold text-5xl mb-1"><CountStat target={35} />%</p>
            <p className="text-nexus-dark font-bold text-sm mb-3">Lower operational costs</p>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">Cloud migration and automation reduced overhead and improved resource allocation.</p>
            <p className="font-extrabold text-nexus-dark text-base">PEAK</p>
            <p className="text-gray-400 text-[9px] tracking-widest">PROPERTY</p>
          </div>
          <div className="bg-nexus-navy rounded-2xl p-6 text-white relative overflow-hidden">
            <motion.div animate={{ opacity: [0.1, 0.25, 0.1] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.35)_1px,transparent_1px)] bg-[size:16px_16px]" />
            <div className="relative z-10">
              <p className="text-white font-extrabold text-lg leading-tight">Future-Ready Businesses</p>
              <p className="text-white font-extrabold text-lg">Outperform</p>
              <p className="text-nexus-blue font-extrabold text-lg">The Competition.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
