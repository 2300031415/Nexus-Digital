"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

type CountProps = { target: number; prefix?: string; suffix?: string; delay?: number; decimals?: number };

function Count({ target, prefix = "", suffix = "", delay = 0, decimals = 0 }: CountProps) {
  const value = useMotionValue(0);
  const transformed = useTransform(value, (latest) => (decimals > 0 ? (latest / 10).toFixed(decimals) : Math.round(latest).toString()));

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const controls = animate(value, target, { duration: 1.5, ease: "easeOut" });
      return () => controls.stop();
    }, delay * 1000);

    return () => window.clearTimeout(timeout);
  }, [delay, target, value]);

  return (
    <span>
      {prefix}
      <motion.span>{transformed}</motion.span>
      {suffix}
    </span>
  );
}

export default function AIResults() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-2">REAL RESULTS. REAL IMPACT.</p>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-all"><p className="text-nexus-blue font-extrabold text-4xl mb-1"><Count target={65} prefix="-" suffix="%" delay={0} /></p><p className="text-nexus-dark font-bold text-sm mb-1">Reduction in Manual Workload</p></div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-all"><p className="text-nexus-blue font-extrabold text-4xl mb-1"><Count target={42} prefix="+" suffix="%" delay={0.15} /></p><p className="text-nexus-dark font-bold text-sm mb-1">Increase in Lead Conversion</p></div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-all"><p className="text-nexus-blue font-extrabold text-4xl mb-1"><Count target={40} prefix="-" suffix="%" delay={0.3} /></p><p className="text-nexus-dark font-bold text-sm mb-1">Reduction in Operational Costs</p></div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-all"><p className="text-nexus-blue font-extrabold text-4xl mb-1"><Count target={36} prefix="+" suffix="x" delay={0.45} decimals={1} /></p><p className="text-nexus-dark font-bold text-sm mb-1">Increase in Productivity Across Teams</p></div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="flex items-end gap-1 h-12 mb-4">
              {[
                "h-[30%] opacity-40",
                "h-[50%] opacity-55",
                "h-[70%] opacity-70",
                "h-[55%] opacity-85",
                "h-[90%] opacity-100",
              ].map((bar) => (
                <motion.div key={bar} variants={{ hidden: { height: 0 }, show: {} }} className={`w-5 bg-nexus-blue rounded-t-sm ${bar}`} />
              ))}
            </motion.div>
            <p className="text-nexus-dark font-bold text-sm mb-2">See How We Drive Results</p>
            <p className="text-nexus-blue text-xs font-semibold hover:underline cursor-pointer flex items-center gap-1">Explore Case Studies <FiArrowRight /></p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
