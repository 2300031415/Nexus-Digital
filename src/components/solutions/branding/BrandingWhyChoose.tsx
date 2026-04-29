"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiEdit2, FiSearch, FiZap } from "react-icons/fi";

export function BrandingWhyChoose() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">WHAT SETS US APART</p>
          <h3 className="text-nexus-dark text-2xl font-extrabold leading-tight mb-4">
            We Don&apos;t Just Design -
            <br />
            We Position You to <span className="text-nexus-blue">Win</span>
          </h3>
          <p className="text-gray-500 text-sm mb-5">We focus on business impact, not just aesthetics. Our brands are built to drive growth and long-term success.</p>
          <div className="space-y-2">
            {["Strategy-first approach", "Market-driven positioning", "Premium design execution", "Consistency across all touchpoints", "Built for long-term growth"].map((item) => (
              <p key={item} className="flex items-center gap-2 text-sm text-nexus-dark font-medium"><FiCheckCircle className="text-nexus-green text-base" />{item}</p>
            ))}
          </div>
        </div>

        <div className="bg-nexus-navy rounded-2xl p-7 text-white shadow-xl">
          <p className="text-white font-bold text-base text-center mb-7">OUR BRANDING PROCESS</p>
          <div className="flex items-start gap-2">
            <div className="flex-1 text-center">
              <div className="w-9 h-9 rounded-full bg-nexus-blue text-white font-extrabold text-sm flex items-center justify-center mx-auto mb-3">1</div>
              <FiSearch className="text-white text-2xl mx-auto mb-2" />
              <p className="text-white font-bold text-sm mb-1">Discovery &amp; Strategy</p>
              <p className="text-blue-300 text-xs leading-relaxed">We understand your business, market, and goals to build the right brand foundation.</p>
            </div>
            <span className="text-gray-500 text-xl mt-4">→</span>
            <div className="flex-1 text-center">
              <div className="w-9 h-9 rounded-full bg-nexus-blue text-white font-extrabold text-sm flex items-center justify-center mx-auto mb-3">2</div>
              <FiEdit2 className="text-white text-2xl mx-auto mb-2" />
              <p className="text-white font-bold text-sm mb-1">Design &amp; Development</p>
              <p className="text-blue-300 text-xs leading-relaxed">We design your brand identity and create all necessary assets with precision.</p>
            </div>
            <span className="text-gray-500 text-xl mt-4">→</span>
            <div className="flex-1 text-center">
              <div className="w-9 h-9 rounded-full bg-nexus-blue text-white font-extrabold text-sm flex items-center justify-center mx-auto mb-3">3</div>
              <FiZap className="text-white text-2xl mx-auto mb-2" />
              <p className="text-white font-bold text-sm mb-1">Implementation &amp; Rollout</p>
              <p className="text-blue-300 text-xs leading-relaxed">We implement your brand across all platforms and ensure a seamless brand launch.</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">REAL RESULTS. REAL IMPACT.</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              ["+62%", "Increase in Brand Recognition"],
              ["+48%", "Increase in Customer Trust"],
              ["+35%", "Increase in Conversion Rates"],
              ["+2.3x", "Higher Perceived Value"],
            ].map(([v, l]) => (
              <div key={l} className="bg-nexus-light-bg rounded-xl p-4 text-center border border-gray-100">
                <p className="text-nexus-blue font-extrabold text-3xl">{v}</p>
                <p className="text-gray-500 text-xs mt-1">{l}</p>
              </div>
            ))}
          </div>
          <div className="bg-nexus-light-bg rounded-xl p-4 border border-gray-100 flex items-center gap-4">
            <div className="relative w-10 h-12">
              <div className="absolute inset-0 bg-nexus-navy rounded-sm shadow" />
              <div className="absolute left-2 top-1 w-10 h-12 bg-nexus-dark rounded-sm shadow flex items-center justify-center text-yellow-400 font-bold text-lg">A</div>
            </div>
            <div>
              <p className="text-nexus-dark font-bold text-sm">See Our Work</p>
              <p className="text-nexus-blue text-xs font-semibold hover:underline cursor-pointer">Explore Case Studies →</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
