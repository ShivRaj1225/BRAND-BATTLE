import React from 'react';
import { ShoppingCart } from 'lucide-react';

function ProductCard({ image, title, price, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-60 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer p-4 m-3 flex flex-col justify-between"
    >
      <div className="h-36 flex items-center justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="max-h-full object-contain rounded-lg"
        />
      </div>
      <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
      <div className="flex justify-between items-center mt-2">
        <p className="text-indigo-900 text-xl font-bold">₹{price}</p>
        <button className="text-white bg-indigo-900 p-2 rounded-full hover:bg-indigo-700">
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
