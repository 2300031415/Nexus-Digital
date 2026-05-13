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

        <div className="flex flex-col lg:flex-row justify-around items-center gap-12 lg:gap-0 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm flex items-center gap-4 max-w-[340px] w-full mx-auto z-10 text-left relative"
              >
                {/* Number Circle */}
                <div className="w-10 h-10 bg-nexus-blue rounded-full flex items-center justify-center text-white text-[16px] font-bold flex-shrink-0 shadow-md">
                  {step.num}
                </div>
                
                {/* Vertical Divider */}
                <div className="w-px h-16 bg-[#E2E8F0] flex-shrink-0 hidden sm:block" />
                
                {/* Content */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <step.icon className="w-4 h-4 text-nexus-blue flex-shrink-0" />
                    <h3 className="text-[14px] font-bold text-[#0F172A] leading-tight">{step.title}</h3>
                  </div>
                  <p className="text-[12px] text-[#475569] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
              {/* Connector Arrow */}
              {index < 2 && (
                <div className="hidden lg:flex absolute top-1/2 left-[calc(33.33%*index+28%)] w-[10%] h-px border-t-2 border-dashed border-nexus-blue/30 items-center justify-end z-0 -translate-y-1/2">
                   <div className="w-2 h-2 border-t-2 border-r-2 border-nexus-blue/30 rotate-45 -mr-1" />
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
