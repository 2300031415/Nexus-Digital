"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import type { ComponentType } from "react";
import { useEffect } from "react";
import { FiCheckCircle, FiSearch, FiSettings, FiZap } from "react-icons/fi";

type CountProps = { target: number; prefix?: string; suffix?: string; delay?: number };
type Step = { number: string; icon: ComponentType<{ className?: string }>; title: string; description: string };

const steps: Step[] = [
  { number: "1", icon: FiSearch, title: "Audit & Strategy", description: "We analyse your business processes and identify automation opportunities." },
  { number: "2", icon: FiSettings, title: "Build & Integration", description: "We design, build, and integrate AI systems seamlessly into your existing tools." },
  { number: "3", icon: FiZap, title: "Optimisation & Scale", description: "Automates repetitive, measures results, and scale automation across your business." },
];

function Count({ target, prefix = "", suffix = "", delay = 0 }: CountProps) {
  const value = useMotionValue(0);
  const rounded = useTransform(value, (latest) => Math.round(latest));

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
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function AIProcessWhyImpact() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} className="bg-nexus-navy rounded-2xl p-7 text-white shadow-xl">
          <p className="text-white font-bold text-base text-center mb-7">OUR AI & AUTOMATION PROCESS</p>
          <div className="flex items-start gap-2">
            {steps.map((step, idx) => (
              <motion.div key={step.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="flex items-start gap-2 flex-1">
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-9 h-9 rounded-full bg-nexus-blue text-white font-extrabold text-sm flex items-center justify-center mx-auto mb-3 shadow-md">{step.number}</div>
                  <step.icon className="text-white text-2xl mb-2" />
                  <p className="text-white font-bold text-sm mb-1">{step.title}</p>
                  <p className="text-blue-300 text-xs leading-relaxed">{step.description}</p>
                </div>
                {idx < 2 && <div className="border-t-2 border-dashed border-gray-600 w-8 mt-10 flex-shrink-0" />}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">WHY CHOOSE NEXUS DIGITAL GROUP?</p>
          <h3 className="text-nexus-dark text-[1.4rem] font-extrabold leading-tight mb-4">
            We Don&apos;t Just Automate Tasks-
            <br />
            We Build <span className="text-nexus-blue">Intelligent Systems</span>
          </h3>
          <div className="space-y-3">
            {[
              "Strategy-first approach",
              "Custom AI & automation systems",
              "Integrated with your existing tools",
              "Designed for ROI and efficiency",
              "Built for long-term scalability",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2 text-sm text-nexus-dark font-medium"><FiCheckCircle className="text-nexus-green text-base flex-shrink-0" />{item}</p>
            ))}
          </div>
        </div>

        <div className="bg-nexus-dark rounded-2xl p-6 text-white shadow-xl">
          <p className="text-white font-bold text-sm mb-5 text-center">AI Automation Impact</p>
          <div className="space-y-4">
            <div className="bg-white/10 rounded-xl p-4 text-center"><p className="text-nexus-blue font-extrabold text-2xl"><Count target={520} suffix="+" delay={0} /></p><p className="text-white text-xs mt-1">Hours Saved / Month</p></div>
            <div className="bg-white/10 rounded-xl p-4 text-center"><p className="text-nexus-blue font-extrabold text-2xl"><Count target={18650} prefix="$" suffix="+" delay={0.2} /></p><p className="text-white text-xs mt-1">Average Cost Saved / Month</p></div>
            <div className="bg-white/10 rounded-xl p-4 text-center"><p className="text-nexus-blue font-extrabold text-2xl"><Count target={2139} suffix="+" delay={0.4} /></p><p className="text-white text-xs mt-1">Leads Captured / Month</p></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
