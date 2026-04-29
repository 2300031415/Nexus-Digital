"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiZap, FiSun, FiActivity, FiHome, FiPlay } from 'react-icons/fi';

const SocialProofSection = () => {
  const logos = [
    { name: "SPARK FITNESS", icon: FiZap },
    { name: "bright dental", icon: FiSun },
    { name: "APEX", icon: FiPlay },
    { name: "URBAN INTERIORS", icon: FiHome },
    { name: "PEAK PROPERTY", icon: FiActivity }
  ];

  const testimonials = [
    {
      name: "James Carter",
      title: "Director, Apex Electrical",
      quote: "Nexus built an automated system that increased our leads by 120% in just 90 days.",
      initials: "JC"
    },
    {
      name: "Sarah L.",
      title: "Founder, Bright Dental",
      quote: "The AI receptionist and CRM automation have saved us 20+ hours per week.",
      initials: "SL"
    },
    {
      name: "Mark T.",
      title: "Owner, Peak Property",
      quote: "Best investment we've made. Our conversions have never been higher.",
      initials: "MT"
    },
  ];

  return (
    <section className="bg-white py-20 px-8 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[36px] font-bold text-[#0F172A] mb-12 text-center">
          Proven Systems. Real Results.
        </h2>

        {/* Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16 opacity-50 grayscale">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2">
              <logo.icon className="w-5 h-5 text-[#999999]" />
              <span className="text-[14px] font-bold text-[#999999] tracking-widest">{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-[#E2E8F0] shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-nexus-blue/10 rounded-full flex items-center justify-center text-nexus-blue font-bold text-sm border border-nexus-blue/20">
                  {testi.initials}
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#0F172A]">{testi.name}</h4>
                  <p className="text-[12px] text-[#999999]">{testi.title}</p>
                </div>
              </div>
              <p className="text-[15px] text-[#475569] leading-relaxed italic mb-6">
                "{testi.quote}"
              </p>
              <div className="flex gap-1 mt-auto">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 text-nexus-gold fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
