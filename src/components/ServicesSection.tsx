"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ComponentType } from "react";
import { FiArrowRight, FiCloud, FiCpu, FiGitBranch, FiMonitor, FiTarget } from "react-icons/fi";

const ServicesSection = () => {
  const services: {
    icon: ComponentType<{ className?: string }>;
    title: string;
    description: string;
    href: string;
  }[] = [
    {
      icon: FiCpu,
      title: "AI Automation & AI Agents",
      description: "Automate customer interactions, lead qualification, and sales processes.",
      href: "/solutions/ai-automation",
    },
    {
      icon: FiMonitor,
      title: "Conversion-Focused Websites",
      description: "High-performance websites designed to turn visitors into enquiries and sales.",
      href: "/solutions/web-design",
    },
    {
      icon: FiTarget,
      title: "Digital Marketing",
      description: "SEO, Google Ads, and paid campaigns that drive high-quality leads.",
      href: "/solutions/digital-marketing",
    },
    {
      icon: FiGitBranch,
      title: "CRM & Workflow Automation",
      description: "Eliminate manual work and streamline your business operations.",
      href: "/solutions/crm-automation",
    },
    {
      icon: FiCloud,
      title: "Managed IT & Cloud Solutions",
      description: "Secure, scalable infrastructure for modern businesses.",
      href: "/solutions/digital-transformation",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-nexus-dark text-[2rem] font-extrabold mb-2">Our Core Services</h2>
          <p className="text-gray-500 text-[15px]">
            End-to-end digital solutions powered by AI and automation.
          </p>
        </div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-start p-6 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Link
                href={service.href}
                className="w-full h-full flex flex-col"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-nexus-blue text-2xl">
                  <service.icon />
                </div>
                <h3 className="text-nexus-dark font-extrabold text-[1rem] leading-snug mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-[240px] min-h-[60px]">{service.description}</p>
                <div className="mt-auto">
                  <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.15 }} className="inline-flex items-center gap-1 text-nexus-blue text-sm font-semibold hover:text-nexus-blue/80 transition-colors">
                    Learn More <FiArrowRight className="text-xs" />
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
