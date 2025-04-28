import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function SportsEquipmentCard({ equipment }) {
  if (!equipment) {
    // Equipment is undefined, so don't render anything or show a fallback
    return null;
  }

  return (
    <motion.div
      className="bg-[#ffd180] backdrop-blur-lg rounded-2xl shadow-2xl p-5 w-72 hover:scale-105 transition-transform duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="h-36 flex items-center justify-center mb-4">
        <img
          src={equipment.image}
          alt={equipment.name}
          className="max-h-full object-contain rounded-lg"
        />
      </div>

      <h2 className="text-xl font-bold text-white mt-4">{equipment.name}</h2>
      <p className="text-sm text-white/80 mt-2">{equipment.description}</p>

      <div className="flex justify-between items-center mt-4 text-white">
        <span className="text-lg font-bold">{equipment.price}</span>
        <span className="text-yellow-300">⭐ {equipment.rating}</span>
      </div>

      <div className="flex gap-2 mt-5">
        <Link to={`/sports/${equipment.id}`}>
          <button className="bg-[#ff8f00] hover:bg-[#fff3e0] hover:text-[#ff8f00] text-white p-4 rounded-xl w-full transition-all duration-300">
            View
          </button>
        </Link>
        <button className="bg-[#fff3e0] hover:bg-[#ff8f00] hover:text-white text-[#ff8f00] py-1 rounded-xl w-full transition-all duration-300">
          Compare Now
        </button>
      </div>
    </motion.div>
  );
}

export default SportsEquipmentCard;
