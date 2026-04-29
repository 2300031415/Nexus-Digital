import { FiBarChart, FiClock, FiCpu, FiDollarSign, FiTrendingUp, FiZap } from "react-icons/fi";

const benefits = [
  [FiBarChart, "Capture Every Lead", "No missed calls. No lost opportunities."],
  [FiZap, "Instant Response Times", "Engage leads the moment they reach out."],
  [FiCpu, "Fully Automated Workflows", "From first contact to closed deal."],
  [FiDollarSign, "Increase Conversions Without Hiring", "Do more with less and grow your revenue."],
  [FiClock, "Save Hours Every Week", "Eliminate repetitive tasks and focus on growth."],
  [FiTrendingUp, "Predictable, Scalable Growth", "AI systems scale with your business."],
] as const;

export default function BenefitsSection() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue block mb-4">WHY BUSINESSES CHOOSE AI</span>
        <h2 className="text-[32px] font-bold mb-10">The Benefits of an AI Workforce</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(([Icon, title, desc]) => (
            <div key={title} className="bg-white border border-[#E2E8F0] rounded-lg p-6 text-center shadow-sm">
              <Icon className="w-10 h-10 text-nexus-blue mx-auto mb-3" />
              <h3 className="text-[14px] font-bold mb-2">{title}</h3>
              <p className="text-[14px] text-[#475569]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
