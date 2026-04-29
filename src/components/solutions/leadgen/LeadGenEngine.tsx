"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiCpu, FiDollarSign, FiLayout, FiMail, FiRadio } from "react-icons/fi";

const steps = [
  [FiRadio, "Traffic Generation (Ads, SEO, Social)"],
  [FiLayout, "High-Converting Landing Pages"],
  [FiCpu, "AI Lead Qualification"],
  [FiCalendar, "Appointment Booking"],
  [FiMail, "Automated Follow-Ups"],
  [FiDollarSign, "Sales Conversion"],
] as const;

export default function LeadGenEngine() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#F8FAFC] py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-nexus-blue font-semibold mb-4">YOUR LEAD GENERATION ENGINE</p>
          <h2 className="text-3xl font-bold text-nexus-dark mb-4">A Complete System That Turns Strangers Into Paying Customers</h2>
          <p className="text-[15px] text-[#475569] leading-[1.6]">
            Our proven system attracts the right people, qualifies them, and converts them into loyal customers - automatically.
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[980px] flex items-center gap-3">
            {steps.map(([Icon, label], idx) => (
              <div key={label} className="flex items-center gap-3">
                <div className="text-center w-[150px]">
                  <div className="w-12 h-12 rounded-full bg-nexus-blue flex items-center justify-center mx-auto mb-2">
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <p className="text-[12px] font-semibold text-nexus-navy">{label}</p>
                </div>
                {idx < steps.length - 1 && <span className="text-nexus-blue text-xl font-bold border-b-2 border-dashed border-nexus-blue pb-1">→</span>}
              </div>
            ))}
          </div>
          <p className="text-center text-[14px] text-[#475569] mt-6">
            Every step is optimised for <span className="text-nexus-blue italic font-semibold">maximum performance and results.</span>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
