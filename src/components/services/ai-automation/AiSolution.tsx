"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiCheckCircle, FiGrid, FiMail, FiPhone, FiPieChart, FiUserCheck } from "react-icons/fi";

const areas = [
  { icon: FiPhone, title: "Customer Enquiries & Call Handling" },
  { icon: FiUserCheck, title: "Lead Qualification & Data Capture" },
  { icon: FiCalendar, title: "Appointment Booking & Scheduling" },
  { icon: FiMail, title: "Follow-ups & Email Workflows" },
  { icon: FiPieChart, title: "Reporting & Data Processing" },
  { icon: FiGrid, title: "Internal Operations & Workflows" },
];

export function AiSolution() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-3">THE SOLUTION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-5">
            We Build Intelligent Systems That Do the <span className="text-nexus-blue">Work for You</span>
          </h2>
          <p className="text-[15px] text-gray-600 leading-[1.6] mb-5">
            At Nexus Digital Group, we design end-to-end automation systems that replace repetitive tasks, improve accuracy, operate 24/7, and scale with your business.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-center gap-3">
            <FiCheckCircle className="w-5 h-5 text-[#3B82F6]" />
            Your business runs smarter, faster, and more efficiently.
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.1em] uppercase text-nexus-blue mb-4 text-center">AUTOMATION ACROSS YOUR ENTIRE BUSINESS</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {areas.map((a) => (
              <div key={a.title} className="bg-[#F8FAFC] rounded-xl p-5 text-center border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <a.icon className="w-[22px] h-[22px] text-[#3B82F6]" />
                </div>
                <p className="text-sm font-semibold text-[#0F172A]">{a.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-2xl font-semibold text-[#0F172A] mt-10">
        If it&apos;s repetitive- <span className="text-[#3B82F6] font-bold">we automate it.</span>
      </p>
    </motion.section>
  );
}
