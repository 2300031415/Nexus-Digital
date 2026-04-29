"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { FiCheckCircle, FiCode, FiSearch, FiSend } from "react-icons/fi";

type Step = {
  num: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

const steps: Step[] = [
  { num: "1", icon: FiSearch, title: "Audit & Strategy", desc: "We analyse your business processes and identify automation opportunities." },
  { num: "2", icon: FiCode, title: "Build & Integration", desc: "We design, build, and integrate AI systems seamlessly into your existing tools." },
  { num: "3", icon: FiSend, title: "Optimisation & Scale", desc: "Automates repetitine, measures results, and scale automation across your business." },
];

export function AiProcess() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#1E3A5F] rounded-2xl p-8 text-white">
          <p className="text-xs font-semibold text-blue-300 tracking-widest uppercase mb-4">OUR AI & AUTOMATION PROCESS</p>
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={step.title} className="flex gap-4 items-start mb-8">
                <div className="w-9 h-9 rounded-full bg-[#3B82F6] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{step.num}</div>
                <div>
                  <p className="inline-flex items-center gap-2 text-white font-semibold text-sm mb-1"><step.icon className="w-4 h-4" /> {step.title}</p>
                  <p className="text-blue-200 text-xs leading-relaxed">{step.desc}</p>
                  {idx < 2 && <p className="text-blue-400 text-lg mt-2 rotate-90 inline-block">→</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-100">
          <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue">WHY CHOOSE NEXUS DIGITAL GROUP?</p>
          <h2 className="text-2xl font-bold text-[#0F172A] mt-2">
            We Don&apos;t Just Automate Tasks-We Build <span className="text-[#3B82F6]">Intelligent Systems</span>
          </h2>
          <div className="mt-6 flex flex-col gap-3">
            {[
              "Strategy-first approach",
              "Custom AI & automation systems",
              "Integrated with your existing tools",
              "Designed for ROI and efficiency",
              "Built for long-term scalability",
            ].map((i) => (
              <div key={i} className="flex items-center gap-3"><FiCheckCircle className="w-[18px] h-[18px] text-[#16A34A]" /> <span className="text-sm text-[#0F172A] font-medium">{i}</span></div>
            ))}
          </div>
        </div>

        <div className="bg-[#1E3A5F] rounded-2xl p-8 text-white">
          <h3 className="text-white font-bold text-base mb-6">AI Automation Impact</h3>
          {[
            ["520+", "Hours Saved / Month"],
            ["$18,650+", "Average Cost Saved / Month"],
            ["2,139+", "Leads Captured / Month"],
          ].map(([n, l]) => (
            <div key={String(l)} className="border-b border-blue-800 pb-4 mb-4">
              <p className="text-white font-bold text-3xl">{n}</p>
              <p className="text-blue-200 text-xs mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
