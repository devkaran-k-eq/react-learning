import React from "react";

export default function StarRating({ rating }) {
    console.log("rating", rating);
    
    return (
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-2xl ${star <= rating ? "text-black" : "text-gray-400"} pr-0.5`}
          >
            ★
          </span>
        ))}
      </div>
    );
  }
