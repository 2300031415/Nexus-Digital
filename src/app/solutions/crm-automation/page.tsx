import { CrmCta } from "@/components/solutions/crm/CrmCta";
import { CrmHero } from "@/components/solutions/crm/CrmHero";
import { CrmIndustries } from "@/components/solutions/crm/CrmIndustries";
import { CrmPlatforms } from "@/components/solutions/crm/CrmPlatforms";
import { CrmProblem } from "@/components/solutions/crm/CrmProblem";
import { CrmProcess } from "@/components/solutions/crm/CrmProcess";
import { CrmServices } from "@/components/solutions/crm/CrmServices";
import { CrmSolution } from "@/components/solutions/crm/CrmSolution";
import { CrmTestimonials } from "@/components/solutions/crm/CrmTestimonials";

export const metadata = {
  title: "CRM Automation & Integration | Nexus Digital Group",
  description: "Intelligent CRM systems that automate workflows and drive revenue.",
};

export default function CrmAutomationPage() {
  return (
    <main className="bg-white">
      <CrmHero />
      <CrmProblem />
      <CrmSolution />
      <CrmServices />
      <CrmPlatforms />
      <CrmIndustries />
      <CrmProcess />
      <CrmTestimonials />
      <CrmCta />
    </main>
  );
}
