import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import "/src/App.css";
import { MyCart } from "./index";
import { useAtom } from "jotai";
import { cartAtom } from "../atom/cartAtom";

export default function Header() {
  const [cart] = useAtom(cartAtom);
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <nav className="my-5 container mx-auto ">
      <div className="d-flex flex-nowrap align-items-center columns-2 shadow-2xl p-3 ">
        <Link to="/">
          <img src="..\src\assets\logo.png" alt="" />
        </Link>

        {/* <div className="invisible sm:visible">
          <form className="d-flex justify-content-center" role="search">
            <input
              className="form-control search "
              type="search"
              placeholder="Search in products..."
              aria-label="Search"
            />
          </form>
        </div> */}

        <div className="float-end">
          <input type="checkbox" id="sidebar-active" />
          <label
            htmlFor="sidebar-active"
            className="open-sidebar-button float-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 -960 960 960"
              width="50"
              fill="#5f6368"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </label>

          <div className="links-container">
            <div className="side-bar-style">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-3xl block py-2 pr-4 pl-3 duration-200 rounded-md hover:shadow-2xl ${
                    isActive
                      ? "bg-black text-white rounded-md px-4"
                      : "text-black"
                  }`
                }
              >
                Home
              </NavLink>
              <button
                className={`text-3xl block py-2 pr-4 pl-3 duration-200 rounded-md hover:shadow-2xl 
                    hover:bg-black hover:text-white hover:rounded-md px-4
                      text-black
                  }`}
                onClick={() => setCartOpen(true)}
              >
                My Cart {cart.length}
              </button>
            </div>
          </div>
        </div>
        {/* <MyCart isOpen={isCartOpen} onClose={() => setCartOpen(false)} /> */}
      </div>
    </nav>
  );
}
