import React from "react";
import { cartAtom, totalAtom } from "../atom/cartAtom";
import { useAtom } from "jotai";

export default function MyCart({ isOpen, onClose }) {
  const [cart, setCart] = useAtom(cartAtom);
  const total = useAtom(totalAtom);
  console.log("MyCart", cart);
  
  const removeFromCart = (id) => {
    setCart(
      (prev) => (
        prev.map((item) => (
          item.id !== id
        ))
      )
    )
  }
  return (
    <div
      className={`fixed top-0 h-full w-1/2 bg-white shadow-xl transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="absolute top-3 right-4 text-2xl"
        onClick={onClose}
      >✖</button>

      <h2 className="text-xl font-bold p-4">My Cart</h2>
      {cart.length === 0 ? (
        <p className="p-4">Cart is Empty</p>
      ) : (
        <ul>
          {cart.map( (item) => (
          <li key={item.id} className="flex items-center justify-between border-b py-2">
            <img src={item.image} alt={item.title} className="w-12 h-12 object-contain"/>
            <span>{item.title} - ${item.price} * {item.quantity} </span>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove ✖</button>
          </li>
          ) )}
        </ul>
      )}

      <h3 className="p-4 text-lg font-bold">Total: {total} </h3>
    </div>
  );
}
