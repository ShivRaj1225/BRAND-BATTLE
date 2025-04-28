import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import MegaDropdown from './MegaDropdown';
import { FiChevronDown } from 'react-icons/fi'; // arrow icon
import { Smartphone, Tablet, Laptop, Tv, Camera, WashingMachine, Cpu, Headphones, Car, Brush, Shirt, Smile, VolleyballIcon } from 'lucide-react';


const tags = [
    { title: "Mobiles", path: "/mobiles", icon: Smartphone },
    { title: "Tablets", path: "/tablets", icon: Tablet },
    { title: "Laptops", path: "/laptops", icon: Laptop },
    { title: "TVs", path: "/tvs", icon: Tv },
    { title: "Electronics", path: "/electronics", icon: Camera },
    { title: "Appliances", path: "/appliances", icon: WashingMachine },
    { title: "Computers", path: "/computers", icon: Cpu },
    { title: "Accessories", path: "/accessories", icon: Headphones },
    { title: "Auto", path: "/auto", icon: Car },
    { title: "Beauty", path: "/beauty", icon: Brush },
    { title: "Fashion", path: "/fashion", icon: Shirt },
    { title: "Sports", path: "/sports", icon: VolleyballIcon },
    { title: "GenZ", path: "/genz", icon: Smile },
];


function Tagbar() {
    const [hoveredTag, setHoveredTag] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative w-full bg-[#192654] text-white flex flex-col items-center justify-evenly">
            {/* Main Tagbar */}
            <div className="flex justify-center items-center space-x-6 py-4 text-sm font-semibold relative z-20">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer"
                        onMouseEnter={() => !isMobile && setHoveredTag(tag.title)}
                        onMouseLeave={() => !isMobile && setHoveredTag(null)}
                        onClick={() => isMobile && setHoveredTag(prev => prev === tag.title ? null : tag.title)}
                    >
                        <Link to={tag.path} className="hover:text-cyan-400 transition flex items-center gap-1">
                            {tag.icon && <tag.icon size={18} />}
                            {tag.title}
                            <motion.div
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: hoveredTag === tag.title ? 1 : 0, y: hoveredTag === tag.title ? 0 : -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FiChevronDown size={14} />
                                <motion.div whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 400 }}>
                                    <tag.icon size={18} />
                                </motion.div>

                            </motion.div>
                        </Link>


                        {/* Mega Menu */}
                        <AnimatePresence>
                            {hoveredTag === tag.title && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute left-1/2 transform -translate-x-1/2 top-12 z-30"
                                >
                                    <MegaDropdown category={tag.title} onClose={() => setHoveredTag(null)} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* Wavy SVG */}
            <div className="w-full overflow-hidden leading-none relative z-10 -mt-2">
                <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-[30px]">
                    <path d="M0,30 C150,70 350,0 500,30 L500,00 L0,0 Z" fill="#192654"></path>
                </svg>
            </div>
        </div>
    );
}

export default Tagbar;
