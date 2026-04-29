import { FiClock, FiPhone, FiTrendingDown, FiUsers } from "react-icons/fi";

export default function ProblemsSection() {
  const problems = [
    [FiPhone, "Calls go unanswered"],
    [FiUsers, "Leads aren't followed up fast enough"],
    [FiClock, "Admin tasks consume valuable time"],
    [FiUsers, "Teams are overwhelmed and reactive"],
    [FiTrendingDown, "When your systems fail, your growth stalls."],
  ] as const;

  return (
    <section className="bg-[#F0F4F8] py-20 px-8 text-center">
      <div className="max-w-7xl mx-auto">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue block mb-3">THE REAL PROBLEM</span>
        <h2 className="text-[32px] font-bold mb-3">You Don&apos;t Have a Staff Problem — You Have a Systems Problem</h2>
        <p className="text-[15px] text-[#475569] mb-12">Most businesses lose revenue every single day because:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {problems.map(([Icon, title], idx) => (
            <div key={title} className="bg-white p-6 rounded-lg border border-[#E2E8F0] hover:shadow-lg">
              <Icon className={`w-10 h-10 mx-auto mb-3 ${idx === 4 ? "text-nexus-red" : "text-nexus-blue"}`} />
              <h3 className="text-[14px] font-bold">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
