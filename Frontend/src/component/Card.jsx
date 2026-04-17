import React from 'react'
import {FaStar} from "react-icons/fa"

const Card = ({thumbnail,title,category,rating,price}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Thumbnail */}
      <img className="w-full h-48 object-cover" src={thumbnail} alt={title} />
      
      <div className="p-4">
        {/* Category */}
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{category}</span>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">{title}</h3>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"} />
          ))}
          <span className="ml-2 text-sm text-gray-600">({rating}.0)</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-800">₹{price}</span>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card