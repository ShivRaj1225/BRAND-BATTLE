import React from 'react';
import { motion } from 'framer-motion';

const LoadingPhone = () => (
  <motion.div
    className="relative w-24 h-48 bg-[#333] rounded-3xl overflow-hidden shadow-lg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
  >
    {/* Screen */}
    <motion.div
      className="absolute top-2 left-1 right-1 h-[75%] bg-[#111] rounded-lg"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        scale: [1, 1.05, 1],
        boxShadow: [
          '0 0 0 rgba(0, 0, 0, 0)', 
          '0 0 20px 2px rgba(255, 255, 255, 0.8)',
          '0 0 25px 5px rgba(255, 255, 255, 0.5)'
        ],
      }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 0.3,
      }}
    />

    {/* Glow Effect */}
    <motion.div
      className="absolute top-2 left-1 right-1 h-[75%] bg-[#111] rounded-lg"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.5, 1, 0.5],
        boxShadow: [
          '0 0 10px rgba(255, 255, 255, 0.1)', 
          '0 0 40px rgba(0, 255, 255, 0.7)', 
          '0 0 70px rgba(0, 255, 255, 0.3)'
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.5,
        repeatDelay: 0.5,
        ease: 'easeInOut',
      }}
    />

    {/* Bottom bezel with subtle animation */}
    <motion.div
      className="absolute bottom-2 left-0 right-0 h-6 bg-[#222] rounded-b-3xl"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.7, 0],
        scaleX: [0, 1, 0],
        scaleY: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 0.2,
        ease: 'easeInOut',
      }}
    />
  </motion.div>
);

export default LoadingPhone;
