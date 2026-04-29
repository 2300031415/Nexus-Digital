"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiEdit2, FiSearch, FiZap } from "react-icons/fi";

export function BrandingApproach() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* Left Section: What Sets Us Apart (3 columns) */}
        <div className="lg:col-span-3 flex flex-col justify-center">
          <p className="text-[#3B82F6] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">WHAT SETS US APART</p>
          <h2 className="text-[#0F172A] text-3xl font-extrabold leading-[1.1] mb-6">
            We Don't Just Design - <br />
            We Position You to <span className="text-[#3B82F6]">Win</span>
          </h2>
          <div className="space-y-4">
            {[
              "Strategy-first approach",
              "Market-driven positioning",
              "Premium design execution",
              "Consistency across touchpoints",
              "Built for long-term growth"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <FiCheckCircle className="text-[#10B981] w-4 h-4 flex-shrink-0" />
                <span className="text-[#1E293B] font-semibold text-[13px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section: Branding Process Card (6 columns) */}
        <div className="lg:col-span-6 bg-[#0F172A] rounded-[32px] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col items-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-12 text-center text-[#94A3B8]">OUR BRANDING PROCESS</p>

          <div className="grid grid-cols-3 gap-6 w-full relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#3B82F6] text-white font-bold flex items-center justify-center mb-6 text-sm">1</div>
              <FiSearch className="text-white w-7 h-7 mb-4" />
              <p className="font-bold text-sm mb-2">Discovery & Strategy</p>
              <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                We understand your business, market, and goals to build the right brand foundation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#3B82F6] text-white font-bold flex items-center justify-center mb-6 text-sm">2</div>
              <FiEdit2 className="text-white w-7 h-7 mb-4" />
              <p className="font-bold text-sm mb-2">Design & Development</p>
              <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                We design your brand identity and create all necessary assets with precision.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#3B82F6] text-white font-bold flex items-center justify-center mb-6 text-sm">3</div>
              <FiZap className="text-white w-7 h-7 mb-4" />
              <p className="font-bold text-sm mb-2">Implementation & Rollout</p>
              <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                We implement your brand across all platforms and ensure a seamless brand launch.
              </p>
            </div>
          </div>

          {/* Subtle horizontal connecting lines */}
          <div className="absolute top-[88px] left-[20%] right-[20%] h-px border-t border-dashed border-[#1E293B] z-0" />
        </div>

        {/* Right Section: Stats & CTA (3 columns) */}
        <div className="lg:col-span-3 flex flex-col justify-center">
          <p className="text-[#3B82F6] text-[11px] font-bold uppercase tracking-[0.2em] mb-6">REAL RESULTS.</p>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 mb-6">
            {[
              { val: "+62%", label: "Brand Recognition" },
              { val: "+48%", label: "Customer Trust" },
              { val: "+35%", label: "Conversion Rates" }
            ].map((stat) => (
              <div key={stat.label} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-4 flex flex-col items-center text-center">
                <p className="text-[#3B82F6] text-2xl font-black mb-0.5">{stat.val}</p>
                <p className="text-[#64748B] text-[9px] font-bold uppercase tracking-tight">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-4 flex items-center gap-3 group cursor-pointer hover:bg-white hover:shadow-lg transition-all">
            <div className="w-10 h-10 bg-[#0F172A] rounded-lg flex items-center justify-center text-white">
              <FiEdit2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[#0F172A] font-bold text-[13px]">See Our Work</p>
              <p className="text-[#3B82F6] text-[11px] font-medium flex items-center gap-1">
                Case Studies <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </p>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
