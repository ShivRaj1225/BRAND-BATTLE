// LoadingTablet.jsx
import React from 'react';
import { motion } from 'framer-motion';

const LoadingTablet = () => (
  <motion.div
    className="relative w-40 h-24 bg-[#333] rounded-2xl overflow-hidden shadow-2xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
  >
    {/* Tablet Screen */}
    <motion.div
      className="absolute inset-2 bg-[#111] rounded-lg"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [1, 1.02, 1],
        boxShadow: [
          '0 0 0 rgba(0,0,0,0)',
          '0 0 30px rgba(0, 255, 255, 0.8)',
          '0 0 40px rgba(0, 255, 255, 0.5)'
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 0.4,
        ease: 'easeInOut'
      }}
    />

    {/* Top Bezel Glow */}
    <motion.div
      className="absolute top-1 left-1 right-1 h-1 bg-[#222] rounded-t-lg"
      initial={{ opacity: 0.2 }}
      animate={{
        opacity: [0.2, 0.8, 0.2],
        backgroundColor: ['#222', '#0ff', '#222']
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />

    {/* Bottom Bezel Pulse */}
    <motion.div
      className="absolute bottom-1 left-1 right-1 h-1 bg-[#222] rounded-b-lg"
      initial={{ opacity: 0.2 }}
      animate={{
        opacity: [0.2, 0.7, 0.2],
        scaleX: [1, 1.1, 1]
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  </motion.div>
);

export default LoadingTablet;
