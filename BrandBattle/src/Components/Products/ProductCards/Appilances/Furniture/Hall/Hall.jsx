import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hall() {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/hallhome'); // make sure '/hallhome' route is correctly set in your router
  };

  return (
    <div className="w-full h-full relative cursor-pointer" onClick={handleImageClick}>
      <img
        src="https://cdn.pixabay.com/photo/2018/09/15/09/06/home-3678961_1280.jpg"
        alt="Beautiful hall"
        className="w-full h-full object-cover"
      />
      <h1 className="absolute top-4 left-4 z-10 text-white text-2xl font-bold bg-black bg-opacity-50 p-2 rounded">
        Well Furnished Hall
      </h1>
    </div>
  );
}

export default Hall;
