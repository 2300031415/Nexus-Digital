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
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 items-stretch">
        <div className="lg:col-span-1 py-4">
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">REAL RESULTS</p>
          <h3 className="text-nexus-dark text-[1.35rem] xl:text-2xl font-extrabold leading-tight mb-5">Transformation That Creates Real Impact</h3>
          <div className="space-y-3">
            {["Streamlined operations", "Better customer experiences", "Increased revenue", "Reduced costs", "Improved team productivity"].map((item) => (
              <p key={item} className="flex items-center gap-2 text-[11px] xl:text-xs text-nexus-dark font-medium"><FiCheckCircle className="text-nexus-green text-sm flex-shrink-0" />{item}</p>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 xl:p-6 border border-gray-100 h-full flex flex-col justify-between shadow-sm">
          <div>
            <p className="text-nexus-blue text-[9px] font-semibold uppercase tracking-[0.18em] mb-2">Operational Efficiency</p>
            <p className="text-nexus-blue font-extrabold text-3xl xl:text-4xl mb-1"><CountStat target={60} />%</p>
            <p className="text-nexus-dark font-bold text-[11px] xl:text-xs mb-2">Reduction in manual work</p>
            <p className="text-gray-500 text-[9px] xl:text-[10px] leading-relaxed mb-4">Through automation and system integration, resulting in significant time and cost savings.</p>
          </div>
          <div>
            <p className="font-extrabold text-nexus-dark text-xs xl:text-sm">APEX</p>
            <p className="text-gray-400 text-[7px] tracking-widest flex items-center gap-1"><FiZap className="text-nexus-blue text-[8px]" />ELECTRICAL</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 xl:p-6 border border-gray-100 h-full flex flex-col justify-between shadow-sm">
          <div>
            <p className="text-nexus-blue text-[9px] font-semibold uppercase tracking-[0.18em] mb-2">Revenue Growth</p>
            <p className="text-nexus-blue font-extrabold text-3xl xl:text-4xl mb-1"><CountStat target={120} />%</p>
            <p className="text-nexus-dark font-bold text-[11px] xl:text-xs mb-2">Increase in qualified leads</p>
            <p className="text-gray-500 text-[9px] xl:text-[10px] leading-relaxed mb-4">Automated lead capture and follow-ups improved conversion and pipeline.</p>
          </div>
          <div>
            <p className="font-extrabold text-nexus-dark text-xs xl:text-sm">URBAN</p>
            <p className="text-gray-400 text-[7px] tracking-widest">INTERIORS</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 xl:p-6 border border-gray-100 h-full flex flex-col justify-between shadow-sm">
          <div>
            <p className="text-nexus-blue text-[9px] font-semibold uppercase tracking-[0.18em] mb-2">Cost Savings</p>
            <p className="text-nexus-blue font-extrabold text-3xl xl:text-4xl mb-1"><CountStat target={35} />%</p>
            <p className="text-nexus-dark font-bold text-[11px] xl:text-xs mb-2">Lower operational costs</p>
            <p className="text-gray-500 text-[9px] xl:text-[10px] leading-relaxed mb-4">Cloud migration and automation reduced overhead and improved resource allocation.</p>
          </div>
          <div>
            <p className="font-extrabold text-nexus-dark text-xs xl:text-sm">PEAK</p>
            <p className="text-gray-400 text-[7px] tracking-widest">PROPERTY</p>
          </div>
        </div>

        <div className="bg-nexus-navy rounded-2xl p-5 xl:p-6 text-white relative overflow-hidden h-full flex items-center shadow-xl">
          <motion.div animate={{ opacity: [0.1, 0.25, 0.1] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.35)_1px,transparent_1px)] bg-[size:16px_16px]" />
          <div className="relative z-10 w-full">
            <p className="text-white font-extrabold text-[15px] xl:text-[17px] leading-tight mb-1">Future-Ready Businesses</p>
            <p className="text-white font-extrabold text-[15px] xl:text-[17px] leading-tight mb-1">Outperform</p>
            <p className="text-nexus-blue font-extrabold text-[15px] xl:text-[17px] leading-tight">The Competition.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
