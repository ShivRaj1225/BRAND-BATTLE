import React from 'react'
import HeadNav from '../Navbar/HeadNav'
import HeadTag from './HeadTag'
import HomeThree from '../../3D/HomeThree'
import LandingBtn from './LandingBtn'
import { ArrowDown } from 'lucide-react'
import ProductCard from '../../Products/ProductCards/ProductCard'
import './Landing.css' // Import the CSS file for the scrolling text
import ProductGallery from '../../Products/ProductCards/ProductGallery.JSX'
import Brand from '../../EBrand/Brand'
import About from './About/About'
import Footer from '../Footer/Footer'
import TopTrendingTablet from '../../Products/ProductCards/Electronics/Tablets/TopTrendingTablet'
import TopTrendingMobiles from '../../Products/ProductCards/Electronics/Mobiles/TopTrendingMobiles'
import FurnitureRange from '../../Products/ProductCards/Appilances/Furniture/FurnitureRange'

// import Tagbar from '../../TaggedCategory/Tagbar'


function Landing() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <div className='relative w-full  bg-[#eef3fd] flex flex-col items-center justify-center'>
      <HeadNav />
      {/* <Tagbar/> */}
      <div className='relative w-full h-screen bg-zinc-800'>
        <HomeThree />
        <HeadTag />
        <LandingBtn />

        <hr />
        {/* Down arrow button */}
        <button
          onClick={handleScrollDown}
          className='absolute bottom-24 right-5 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-all'
        >
          <ArrowDown className='text-black w-6 h-6' />
        </button>
      </div>
      {/* <ProductCard/> */}
      {/* Scrolling text banner */}
      {/* Neon scrolling banner */}
      <div className="w-full bg-[#192654] overflow-hidden relative py-4 bottom-20">
        {/* Left fade */}
        <div className="absolute top-0 left-0 w-16 h-full z-10 pointer-events-none fade-left" />

        {/* Right fade */}
        <div className="absolute top-0 right-0 w-16 h-full z-10 pointer-events-none fade-right" />

        {/* Light sweep effect */}
        <div className="pointer-light absolute top-0 left-0 h-full w-full z-10 pointer-events-none" />

        <div className="scroll-container whitespace-nowrap animate-scroll flex">
          <span className="neon-text mx-4">
            BRANDS • SMART COMPARISONS • GENUINE PRICES • AI GUIDANCE • TRUSTED RATINGS • PRODUCT INSIGHTS • EXPERT REVIEWS •
            BRANDS • SMART COMPARISONS • GENUINE PRICES • AI GUIDANCE • TRUSTED RATINGS • PRODUCT INSIGHTS • EXPERT REVIEWS •
          </span>
          <span className="neon-text mx-4">
            BRANDS • SMART COMPARISONS • GENUINE PRICES • AI GUIDANCE • TRUSTED RATINGS • PRODUCT INSIGHTS • EXPERT REVIEWS •
            BRANDS • SMART COMPARISONS • GENUINE PRICES • AI GUIDANCE • TRUSTED RATINGS • PRODUCT INSIGHTS • EXPERT REVIEWS •
          </span>
        </div>
        

      </div>




      <div className="productCard flex overflow-x-auto whitespace-nowrap gap-4 py-6 px-4 max-w-full scrollbar-thin scrollbar-thumb-gray-400">
        <ProductGallery />
      </div>
      <Brand />
      <div className="about w-full h-[100vh]">
       <TopTrendingMobiles/>
       <TopTrendingTablet/>
       <FurnitureRange/>
      {/* <About /> */}
      <Footer/>
        </div>
    </div>
  )
}

export default Landing
