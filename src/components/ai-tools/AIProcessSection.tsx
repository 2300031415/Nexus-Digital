"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiSettings, FiLink, FiZap, FiUsers } from 'react-icons/fi';

const steps = [
  {
    num: "1",
    icon: FiSearch,
    title: "Identify",
    desc: "We identify the right AI tools for your business needs."
  },
  {
    num: "2",
    icon: FiSettings,
    title: "Set Up",
    desc: "We set up and customise the tools for your operations."
  },
  {
    num: "3",
    icon: FiLink,
    title: "Integrate",
    desc: "We integrate with your existing systems."
  },
  {
    num: "4",
    icon: FiZap,
    title: "Optimise",
    desc: "We monitor performance and maximise results."
  },
  {
    num: "5",
    icon: FiUsers,
    title: "Train & Support",
    desc: "We train your team and provide ongoing support."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const AIProcessSection = () => {
  return (
    <section className="bg-[#0F1729] py-20 px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue mb-4 block">
          HOW WE HELP
        </span>
        <h2 className="text-[36px] font-bold text-white mb-12">
          From Tool Selection to Full Implementation
        </h2>

        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={index}>
                <motion.div variants={itemVariants} className="flex-1 flex flex-col items-start min-w-[150px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-[18px] font-bold">
                      {step.num}
                    </div>
                    <Icon className="w-6 h-6 text-nexus-blue" />
                  </div>
                  <h3 className="text-[16px] font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[14px] text-[#E0E7FF] leading-relaxed">{step.desc}</p>
                </motion.div>

                {index < steps.length - 1 && (
                  <motion.div variants={itemVariants} className="hidden lg:block text-nexus-blue text-[30px] font-light">
                    →
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AIProcessSection;
