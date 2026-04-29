"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiShield, FiZap, FiUsers, FiMap, FiCpu, FiDollarSign, FiBarChart2, FiPlay } from 'react-icons/fi';

const HeroMain = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Column */}
        <div className="lg:w-[60%] pt-20 pb-20 px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-semibold tracking-[0.1em] text-nexus-blue uppercase mb-4 block">
              AI • AUTOMATION • GROWTH • PROVEN SYSTEMS • REAL RESULTS
            </span>
            <h1 className="text-[56px] font-extrabold leading-[1.1] text-[#0F172A] mb-6">
              We Build AI-Powered Systems That <br />
              <span className="text-nexus-blue">Generate Leads</span> & Scale Your Business
            </h1>
            <p className="text-[16px] text-[#475569] font-normal max-width-[500px] mb-8 leading-relaxed">
              Websites, automation, and AI agents designed to turn traffic into revenue — on autopilot.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
                className="bg-nexus-green hover:bg-[#15803d] text-white px-6 py-3 rounded-lg text-[14px] font-semibold transition-all shadow-md flex items-center gap-2"
              >
                Book Free Strategy Call →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border-2 border-[#0F172A] text-[#0F172A] px-6 py-3 rounded-lg text-[14px] font-semibold hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                See How It Works <FiPlay className="w-3 h-3 fill-current" />
              </motion.button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-[#E2E8F0] pt-12">
              <div className="flex items-center gap-3">
                <FiShield className="w-6 h-6 text-nexus-blue" />
                <span className="text-[14px] text-[#475569] font-medium leading-tight">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <FiZap className="w-6 h-6 text-nexus-blue" />
                <span className="text-[14px] text-[#475569] font-medium leading-tight">AI & Automation Experts</span>
              </div>
              <div className="flex items-center gap-3">
                <FiUsers className="w-6 h-6 text-nexus-blue" />
                <span className="text-[14px] text-[#475569] font-medium leading-tight">100+ Businesses Helped Grow</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMap className="w-6 h-6 text-nexus-blue" />
                <span className="text-[14px] text-[#475569] font-medium leading-tight">Australian Based Team</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="lg:w-[40%] w-full px-8 lg:px-0 py-12 lg:py-0">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#E2E8F0] overflow-hidden">
              <Image 
                src="/Catalog/Homepage_1.png" 
                alt="Nexus Digital Growth Systems" 
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

export default HeroMain;
