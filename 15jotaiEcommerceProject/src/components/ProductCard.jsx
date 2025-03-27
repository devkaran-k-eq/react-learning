import React from "react";
import { useAtom } from "jotai";
import { cartAtom } from "../atom/cartAtom";
import { StarRating } from "./index";

export default function ProductCard({ product }) {
  const [cart, setCart] = useAtom(cartAtom);
  console.log(product);

  const originalPrice = Math.ceil(
    (product.price + product.price * (20 / 100)).toFixed(2)
  );

  const addToCart = () => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      return existingItem
        ? prev.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="bg-[#f8f6f3] shadow-lg p-3 flex flex-col justify-end items-center rounded-2xl">
      <img src={product.image} alt="" className="w-full h-60 object-contain" />
      <h3 className="text-lg font-semibold mt-2 text-justify">
        {product.title}
      </h3>
      <div className="flex flex-col items-center">
        <span className={`p-2 font-bolder bg-[#a0e193] rounded-2xl`}>
          {product.category.toUpperCase()}
        </span>
        <div className="flex items-center">
          <span>
            {" "}
            <StarRating rating={product.rating.rate} />{" "}
          </span>
          <span>({product.rating.count})</span>
        </div>
        {/* <div className="flex mt-4 relative"> */}
        <p className="text-red-700 font-bold text-2xl">
          ${product.price}&nbsp;
          <span className="text-gray-500 line-through font-bold text-xl">
            ${originalPrice}
          </span>
        </p>
        <button
          onClick={() => addToCart()}
          className="bg-black text-white px-4 py-2 rounded-md relative overflow-hidden group mx-3 transition-transform duration-300 hover:scale-x-110"
        >
          <span className="relative z-10">Add to Cart</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#00FF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}

// 00FF00
