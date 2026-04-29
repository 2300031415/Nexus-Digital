"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight, FiCheckCircle, FiCpu, FiTrendingUp, FiUsers } from "react-icons/fi";

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  delta: string;
};

const stats: Stat[] = [
  { label: "New Leads", value: 248, delta: "+28%" },
  { label: "Open Deals", value: 135, delta: "+19%" },
  { label: "Won Deals", value: 72, delta: "+38%" },
  { label: "Revenue", value: 285450, prefix: "$", delta: "+32%" },
];

const sectionAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function CrmHero() {
  const [displayStats, setDisplayStats] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const frames = 40;
    let current = 0;
    const timer = window.setInterval(() => {
      current += 1;
      setDisplayStats(stats.map((s) => Math.round((s.value * current) / frames)));
      if (current >= frames) {
        window.clearInterval(timer);
      }
    }, 25);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.section {...sectionAnim} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[52%_48%] gap-12 items-center">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">CRM AUTOMATION & INTEGRATION</p>
          <h1 className="text-[2.6rem] leading-tight font-extrabold text-nexus-dark mb-4">
            CRM Automation &amp;
            <br />
            Integration That
            <br />
            <span className="text-nexus-blue">Drives Revenue</span>
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-[440px] mb-6">
            We design and implement intelligent CRM systems that automate workflows, streamline operations, and turn leads into customers -
            automatically.
            <br />
            Your CRM should work for you, not the other way around.
          </p>
          <div className="flex gap-3 mt-2 flex-wrap">
            <motion.button 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }} 
              onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
              className="bg-nexus-green text-white font-semibold text-sm px-5 py-3 rounded-lg flex items-center gap-2 hover:brightness-110 transition"
            >
              Book Free CRM Strategy Call <FiArrowRight />
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="border border-gray-300 text-nexus-dark font-medium text-sm px-5 py-3 rounded-lg flex items-center gap-2 hover:border-nexus-blue hover:text-nexus-blue transition">
              Get a CRM Audit <FiArrowRight />
            </motion.button>
          </div>
          <div className="flex gap-6 mt-6 flex-wrap">
            <span className="flex items-center gap-2 text-gray-500 text-xs font-medium"><FiUsers className="text-nexus-blue" /> CRM Experts</span>
            <span className="flex items-center gap-2 text-gray-500 text-xs font-medium"><FiCpu className="text-nexus-blue" /> Automation-Driven Systems</span>
            <span className="flex items-center gap-2 text-gray-500 text-xs font-medium"><FiTrendingUp className="text-nexus-blue" /> Built for Growth</span>
          </div>
        </div>

        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="relative w-full h-[420px]">
          <div className="absolute inset-0 right-8 bg-nexus-navy rounded-2xl shadow-2xl p-5 text-white">
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold text-sm">Dashboard Overview</p>
              <span className="text-gray-400 text-xs">✕</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {stats.map((s, i) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-2">
                  <p className="text-gray-400 text-[10px]">{s.label}</p>
                  <p className="text-white font-bold text-sm">
                    {s.prefix ?? ""}
                    {displayStats[i].toLocaleString()}
                    {s.suffix ?? ""}
                  </p>
                  <p className="text-nexus-green text-[10px]">{s.delta} vs last month</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-gray-400 text-[10px] mb-2">Pipeline Overview</p>
                {[
                  ["New Lead", "w-full", "248", "bg-nexus-blue"],
                  ["Contacted", "w-4/5", "158", "bg-blue-400"],
                  ["Qualified", "w-3/5", "96", "bg-blue-300"],
                  ["Proposal Sent", "w-2/5", "65", "bg-yellow-400"],
                  ["Won", "w-1/3", "72", "bg-nexus-green"],
                ].map(([label, w, n, c]) => (
                  <div key={String(label)} className="flex items-center gap-2 mb-1">
                    <span className="text-gray-400 text-[9px] w-16">{label}</span>
                    <div className={`h-2 rounded-full ${w} ${c}`} />
                    <span className="text-gray-300 text-[9px]">{n}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-gray-400 text-[10px] mb-2">Activity Feed</p>
                {[
                  ["New lead from Website", "2 mins ago"],
                  ["Email opened", "13 mins ago"],
                  ["Appointment booked", "45 mins ago"],
                  ["Deal won", "2 hours ago"],
                ].map(([title, time]) => (
                  <div key={String(title)} className="flex items-start gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-nexus-blue mt-1" />
                    <div>
                      <p className="text-white text-[9px] font-medium">{title}</p>
                      <p className="text-gray-500 text-[8px]">{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 w-44 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
            <p className="font-bold text-nexus-dark text-sm mb-3">Automation</p>
            <div className="relative">
              <div className="absolute left-[5px] top-3 bottom-3 w-px bg-gray-200" />
              {[
                ["New Lead", "bg-blue-500 text-white"],
                ["Send Welcome Email", "bg-blue-400 text-white"],
                ["Assign to Team", "bg-blue-300 text-white"],
                ["Follow-Up SMS", "bg-yellow-400 text-nexus-dark"],
                ["Book Appointment", "bg-nexus-green text-white"],
                ["✓ Deal Created", "bg-nexus-dark text-white"],
              ].map(([s, cls]) => (
                <div key={String(s)} className="relative flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-nexus-blue flex-shrink-0" />
                  <div className={`rounded-lg px-2 py-1 text-[10px] font-semibold ${cls}`}>{s}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -top-5 -left-4 bg-white border border-nexus-blue rounded-full shadow-md px-4 py-2 text-xs font-semibold text-nexus-blue inline-flex items-center gap-2">
            <FiCheckCircle className="text-nexus-blue" />
            24/7 AI Systems Working for You
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
