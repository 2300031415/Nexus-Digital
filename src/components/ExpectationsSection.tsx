"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiBarChart2, FiCpu, FiDollarSign, FiClock } from 'react-icons/fi';

const ExpectationsSection = () => {
  const items = [
    {
      icon: FiBarChart2,
      color: "green",
      title: "More Qualified Leads",
      description: "Consistent pipeline of high-quality leads.",
    },
    {
      icon: FiCpu,
      color: "blue",
      title: "Automated Sales Processes",
      description: "AI handles follow ups and lead nurturing.",
    },
    {
      icon: FiDollarSign,
      color: "green",
      title: "Higher Conversions",
      description: "Turn more leads into paying customers.",
    },
    {
      icon: FiClock,
      color: "blue",
      title: "Less Manual Work",
      description: "Save time and focus on growing your business.",
    },
  ];

  return (
    <section className="bg-white py-20 px-8 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[36px] font-bold text-[#0F172A] mb-16"
        >
          What You Can Expect
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                item.color === 'green' ? 'bg-[#DCFCE7]' : 'bg-[#DBEAFE]'
              }`}>
                <item.icon className={`w-8 h-8 ${
                  item.color === 'green' ? 'text-nexus-green' : 'text-nexus-blue'
                }`} />
              </div>
              <h3 className="text-[18px] font-bold text-[#0F172A]">{item.title}</h3>
              <p className="text-[14px] text-[#475569] leading-relaxed max-w-[200px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpectationsSection;
