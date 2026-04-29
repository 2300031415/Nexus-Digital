import Link from "next/link";

const solutionLinks = [
  { label: "AI Workforce", href: "/solutions/ai-workforce" },
  { label: "AI Business Tools", href: "/solutions/ai-business-tools" },
  { label: "Lead Generation Systems", href: "/solutions/lead-generation" },
  { label: "Web Design + Marketing", href: "/solutions/web-design" },
];

export default function SolutionsOverviewPage() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-[36px] font-bold text-[#0F172A] mb-4">Our Solutions</h1>
        <p className="text-[15px] text-[#475569] mb-10">
          Explore the right growth system for your business.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {solutionLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-5 py-3 rounded-full border border-[#E2E8F0] text-[14px] font-semibold text-[#0F172A] hover:text-nexus-blue hover:border-nexus-blue transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
