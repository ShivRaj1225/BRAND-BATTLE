import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './Components/Home/Landing/Landing'
import MenuBar from './Components/Home/Navbar/MenuBar'
import ProductCard from './Components/Products/ProductCards/ProductCard'
import Compare from './Components/Comparision/Compare'
import CustomCursor from './Components/3D/CustomCursor'
import SignIn from './Components/Authentication/SignIn'
import LoginPage from './Components/Authentication/LoginPage'
import MobileHome from './Components/Products/ProductCards/Electronics/Mobiles/MobileHome'
import TabletHome from './Components/Products/ProductCards/Electronics/Tablets/TabletHome'
import FashionHome from './Components/Products/ProductCards/Fashion/FashionHome'
import HomeGen from './Components/Products/ProductCards/GenZ/GenzHome/HomeGen'
import Sports from './Components/Products/ProductCards/Sports/Sports'
import AppilancesHome from './Components/Products/ProductCards/Appilances/HomeAppilances/AppilancesHome'
import HallHome from './Components/Products/ProductCards/Appilances/Furniture/Hall/HallHome'
// import ProductGallery from './Components/Products/ProductCards/ProductGallery.jsx'

function App() {
  return (
    <Router>
      {/* <CustomCursor/> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menubar" element={<MenuBar />} />
        <Route path='/compare' element={<Compare/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/login'  element={<LoginPage/>}/>
        <Route path='/mobiles'  element={<MobileHome/>}/>
        <Route path='/tablets'  element={<TabletHome/>}/>
        <Route path='/fashion'element={<FashionHome/>}/>
        <Route path='/genz'element={<HomeGen/>}/>
        <Route path='/appliances' element={<AppilancesHome/>}/>
        <Route path='/hallhome' element={<HallHome/>}/>
        {/* <Route path='/sports'element={<Sports/>}/> */}
        {/* Add more routes here as needed */}
      </Routes>
     {/* <ProductGallery/> */}
    </Router>
  )
}

export default App
