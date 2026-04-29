import { FiBarChart, FiClipboard, FiSend } from "react-icons/fi";

const steps = [
  [1, FiClipboard, "Strategy & Design", "We map your journey and identify the best automation opportunities."],
  [2, FiSend, "Build & Deploy", "We build your AI workforce, integrate systems, and launch your AI workers."],
  [3, FiBarChart, "Optimise & Scale", "We monitor performance, refine workflows, and scale results over time."],
] as const;

export default function ProcessSection() {
  return (
    <section className="bg-nexus-light-bg py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[32px] font-bold mb-12">How We Build Your AI Workforce</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(([step, Icon, title, desc]) => (
            <div key={step} className="bg-white border border-[#E2E8F0] rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-nexus-blue text-white text-xl font-bold flex items-center justify-center mx-auto">{step}</div>
              <Icon className="w-8 h-8 text-nexus-blue mx-auto mt-4" />
              <h3 className="text-[16px] font-bold mt-3">{title}</h3>
              <p className="text-[14px] text-[#475569] mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
