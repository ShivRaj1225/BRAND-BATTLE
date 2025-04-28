import React from 'react';
import { ArrowRightCircle } from 'lucide-react'; // imported the icon
import HomeThree from '../../../../3D/HomeThree';

function GenCard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-4 grid-rows-6 gap-4 h-screen cursor-pointer">
        {/* Big Card 1 */}
        <div className="col-span-2 row-span-3 bg-blue-200 flex items-center justify-center rounded-lg relative overflow-hidden">
          <img
            src="https://fashionweekonline.com/wp-content/uploads/2023/06/Gen-Z-Fashion-Trends-A-Guide-for-Millennials-Featured.jpg"
            alt="Big Card"
            className="w-full h-full object-cover rounded-lg"
          />
         
          <ArrowRightCircle className="absolute bottom-3 right-3 text-white" size={32} />
        </div>

        {/* Small Cards */}
        <div className="col-span-1 row-span-1 bg-orange-100 flex items-center justify-center rounded-lg relative overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPwcOsK5FLFywJdpS3vjt9BbQ-LccVARQbg&s"
            alt="Small Card 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <ArrowRightCircle className="absolute bottom-3 right-3 text-black" size={24} />
        </div>

        <div className="col-span-1 row-span-1 bg-orange-100 flex items-center justify-center rounded-lg relative overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgstqbOKa7W19Qj8grwY-bCJal_Uu9PPZlmA&s"
            alt="Small Card 2"
            className="w-full h-full object-cover rounded-lg"
          />
          <ArrowRightCircle className="absolute bottom-3 right-3 text-black" size={24} />
        </div>

        {/* Vertical Card */}
        <div className="col-span-1 row-span-2 bg-black flex items-center justify-center rounded-lg p-4 relative overflow-hidden">
          <h1 className="font-extrabold font-sans text-[3.3rem] leading-10 text-[#C4E002]">Own Your Vibe. Wear Your Power.</h1>
          <ArrowRightCircle className="absolute bottom-3 right-3 text-[#C4E002]" size={28} />
        </div>

        <div className="col-span-1 row-span-2 bg-black flex items-center justify-center rounded-lg p-4 relative overflow-hidden">
          <HomeThree/>
          <h1 className=" text-[#C4E002] font-extralight text-[3.8rem]">Know Your Fashion !</h1>
        </div>
        {/* Big Card 2 */}
        <div className="col-span-2 row-span-2 bg-pink-200 flex items-center justify-center rounded-lg relative overflow-hidden">
          <img
            src="https://img.buzzfeed.com/buzzfeed-static/static/2022-03/18/20/enhanced/6333e546d7ae/original-8254-1647636571-5.jpg?crop=1581:830;0,0%26downsize=1250:*"
            alt="Big Card 2"
            className="w-full h-full object-cover rounded-lg"
          />
          <ArrowRightCircle className="absolute bottom-3 right-3 text-white" size={32} />
        </div>

        {/* Multiple Small Cards */}
        <div className="col-span-1 row-span-1 bg-yellow-100 flex items-center justify-center rounded-lg relative overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDAXS6G5fzlo3_ppiibnbm4O9LAa9LzeZoxQ&s"
            alt="Small Card 3"
            className="w-full h-full object-cover rounded-lg"
          />
          <ArrowRightCircle className="absolute bottom-3 right-3 text-black" size={24} />
        </div>

        <div className="col-span-1 row-span-1 bg-yellow-100 flex items-center justify-center rounded-lg relative overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrNvQnwJbyqnSVb0ulnfutsLSbHqEKpeCBw&s"
            alt="Small Card 4"
            className="w-full h-full object-cover rounded-lg"
          />
          <ArrowRightCircle className="absolute bottom-3 right-3 text-black" size={24} />
        </div>

        <div className="col-span-1 row-span-1 bg-yellow-100 flex items-center justify-center rounded-lg relative overflow-hidden">
          <img
            src="https://img.buzzfeed.com/buzzfeed-static/static/2022-03/18/20/enhanced/1da853fddce9/original-815-1647636620-9.jpg?crop=1244:829;0,0&resize=1250:830&resize=1200:*"
            alt="Small Card 5"
            className="w-full h-full object-cover rounded-lg"
          />
          <ArrowRightCircle className="absolute bottom-3 right-3 text-black" size={24} />
        </div>

        <div className="col-span-1 row-span-1 bg-yellow-100 flex items-center justify-center rounded-lg relative overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XkCoIud3KcgwXeReMaJn18gqN-pziOWuVQ&s"
            alt="Small Card 6"
            className="w-full h-full object-cover rounded-lg"
          />
          <ArrowRightCircle className="absolute bottom-3 right-3 text-black" size={24} />
        </div>
      </div>
    </div>
  );
}

export default GenCard;
