"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { title: "Apex Electrical", type: "Trades & Services Website", uplift: "+ 62% Leads", image: "/Catalog/ApexElectrical.png" },
  { title: "Bright Dental", type: "Healthcare Website", uplift: "+ 48% New Patients", image: "/Catalog/BrightDental.png" },
  { title: "Peak Property", type: "Real Estate Website", uplift: "+ 70% Enquiries", image: "/Catalog/PeakProperty.png" },
];

export function WdRecentWork() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-nexus-blue mb-2">RECENT WORK</p>
            <h2 className="text-4xl font-bold text-nexus-navy">Websites That Drive Results</h2>
          </div>
          <p className="text-nexus-blue font-semibold">View More Projects →</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div key={project.title} whileHover={{ scale: 1.02, y: -4 }} className="rounded-2xl h-80 relative overflow-hidden group shadow-lg border border-gray-100">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-bold text-xl mb-1">{project.title}</p>
                <p className="text-sm text-white/80 font-medium">{project.type}</p>
                <div className="mt-3 inline-block bg-nexus-blue/90 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                  {project.uplift}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
