"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const PainPointsSection = () => {
  const cards = [
    {
      title: "Disconnected Systems",
      description: "Tools that don't talk to each other.",
    },
    {
      title: "Manual & Time Consuming",
      description: "Wasting hours on repetitive tasks.",
    },
    {
      title: "Leads Falling Through",
      description: "No follow up. No conversions.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[36px] font-bold leading-[1.2] text-[#0F172A] mb-6">
            Most Businesses Don't Have a <br />
            Strategy — They Have <br />
            <span className="text-nexus-blue">Random Tools</span>
          </h2>
          <div className="space-y-4 text-[16px] text-[#475569] leading-relaxed">
            <p>You've got a website. Maybe some ads. A CRM. A few tools.</p>
            <p>But nothing is connected. No automation. No real data. No scalable system.</p>
            <p className="font-bold text-[#0F172A]">That's why growth feels inconsistent.</p>
          </div>
        </motion.div>

        {/* Right Column: Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col items-center text-center group transition-all hover:shadow-md"
            >
              <div className="w-12 h-12 bg-[#FEF2F2] rounded-full flex items-center justify-center mb-6">
                <FiX className="w-8 h-8 text-nexus-red" />
              </div>
              <h3 className="text-[16px] font-semibold text-[#0F172A] mb-2">{card.title}</h3>
              <p className="text-[14px] text-[#475569] leading-tight">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
