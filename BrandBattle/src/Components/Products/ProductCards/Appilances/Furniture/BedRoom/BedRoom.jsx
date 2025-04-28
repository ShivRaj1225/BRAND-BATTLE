import React from 'react';
// import bedroomImage from '../Furniture/ImageFurniture/bedroom.jpeg';

function BedRoom() {
  return (
    <div className="w-full h-full relative">
      <img
        src='https://cdn.pixabay.com/photo/2023/09/09/06/33/bedroom-8242521_1280.jpg'
        alt="Beautiful Bedroom"
        className="w-full h-full object-cover"
      />
      <h1 className='absolute z-10'>Well Furnished Bedroom </h1>
    </div>
  );
}

export default BedRoom;
