"use client";

import { motion } from "framer-motion";
import { FiBook, FiEdit2, FiImage, FiMessageSquare, FiMonitor, FiTarget } from "react-icons/fi";

const services = [
  { icon: FiTarget, title: "Brand Strategy", desc: "Positioning, audience research, and competitive differentiation." },
  { icon: FiEdit2, title: "Logo & Visual Identity", desc: "Memorable logos and visual systems that represent your brand." },
  { icon: FiMessageSquare, title: "Brand Messaging", desc: "Clear, compelling messaging that speaks to your audience." },
  { icon: FiMonitor, title: "Website Branding", desc: "Consistent brand experience across your website and digital presence." },
  { icon: FiImage, title: "Marketing Creative", desc: "Ad creatives, social media visuals, and campaign assets that convert." },
  { icon: FiBook, title: "Brand Guidelines", desc: "Structured brand guidelines to ensure consistency at every touchpoint." },
];

export function BrandingServices() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((service) => (
          <motion.div key={service.title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center text-nexus-blue text-xl"><service.icon /></div>
            <p className="font-bold text-nexus-dark text-sm mb-2">{service.title}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
