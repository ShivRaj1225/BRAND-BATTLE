import React from 'react';
// import SearchAppliances from '../../HomeAppilances/SearchAppilances';

const furnitureItems = [
  { name: "New Arrivals", img: "🔵", isNew: true },
  { name: "Sofas", img: "🛋️" },
  { name: "Sofa Cum bed", img: "🛏️" },
  { name: "Dining", img: "🍽️" },
  { name: "Wardrobes", img: "🚪" },
  { name: "Shoe Racks", img: "👞" },
  { name: "Bookshelves", img: "📚" },
  { name: "TV Units", img: "📺" },
  { name: "Recliners", img: "🛋️" },
  { name: "Seating", img: "🪑" },
  { name: "Beds", img: "🛏️" },
  { name: "Coffee Tables", img: "☕" },
  { name: "Study", img: "📝" },
  { name: "Deal Zone", img: "💸" },
  { name: "50+ Stores", img: "🏬" },
];

function FurnitureRange() {
  return (
    <div className="bg-[#eef3fd] min-h-screen flex flex-col items-center py-10">
        {/* <SearchAppliances/>  */}
      <h2 className="text-3xl font-semibold text-[#192654] mb-4">
      "Transform your home into a paradise with furniture that speaks comfort and style."


      </h2>
      <div className="w-24 h-1 bg-[#192654] mb-10 rounded-full "></div>
      
      <div className="grid grid-cols-5 gap-8 max-w-6xl cursor-pointer">
        {furnitureItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center mb-2
                ${item.isNew ? 'bg-yellow-400 text-[#192654] font-bold' : 'bg-[#f8f8f8]'}`}
            >
              <span className="text-3xl">{item.img}</span>
            </div>
            <p className="text-[#192654] font-medium text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FurnitureRange;
