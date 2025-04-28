import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Brand() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const brands = [
    { name: 'Amazon', logo: 'https://m.media-amazon.com/images/I/51HCHFclmmL.jpg' },
    { name: 'Flipkart', logo: 'https://www.realtynmore.com/wp-content/uploads/2015/09/Flipkart.jpg' },
    { name: 'Myntra', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjocBZN4dbqqyk0VHsqHjyrybpCmVHRGFcQ&s' },
    { name: 'Paytm Mall', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfKL8Zyq1KYU5C8t5JYYnRZ299X31jJFelg&s' },
    { name: 'Snapdeal', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4Fhv5u9zFfuG2FOyT3dxpoiG5iTlfPMsLQ&s' },
    { name: 'eBay', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5f0m_Swk84tY3gGbYgRl6A3743mVX2zPJeg&s' },
    { name: 'Meesho', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4fYAOpYco4wStHQ6v0WRbPcTAbel-EAd5jQ&s' },
    { name: 'Shopsy', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Shopsy.jpg' },
    { name: 'Nykaa', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhqq4poRqPWkYlT2PxRXN9aaLsWg2YcuWsg&s' },
    { name: 'Croma', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRBZpwKcwHpZYmzcVxYjXsb5p7-dIlKloHA&s' },
  ];

  return (
    <div className="w-full py-8 mt-12 px-4 flex flex-col items-center justify-center"> 
     {/* bg-gradient-to-br from-[#192654] via-[#070c1e] to-[#213075] */}
      <motion.h2
        className="text-[#192654] text-2xl sm:text-3xl font-bold uppercase mb-6 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Marketplace Allies


      </motion.h2>

      <div className="flex items-center justify-evenly gap-4 cursor-pointer">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            // className="relative p-0.5 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 shadow-md cursor-pointer"
            onClick={() => setClickedIndex(clickedIndex === index ? null : index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <motion.div
              className="bg-[#192654] rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center overflow-hidden"
              animate={{ x: clickedIndex === index ? 12 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-14 h-14 object-contain rounded-full"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white opacity-10 animate-pulse pointer-events-none"
              style={{ zIndex: -1 }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Brand;
