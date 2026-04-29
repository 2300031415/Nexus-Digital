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
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex flex-col items-center gap-2">
              <div className="h-20 w-full flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                <Image src="/Catalog/Hub spot.png" alt="HubSpot" width={140} height={60} className="h-10 w-auto object-contain" />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Partner</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-20 w-full flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                <Image src="/Catalog/salesforce.png" alt="Salesforce" width={140} height={60} className="h-12 w-auto object-contain" />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Integration</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-20 w-full flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                <Image src="/Catalog/zoho.png" alt="Zoho" width={140} height={60} className="h-10 w-auto object-contain" />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-20 w-full flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2">
                  <FiGitMerge className="text-nexus-blue w-6 h-6" />
                  <span className="text-sm font-bold text-nexus-navy">Custom Systems</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Bespoke</span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-4">WHAT WE AUTOMATE INSIDE YOUR CRM</p>
          <div className="space-y-3">
            {automations.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <a.icon className="w-5 h-5 text-nexus-blue" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-nexus-navy">{a.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
