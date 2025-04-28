import React from 'react'
import { ArrowRightCircle } from 'lucide-react'
import BedRoom from '../Furniture/BedRoom/BedRoom'
import Hall from '../Furniture/Hall/Hall'
import WorkingRoom from '../Furniture/WorkingRoom/WorkingRoom'
import Livingroom from '../Furniture/LivingRoom/Livingroom'
import KIdsRoom from '../Furniture/Kids/KIdsRoom'
import HomeDecor from '../Furniture/HomeDecor/HomeDecor'
import Kitchen from '../Furniture/Kitchen/Kitchen'
import HomeAssets from '../Furniture/HomeAssets/HomeAssets'

function AppilancesCard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-4 grid-rows-6 gap-4 h-[150vh] cursor-pointer">
        {/* Big Card 1 */}
        <div className="col-span-2 row-span-5 bg-blue-200 flex items-center justify-center rounded-lg relative overflow-hidden">
        <Hall/>
          <ArrowRightCircle className="absolute bottom-3 right-3 text-white" size={32} />
        </div>

        {/* Small Cards */}
        <div className="col-span-1 row-span-2 bg-orange-100 flex items-center justify-center rounded-lg relative overflow-hidden">
         <WorkingRoom/>
          <ArrowRightCircle className="absolute bottom-3 right-3 text-black" size={24} />
        </div>

        <div className="col-span-1 row-span-2 bg-orange-100 flex items-center justify-center rounded-lg relative overflow-hidden">
         <Livingroom/>
          <ArrowRightCircle className="absolute bottom-3 right-3 text-black" size={24} />
        </div>

        {/* Vertical Card */}
        <div className="col-span-1 row-span-3 bg-black flex items-center justify-center rounded-lg p-4 relative overflow-hidden">
          <BedRoom/>
          <h1 className='absolute z-10'>Well Furnished Bedroom </h1>
          {/* <h1 className="font-extrabold font-sans text-[3.3rem] leading-10 text-[#C4E002]">Own Your Vibe. Wear Your Power.</h1> */}
          <ArrowRightCircle className="absolute bottom-3 right-3 text-[#C4E002]" size={28} />
        </div>

        <div className="col-span-1 row-span-3 bg-black flex items-center justify-center rounded-lg p-4 relative overflow-hidden">
         <HomeAssets/>
         <ArrowRightCircle className="absolute bottom-3 right-3 text-[#C4E002]" size={28} />

          {/* <h1 className=" text-[#C4E002] font-extralight text-[3.8rem]">Know Your Fashion !</h1> */}
        </div>
        {/* Big Card 2 */}
        <div className="col-span-2 row-span-2 bg-pink-200 flex items-center justify-center rounded-lg relative overflow-hidden">
         <HomeDecor/>
          <ArrowRightCircle className="absolute bottom-3 right-3 text-white" size={32} />
        </div>

        {/* Multiple Small Cards */}
        <div className="col-span-1 row-span-1 bg-yellow-100 flex items-center justify-center rounded-lg relative overflow-hidden">
         <KIdsRoom/>
          <ArrowRightCircle className="absolute bottom-3 right-3 text-black" size={24} />
        </div>

        <div className="col-span-1 row-span-1 bg-yellow-100 flex items-center justify-center rounded-lg relative overflow-hidden">
         <Kitchen/>
          <ArrowRightCircle className="absolute bottom-3 right-3 text-black" size={24} />
        </div>

        <div className="col-span-1 row-span-1 bg-yellow-100 flex items-center justify-center rounded-lg relative overflow-hidden">
         
          <ArrowRightCircle className="absolute bottom-3 right-3 text-black" size={24} />
        </div>

        <div className="col-span-1 row-span-1 bg-yellow-100 flex items-center justify-center rounded-lg relative overflow-hidden">
          
          <ArrowRightCircle className="absolute bottom-3 right-3 text-black" size={24} />
        </div>
      </div>
    </div>
  )
}

export default AppilancesCard
