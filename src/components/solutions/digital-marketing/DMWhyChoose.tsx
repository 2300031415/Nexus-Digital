"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import type { ComponentType } from "react";
import { useEffect } from "react";
import { FiArrowRight, FiCheckCircle, FiSearch, FiTool, FiTrendingUp } from "react-icons/fi";

type CounterProps = {
  target: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
};
type Step = {
  num: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

const steps: Step[] = [
  { num: "1", icon: FiSearch, title: "Audit & Strategy", desc: "We analyse your business, identify opportunities, and define your growth plan." },
  { num: "2", icon: FiTool, title: "Build & Launch", desc: "We create campaigns, build funnels, and launch your marketing system." },
  { num: "3", icon: FiTrendingUp, title: "Optimise & Scale", desc: "We continuously test, optimise, and scale what delivers the best results." },
];

function Counter({ target, prefix = "", suffix = "", delay = 0 }: CounterProps) {
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

export default function DMWhyChoose() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">WHY CHOOSE NEXUS DIGITAL GROUP?</p>
          <h3 className="text-nexus-dark text-[1.5rem] font-extrabold leading-tight mb-4">
            We Don&apos;t Run Campaigns -
            <br />
            We Build <span className="text-nexus-blue">Growth Systems</span>
          </h3>
          <p className="text-gray-500 text-sm mb-5 leading-relaxed">Most agencies focus on clicks and impressions. We focus on results and revenue.</p>
          <div className="space-y-3">
            {[
              "Strategy-first approach",
              "Data-driven decisions",
              "Conversion-focused campaigns",
              "Integrated with CRM & AI",
              "Built for long-term growth",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2 text-sm text-nexus-dark font-medium"><FiCheckCircle className="text-nexus-green text-base flex-shrink-0" />{item}</p>
            ))}
          </div>
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} className="bg-nexus-navy rounded-2xl p-7 text-white shadow-xl">
          <p className="text-white font-bold text-base text-center mb-7">OUR MARKETING PROCESS</p>
          <div className="flex items-start gap-2">
            {steps.map((step, idx) => (
              <motion.div key={step.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="flex items-start gap-2 flex-1">
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-9 h-9 rounded-full bg-nexus-blue text-white font-extrabold text-sm flex items-center justify-center mx-auto mb-3 shadow-md">{step.num}</div>
                  <step.icon className="text-white text-2xl mb-2" />
                  <p className="text-white font-bold text-sm mb-1">{step.title}</p>
                  <p className="text-blue-300 text-xs leading-relaxed">{step.desc}</p>
                </div>
                {idx < 2 && <div className="border-t-2 border-dashed border-gray-600 w-8 mt-10 flex-shrink-0" />}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">REAL RESULTS. REAL GROWTH.</p>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="bg-nexus-light-bg rounded-xl p-4 text-center border border-gray-100 shadow-sm"><p className="text-nexus-blue font-extrabold text-3xl"><Counter target={287} prefix="+" suffix="%" delay={0} /></p><p className="text-nexus-dark font-bold text-xs mb-1">Increase in Leads</p><p className="text-gray-500 text-[10px]">(Real Estate Client)</p></div>
            <div className="bg-nexus-light-bg rounded-xl p-4 text-center border border-gray-100 shadow-sm"><p className="text-nexus-blue font-extrabold text-3xl"><Counter target={42} prefix="-" suffix="%" delay={0.2} /></p><p className="text-nexus-dark font-bold text-xs mb-1">Decrease in Cost Per Lead</p><p className="text-gray-500 text-[10px]">(Trades Client)</p></div>
            <div className="bg-nexus-light-bg rounded-xl p-4 text-center border border-gray-100 shadow-sm"><p className="text-nexus-blue font-extrabold text-3xl"><Counter target={156} prefix="+" suffix="%" delay={0.4} /></p><p className="text-nexus-dark font-bold text-xs mb-1">Increase in Revenue</p><p className="text-gray-500 text-[10px]">(eCommerce Client)</p></div>
            <div className="bg-nexus-light-bg rounded-xl p-4 text-center border border-gray-100 shadow-sm"><p className="text-nexus-blue font-extrabold text-3xl"><Counter target={46} suffix="x" delay={0.6} /></p><p className="text-nexus-dark font-bold text-xs mb-1">Average ROAS</p><p className="text-gray-500 text-[10px]">Across Campaigns</p></div>
          </div>
          <div className="bg-nexus-light-bg rounded-xl p-4 border border-gray-100 flex items-center gap-4 shadow-sm">
            <div className="w-14 h-10 bg-nexus-navy rounded-lg flex items-end justify-around px-1.5 pb-1.5 gap-0.5">
              {['h-[30%]','h-[50%]','h-[70%]','h-[55%]','h-[90%]'].map((h)=><span key={h} className={`w-2 bg-nexus-blue rounded-t-sm ${h}`} />)}
            </div>
            <div>
              <p className="text-nexus-dark font-bold text-sm">See How We Drive Results</p>
              <p className="text-nexus-blue text-xs font-semibold hover:underline cursor-pointer flex items-center gap-1">Explore Our Case Studies <FiArrowRight /></p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
