import React from 'react';
import { motion } from 'framer-motion';
import products from '../../../Data/productsFashion';

function LabelFashion() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white  p-4 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[250px] object-contain mb-4"
            />
            <div className="text-center">
              {product.label && (
                <p className="text-sm text-gray-500 mb-1">{product.label}</p>
              )}
              <h2 className="font-bold text-[#192654]">{product.brand}</h2>
              <p className="text-gray-600">{product.name}</p>
              <p className="font-semibold text-[#192654] mt-2">{product.price}</p>
             <div className="btn flex items-baseline justify-center mt-2">
             {/* <button className='bg-[#192654] p-3 text-[#eef3fd]'>View</button> */}
             <button className='bg-[#192654] p-3 text-[#eef3fd]'>Compare</button>
             </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default LabelFashion;
