"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiCalendar, FiCpu, FiLayout, FiMail, FiRadio } from "react-icons/fi";

const components = [
  [FiRadio, "Traffic Generation", "Drive targeted, high-intent traffic from the right channels."],
  [FiLayout, "Conversion-Optimised Pages", "Designed to capture attention and convert visitors into leads."],
  [FiCpu, "AI Lead Qualification", "Automatically qualify and score leads to focus on the best opportunities."],
  [FiCalendar, "Booking Systems", "Seamlessly turn leads into scheduled appointments and consultations."],
  [FiMail, "Follow-Up Automation", "Nurture and follow up with leads until they are ready to buy."],
  [FiBarChart2, "Tracking & Optimisation", "Track performance, measure results, and continuously improve."],
] as const;

export default function LeadGenCoreComponents() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[11px] uppercase tracking-[0.15em] text-nexus-blue font-semibold mb-4">CORE COMPONENTS OF A HIGH-PERFORMING LEAD SYSTEM</p>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {components.map(([Icon, title, desc]) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-nexus-blue/10 flex items-center justify-center mb-4">
                <Icon className="text-nexus-blue w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-semibold text-nexus-navy mb-2">{title}</h3>
              <p className="text-[14px] text-[#475569] leading-[1.6]">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
