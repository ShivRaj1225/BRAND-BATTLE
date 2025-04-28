import React from 'react';
import { motion } from 'framer-motion';

function FooterColumn({ title, links }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        {links.map((link, index) => (
          <li key={index} className="hover:text-cyan-400 cursor-pointer transition">
            {link}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default FooterColumn;
