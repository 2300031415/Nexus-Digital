"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMessageCircle, FiPhoneCall, FiEdit3, FiBarChart2, FiSpeaker, FiSettings } from 'react-icons/fi';

const solutions = [
  { icon: FiMessageCircle, title: "AI Chatbots & Assistants", desc: "Handle enquiries, support customers, and assist your team 24/7." },
  { icon: FiPhoneCall, title: "AI Receptionists", desc: "Answer calls, capture leads, and route enquiries instantly." },
  { icon: FiEdit3, title: "AI Content Tools", desc: "Create high-quality content for marketing, websites, and campaigns." },
  { icon: FiBarChart2, title: "AI Analytics Tools", desc: "Generate insights, reports, and forecasts automatically." },
  { icon: FiSpeaker, title: "AI Marketing Tools", desc: "Optimise campaigns, improve targeting, and increase conversions." },
  { icon: FiSettings, title: "AI Workflow Tools", desc: "Automate internal processes and eliminate repetitive tasks." }
];

const SolutionSection = () => {
  return (
    <section className="bg-white py-20 px-8 text-center">
      <div className="max-w-7xl mx-auto">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue mb-4 block">
          OUR SOLUTION
        </span>
        <h2 className="text-[32px] font-bold text-[#0F172A] mb-3">
          We Provide AI Tools That Actually Solve Business Problems
        </h2>
        <p className="text-[15px] text-[#475569] max-w-[800px] mx-auto mb-16 leading-relaxed">
          At Nexus Digital Group, we cut through the noise. We identify, implement, and optimise AI tools that deliver real results across automation, marketing, sales, customer service, and operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all h-full"
              >
                <Icon className="w-10 h-10 text-nexus-blue mb-4 flex-shrink-0" />
                <h3 className="text-[15px] font-bold text-[#0F172A] mb-3 leading-tight">{item.title}</h3>
                <p className="text-[13px] text-[#475569] leading-relaxed mb-6">{item.desc}</p>
                <div className="mt-auto w-8 h-1 bg-nexus-green rounded-full flex-shrink-0" />
              </motion.div>
            );
          })}
        </div>
        
        <p className="mt-12 text-[16px] text-nexus-blue font-bold">
          We select the right tools for your business — not just popular ones.
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
