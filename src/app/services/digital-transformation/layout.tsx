import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Digital Transformation | Nexus Digital Group",
  description: "Modern systems, automation, and cloud transformation for scalable growth.",
};

export default function DigitalTransformationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
