import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM Automation & Integration | Nexus Digital Group",
  description: "Intelligent CRM systems that automate workflows and drive revenue.",
};

export default function CrmAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
