"use client";

import { motion } from "framer-motion";
import { FiHeadphones, FiHelpCircle, FiMapPin, FiUser } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { label: "YouTube", icon: FaYoutube },
  { label: "X", icon: FaXTwitter },
  { label: "Facebook", icon: FaFacebook },
  { label: "Instagram", icon: FaInstagram },
];

const socialContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } },
};

const socialItem = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};

export default function ContactDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col gap-10"
    >
      <div className="flex flex-col gap-0.5">
        <FiHeadphones className="text-nexus-blue text-[1.75rem] mb-3" />
        <p className="text-nexus-dark font-extrabold text-[1.4rem] mb-1">+1 001 234 5678</p>
        <p className="text-gray-500 text-sm">Call us: Mon - Fri 9:00 - 19:00</p>
      </div>

      <div className="flex flex-col gap-0.5">
        <FiMapPin className="text-nexus-blue text-[1.75rem] mb-3" />
        <p className="text-nexus-dark font-extrabold text-[1.4rem] mb-1">New York</p>
        <p className="text-gray-500 text-sm leading-relaxed">
          990 Madison Ave, Midtown Manhattan,
          <br />
          2th Floor, NY 10022
        </p>
      </div>

      <div className="flex flex-col gap-0.5">
        <FiHelpCircle className="text-nexus-blue text-[1.75rem] mb-3" />
        <p className="text-nexus-dark font-extrabold text-[1.1rem] mb-1">info@dream-theme.com</p>
        <p className="text-gray-500 text-sm">Drop us a line anytime!</p>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="w-7 h-7 rounded-full border border-nexus-blue/30 flex items-center justify-center text-nexus-blue text-base mb-3">
          <FiUser />
        </span>
        <p className="text-nexus-dark font-extrabold text-[1.1rem] mb-1">hr@dream-theme.com</p>
        <p className="text-gray-500 text-sm">Career at Seven Creative</p>
      </div>

      <motion.div variants={socialContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 flex gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <motion.button
              key={social.label}
              type="button"
              aria-label={social.label}
              variants={socialItem}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/80 flex items-center justify-center text-nexus-dark text-[1.1rem] hover:border-nexus-blue hover:text-nexus-blue hover:bg-white/80 transition-all duration-150 cursor-pointer"
            >
              <Icon />
            </motion.button>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
