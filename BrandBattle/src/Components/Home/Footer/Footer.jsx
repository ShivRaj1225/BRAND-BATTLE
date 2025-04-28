import React from 'react';
import FooterSocials from './FooterSocials';
import FooterLinks from './FooterLinks';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <div className="w-full bg-[#0e1e40] text-white pt-10 pb-5 px-6 md:px-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-10"
      >
        {/* Logo and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-3xl font-bold text-[#eef3fd] uppercase">brandBattle</div>
          <FooterSocials />
        </div>

        {/* Links */}
        <FooterLinks />

        {/* Bottom Text */}
        <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
          © 2025 BrandBattle.com. All Rights Reserved
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
