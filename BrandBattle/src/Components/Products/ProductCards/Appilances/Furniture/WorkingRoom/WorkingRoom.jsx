import React from 'react'

function WorkingRoom() {
  return (
    <div className="w-full h-full relative">
      <img
        src='https://cdn.pixabay.com/photo/2019/09/27/10/00/children-4508017_1280.jpg'
        alt="Beautiful Bedroom"
        className="w-full h-full object-cover"
      />
      <h1 className='absolute z-10'>Well Furnished Bedroom </h1>
    </div>
  )
}

export default WorkingRoom
