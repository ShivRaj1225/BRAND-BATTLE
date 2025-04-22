import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './Components/Home/Landing/Landing'
import MenuBar from './Components/Home/Navbar/MenuBar'
import ProductCard from './Components/Products/ProductCards/ProductCard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menubar" element={<MenuBar />} />
        {/* Add more routes here as needed */}
      </Routes>
     
    </Router>
  )
}

export default App
