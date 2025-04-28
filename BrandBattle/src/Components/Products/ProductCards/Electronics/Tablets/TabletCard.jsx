import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function TabletCard({ tablet }) {
    return (
        <motion.div
            className="bg-[#90a8fc] backdrop-blur-lg rounded-2xl shadow-2xl p-5 w-72 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
        >
            <div className="h-36 flex items-center justify-center mb-4">
                <img
                    src={tablet.image}
                    alt={tablet.name}
                    className="max-h-full object-contain rounded-lg"
                />
            </div>
            <h2 className="text-xl font-bold text-white mt-4">{tablet.name}</h2>
            <p className="text-sm text-cyan-100 mt-2">{tablet.description}</p>

            <div className="flex justify-between items-center mt-4 text-white">
                <span className="text-lg font-bold">{tablet.price}</span>
                <span className="text-yellow-400">⭐ {tablet.rating}</span>
            </div>

            <div className="flex gap-2 mt-5">
                <Link to={`/tablets/${tablet.id}`}>
                    <button className="bg-[#192654] hover:bg-[#eef3fd] hover:text-[#192654] text-white p-4 rounded-xl w-full transition-all duration-300">
                        View
                    </button>
                </Link>
                <button className="bg-[#eef3fd] hover:bg-[#192654] hover:text-[#eef3fd] text-[#192654] py-1 rounded-xl w-full transition-all duration-300">
                    Compare Now
                </button>
            </div>
        </motion.div>
    );
}

export default TabletCard;
