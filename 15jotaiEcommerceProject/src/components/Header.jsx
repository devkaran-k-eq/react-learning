import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import "/src/App.css";
import { MyCart } from "./index";
import { useAtom } from "jotai";
import { cartAtom, totalQuantity } from "../atom/cartAtom";

export default function Header() {
  const [cart] = useAtom(cartAtom);
  const [totalSelection] = useAtom(totalQuantity);


  return (
    <nav className="my-5 container mx-auto">
      <div className="flex justify-between items-center p-3">
        <Link to="/">
          <img src="..\src\assets\logo.png" alt="Logo" />
        </Link>

        <div className="flex">
          {/* <NavLink
            to="/"
            className={({ isActive }) =>
              `text-3xl block py-2 pr-4 pl-3 duration-200 rounded-md hover:shadow-2xl ${
                isActive ? "bg-black text-white rounded-md px-4" : "text-black"
              }`
            }
          >
            Home
          </NavLink> */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? "rounded-md px-4 text-white bg-black"
                  : "rounded-md px-4 text-black"
              } text-3xl block py-2 h-15 pr-4 duration-200 rounded-md hover:shadow-2xl hover:bg-black hover:text-white hover:rounded-md px-4 text-black mr-2.5`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/my-cart"
            className={({ isActive }) =>
              `${
                isActive
                  ? "rounded-md px-4 text-white bg-black"
                  : "rounded-md px-4 text-black"
              } text-3xl block py-2 h-15  pr-4  duration-200 rounded-md hover:shadow-2xl hover:bg-black hover:text-white hover:rounded-md px-4 text-black`
            }
          >
            <button className="text-3xl block py-2 pr-4 pl-3 duration-200 rounded-md hover:shadow-2xl hover:bg-black hover:text-white hover:rounded-md px-4 ">
              My Cart <span className="text-[#00FF00]">({totalSelection}) </span>
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
