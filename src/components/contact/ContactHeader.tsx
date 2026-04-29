"use client";

import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative z-10 text-center pt-16 pb-2 px-6"
    >
      <span className="text-nexus-blue text-xs font-semibold uppercase tracking-[0.28em] mb-5 block">CONTACT</span>
      <h1 className="text-nexus-dark text-[3.2rem] font-extrabold leading-tight">Let&apos;s start right now!</h1>
    </motion.div>
  );
}
