import { BrandingApproach } from "@/components/solutions/branding/BrandingApproach";
import { BrandingCTA } from "@/components/solutions/branding/BrandingCTA";
import { BrandingHero } from "@/components/solutions/branding/BrandingHero";
import { BrandingIndustries } from "@/components/solutions/branding/BrandingIndustries";
import { BrandingProblem } from "@/components/solutions/branding/BrandingProblem";
import { BrandingServices } from "@/components/solutions/branding/BrandingServices";
import { BrandingTrustedBy } from "@/components/solutions/branding/BrandingTrustedBy";

export const metadata = {
  title: "Branding & Creative Services | Nexus Digital Group",
  description: "Strategic branding and creative services that position you to win.",
};

export default function BrandingCreativePage() {
  return (
    <main className="bg-white">
      <BrandingHero />
      <BrandingTrustedBy />
      <BrandingProblem />
      <BrandingIndustries />
      <BrandingServices />
      <BrandingApproach />
      <BrandingCTA />
    </main>
  );
}
