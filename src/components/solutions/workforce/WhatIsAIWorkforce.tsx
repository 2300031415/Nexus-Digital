import { FiCheckCircle, FiInfo } from "react-icons/fi";

export default function WhatIsAIWorkforce() {
  return (
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
  );
}
