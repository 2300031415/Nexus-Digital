"use client";

import { motion } from "framer-motion";
import { FiTriangle, FiZap } from "react-icons/fi";

export default function DMTrustedBy() {
  const logos = [
    { name: "APEX", sub: "ELECTRICAL", icon: FiZap },
    { name: "URBAN", sub: "INTERIORS" },
    { name: "bright", sub: "DENTAL" },
    { name: "SPARK", sub: "FITNESS", icon: FiZap },
    { name: "PEAK", sub: "PROPERTY", icon: FiTriangle },
    { name: "SUMMIT", sub: "CONSTRUCTION", icon: FiTriangle },
  ];

  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-nexus-light-bg py-10 border-t border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-gray-500 text-xs uppercase tracking-[0.2em] mb-6">TRUSTED BY BUSINESSES ACROSS AUSTRALIA</p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="flex justify-around items-center flex-wrap gap-6">
          {logos.map((logo) => (
            <motion.div key={logo.name + logo.sub} variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="flex flex-col items-center gap-1">
              <p className={`${logo.name === "URBAN" ? "text-xl tracking-widest" : logo.name === "bright" ? "text-2xl lowercase italic" : "text-base tracking-wide uppercase"} font-extrabold text-gray-700`}>
                {logo.icon ? <logo.icon className="text-nexus-blue text-xs inline mr-1" /> : null}
                {logo.name}
              </p>
              <p className="text-gray-500 text-[9px] tracking-widest uppercase">{logo.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
