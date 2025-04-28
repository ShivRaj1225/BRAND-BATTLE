import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import mobilesData from '../../../../Data/mobileData.json'; // adjust path

function TopTrendingMobiles() {
  const trending = mobilesData.slice(0, 5); // Top 5 trending mobiles
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
          duration: 20,
          ease: "linear"
        }
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <div className="w-full mt-10 px-6 overflow-hidden">
      <h2 className="text-3xl font-bold text-[#192654] text-center mb-6">🔥 Top Trending Mobiles</h2>
      
      <motion.div
        ref={containerRef}
        className="flex gap-6 pb-4 cursor-pointer"
        style={{ x }}
        animate={controls}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {trending.concat(trending).map((mobile, index) => ( // Duplicate for smooth infinite scroll
          <motion.div
            key={index}
            className="min-w-[250px] bg-white/40 backdrop-blur-md p-4 rounded-2xl shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={mobile.image}
              alt={mobile.name}
              className="w-32 h-32 object-contain mb-2"
            />
            <h3 className="text-lg font-bold text-[#192654]">{mobile.name}</h3>
            <p className="text-sm text-[#193654]">{mobile.price}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TopTrendingMobiles;
