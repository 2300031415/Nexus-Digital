"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiCalendar, FiCheckCircle, FiMail, FiPhone, FiSettings, FiUserCheck } from "react-icons/fi";

const areas = [
  { icon: FiPhone, title: "Customer Enquiries & Call Handling" },
  { icon: FiUserCheck, title: "Lead Qualification & Data Capture" },
  { icon: FiCalendar, title: "Appointment Booking & Scheduling" },
  { icon: FiMail, title: "Follow-ups & Email Workflows" },
  { icon: FiBarChart2, title: "Reporting & Data Processing" },
  { icon: FiSettings, title: "Internal Operations & Workflows" },
];

export default function AISolution() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">THE SOLUTION</p>
          <h2 className="text-nexus-dark text-[1.9rem] font-extrabold leading-tight mb-4">
            We Build Intelligent
            <br />
            Systems That Do
            <br />
            the <span className="text-nexus-blue">Work for You</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
            At Nexus Digital Group, we design end-to-end automation systems that replace repetitive tasks, improve accuracy, operate 24/7,
            and scale with your business.
          </p>
          <div className="bg-white border border-blue-100 rounded-xl p-4 flex items-center gap-3 max-w-xs">
            <FiCheckCircle className="text-nexus-green text-xl flex-shrink-0" />
            <p className="text-nexus-dark font-semibold text-sm leading-snug">Your business runs smarter, faster, and more efficiently.</p>
          </div>
        </div>
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">AUTOMATION ACROSS YOUR ENTIRE BUSINESS</p>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {areas.map((area) => (
              <motion.div key={area.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center text-nexus-blue text-xl"><area.icon /></div>
                <p className="text-nexus-dark font-bold text-xs leading-snug mb-1">{area.title}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center mt-8 text-nexus-dark font-bold text-lg">
            If it&apos;s repetitive- <span className="text-nexus-blue">we automate it.</span>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
