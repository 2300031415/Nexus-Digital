"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import ContactForm from "./contact/ContactForm";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const servicesLinks: { label: string; href: string }[] = [
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Digital Transformation", href: "/services/digital-transformation" },
  { label: "Web Design & Development", href: "/services/web-design" },
  { label: "eCommerce Development", href: "/services/ecommerce" },
  { label: "Digital Marketing", href: "/solutions/digital-marketing" },
  { label: "Branding & Creative Services", href: "/solutions/branding-creative" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  const solutions = useMemo(
    () => [
      { name: "AI Workforce", href: "/solutions/ai-workforce" },
      { name: "Lead Generation Systems", href: "/solutions/lead-generation" },
      { name: "CRM Automation & Integration", href: "/solutions/crm-automation" },
      { name: "Website & Marketing Packages", href: "/solutions/website-marketing-packages" },
    ],
    []
  );

  const servicePaths = [
    "/services",
    "/solutions/digital-marketing",
    "/solutions/branding-creative"
  ];
  const isServicesActive = servicePaths.some(p => pathname.startsWith(p));
  
  const isSolutionsActive = (pathname.startsWith("/solutions") || pathname === "/ai-workforce") && !isServicesActive;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    // Listen for global modal triggers
    const handleToggleModal = () => setIsConsultationModalOpen(true);
    window.addEventListener("open-consultation-modal", handleToggleModal);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("open-consultation-modal", handleToggleModal);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] px-8 py-4">
        <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center cursor-pointer h-[90px] w-[300px] ml-2">
          <Image
            src="/logo.png"
            alt="Nexus Digital Group Logo"
            width={300}
            height={90}
            className="w-full h-full object-contain object-left"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={`text-[16px] font-semibold transition-colors ${pathname === "/" ? "text-nexus-blue" : "text-[#1E3A5F] hover:text-nexus-blue"}`}>
            Home
          </Link>
          <Link
            href="/ai-business-tools"
            className={`text-[16px] font-semibold transition-colors ${
              pathname === "/ai-business-tools" ? "text-nexus-blue" : "text-[#1E3A5F] hover:text-nexus-blue"
            }`}
          >
            AI Business Tools
          </Link>

          <div
            ref={solutionsDropdownRef}
            className="relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <button
              onClick={() => {
                setIsSolutionsOpen((prev) => !prev);
                setIsServicesOpen(false);
              }}
              className={`text-[16px] font-semibold transition-colors flex items-center gap-1 ${
                isSolutionsActive ? "text-nexus-blue" : "text-[#1E3A5F] hover:text-nexus-blue"
              }`}
            >
              Solutions
              <FiChevronDown className={`w-3 h-3 transition-transform ${isSolutionsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 w-72 py-3 px-2 z-50 hidden md:block"
                >
                  {solutions.map((solution, index) => (
                    <motion.div key={solution.href} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>
                      <Link
                        href={solution.href}
                        onClick={() => setIsSolutionsOpen(false)}
                        className={`block px-5 py-3 rounded-xl font-semibold text-[15px] transition-all duration-150 cursor-pointer ${
                          pathname === solution.href ? "text-nexus-blue bg-nexus-light-bg" : "text-nexus-dark hover:bg-nexus-light-bg hover:text-nexus-blue"
                        }`}
                      >
                        {solution.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            ref={servicesDropdownRef}
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              onClick={() => {
                setIsServicesOpen((prev) => !prev);
                setIsSolutionsOpen(false);
              }}
              className={`text-[16px] font-semibold transition-colors flex items-center ${
                isServicesActive || isServicesOpen ? "text-nexus-blue" : "text-[#1E3A5F] hover:text-nexus-blue"
              }`}
            >
              Services
              <FiChevronDown className={`text-sm ml-1 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 w-72 py-3 px-2 z-50 hidden md:block"
                >
                  {servicesLinks.map((service, index) => (
                    <motion.div key={service.href} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>
                      <Link
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-5 py-3 rounded-xl text-nexus-dark font-semibold text-[15px] hover:bg-nexus-light-bg hover:text-nexus-blue transition-all duration-150 cursor-pointer"
                      >
                        {service.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="text-[16px] font-semibold text-[#1E3A5F] hover:text-nexus-blue transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-[16px] font-semibold text-[#1E3A5F] hover:text-nexus-blue transition-colors">
            Contact
          </Link>
        </div>

          <motion.button
            onClick={() => setIsConsultationModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-nexus-blue hover:bg-blue-700 text-white px-8 py-3 rounded-full text-[16px] font-bold transition-all shadow-md"
          >
            Book a consultation
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isConsultationModalOpen && (
          <motion.div
            onClick={() => setIsConsultationModalOpen(false)}
            className={`fixed inset-0 z-[9999] bg-[rgba(80,120,170,0.35)] backdrop-blur-[2px] flex items-center justify-center px-4 ${poppins.className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.22 }}
              className="relative w-full max-w-[540px] bg-white rounded-[24px] p-2 shadow-[0_12px_60px_rgba(30,60,120,0.18)]"
            >
              <button
                type="button"
                onClick={() => setIsConsultationModalOpen(false)}
                className="absolute top-4 right-5 text-[22px] text-[#444] border-none bg-transparent leading-none z-50"
                aria-label="Close consultation modal"
              >
                ✕
              </button>

              <ContactForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
