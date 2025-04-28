import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import { ArrowRightCircle } from 'lucide-react';
import sportsProducts from '../../../../Data/sportsProducts.json'; // importing JSON file

function SportsCard() {
  const trending = sportsProducts.slice(0, 8); // Top 8 trending sports products
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <div className="w-full mt-10 px-6 overflow-hidden">
      <h2 className="text-3xl font-bold text-[#192654] text-center mb-6">🏆 Top Trending Sports Products</h2>

      <motion.div
        ref={containerRef}
        className="flex gap-6 pb-4 cursor-pointer"
        style={{ x }}
        animate={controls}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {trending.concat(trending).map((product, index) => (
          <motion.div
            key={index}
            className="min-w-[250px] bg-white/40 backdrop-blur-md p-4 rounded-2xl shadow-lg flex flex-col items-center relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain mb-2"
            />
            <h3 className="text-lg font-bold text-[#192654] text-center">{product.name}</h3>
            <p className="text-sm text-[#193654]">{product.price}</p>
            <ArrowRightCircle className="absolute bottom-3 right-3 text-[#192654]" size={24} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default SportsCard;
