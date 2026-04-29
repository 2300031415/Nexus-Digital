"use client";

import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#E2E8F0] pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Image 
              src="/logo.png" 
              alt="Nexus Digital Group Logo" 
              width={32} 
              height={32} 
              className="object-contain"
            />
            <span className="text-sm font-bold text-[#0F172A]">NEXUS DIGITAL GROUP</span>
          </div>
          <p className="text-[14px] text-[#475569] leading-relaxed mb-6">
            <span className="font-bold text-[#0F172A] block mb-1">Proven Systems. Real Results.</span>
            We help businesses grow with AI-powered systems, automation, and digital marketing that drive real results.
          </p>
          <div className="flex gap-4">
            {[FaFacebook, FaLinkedin, FaInstagram, FaTiktok].map((Icon, i) => (
              <a key={i} href="#" className="text-[#475569] hover:text-nexus-blue transition-colors text-[20px]">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-[14px] font-bold text-[#0F172A] mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'About Us', 'Services', 'Case Studies', 'Blog', 'Contact'].map((link) => (
              <li key={link}>
                <a href="#" className="text-[14px] text-[#475569] hover:text-nexus-blue transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-[14px] font-bold text-[#0F172A] mb-6 uppercase tracking-wider">Services</h4>
          <ul className="space-y-4">
            {['AI Automation', 'Web Design', 'Digital Marketing', 'CRM Automation', 'IT & Cloud Solutions'].map((link) => (
              <li key={link}>
                <a href="#" className="text-[14px] text-[#475569] hover:text-nexus-blue transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-[14px] font-bold text-[#0F172A] mb-6 uppercase tracking-wider">Get In Touch</h4>
          <ul className="space-y-4">
            <li className="text-[14px] text-[#475569]">📞 1300 029 126</li>
            <li className="text-[14px] text-[#475569]">📧 info@nexusdigitalgroup.com.au</li>
            <li className="text-[14px] text-[#475569]">📍585 Little Collins St, Melbourne VIC 3000</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[12px] text-[#999999]">
          © 2024 Nexus Digital Group. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-[12px] text-[#999999] hover:text-nexus-blue">Privacy Policy</a>
          <a href="#" className="text-[12px] text-[#999999] hover:text-nexus-blue">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
