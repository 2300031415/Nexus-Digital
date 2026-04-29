import { FiCalendar, FiDollarSign, FiHeadphones, FiMail, FiPhone, FiUsers } from "react-icons/fi";

export default function WorkforceFlow() {
  const steps = [
    [FiPhone, "Incoming Call / Website Lead", "A lead reaches out to your business"],
    [FiHeadphones, "AI Receptionist Responds", "AI answers instantly and engages the lead"],
    [FiUsers, "AI Qualifies the Lead", "AI gathers key info and qualifies them"],
    [FiCalendar, "AI Books Appointment", "AI books the meeting automatically"],
    [FiMail, "AI Follows Up Automatically", "AI nurtures and keeps leads warm"],
    [FiDollarSign, "You Close More Deals", "More qualified leads convert to sales"],
  ] as const;

  return (
    <div className="overflow-x-auto">
      <span className="text-[11px] font-semibold tracking-widest uppercase text-nexus-blue block mb-4">HOW YOUR AI WORKFORCE WORKS</span>
      <div className="flex items-center gap-3 min-w-[980px] pb-2">
        {steps.map(([Icon, title, desc], idx) => (
          <div key={title} className="flex items-center gap-3">
            <div className={`w-[170px] p-3 rounded-lg border ${idx === 5 ? "bg-green-50 border-nexus-green" : "bg-white border-[#E2E8F0]"} text-center`}>

              <Icon className={`w-8 h-8 mx-auto mb-2 ${idx === 5 ? "text-nexus-green" : "text-nexus-blue"}`} />
              <div className="text-[11px] font-semibold text-[#0F172A]">{title}</div>
              <div className="text-[10px] text-[#475569] mt-1">{desc}</div>
            </div>
            {idx < steps.length - 1 && <span className="text-nexus-blue font-bold text-[24px]">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
