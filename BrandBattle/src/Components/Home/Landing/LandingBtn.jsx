import React from 'react'
import { useNavigate } from 'react-router-dom' // Import useNavigate

function LandingBtn() {
  const navigate = useNavigate() // Initialize navigate function

  const handleCompareNow = () => {
    navigate('/compare') // Route to Compare.jsx
  }

  return (
    <div className='absolute bottom-28 flex gap-10 w-full items-center justify-center'>
      <button
        onClick={handleCompareNow} // Add onClick handler
        className='border-2 border-[#1b2a4e] text-[#1b2a4e] px-6 py-4 rounded-lg font-bold hover:bg-[#1b2a4e] hover:text-white transition-all'
      >
        Compare Now
      </button>

      <button className='border-2 border-[#1b2a4e] text-[#1b2a4e] px-6 py-4 rounded-lg font-bold hover:bg-[#1b2a4e] hover:text-white transition-all'>
        Talk to AI
      </button>
    </div>
  )
}

export default LandingBtn