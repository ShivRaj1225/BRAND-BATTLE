import React from 'react';
import { ArrowDownRightIcon } from 'lucide-react';

function ProductCard({ image, title, onClick = () => {} }) {
  return (
    <div
      onClick={onClick}
      className="w-60 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer p-4 m-1 flex flex-col justify-between"
    >
      {/* Image Section */}
      <div className="h-36 flex items-center justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="max-h-full object-contain rounded-lg"
        />
      </div>

      {/* Title & Button */}
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-lg font-extrabold text-[#192654] truncate">{title}</h2>
        <button className="text-white bg-indigo-900 p-2 rounded-full hover:bg-indigo-700">
          <ArrowDownRightIcon size={18} />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
