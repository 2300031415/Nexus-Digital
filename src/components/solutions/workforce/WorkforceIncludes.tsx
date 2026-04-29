import { FiCalendar, FiCpu, FiMail, FiPhone, FiUsers } from "react-icons/fi";

const workforceCards = [
  { icon: FiPhone, title: "AI Receptionist", desc: "Answers calls, routes enquiries, and captures every opportunity." },
  { icon: FiUsers, title: "Lead Qualification Agent", desc: "Collects key information and filters high-quality prospects." },
  { icon: FiCalendar, title: "Appointment Booking Agent", desc: "Books consultations, site visits, and meetings instantly." },
  { icon: FiMail, title: "Follow-Up Agent", desc: "Nurtures leads, sends reminders, and prevents drop-offs." },
  { icon: FiCpu, title: "CRM & Integration Agent", desc: "Syncs and updates your CRM and tools automatically." },
];

export default function WorkforceIncludes() {
  return (
    <section className="py-20 px-8 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[32px] font-bold mb-12">Your AI Workforce Includes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {workforceCards.map((card) => (
            <div key={card.title} className="bg-white border border-[#E2E8F0] rounded-lg p-6 shadow-sm relative overflow-hidden">
              <card.icon className="w-10 h-10 text-nexus-blue mx-auto mb-3" />
              <h3 className="text-[16px] font-bold mb-2">{card.title}</h3>
              <p className="text-[14px] text-[#475569]">{card.desc}</p>
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-nexus-cyan" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
