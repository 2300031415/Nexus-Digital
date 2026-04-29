"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote: "Nexus Digital Group built us a system that consistently brings in high-quality leads. Our business has never been better.",
    name: "Sarah M.",
    role: "Real Estate Agency",
    initial: "S",
    avatar: "from-blue-400 to-blue-600",
  },
  {
    quote: "The automation and follow-up system has saved us so much time and increased our conversions by over 40%.",
    name: "Daniel K.",
    role: "Trade Services",
    initial: "D",
    avatar: "from-green-400 to-green-600",
  },
  {
    quote: "From the website to the ads and CRM, everything works together perfectly. Highly recommend!",
    name: "Mark T.",
    role: "Professional Services",
    initial: "M",
    avatar: "from-purple-400 to-purple-600",
  },
];

export function PackagesTestimonials() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-8">TRUSTED BY BUSINESSES ACROSS AUSTRALIA</p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all">
              <div className="flex gap-0.5 text-yellow-400 mb-4">{Array.from({ length: 5 }).map((_, i) => <FaStar key={i} className="text-lg" />)}</div>
              <p className="text-gray-600 italic text-sm">{t.quote}</p>
              <div className="flex items-center gap-3 mt-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatar} text-white font-bold flex items-center justify-center`}>{t.initial}</div>
                <div>
                  <p className="font-semibold text-nexus-dark">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
