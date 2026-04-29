"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiPackage, FiHelpCircle, FiSettings, FiLink, FiBarChart, FiCpu } from 'react-icons/fi';

const problems = [
  {
    icon: FiPackage,
    title: "Too Many Tools",
    desc: "Too many options create confusion and paralysis."
  },
  {
    icon: FiHelpCircle,
    title: "No Clear Use Case",
    desc: "Businesses don't know which tools will actually help them."
  },
  {
    icon: FiSettings,
    title: "Complex Setup",
    desc: "Most tools are technical and difficult to set up correctly."
  },
  {
    icon: FiLink,
    title: "No Integration",
    desc: "Tools don't connect with existing systems and workflows."
  },
  {
    icon: FiBarChart,
    title: "No Measurable ROI",
    desc: "AI is used randomly without delivering real results."
  },
  {
    icon: FiCpu,
    title: "Overwhelming",
    desc: "AI becomes more overwhelming than beneficial."
  }
];

const ProblemsSection = () => {
  return (
    <section className="bg-nexus-light-bg py-20 px-8 text-center">
      <div className="max-w-7xl mx-auto">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue mb-4 block">
          THE PROBLEM
        </span>
        <h2 className="text-[32px] font-bold text-[#0F172A] mb-16">
          Most Businesses Don't Know Where to Start With AI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-[#E2E8F0] text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-nexus-blue" />
                </div>
                <h3 className="text-[16px] font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
