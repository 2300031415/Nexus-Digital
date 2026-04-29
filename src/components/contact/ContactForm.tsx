"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const fieldStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const fieldRow = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white/75 backdrop-blur-xl rounded-3xl border border-white/70 p-6 sm:p-8"
    >
      <h2 className="text-nexus-dark font-extrabold text-2xl leading-tight mb-2">Make an online enquiry</h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">
        Fill out the form below to get our proposal.
      </p>

      {submitted ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center py-12 gap-4 text-center"
        >
          <FiCheckCircle className="text-nexus-green text-[3rem] mb-2" />
          <p className="text-nexus-dark font-extrabold text-xl">Message sent!</p>
          <p className="text-gray-500 text-xs">Thank you! We&apos;ll be in touch shortly.</p>
        </motion.div>
      ) : (
        <motion.div variants={fieldStagger} initial="hidden" animate="show">
          <motion.div variants={fieldRow} transition={{ duration: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-[9px] font-bold uppercase tracking-[0.12em] text-gray-500 mb-1 block">
                NAME<span className="text-nexus-blue ml-0.5 font-bold">*</span>
              </label>
              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-700 text-sm placeholder:text-gray-300 bg-white focus:outline-none focus:border-nexus-blue focus:ring-2 focus:ring-nexus-blue/10 transition-all duration-150"
              />
            </div>
            <div>
              <label className="text-[9px] font-bold uppercase tracking-[0.12em] text-gray-500 mb-1 block">
                EMAIL<span className="text-nexus-blue ml-0.5 font-bold">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-700 text-sm placeholder:text-gray-300 bg-white focus:outline-none focus:border-nexus-blue focus:ring-2 focus:ring-nexus-blue/10 transition-all duration-150"
              />
            </div>
          </motion.div>

          <motion.div variants={fieldRow} transition={{ duration: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-[9px] font-bold uppercase tracking-[0.12em] text-gray-500 mb-1 block">COMPANY</label>
              <input
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-700 text-sm placeholder:text-gray-300 bg-white focus:outline-none focus:border-nexus-blue focus:ring-2 focus:ring-nexus-blue/10 transition-all duration-150"
              />
            </div>
            <div>
              <label className="text-[9px] font-bold uppercase tracking-[0.12em] text-gray-500 mb-1 block">BUDGET</label>
              <input
                placeholder="Budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-700 text-sm placeholder:text-gray-300 bg-white focus:outline-none focus:border-nexus-blue focus:ring-2 focus:ring-nexus-blue/10 transition-all duration-150"
              />
            </div>
          </motion.div>

          <motion.div variants={fieldRow} transition={{ duration: 0.3 }} className="mb-4">
            <label className="text-[9px] font-bold uppercase tracking-[0.12em] text-gray-500 mb-1 block">TIMEFRAME</label>
            <input
              placeholder="Timeframe"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-700 text-sm placeholder:text-gray-300 bg-white focus:outline-none focus:border-nexus-blue focus:ring-2 focus:ring-nexus-blue/10 transition-all duration-150"
            />
          </motion.div>

          <motion.div variants={fieldRow} transition={{ duration: 0.3 }} className="mb-6">
            <label className="text-[9px] font-bold uppercase tracking-[0.12em] text-gray-500 mb-1 block">
              MESSAGE
            </label>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-700 text-sm placeholder:text-gray-300 bg-white focus:outline-none focus:border-nexus-blue focus:ring-2 focus:ring-nexus-blue/10 transition-all duration-150 h-28 resize-y"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={handleSubmit}
            className="w-full bg-nexus-blue text-white font-bold text-sm py-3.5 rounded-full shadow-lg hover:brightness-110 transition-all duration-200"
          >
            Send message
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
