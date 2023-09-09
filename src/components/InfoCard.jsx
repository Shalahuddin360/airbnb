"use client";

import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const InfoCard = ({ item }) => {
  const { id, image, location, distance, transport_fare, rating } = item;
  // console.log(id, image, location, distance, transport_fare, rating);
  const [isFavorite,setFavorite] = useState(false)
  const handleFavorite =()=>{
    setFavorite((PrevIsFavorite)=>!PrevIsFavorite)
  }
  return (
    <div className="max-w-full mx-auto shadow-md rounded-lg overflow-hidden relative">
      <img
        src={image}
        className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
        alt="image"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{location}</h3>

          <div className="flex items-center mb-2">
            <FaStar className="h-5 w-5 text-yellow-500 mr-1" />
            <span className="text-gray-800">{rating}</span>
          </div>
        </div>
          <p className="text-gray-700 ">{distance}</p>
          <p className="text-gray-700 ">Transport Fee:{transport_fare}</p>
      
      </div>
      <button onClick={handleFavorite} className="absolute bottom-4 right-4 p-2 -z-30 cursor-pointer">
        {
          isFavorite ? <AiFillHeart className="w-5 h-5 text-red-600"/> : <AiOutlineHeart  className="w-5 h-5 text-red-600" />
        }
        
      </button>
    </div>
  );
};

export default InfoCard;
