import React from 'react'
import HeadNav from '../Navbar/HeadNav'
import HeadTag from './HeadTag'
import HomeThree from '../../3D/HomeThree'

function Landing() {
  return (
    <div className='relative w-full h-screen bg-[#eef3fd] flex flex-col items-center justify-center'>
     <HeadNav/>
     <div className=''>
     {/* <HomeThree/> // 3D Model Component */}
     <HeadTag/>
     </div>
    </div>
  )
}

export default Landing
