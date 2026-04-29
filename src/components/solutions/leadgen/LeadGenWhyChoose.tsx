"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { FiBarChart2, FiCheckCircle, FiSearch, FiTool, FiTrendingUp } from "react-icons/fi";

function useCount(target: number, inView: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const steps = 30;
    let current = 0;
    const tick = () => {
      current += 1;
      const next = Math.round((target * current) / steps);
      setValue(next);
      if (current < steps) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, inView]);
  return value;
}

const processSteps = [
  [1, FiSearch, "Strategy & Funnel Design", "We research your market, define your audience, and design a high-converting lead generation funnel."],
  [2, FiTool, "Build & Launch", "We build your landing pages, set up automation, tracking, and launch your campaign for results."],
  [3, FiTrendingUp, "Optimise & Scale", "We analyse performance, optimise every step, and scale your system for maximum growth."],
] as const;

export default function LeadGenWhyChoose() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const stats = useMemo(
    () => [
      { prefix: "+", value: 287, suffix: "%", desc: "Increase in Leads (Real Estate Client)" },
      { prefix: "-", value: 42, suffix: "%", desc: "Reduction in Cost Per Lead (Trades Client)" },
      { prefix: "+", value: 156, suffix: "%", desc: "Increase in Appointments (Professional Services)" },
      { prefix: "", value: 46, suffix: "x", desc: "Higher ROI on Ad Spend Across Campaigns)", divideByTen: true },
    ],
    []
  );

  const c0 = useCount(stats[0].value, inView);
  const c1 = useCount(stats[1].value, inView);
  const c2 = useCount(stats[2].value, inView);
  const c3 = useCount(stats[3].value, inView);
  const counts = [c0, c1, c2, c3];

  return (
    <motion.section ref={ref} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[30%_40%_30%] gap-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-nexus-blue font-semibold mb-4">WHY CHOOSE NEXUS DIGITAL GROUP?</p>
          <h3 className="text-[28px] font-bold text-nexus-navy mb-4">We Don&apos;t Just Generate Leads - We Build Systems That Deliver Results</h3>
          <p className="text-[14px] text-[#475569] mb-5 leading-[1.6]">
            We focus on outcomes, not vanity metrics. Our systems are built for ROI, scalability, and long-term growth.
          </p>
          <div className="space-y-2">
            {["End-to-end system design", "AI-driven lead qualification", "Integrated with CRM & sales", "Conversion-focused strategy", "Built for long-term scalability"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[14px] text-nexus-navy">
                <FiCheckCircle className="text-nexus-green" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-nexus-navy rounded-2xl p-8 text-white">
          <h3 className="text-center text-[16px] font-semibold mb-8">OUR LEAD GENERATION PROCESS</h3>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
            {processSteps.map(([num, Icon, title, desc], idx) => (
              <div key={title} className="flex-1 flex flex-col lg:flex-row items-center lg:items-start gap-3">
                <div className="text-center flex-1">
                  <div className="w-10 h-10 bg-nexus-blue rounded-full mx-auto mb-3 flex items-center justify-center text-[14px] font-bold">{num}</div>

                  <Icon className="w-5 h-5 mx-auto mb-2 text-white" />
                  <p className="text-[12px] font-semibold mb-1">{title}</p>
                  <p className="text-[11px] text-white/70">{desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden lg:flex items-center h-10 mt-0">
                    <span className="text-nexus-blue text-xl font-bold">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-nexus-blue font-semibold mb-4">REAL RESULTS. REAL GROWTH.</p>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s, idx) => (
              <div key={s.desc} className="bg-nexus-light-bg rounded-xl p-4 text-center">
                <p className="text-[26px] font-extrabold text-nexus-blue">
                  {s.prefix}
                  {s.divideByTen ? (counts[idx] / 10).toFixed(1) : counts[idx]}
                  {s.suffix}
                </p>
                <p className="text-[11px] text-[#475569]">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center text-[12px] text-[#64748B] flex items-center justify-center gap-1">
            <FiBarChart2 className="text-nexus-blue" />
            Performance measured in real client campaigns.
          </div>
        </div>
      </div>
    </motion.section>
  );
}
