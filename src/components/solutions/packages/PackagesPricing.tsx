"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiSend } from "react-icons/fi";

type Pkg = {
  name: string;
  subtitle: string;
  price: string;
  weekly: string;
  monthly: string;
  features: string[];
  outcome: string;
  cta: string;
  popular?: boolean;
};

const packs: Pkg[] = [
  {
    name: "Starter Growth Package",
    subtitle: "Best for small businesses starting out.",
    price: "$97",
    weekly: "/week",
    monthly: "or $399/month",
    features: ["Conversion-focused website", "Basic SEO setup", "Lead capture forms", "CRM integration", "Email follow-up automation"],
    outcome: "Get online and start generating leads.",
    cta: "Get Started →",
  },
  {
    name: "Growth Accelerator Package",
    subtitle: "Best for businesses ready to scale.",
    price: "$197",
    weekly: "/week",
    monthly: "or $799/month",
    features: [
      "High-converting website or landing pages",
      "Google Ads or Social Ads campaigns",
      "Advanced SEO optimisation",
      "Funnel design",
      "AI lead qualification",
      "Automation workflows",
    ],
    outcome: "Generate consistent, high-quality leads.",
    cta: "Scale My Business →",
    popular: true,
  },
  {
    name: "Advanced Growth System",
    subtitle: "Best for businesses wanting predictable, scalable growth.",
    price: "$347",
    weekly: "/week",
    monthly: "or $1,499/month",
    features: [
      "Full website + funnel ecosystem",
      "Multi-channel marketing (SEO + Ads + Social)",
      "AI receptionist & automation systems",
      "CRM + pipeline integration",
      "Advanced analytics & tracking",
      "Ongoing optimisation & scaling",
    ],
    outcome: "A fully automated, revenue-generating system.",
    cta: "Build My Growth System →",
  },
];

export function PackagesPricing() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-nexus-blue mb-3">THE SOLUTION</p>
          <h2 className="text-3xl font-bold text-nexus-dark mb-4">We Build Complete Growth Systems — Not Just Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            At Nexus Digital Group, we combine website, marketing, AI, and automation into one seamless system. Everything works together to
            generate leads, convert customers, automate follow-ups, and scale your business.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {packs.map((p) => (
            <motion.div
              key={p.name}
              initial={p.popular ? { boxShadow: "0 0 0 rgba(59,130,246,0)" } : undefined}
              whileInView={p.popular ? { boxShadow: "0 0 35px rgba(59,130,246,0.35)" } : undefined}
              transition={p.popular ? { duration: 0.8 } : undefined}
              className={`${p.popular ? "bg-nexus-navy text-white scale-[1.03] shadow-2xl relative" : "bg-white text-nexus-dark border border-gray-200 shadow-sm"} rounded-2xl p-8`}
            >
              {p.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-nexus-blue text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</span>}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className={`text-sm mt-1 ${p.popular ? "text-blue-300" : "text-gray-500"}`}>{p.subtitle}</p>
              <div className="my-4">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className={`ml-2 ${p.popular ? "text-blue-300" : "text-gray-500"}`}>{p.weekly}</span>
                <p className={`text-sm mt-1 ${p.popular ? "text-blue-400" : "text-gray-400"}`}>{p.monthly}</p>
              </div>
              <div className={`w-14 h-14 rounded-full ${p.popular ? "bg-white/10" : "bg-blue-50"} flex items-center justify-center mx-auto my-4`}>
                <FiSend className={`w-7 h-7 ${p.popular ? "text-nexus-blue" : "text-nexus-blue"}`} />
              </div>
              <div className="space-y-2">
                {p.features.map((f) => (
                  <div key={f} className={`text-sm flex items-start gap-2 ${p.popular ? "text-blue-100" : "text-gray-700"}`}>
                    <FiCheckCircle className="text-nexus-green shrink-0 mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>
              <div className={`mt-6 pt-4 border-t ${p.popular ? "border-white/20" : "border-gray-100"}`}>
                <p className={`font-semibold ${p.popular ? "text-white" : "text-nexus-dark"}`}>Outcome:</p>
                <p className={`${p.popular ? "text-blue-200" : "text-gray-600"} text-sm`}>{p.outcome}</p>
              </div>
              <button className={`mt-6 w-full py-3 rounded-xl transition ${p.popular ? "bg-nexus-green text-white font-bold hover:brightness-110" : "border border-nexus-blue text-nexus-blue hover:bg-nexus-blue hover:text-white"}`}>
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
