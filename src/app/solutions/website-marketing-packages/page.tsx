import { PackagesCTA } from "@/components/solutions/packages/PackagesCTA";
import { PackagesComparisonTable } from "@/components/solutions/packages/PackagesComparisonTable";
import { PackagesHero } from "@/components/solutions/packages/PackagesHero";
import { PackagesPricing } from "@/components/solutions/packages/PackagesPricing";
import { PackagesProblem } from "@/components/solutions/packages/PackagesProblem";
import { PackagesProcess } from "@/components/solutions/packages/PackagesProcess";
import { PackagesTestimonials } from "@/components/solutions/packages/PackagesTestimonials";
import { PackagesWhyChoose } from "@/components/solutions/packages/PackagesWhyChoose";

export const metadata = {
  title: "Website & Marketing Packages | Nexus Digital Group",
  description: "All-in-one growth systems combining websites, marketing, AI, and automation.",
};

export default function WebsiteMarketingPackagesPage() {
  return (
    <main className="bg-white">
      <PackagesHero />
      <PackagesProblem />
      <PackagesPricing />
      <PackagesComparisonTable />
      <PackagesWhyChoose />
      <PackagesProcess />
      <PackagesTestimonials />
      <PackagesCTA />
    </main>
  );
}
