"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { useEffect, useState } from "react";
import { FiCalendar, FiCpu, FiMail, FiSettings, FiTrendingUp, FiUserCheck } from "react-icons/fi";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  delta: string;
};

const stats: Stat[] = [
  { label: "Tasks Automated", value: 1248, delta: "+28% vs last month" },
  { label: "Hours Saved", value: 520, delta: "+34% vs last month" },
  { label: "Cost Saved", value: 18650, prefix: "$", delta: "+26% vs last month" },
  { label: "Leads Captured", value: 2139, delta: "+21% vs last month" },
];

type Legend = { label: string; dotClass: string };
const sourceLegend: Legend[] = [
  { label: "Website", dotClass: "bg-[#3B82F6]" },
  { label: "AI Chat", dotClass: "bg-[#06B6D4]" },
  { label: "Phone", dotClass: "bg-[#8B5CF6]" },
  { label: "Social", dotClass: "bg-[#F59E0B]" },
  { label: "Other", dotClass: "bg-[#6B7280]" },
];

type Recent = { icon: ComponentType<{ className?: string }>; name: string; status: "Active" | "Phone" };
const recentAutomations: Recent[] = [
  { icon: FiCpu, name: "AI Receptionist", status: "Active" },
  { icon: FiUserCheck, name: "Lead Qualification", status: "Active" },
  { icon: FiCalendar, name: "Appointment Booking", status: "Phone" },
  { icon: FiMail, name: "Email Follow-up", status: "Active" },
];

export function AiHero() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    let frame = 0;
    const total = 36;
    const timer = window.setInterval(() => {
      frame += 1;
      setCounts(stats.map((s) => Math.round((s.value * frame) / total)));
      if (frame >= total) window.clearInterval(timer);
    }, 25);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.1em] uppercase text-[#3B82F6] mb-3">AI & AUTOMATION</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] leading-[1.1]">
            AI &amp; Automation That Works Like a
            <br />
            <span className="text-[#3B82F6]">Digital Workforce</span>
          </h1>
          <p className="text-[15px] leading-[1.6] text-gray-600 mt-4 max-w-[620px]">
            We design and deploy AI-powered systems that automate operations, reduce costs, and scale your business - without increasing headcount.
          </p>
          <p className="text-[15px] leading-[1.6] text-gray-600 mt-2">Turn repetitive work into intelligent automation.</p>
          <div className="flex flex-row flex-wrap gap-4 mt-8">
            <motion.button 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }} 
              onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
              className="h-12 px-6 rounded-lg bg-[#3B82F6] text-white font-semibold text-sm hover:bg-[#2563EB]"
            >
              Book Free AI Strategy Call →
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="h-12 px-6 rounded-lg border-2 border-[#3B82F6] text-[#3B82F6] bg-white font-semibold text-sm hover:bg-blue-50">
              Get an AI Audit →
            </motion.button>
          </div>
          <div className="flex flex-wrap gap-6 mt-6">
            <span className="inline-flex items-center gap-2 text-sm text-gray-600 font-medium"><FiCpu className="w-4 h-4 text-[#3B82F6]" /> AI-Powered Systems</span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-600 font-medium"><FiSettings className="w-4 h-4 text-[#3B82F6]" /> Automation Experts</span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-600 font-medium"><FiTrendingUp className="w-4 h-4 text-[#3B82F6]" /> Built for ROI</span>
          </div>
        </div>

        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="relative w-full">
          <div className="bg-[#1E293B] rounded-2xl p-6 shadow-2xl relative overflow-hidden w-full">
            <div className="flex items-center justify-between">
              <p className="text-white font-semibold text-base">Automation Overview</p>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {stats.map((s, i) => (
                <div key={s.label}>
                  <p className="text-[#94A3B8] text-[11px] mb-1">{s.label}</p>
                  <p className="text-white font-bold text-2xl">
                    {s.prefix ?? ""}
                    {counts[i].toLocaleString()}
                    {s.suffix ?? ""}
                  </p>
                  <p className="text-[#4ADE80] text-xs">↑ {s.delta.replace("+", "").replace(" vs last month", "")} vs last month</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-3">
              <div className="bg-[#0F172A] rounded-xl p-4">
                <p className="text-[#94A3B8] text-xs mb-2">Automation Performance</p>
                <svg viewBox="0 0 200 80" className="w-full h-20">
                  <defs>
                    <linearGradient id="perfFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="16" x2="200" y2="16" stroke="#1E293B" />
                  <line x1="0" y1="32" x2="200" y2="32" stroke="#1E293B" />
                  <line x1="0" y1="48" x2="200" y2="48" stroke="#1E293B" />
                  <line x1="0" y1="64" x2="200" y2="64" stroke="#1E293B" />
                  <path d="M10 70 L30 60 L50 65 L70 40 L90 50 L110 25 L140 15 L140 80 L10 80 Z" fill="url(#perfFill)" />
                  <polyline points="10,70 30,60 50,65 70,40 90,50 110,25 140,15" stroke="#3B82F6" strokeWidth="2" fill="none" />
                </svg>
                <div className="flex justify-between text-[#64748B] text-[9px] mt-1">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((m) => <span key={m}>{m}</span>)}
                </div>
              </div>
              <div className="bg-[#0F172A] rounded-xl p-4">
                <p className="text-[#94A3B8] text-xs mb-2">Leads by Source</p>
                <div className="flex gap-3">
                  <svg viewBox="0 0 80 80" className="w-20 h-20">
                    <circle cx="40" cy="40" r="28" fill="none" stroke="#3B82F6" strokeWidth="12" strokeDasharray="62 176" transform="rotate(-90 40 40)" />
                    <circle cx="40" cy="40" r="28" fill="none" stroke="#06B6D4" strokeWidth="12" strokeDasharray="44 176" strokeDashoffset="-62" transform="rotate(-90 40 40)" />
                    <circle cx="40" cy="40" r="28" fill="none" stroke="#8B5CF6" strokeWidth="12" strokeDasharray="35 176" strokeDashoffset="-106" transform="rotate(-90 40 40)" />
                    <circle cx="40" cy="40" r="28" fill="none" stroke="#F59E0B" strokeWidth="12" strokeDasharray="21 176" strokeDashoffset="-141" transform="rotate(-90 40 40)" />
                    <circle cx="40" cy="40" r="28" fill="none" stroke="#6B7280" strokeWidth="12" strokeDasharray="14 176" strokeDashoffset="-162" transform="rotate(-90 40 40)" />
                  </svg>
                  <div className="space-y-1 text-[10px] text-[#94A3B8]">
                    {sourceLegend.map((source) => (
                      <p key={source.label} className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${source.dotClass}`} />
                        {source.label}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#0F172A] rounded-xl p-4 mt-3">
              <p className="text-[#94A3B8] text-xs mb-2">Recent Automations</p>
              <div className="space-y-1.5">
                {recentAutomations.map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-1.5">
                    <p className="flex items-center gap-2 text-white text-sm">
                      <item.icon className="w-3.5 h-3.5 text-[#94A3B8]" />
                      {item.name}
                    </p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${item.status === "Phone" ? "bg-[#DBEAFE] text-[#3B82F6]" : "bg-[#DCFCE7] text-[#16A34A]"}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-white rounded-2xl shadow-xl p-4 w-36 text-center">
            <FiCpu className="w-7 h-7 text-[#3B82F6] mx-auto mb-1" />
            <p className="text-[#0F172A] font-bold text-xl">24/7</p>
            <p className="text-[#3B82F6] text-sm font-semibold">AI Systems</p>
            <p className="text-[#6B7280] text-xs">Working for You</p>
          </div>
          <div className="absolute -bottom-2 right-2">
            <div className="w-20 h-20 bg-white rounded-full border-4 border-gray-200 shadow-lg relative flex items-center justify-center">
              <span className="absolute top-6 left-5 w-2.5 h-2.5 bg-[#3B82F6] rounded-full" />
              <span className="absolute top-6 right-5 w-2.5 h-2.5 bg-[#3B82F6] rounded-full" />
              <span className="text-[#3B82F6] font-bold text-xl">N</span>
            </div>
            <div className="w-16 h-12 bg-gray-200 rounded-xl mx-auto -mt-2" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
