"use client";

import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactHeader from "@/components/contact/ContactHeader";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#dce9fb] via-[#e8f3fc] to-[#cfe5f7]">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-14 right-14 w-32 h-32 rounded-full bg-gradient-to-br from-white via-white/70 to-white/20 shadow-[0_8px_40px_rgba(180,210,240,0.5)] backdrop-blur-sm pointer-events-none z-0"
      />

      <div className="relative z-10">
        <ContactHeader />
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20 items-start">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
