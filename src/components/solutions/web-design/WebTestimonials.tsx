"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Nexus built us a website that actually generates leads. We went from a handful of enquiries a month to over 60.",
    name: "Sarah M.",
    role: "Real Estate Agency",
    avatar: "from-blue-400 to-blue-600",
    initial: "S",
  },
  {
    quote:
      "Our new site is fast, looks incredible, and has completely transformed how customers find and contact us.",
    name: "Daniel K.",
    role: "Trade Services",
    avatar: "from-green-400 to-green-600",
    initial: "D",
  },
  {
    quote:
      "Professional, efficient, and results-focused. Best investment we've made for our business online.",
    name: "Mark T.",
    role: "Professional Services",
    avatar: "from-purple-400 to-purple-600",
    initial: "M",
  },
];

export default function WebTestimonials() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-16">
      <p className="text-center text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-10">TRUSTED BY BUSINESSES ACROSS AUSTRALIA</p>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.name} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all">
            <div className="flex gap-0.5 mb-4">{Array.from({ length: 5 }).map((_, i) => <FaStar key={i} className="text-yellow-400 text-base" />)}</div>
            <p className="text-gray-600 italic text-sm leading-relaxed mb-5">{testimonial.quote}</p>
            <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm bg-gradient-to-br ${testimonial.avatar}`}>{testimonial.initial}</div>
              <div>
                <p className="font-semibold text-nexus-dark text-sm">{testimonial.name}</p>
                <p className="text-gray-400 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
