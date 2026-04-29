"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  FiBarChart,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiClipboard,
  FiCpu,
  FiDollarSign,
  FiHeadphones,
  FiHeart,
  FiHome,
  FiInfo,
  FiMail,
  FiPhone,
  FiSend,
  FiSettings,
  FiShield,
  FiTrendingDown,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const workforceCards = [
  { icon: FiPhone, title: "AI Receptionist", desc: "Answers calls, routes enquiries, and captures every opportunity." },
  { icon: FiUsers, title: "Lead Qualification Agent", desc: "Collects key information and filters high-quality prospects." },
  { icon: FiCalendar, title: "Appointment Booking Agent", desc: "Books consultations, site visits, and meetings instantly." },
  { icon: FiMail, title: "Follow-Up Agent", desc: "Nurtures leads, sends reminders, and prevents drop-offs." },
  { icon: FiCpu, title: "CRM & Integration Agent", desc: "Syncs and updates your CRM and tools automatically." },
];

export default function AIWorkforcePage() {
  return (
    <main className="bg-white text-[#0F172A]">
      <Navbar />

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-nexus-blue block mb-4">
              AI AUTOMATION THAT WORKS WHILE YOU SLEEP
            </span>
            <h1 className="text-[42px] lg:text-[48px] font-extrabold leading-[1.2] mb-6">
              Build Your <span className="text-nexus-blue">AI Workforce</span> &amp; Scale Your Business 24/7
            </h1>
            <p className="text-[15px] leading-[1.6] text-[#475569] mb-8 max-w-2xl">
              Deploy intelligent AI agents that capture leads, answer enquiries, qualify prospects, and book appointments automatically.
              AI workers that never sleep, never miss opportunities, and never drop leads.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <button 
                onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
                className="bg-nexus-green hover:bg-green-700 text-white px-6 py-3 rounded-lg text-[14px] font-semibold"
              >
                Book Free AI Strategy Call →
              </button>
              <button className="border-2 border-[#0F172A] px-6 py-3 rounded-lg text-[14px] font-semibold">
                See AI Workforce in Action ▶
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#E2E8F0] pt-6">
              <div className="flex items-center gap-2 text-[14px] text-[#475569]"><FiShield className="text-[#0F172A]" /> AI-Powered Automation</div>
              <div className="flex items-center gap-2 text-[14px] text-[#475569]"><FiUsers className="text-[#0F172A]" /> Built for Australian Businesses</div>
              <div className="flex items-center gap-2 text-[14px] text-[#475569]"><FiTrendingUp className="text-[#0F172A]" /> Designed for ROI</div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[460px] hidden md:block"
          >
            <div className="absolute inset-0 m-auto w-[190px] h-[190px] rounded-full bg-[#E0F2FE] border-2 border-nexus-blue flex items-center justify-center shadow-lg">
              <div className="w-20 h-20 rounded-full border-4 border-nexus-blue flex items-center justify-center">
                <FiCpu className="w-10 h-10 text-nexus-blue" />
              </div>
            </div>
            {([
              ["AI RECEPTIONIST", "Answers calls, captures every lead", "top-4 right-8", FiPhone],
              ["LEAD QUALIFICATION", "Qualifies high-quality prospects", "top-10 left-0", FiUsers],
              ["CRM & INTEGRATIONS", "Syncs with your business tools", "top-1/2 -translate-y-1/2 -left-8", FiBriefcase],
              ["APPOINTMENT BOOKING", "Books meetings automatically", "bottom-6 left-0", FiCalendar],
              ["FOLLOW-UP AGENT", "Nurtures leads automatically", "bottom-10 right-0", FiMail],
            ] as const).map(([title, desc, pos, Icon], idx) => (
              <motion.div
                key={String(title)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`absolute ${pos} w-[220px] bg-white border border-[#E2E8F0] rounded-lg p-3 shadow-sm`}
              >
                <Icon className="text-nexus-blue mb-1" />
                <div className="text-[12px] font-bold">{title}</div>
                <div className="text-[11px] text-[#475569]">{desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F0F4F8] py-20 px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue block mb-3">THE REAL PROBLEM</span>
          <h2 className="text-[32px] font-bold mb-3">You Don&apos;t Have a Staff Problem — You Have a Systems Problem</h2>
          <p className="text-[15px] text-[#475569] mb-12">Most businesses lose revenue every single day because:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {([
              [FiPhone, "Calls go unanswered"],
              [FiUsers, "Leads aren't followed up fast enough"],
              [FiClock, "Admin tasks consume valuable time"],
              [FiUsers, "Teams are overwhelmed and reactive"],
              [FiTrendingDown, "When your systems fail, your growth stalls."],
            ] as const).map(([Icon, title], idx) => (
              <div key={String(title)} className="bg-white p-6 rounded-lg border border-[#E2E8F0] hover:shadow-lg">
                <Icon className={`w-10 h-10 mx-auto mb-3 ${idx === 4 ? "text-nexus-red" : "text-nexus-blue"}`} />
                <h3 className="text-[14px] font-bold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue block mb-4">WHAT IS AN AI WORKFORCE?</span>
            <h2 className="text-[32px] font-bold mb-6">Your Digital Team That Works 24/7</h2>
            <p className="text-[15px] text-[#475569] mb-6 leading-[1.6]">
              An AI workforce is a team of intelligent digital agents that perform tasks, make decisions, and execute workflows automatically.
            </p>
            <div className="space-y-3 mb-8">
              {["Operate independently", "Work across multiple systems", "Execute multi-step processes", "Continuously learn and improve"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[14px]">
                  <FiCheckCircle className="text-nexus-blue" /> {item}
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border-l-4 border-nexus-blue p-4 rounded-lg text-[13px] text-[#475569] italic flex gap-2">
              <FiInfo className="text-nexus-blue mt-0.5" />
              Think of it as hiring a digital team that works 24/7 without breaks, errors, or delays.
            </div>
          </div>

          <div className="overflow-x-auto">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue block mb-4">HOW YOUR AI WORKFORCE WORKS</span>
            <div className="flex items-stretch gap-3 min-w-[780px]">
              {([
                [FiPhone, "Incoming Call / Website Lead"],
                [FiHeadphones, "AI Receptionist Responds"],
                [FiUsers, "AI Qualifies the Lead"],
                [FiCalendar, "AI Books Appointment"],
                [FiMail, "AI Follows Up Automatically"],
                [FiDollarSign, "You Close More Deals"],
              ] as const).map(([Icon, title], idx) => (
                <div key={String(title)} className={`w-[170px] p-3 rounded-lg border ${idx === 5 ? "bg-green-50 border-nexus-green" : "bg-white border-[#E2E8F0]"} text-center`}>
                  <Icon className={`w-7 h-7 mx-auto mb-2 ${idx === 5 ? "text-nexus-green" : "text-nexus-blue"}`} />
                  <div className="text-[11px] font-semibold">{title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] font-bold mb-12">Your AI Workforce Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {workforceCards.map((card) => (
              <motion.div key={card.title} whileHover={{ scale: 1.03, y: -5 }} className="bg-white border border-[#E2E8F0] rounded-lg p-6 shadow-sm relative overflow-hidden">
                <card.icon className="w-10 h-10 text-nexus-blue mx-auto mb-3" />
                <h3 className="text-[16px] font-bold mb-2">{card.title}</h3>
                <p className="text-[14px] text-[#475569]">{card.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-nexus-cyan" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-nexus-light-bg py-20 px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] font-bold mb-10">Built for High-Volume, High-Value Businesses</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {([
              [FiSettings, "Trades & Construction", "text-nexus-blue bg-blue-100"],
              [FiHome, "Real Estate", "text-nexus-blue bg-blue-100"],
              [FiHeart, "Healthcare Clinics", "text-nexus-red bg-red-100"],
              [FiBriefcase, "Professional Services", "text-nexus-blue bg-blue-100"],
              [FiUsers, "Sales Teams", "text-nexus-blue bg-blue-100"],
            ] as const).map(([Icon, label, classes]) => (
              <div key={String(label)} className="text-center">
                <div className={`w-14 h-14 rounded-full ${classes} flex items-center justify-center mx-auto mb-2`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className="text-[14px] font-medium">{label}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[14px] font-semibold">Anywhere speed = revenue, AI wins.</p>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue block mb-4">WHY BUSINESSES CHOOSE AI</span>
          <h2 className="text-[32px] font-bold mb-10">The Benefits of an AI Workforce</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {([
              [FiBarChart, "Capture Every Lead", "No missed calls. No lost opportunities."],
              [FiZap, "Instant Response Times", "Engage leads the moment they reach out."],
              [FiCpu, "Fully Automated Workflows", "From first contact to closed deal."],
              [FiDollarSign, "Increase Conversions Without Hiring", "Do more with less and grow your revenue."],
              [FiClock, "Save Hours Every Week", "Eliminate repetitive tasks and focus on growth."],
              [FiTrendingUp, "Predictable, Scalable Growth", "AI systems scale with your business."],
            ] as const).map(([Icon, title, desc]) => (
              <div key={String(title)} className="bg-white border border-[#E2E8F0] rounded-lg p-6 text-center shadow-sm">
                <Icon className="w-10 h-10 text-nexus-blue mx-auto mb-3" />
                <h3 className="text-[14px] font-bold mb-2">{title}</h3>
                <p className="text-[14px] text-[#475569]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-nexus-light-bg py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[32px] font-bold mb-12">How We Build Your AI Workforce</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {([
              [1, FiClipboard, "Strategy & Design", "We map your journey and identify the best automation opportunities."],
              [2, FiSend, "Build & Deploy", "We build your AI workforce, integrate systems, and launch your AI workers."],
              [3, FiBarChart, "Optimise & Scale", "We monitor performance, refine workflows, and scale results over time."],
            ] as const).map(([step, Icon, title, desc]) => (
              <div key={String(step)} className="bg-white border border-[#E2E8F0] rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-nexus-blue text-white text-xl font-bold flex items-center justify-center mx-auto">{step}</div>
                <Icon className="w-8 h-8 text-nexus-blue mx-auto mt-4" />
                <h3 className="text-[16px] font-bold mt-3">{title}</h3>
                <p className="text-[14px] text-[#475569] mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue block mb-4">REAL RESULTS. REAL IMPACT.</span>
            <h2 className="text-[32px] font-bold mb-8">What Happens When You Deploy an AI Workforce</h2>
            <div className="space-y-3">
              {["More qualified leads", "Faster response times", "Higher conversion rates", "Reduced operational costs", "Scalable business growth"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[14px]"><FiCheckCircle className="text-nexus-green" /> {item}</div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              '"The AI receptionist never misses a call. We boosted ROI almost 220% in one month."',
              '"Our follow-ups are now fully automated. We closed 20% more deals."',
              '"The AI workforce transformed our operations and helped us scale 3x faster."',
            ].map((text, idx) => (
              <div key={text} className="bg-white border border-[#E2E8F0] rounded-lg p-5">
                <p className="text-[13px] text-[#475569] mb-4">{text}</p>
                <div className="text-nexus-gold mb-2">★★★★★</div>
                <p className="text-[13px] font-bold">{["James K.", "Sarah M.", "Mark T."][idx]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-[32px] font-bold mb-4">Ready to Build Your AI Workforce?</h2>
            <p className="text-[15px] text-[#475569]">Stop losing leads. Stop relying on manual processes. Start scaling with AI.</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.98 }} 
            onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
            className="bg-nexus-green hover:bg-green-700 text-white py-4 px-8 rounded-lg text-[16px] font-bold w-full"
          >
            Book Your Free AI Strategy Call →
          </motion.button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
