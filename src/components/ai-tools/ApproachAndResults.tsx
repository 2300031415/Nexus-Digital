"use client";

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import Image from 'next/image';

const ApproachAndResults = () => {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 border border-[#E2E8F0] rounded-[32px] overflow-hidden shadow-sm">
        
        {/* LEFT COLUMN: Content */}
        <div className="md:w-[55%] p-10 lg:p-16 bg-white">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue mb-4 block">
            OUR APPROACH & RESULTS
          </span>
          <h2 className="text-[28px] font-bold text-[#0F172A] mb-6 leading-tight">
            We Don't Just Recommend Tools—We Build AI-Powered Systems
          </h2>
          <p className="text-[15px] text-[#475569] mb-10 leading-relaxed">
            Most providers give you a list of tools. We identify, implement, and optimise AI systems that deliver real business results and measurable growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              "Business-first approach",
              "Practical implementation",
              "Dedicated support",
              "ROI-focused",
              "Less manual work",
              "Better experience",
              "Improved performance",
              "Scalable growth"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <FiCheckCircle className="w-[18px] h-[18px] text-nexus-green shrink-0 mt-0.5" />
                <span className="text-[14px] text-[#0F172A] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Image */}
        <div className="md:w-[45%] relative min-h-[400px]">
          <Image 
            src="/Catalog/Aiworkforce_1.png" 
            alt="AI Workforce Solutions" 
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ApproachAndResults;
