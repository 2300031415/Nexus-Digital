"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FiCpu, FiLayout, FiMail, FiSearch } from "react-icons/fi";

const cards = [
  {
    title: "Google Ads (PPC)",
    desc: "High-intent traffic that converts into leads and sales.",
    custom: true,
  },
  { icon: FiSearch, title: "SEO (Search Engine Optimisation)", desc: "Rank higher on Google and generate organic traffic." },
  { icon: FaInstagram, title: "Social Media Advertising", desc: "Facebook, Instagram, and LinkedIn campaigns that drive engagement and conversions." },
  { icon: FiLayout, title: "Funnel & Landing Page Design", desc: "Optimised pages designed to maximise conversion rates." },
  { icon: FiMail, title: "Email Marketing & Automation", desc: "Nurture leads and increase customer lifetime value." },
  { icon: FiCpu, title: "AI Marketing Systems", desc: "AI-driven lead qualification, chatbots, and automation." },
];

export default function DMServices() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="text-center mb-12">
        <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-2">OUR DIGITAL MARKETING SERVICES</p>
      </div>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cards.map((card) => (
          <motion.div key={card.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="w-14 h-14 mx-auto mb-3 bg-blue-50 rounded-2xl flex items-center justify-center text-nexus-blue text-2xl">
              {card.custom ? (
                <span className="text-[22px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-nexus-blue">A</span>
              ) : card.icon ? (
                <card.icon />
              ) : null}
            </div>
            <p className="text-nexus-dark font-bold text-sm mb-2">{card.title}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
