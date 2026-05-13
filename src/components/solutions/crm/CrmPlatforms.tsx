"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCalendar, FiClipboard, FiGitMerge, FiMail, FiUsers } from "react-icons/fi";

const automations = [
  { icon: FiUsers, title: "Lead Capture & Assignment", desc: "Automatically route leads to the right rep or pipeline stage." },
  { icon: FiMail, title: "Follow-Up Sequences", desc: "Trigger email and SMS sequences based on lead behaviour." },
  { icon: FiCalendar, title: "Appointment Scheduling", desc: "Auto-book calls and reminders directly from CRM actions." },
  { icon: FiGitMerge, title: "Sales Pipeline Automation", desc: "Move deals by logic, signals, and team activities." },
  { icon: FiClipboard, title: "Reporting & Insights", desc: "Generate reports and alerts for real-time decision making." },
];

export function CrmPlatforms() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-nexus-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-3">PLATFORMS WE WORK WITH</p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            We work with leading CRM platforms or build custom solutions to fit your business needs.
          </p>
          <div className="grid grid-cols-4 gap-3 mt-6">
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-full flex items-center justify-center p-2 bg-white rounded-xl shadow-sm border border-gray-100">
                <Image src="/Catalog/Hub spot.png" alt="HubSpot" width={100} height={40} className="h-8 w-auto object-contain" />
              </div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider text-center">Partner</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-full flex items-center justify-center p-2 bg-white rounded-xl shadow-sm border border-gray-100">
                <Image src="/Catalog/salesforce.png" alt="Salesforce" width={100} height={40} className="h-8 w-auto object-contain" />
              </div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider text-center">Integration</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-full flex items-center justify-center p-2 bg-white rounded-xl shadow-sm border border-gray-100">
                <Image src="/Catalog/zoho.png" alt="Zoho" width={100} height={40} className="h-7 w-auto object-contain" />
              </div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider text-center">Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-full flex items-center justify-center p-2 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-center flex-col gap-1">
                  <FiGitMerge className="text-nexus-blue w-5 h-5" />
                  <span className="text-[10px] font-bold text-nexus-navy text-center leading-tight">Custom<br/>Systems</span>
                </div>
              </div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider text-center">Bespoke</span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-4">WHAT WE AUTOMATE INSIDE YOUR CRM</p>
          <div className="flex items-start justify-between gap-3 overflow-x-auto pb-2 mt-6">
            {automations.map((a) => (
              <div key={a.title} className="flex-1 min-w-[110px] text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-nexus-blue/20 flex items-center justify-center mb-3 bg-white shadow-sm">
                  <a.icon className="w-5 h-5 text-nexus-blue" />
                </div>
                <h3 className="text-[11px] font-bold text-nexus-navy mb-1 leading-tight">{a.title}</h3>
                <p className="text-[9px] text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
