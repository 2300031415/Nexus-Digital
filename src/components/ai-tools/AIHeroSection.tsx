"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiZap, FiTarget } from 'react-icons/fi';
import Image from 'next/image';

const AIHeroSection = () => {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT COLUMN (60%) */}
        <div className="lg:w-[60%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue mb-4 block">
              AI BUSINESS TOOLS
            </span>
            <h1 className="text-[48px] font-extrabold leading-[1.2] text-[#0F172A] mb-6">
              AI Business Tools That Increase <br />
              <span className="text-nexus-blue">Productivity &</span>{' '}
              <span className="text-nexus-blue">Performance</span>
            </h1>
            <p className="text-[15px] text-[#475569] leading-[1.6] mb-8 max-w-2xl">
              We provide and implement powerful AI tools that help your business 
              automate tasks, improve efficiency, and scale operations — without complexity.
              <br /><br />
              <span className="font-medium">Smarter tools. Better outcomes.</span>
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button 
                onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
                className="bg-nexus-green hover:bg-green-700 text-white px-6 py-3 rounded-lg text-[14px] font-semibold transition-colors"
              >
                Book Free AI Tools Demo →
              </button>
              <button className="bg-transparent border-2 border-[#0F172A] text-[#0F172A] hover:bg-gray-50 px-6 py-3 rounded-lg text-[14px] font-semibold transition-colors">
                Get AI Tools List →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5 text-[#0F172A]" />
                <span className="text-[14px] text-[#475569]">Practical AI Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <FiZap className="w-5 h-5 text-[#0F172A]" />
                <span className="text-[14px] text-[#475569]">Easy Implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <FiTarget className="w-5 h-5 text-[#0F172A]" />
                <span className="text-[14px] text-[#475569]">Built for Business ROI</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (40%) - Simple Image */}
        <div className="lg:w-[40%] flex items-center justify-center w-full mt-12 lg:mt-0">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full"
          >
            <div className="rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden">
              <Image 
                src="/Catalog/AiTools_1.png" 
                alt="AI Business Tools" 
                width={800} 
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIHeroSection;
