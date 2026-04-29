"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiClipboard, FiBarChart } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';

const ProcessSection = () => {
  const steps = [
    {
      num: 1,
      icon: FiClipboard,
      title: "Strategy & Audit",
      description: "We analyse your current setup and identify growth gaps.",
    },
    {
      num: 2,
      icon: FaRocket,
      title: "Build & Implement",
      description: "We design and deploy your custom growth system.",
    },
    {
      num: 3,
      icon: FiBarChart,
      title: "Optimise & Scale",
      description: "We monitor performance and scale what works.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[36px] font-bold text-[#0F172A] mb-16"
        >
          Our 3-Step Process
        </motion.h2>

        <div className="flex flex-col lg:flex-row justify-around items-start gap-12 lg:gap-0 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center max-w-[280px] mx-auto z-10"
              >
                <div className="w-[50px] h-[50px] bg-nexus-blue rounded-full flex items-center justify-center text-white text-[24px] font-bold mb-6 shadow-lg">
                  {step.num}
                </div>
                <step.icon className="w-8 h-8 text-nexus-blue mb-4" />
                <h3 className="text-[16px] font-bold text-[#0F172A] mb-2">{step.title}</h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
              {/* Connector Arrow */}
              {index < 2 && (
                <div className="hidden lg:flex absolute top-[25px] left-[calc(33%*index+22%)] w-[15%] h-px border-t-2 border-dashed border-[#CBD5E1] items-center justify-end">
                   <div className="w-2 h-2 border-t-2 border-r-2 border-[#CBD5E1] rotate-45 -mr-1" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
