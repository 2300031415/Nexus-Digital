"use client";

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import Image from 'next/image';

const ApproachAndResults = () => {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        
        {/* LEFT COLUMN: Content */}
        <div className="bg-[#F0F6FF] rounded-[32px] p-10 lg:p-12 w-full lg:w-1/2 shadow-sm border border-[#E2E8F0]">
          <span className="text-[11px] font-bold tracking-widest uppercase text-nexus-blue mb-4 block">
            WE DON'T JUST RECOMMEND TOOLS—<br/>WE IMPLEMENT SOLUTIONS
          </span>
          <p className="text-[15px] text-[#0F172A] font-medium mb-8 leading-relaxed max-w-[400px]">
            Most providers give you a list of tools. We build AI-powered systems that deliver real business outcomes.
          </p>
          <div className="flex flex-col gap-4">
            {[ "Business-first approach", "Practical AI solutions", "Full implementation support", "ROI-focused", "Built for scalability" ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <FiCheckCircle className="w-[18px] h-[18px] text-nexus-green shrink-0" />
                <span className="text-[14px] text-[#0F172A] font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="bg-[#0F172A] rounded-[32px] p-10 lg:p-12 w-full lg:w-1/2 relative overflow-hidden flex flex-col justify-between shadow-sm">
          {/* Subtle glowing background effect to replace the missing image */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-nexus-blue/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute top-10 right-10 w-32 h-32 bg-nexus-green/10 blur-[50px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <span className="text-[11px] font-bold tracking-widest uppercase text-nexus-blue mb-6 block">
              WHAT HAPPENS WHEN YOU USE THE RIGHT AI TOOLS
            </span>
            <div className="flex flex-col gap-5">
              {[ "Less manual work and repetitive tasks", "More efficient operations and workflows", "Better customer experience and support", "Improved business performance", "Increased profitability and growth" ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FiCheckCircle className="w-[18px] h-[18px] text-nexus-green shrink-0" />
                  <span className="text-[14px] text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApproachAndResults;
