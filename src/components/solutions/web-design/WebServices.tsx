"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiLayout, FiLink, FiMonitor, FiRefreshCw, FiSearch, FiShoppingCart } from "react-icons/fi";

const services = [
  { icon: FiMonitor, title: "Business Websites", desc: "Professional, high-converting websites for service businesses and brands." },
  { icon: FiLayout, title: "Landing Pages", desc: "Targeted pages designed to capture leads and drive conversions." },
  { icon: FiShoppingCart, title: "eCommerce Websites", desc: "Online stores built to sell, with a seamless shopping experience." },
  { icon: FiRefreshCw, title: "Website Redesigns", desc: "Transform your existing site into a high-performance conversion machine." },
  { icon: FiSearch, title: "SEO & Performance", desc: "Technical SEO and speed optimisation to rank higher and convert more." },
  { icon: FiLink, title: "Integrations & Automation", desc: "Connect your website to CRM, bookings, analytics, and marketing tools." },
];

export default function WebServices() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="text-center mb-12">
        <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-2">OUR WEB DESIGN SERVICES</p>
      </div>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((service) => (
          <motion.div key={service.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="w-14 h-14 mx-auto mb-3 bg-blue-50 rounded-2xl flex items-center justify-center text-nexus-blue text-2xl"><service.icon /></div>
            <p className="text-nexus-dark font-bold text-sm mb-2">{service.title}</p>
            <p className="text-gray-500 text-xs leading-relaxed mb-3">{service.desc}</p>
            <p className="text-nexus-blue text-xs font-semibold hover:underline flex items-center justify-center gap-1">
              Learn more <FiArrowRight className="text-[10px]" />
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
