"use client";

import { motion } from "framer-motion";

const steps = [
  "Strategy First",
  "UX & Conversion Design",
  "High-Performance Development",
  "SEO Optimisation",
  "Integration & Automation",
];

export function WdApproach() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-xs text-nexus-blue font-semibold uppercase tracking-[0.2em] mb-3">OUR APPROACH</p>
          <h2 className="text-4xl font-bold text-nexus-navy leading-tight">
            We Build Websites That Drive <span className="text-nexus-blue">Business Growth</span>
          </h2>
          <p className="text-gray-600 mt-4 text-[15px] leading-relaxed">
            We don&apos;t design &quot;pretty websites.&quot; We build conversion-focused digital assets that capture attention, build trust, guide users to
            take action, and integrate with your sales and marketing systems.
          </p>
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm font-medium text-nexus-dark">
            Your website becomes a lead generation engine, not just an online brochure.
          </div>
        </div>
        <div className="flex gap-2 items-start">
          {steps.map((step, i) => (
            <div key={step} className="flex-1 text-center">
              <div className="w-8 h-8 rounded-full bg-nexus-blue text-white text-sm font-bold flex items-center justify-center mx-auto">{i + 1}</div>
              {i < steps.length - 1 && <div className="border-t-2 border-dashed border-blue-200 mt-3 mb-3" />}
              <p className="text-xs font-bold text-nexus-dark mt-2">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
