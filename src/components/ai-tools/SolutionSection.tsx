"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiUsers, FiTarget, FiGlobe, FiSettings } from 'react-icons/fi';

const solutions = [
  {
    icon: FiUsers,
    title: "AI Workforce",
    desc: "Deploy AI team members to handle support, operations, and repetitive business tasks.",
    href: "/solutions/ai-workforce"
  },
  {
    icon: FiTarget,
    title: "Lead Generation System",
    desc: "Capture, qualify, and follow up leads automatically to increase conversions.",
    href: "#"
  },
  {
    icon: FiGlobe,
    title: "Website + Marketing Packages",
    desc: "Combine high-converting websites with performance marketing systems that drive growth.",
    href: "#"
  },
  {
    icon: FiSettings,
    title: "CRM Automations",
    desc: "Automate pipelines, reminders, and customer workflows inside your CRM.",
    href: "#"
  }
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

        <div className="flex flex-wrap justify-center gap-4">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border text-[14px] font-semibold transition-all ${
                    index === 0
                      ? "bg-nexus-blue text-white border-nexus-blue"
                      : "bg-white text-[#0F172A] border-[#E2E8F0] hover:border-nexus-blue hover:text-nexus-blue"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.title}
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        <p className="mt-12 text-[15px] text-[#475569] font-semibold italic">
          "We select the right tools for your business — not just popular ones."
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
