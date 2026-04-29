"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import type { ComponentType } from "react";
import { useEffect } from "react";
import { FiArrowRight, FiCheckCircle, FiEdit2, FiSearch, FiZap } from "react-icons/fi";

type CounterProps = {
  target: number;
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
  { num: "1", icon: FiSearch, title: "Strategy & Planning", desc: "We learn your goals, audience, and business to plan the right website architecture." },
  { num: "2", icon: FiEdit2, title: "Design & Development", desc: "We design and build your website with conversion, speed, and SEO as the priority." },
  { num: "3", icon: FiZap, title: "Launch & Optimise", desc: "We launch, test, and continuously optimise your website for maximum performance." },
];

function Counter({ target, suffix = "", delay = 0 }: CounterProps) {
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
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function WebProcessWhyResults() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} className="bg-nexus-navy rounded-2xl p-7 text-white shadow-xl">
          <p className="text-white font-bold text-base text-center mb-7">OUR WEB DESIGN PROCESS</p>
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
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">WHY CHOOSE NEXUS DIGITAL GROUP?</p>
          <h3 className="text-nexus-dark text-[1.4rem] font-extrabold leading-tight mb-4">
            We Don&apos;t Just Build Websites -
            <br />
            We Build <span className="text-nexus-blue">Revenue Engines</span>
          </h3>
          <p className="text-gray-500 text-sm mb-5 leading-relaxed">
            Every website we create is engineered for performance, designed to convert, and built to grow with your business.
          </p>
          <div className="space-y-3">
            {[
              "Conversion-first design approach",
              "Custom built - no templates",
              "Mobile-first & SEO optimised",
              "Integrated with your tools & CRM",
              "Ongoing support & optimisation",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2 text-sm text-nexus-dark font-medium"><FiCheckCircle className="text-nexus-green text-base flex-shrink-0" />{item}</p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">REAL RESULTS. REAL GROWTH.</p>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="bg-nexus-light-bg rounded-xl p-4 text-center border border-gray-100 shadow-sm"><p className="text-nexus-blue font-extrabold text-3xl">+<Counter target={340} delay={0} />%</p><p className="text-gray-500 text-xs mt-1">Increase in Website Leads</p></div>
            <div className="bg-nexus-light-bg rounded-xl p-4 text-center border border-gray-100 shadow-sm"><p className="text-nexus-blue font-extrabold text-3xl"><Counter target={2} delay={0.2} />.1s</p><p className="text-gray-500 text-xs mt-1">Average Page Load Speed</p></div>
            <div className="bg-nexus-light-bg rounded-xl p-4 text-center border border-gray-100 shadow-sm"><p className="text-nexus-blue font-extrabold text-3xl">+<Counter target={210} delay={0.4} />%</p><p className="text-gray-500 text-xs mt-1">Increase in Organic Traffic</p></div>
            <div className="bg-nexus-light-bg rounded-xl p-4 text-center border border-gray-100 shadow-sm"><p className="text-nexus-blue font-extrabold text-3xl"><Counter target={98} delay={0.6} />%</p><p className="text-gray-500 text-xs mt-1">Average Performance Score</p></div>
          </div>
          <div className="bg-nexus-light-bg rounded-xl p-4 border border-gray-100 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-12 bg-nexus-navy rounded-lg flex flex-col items-center justify-center gap-1 shadow">
              <span className="w-6 h-1 bg-nexus-blue rounded-full" />
              <span className="w-4 h-1 bg-gray-600 rounded-full" />
              <span className="w-5 h-1 bg-gray-600 rounded-full" />
            </div>
            <div>
              <p className="text-nexus-dark font-bold text-sm">See Our Work</p>
              <p className="text-nexus-blue text-xs font-semibold hover:underline cursor-pointer flex items-center gap-1">View Case Studies <FiArrowRight /></p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
