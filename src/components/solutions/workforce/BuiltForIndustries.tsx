import { FiBriefcase, FiHeart, FiHome, FiSettings, FiUsers } from "react-icons/fi";

const industries = [
  [FiSettings, "Trades & Construction", "text-nexus-blue bg-blue-100"],
  [FiHome, "Real Estate", "text-nexus-blue bg-blue-100"],
  [FiHeart, "Healthcare Clinics", "text-nexus-red bg-red-100"],
  [FiBriefcase, "Professional Services", "text-nexus-blue bg-blue-100"],
  [FiUsers, "Sales Teams", "text-nexus-blue bg-blue-100"],
] as const;

export default function BuiltForIndustries() {
  return (
    <section className="bg-nexus-light-bg py-20 px-8 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[32px] font-bold mb-10">Built for High-Volume, High-Value Businesses</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {industries.map(([Icon, label, classes]) => (
            <div key={label} className="text-center">
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
  );
}
