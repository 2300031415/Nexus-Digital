"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCheckCircle, FiUsers, FiBarChart2, FiSettings, FiTrendingUp } from 'react-icons/fi';
import { FaHandPaper } from 'react-icons/fa';

const WhyNexusMain = () => {
  const checklist = [
    "AI-first approach (not outdated tactics)",
    "Built for ROI, not vanity metrics",
    "Everything connected (no silos)",
    "Strategy + execution in one place",
    "Designed to scale with your business",
  ];

  const nodes = [
    { label: 'ATTRACT', icon: FiUsers, pos: 'top-right' },
    { label: 'CONVERT', icon: FiBarChart2, pos: 'right' },
    { label: 'AUTOMATE', icon: FiSettings, pos: 'bottom-right' },
    { label: 'NURTURE', icon: FaHandPaper, pos: 'bottom-left' },
    { label: 'SCALE', icon: FiTrendingUp, pos: 'left' },
  ];

  return (
    <section className="bg-[#F0F4F8] py-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-semibold tracking-[0.1em] text-nexus-blue uppercase mb-4 block">
            WHY BUSINESSES CHOOSE NEXUS
          </span>
          <h2 className="text-[36px] font-bold leading-[1.2] text-[#0F172A] mb-6">
            We Don't Build Websites — We Build <br />
            <span className="text-nexus-blue">Revenue Systems</span>
          </h2>
          <p className="text-[16px] text-[#475569] mb-8 leading-relaxed">
            We connect your marketing, sales, and operations into one smart system that works for you 24/7.
          </p>

          <div className="space-y-4">
            {checklist.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <FiCheckCircle className="w-5 h-5 text-nexus-green mt-0.5" />
                <span className="text-[14px] text-[#0F172A] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Growth System Wheel */}
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200&h=800" 
              alt="Professional Growth Strategy" 
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/10 to-[#3B82F6]/10" />
          </div>
          
          {/* Rotating Wheel System */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Dashed Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-80 h-80 border-2 border-dashed border-nexus-blue/30 rounded-full"
            />

            {/* Nodes */}
            <div className="relative w-80 h-80">
              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-xl border border-nexus-blue/20 flex flex-col items-center justify-center z-10">
                <FiTrendingUp className="w-6 h-6 text-nexus-blue mb-1" />
                <span className="text-[12px] font-bold text-[#0F172A] text-center leading-tight">GROWTH<br/>SYSTEM</span>
              </div>

              {/* Orbital Nodes (Static relative to center for readability, but connected to dashed ring) */}
              {/* Attract - Top Right */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full shadow-lg border border-[#E2E8F0] flex flex-col items-center justify-center">
                <FiUsers className="w-5 h-5 text-nexus-blue mb-1" />
                <span className="text-[10px] font-bold text-[#475569]">ATTRACT</span>
              </div>

              {/* Convert - Right */}
              <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-lg border border-[#E2E8F0] flex flex-col items-center justify-center">
                <FiBarChart2 className="w-5 h-5 text-nexus-blue mb-1" />
                <span className="text-[10px] font-bold text-[#475569]">CONVERT</span>
              </div>

              {/* Automate - Bottom Right */}
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-white rounded-full shadow-lg border border-[#E2E8F0] flex flex-col items-center justify-center">
                <FiSettings className="w-5 h-5 text-nexus-blue mb-1" />
                <span className="text-[10px] font-bold text-[#475569]">AUTOMATE</span>
              </div>

              {/* Nurture - Bottom Left */}
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-white rounded-full shadow-lg border border-[#E2E8F0] flex flex-col items-center justify-center">
                <FaHandPaper className="w-5 h-5 text-nexus-blue mb-1" />
                <span className="text-[10px] font-bold text-[#475569]">NURTURE</span>
              </div>

              {/* Scale - Left */}
              <div className="absolute top-1/2 -left-10 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-lg border border-[#E2E8F0] flex flex-col items-center justify-center">
                <FiTrendingUp className="w-5 h-5 text-nexus-blue mb-1" />
                <span className="text-[10px] font-bold text-[#475569]">SCALE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNexusMain;
