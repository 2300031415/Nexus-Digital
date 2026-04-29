"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FiCheckCircle, FiPhone } from "react-icons/fi";

const sectionAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const team = [
  ["Alexander Black", "Founder, CEO"],
  ["Anna Kovalenko", "Finance director"],
  ["Tiffany White", "Creative director"],
  ["Richard Greenwood", "Programmer"],
  ["Jessica Brown", "Marketing director"],
  ["Gregory Windstorm", "Accounting manager"],
  ["Anna Red", "Project manager"],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <motion.section {...sectionAnim} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-nexus-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-nexus-navy mb-4">The last digital agency you&apos;ll ever need!</h1>
          <h2 className="text-xl md:text-2xl font-bold text-[#1E3A5F] mb-5">Turning your business ideas into smart digital products since 2001</h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-5xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eleifend magna, molestie iaculis sem pulvinar eu. Etiam
            non dui felis. Proin posuere dapibus magna laoreet posuere. Lorem ipsum dolor sit amet, adipiscing elit. Proin dignissim, sem
            eget sollicitudin.
          </p>
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["10+", "Years of experience"],
            ["50+", "Successful cases"],
            ["12", "Industry awards"],
          ].map(([value, label]) => (
            <div key={label} className="bg-nexus-light-bg border border-gray-100 rounded-2xl p-8 text-center">
              <p className="text-4xl font-extrabold text-nexus-blue">{value}</p>
              <p className="text-sm text-gray-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="py-20 bg-nexus-light-bg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-nexus-navy mb-3">Our mission</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Fusce fringilla justo vel dui consectetur, fringilla maximus ante malesuada. Suspendisse facilisis nisl augue, ut sollicitudin
              lectus ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-nexus-navy mb-3">Our values</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
              Odio augue placerat est, nec semper nisl erat ac ex el convallis ligula commodo ac. Aenean congue.
            </p>
            <div className="space-y-2">
              {[
                "100% client satisfaction is our priority",
                "Using complex & reliable digital solutions",
                "High customer support standards",
                "Working with leading market experts",
              ].map((item) => (
                <p key={item} className="flex items-center gap-2 text-sm text-nexus-dark font-medium">
                  <FiCheckCircle className="text-nexus-green" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-2xl font-bold text-nexus-navy mb-10">We are proud to work with these companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {["lg0009-w", "lg0001-w", "lg0007-w", "lg0006-w", "lg0010-w", "lg0005-w"].map((item) => (
              <div key={item} className="h-20 rounded-xl bg-nexus-light-bg border border-gray-100 flex items-center justify-center text-gray-400 text-xs font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="py-20 bg-nexus-light-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-nexus-navy mb-8">Why work with us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Reach experience",
              "Great client support",
              "Complex solutions",
              "Unique technologies",
              "Flexible prices",
              "Top industry specialists",
            ].map((item) => (
              <div key={item} className="bg-white rounded-2xl border border-gray-100 p-6">
                <p className="font-bold text-nexus-dark mb-2">{item}</p>
                <p className="text-sm text-gray-500">
                  Ipsum amet - lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non porttitor nunc. Curabitur et mattis.
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-nexus-navy mb-8">What clients say about our work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Alexander Black", "Tiffany Whitewood", "Richard Anderson", "Diana Green"].map((name) => (
              <div key={name} className="bg-nexus-light-bg rounded-2xl border border-gray-100 p-6">
                <p className="text-sm text-gray-500 italic mb-4">
                  Quisque eget odio felis. Suspendisse quis nulla tincidunt, cursus tellus condimentum, consequat sapien at ornare ex.
                </p>
                <p className="font-semibold text-nexus-dark">{name}</p>
                <p className="text-xs text-gray-400">Seven consulting - CEO</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="py-20 bg-nexus-light-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-nexus-navy mb-2">A small but effective team</h3>
          <p className="text-gray-500 text-sm mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit? Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map(([name, role]) => (
              <div key={name} className="bg-white rounded-xl border border-gray-100 p-4">
                <p className="font-semibold text-sm text-nexus-dark">{name}</p>
                <p className="text-xs text-gray-400">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-extrabold text-nexus-navy mb-3">Want to know how we can help your business?</h3>
          <p className="text-gray-500 text-[15px] mb-8">Got questions? Ideas? Leave your phone number &amp; our specialist will contact you.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase">Your name</span>
              <input className="border border-gray-300 rounded-lg px-4 py-3 text-sm" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase">Phone number</span>
              <input className="border border-gray-300 rounded-lg px-4 py-3 text-sm" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase">Desired date</span>
              <input type="date" className="border border-gray-300 rounded-lg px-4 py-3 text-sm" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-[0.12em] uppercase">Desired time</span>
              <input type="time" className="border border-gray-300 rounded-lg px-4 py-3 text-sm" />
            </label>
          </div>
          <button className="mt-6 bg-nexus-blue hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold">Request a call-back</button>

          <div className="mt-8 flex items-center justify-center gap-4 text-gray-500">
            <FaFacebookF />
            <FaXTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
          <div className="mt-6 text-sm text-gray-500">
            <p>Questions? Reach us Monday - Friday from 9 am to 6 pm</p>
            <p className="font-semibold text-nexus-dark mt-1 inline-flex items-center gap-2">
              <FiPhone />
              +1 001 234 5678
            </p>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
