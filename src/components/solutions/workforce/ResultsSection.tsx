import { FiCheckCircle } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

export default function ResultsSection() {
  return (
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
            ["1.1 The AI receptionist never misses a call. We've replaced 3x team leads and boosted ROI almost 220% in one month.", "James K.", "Director, Apex Electrical"],
            ["2.1 Our follow-ups are now fully automated. We've closed more deals in 3 weeks and closed 20% more deals.", "Sarah M.", "Owner, Bright Dental"],
            ["3.1 The AI workforce has transformed our operations. Our team has never been happier, and we're scaling 3x faster.", "Mark T.", "Owner, Peak Property"],
          ].map((text, idx) => (
            <div key={String(text)} className="bg-white border border-[#E2E8F0] rounded-lg p-5">
              <p className="text-[13px] text-[#475569] mb-4">{text[0]}</p>
              <div className="flex gap-1 text-nexus-gold mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="w-3.5 h-3.5" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white" />
                <div>
                  <p className="text-[13px] font-bold">{text[1]}</p>
                  <p className="text-[11px] text-[#475569]">{text[2]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
