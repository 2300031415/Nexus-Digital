"use client";

import EcApproach from "@/components/services/ecommerce/EcApproach";
import EcBenefits from "@/components/services/ecommerce/EcBenefits";
import EcCta from "@/components/services/ecommerce/EcCta";
import EcHero from "@/components/services/ecommerce/EcHero";
import EcIncludes from "@/components/services/ecommerce/EcIncludes";
import EcLogoBar from "@/components/services/ecommerce/EcLogoBar";
import EcPlatforms from "@/components/services/ecommerce/EcPlatforms";
import EcProblem from "@/components/services/ecommerce/EcProblem";
import EcResults from "@/components/services/ecommerce/EcResults";

export default function EcommercePage() {
  return (
    <main className="bg-white">
      <EcHero />
      <EcLogoBar />
      <EcProblem />
      <EcApproach />
      <EcIncludes />
      <EcPlatforms />
      <EcBenefits />
      <EcResults />
      <EcCta />
    </main>
  );
}
