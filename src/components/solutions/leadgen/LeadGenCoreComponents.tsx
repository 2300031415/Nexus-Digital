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
          className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6"
        >
          {components.map(([Icon, title, desc]) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 transition-all hover:shadow-lg hover:-translate-y-1 text-center flex flex-col items-center justify-start h-full"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-nexus-blue/20 flex items-center justify-center mb-4 shrink-0 shadow-sm">
                <Icon className="text-nexus-blue w-6 h-6" />
              </div>
              <h3 className="text-[13px] font-bold text-nexus-navy mb-2 leading-tight">{title}</h3>
              <p className="text-[12px] text-[#475569] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
