"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiArrowRight, FiGrid, FiHome, FiMonitor, FiPhone, FiRefreshCw, FiStar, FiTrendingUp, FiUser, FiZap } from "react-icons/fi";

export default function WebHero() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">WEB DESIGN &amp; DEVELOPMENT</p>
          <h1 className="text-[2.75rem] leading-[1.15] font-extrabold mb-5">
            <span className="text-nexus-dark">Websites That</span>
            <br />
            <span className="text-nexus-dark">Convert Visitors Into</span>
            <br />
            <span className="text-nexus-blue">Paying Customers</span>
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-[420px] mb-6">
            We design and build high-performance websites that look great, load fast, and are built to generate leads and drive revenue.
            <br />
            No templates. No shortcuts. Just results-driven web design.
          </p>
          <div className="flex gap-3 mt-2">
            <button 
              onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
              className="bg-nexus-green text-white font-semibold text-sm px-5 py-3 rounded-lg flex items-center gap-2 hover:brightness-110 transition"
            >
              <FiPhone /> Book Free Website Strategy Call
            </button>
            <button className="border border-gray-300 text-nexus-dark font-medium text-sm px-5 py-3 rounded-lg flex items-center gap-2 hover:border-nexus-blue hover:text-nexus-blue transition">
              Get a Free Website Audit <FiArrowRight />
            </button>
          </div>
          <div className="flex flex-wrap gap-8 mt-7">
            <p className="flex items-center gap-2 text-gray-500 text-xs font-medium"><FiMonitor className="text-nexus-blue" />Conversion-Focused Design</p>
            <p className="flex items-center gap-2 text-gray-500 text-xs font-medium"><FiZap className="text-nexus-blue" />Fast &amp; SEO Optimised</p>
            <p className="flex items-center gap-2 text-gray-500 text-xs font-medium"><FiTrendingUp className="text-nexus-blue" />Built for Growth</p>
          </div>
        </div>

        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="relative w-full h-[460px]">
          <div className="absolute top-0 left-0 right-8 h-80 bg-nexus-navy rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-nexus-dark px-4 py-3 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-nexus-green" />
              <div className="flex-1 bg-white/10 rounded-md px-3 py-1 text-gray-400 text-[10px]">nexusdigitalgroup.com.au</div>
              <FiRefreshCw className="text-gray-500 text-xs" />
            </div>
            <div className="p-5 text-white">
              <div className="flex justify-between items-center mb-4">
                <div className="w-7 h-7 bg-nexus-blue rounded-lg flex items-center justify-center text-white font-extrabold text-xs">N</div>
                <div className="flex gap-4 text-[9px] text-gray-400">
                  <span>Home</span><span>Services</span><span>About</span><span>Contact</span>
                  <span className="bg-nexus-green text-white px-2 py-1 rounded-md text-[8px]">Get Started</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 mb-3">
                <p className="text-white font-extrabold text-sm mb-1">Grow Your Business Online</p>
                <p className="text-gray-400 text-[9px] mb-3">High-performance websites that drive real results.</p>
                <div className="flex gap-2">
                  <span className="bg-nexus-green text-white text-[8px] px-3 py-1 rounded-md">Book a Call</span>
                  <span className="border border-gray-600 text-gray-400 text-[8px] px-3 py-1 rounded-md">Learn More</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  ["98%", "Performance Score"],
                  ["2.1s", "Load Time"],
                  ["+340%", "More Leads"],
                ].map(([v, l]) => (
                  <div key={l} className="bg-white/5 rounded-lg p-2 text-center">
                    <p className="text-nexus-blue font-extrabold text-base">{v}</p>
                    <p className="text-gray-400 text-[8px]">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="absolute bottom-0 right-0 w-36 h-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-nexus-dark px-3 py-1.5 flex justify-between text-white text-[8px]"><span>9:41</span><span>●●●</span></div>
            <div className="p-3">
              <div className="flex items-center gap-1.5 mb-2"><div className="w-5 h-5 bg-nexus-blue rounded-md flex items-center justify-center text-white font-bold text-[8px]">N</div><span className="text-nexus-dark font-bold text-[9px]">Nexus</span></div>
              <div className="bg-nexus-light-bg rounded-lg p-2 mb-2">
                <p className="text-nexus-dark font-bold text-[8px] leading-tight">Websites That</p>
                <p className="text-nexus-blue font-extrabold text-[10px]">Convert.</p>
                <span className="bg-nexus-green text-white text-[7px] px-2 py-1 rounded-md mt-1 inline-block">Get Started →</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-nexus-light-bg rounded-md px-2 py-1 flex items-center gap-1"><FiMonitor className="text-nexus-blue text-[9px]" /><span className="text-nexus-dark text-[8px] font-medium">Web Design</span></div>
                <div className="bg-nexus-light-bg rounded-md px-2 py-1 flex items-center gap-1"><FiZap className="text-nexus-blue text-[9px]" /><span className="text-nexus-dark text-[8px] font-medium">SEO</span></div>
                <div className="bg-nexus-light-bg rounded-md px-2 py-1 flex items-center gap-1"><FiTrendingUp className="text-nexus-blue text-[9px]" /><span className="text-nexus-dark text-[8px] font-medium">Lead Gen</span></div>
              </div>
              <div className="flex justify-around mt-2 border-t border-gray-100 pt-1">
                <FiHome className="text-gray-400 text-[10px]" />
                <FiGrid className="text-gray-400 text-[10px]" />
                <FiUser className="text-gray-400 text-[10px]" />
                <FiPhone className="text-gray-400 text-[10px]" />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }} className="absolute top-4 right-0 bg-white rounded-2xl shadow-lg border border-gray-100 p-3 flex flex-col items-center text-center w-28">
            <FiStar className="text-yellow-400 text-lg mb-1" />
            <p className="text-nexus-dark font-extrabold text-lg leading-none">5.0</p>
            <p className="text-gray-500 text-[9px]">Google Rating</p>
            <div className="flex gap-0.5 mt-1">{Array.from({ length: 5 }).map((_, i) => <FaStar key={i} className="text-yellow-400 text-[8px]" />)}</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
