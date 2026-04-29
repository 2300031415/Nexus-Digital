"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Nexus transformed our CRM into a system that actually works. Our follow-ups are automated and our sales have increased significantly.",
    name: "James T.",
    company: "Real Estate Agency",
    initials: "JT",
  },
  {
    quote: "The automation workflows have saved us hours every week and improved our lead conversion by 40%.",
    name: "Sarah M.",
    company: "Healthcare Provider",
    initials: "SM",
  },
  {
    quote: "Professional, knowledgeable, and results-driven. Our CRM is now the backbone of our entire business.",
    name: "Michael R.",
    company: "Construction Company",
    initials: "MR",
  },
];

export function CrmTestimonials() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-10 text-center">TRUSTED BY BUSINESSES ACROSS AUSTRALIA</p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex gap-1 text-nexus-gold mb-3">{Array.from({ length: 5 }).map((_, i) => <FaStar key={i} className="w-4 h-4" />)}</div>
              <p className="text-sm italic text-gray-600 leading-relaxed mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-nexus-blue text-sm font-bold flex items-center justify-center">{t.initials}</div>
                <div>
                  <p className="text-sm font-semibold text-nexus-navy">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
