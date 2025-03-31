import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { useAtom } from "jotai";
import { cartAtom, totalQuantity } from "../atom/cartAtom";


export default function Header1() {

    const [isOpen, setOpen] = useState(false);
    const [isOpenProfile, setOpenProfile] = useState(false);

    const handleDropDown = () => {
        setOpen(!isOpen);
    };

    const handleDropDownProfile = () => {
        setOpenProfile(!isOpenProfile);
    };

    const [cart] = useAtom(cartAtom);
    const [totalSelection] = useAtom(totalQuantity);

    return (
        <nav className="my-20 container mx-auto">
            <div className="mx-auto  px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2  hover:bg-gray-300"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                            onClick={handleDropDown}
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>

                            <svg
                                className={`block size-6 ${isOpen ? "hidden" : "block"}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="3.5"
                                stroke="black"
                                aria-hidden="true"
                                data-slot="icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>

                            <svg
                                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="3.5"
                                stroke="black"
                                aria-hidden="true"
                                data-slot="icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:justify-start">
                        <div className="flex items-center">
                            <Link to="/">
                                <img
                                    className="h-auto max-h-full"
                                    src="..\src\assets\logo.png"
                                    alt="Your Company"
                                    aria-expanded="true"

                                />
                            </Link>
                        </div>
                        <div className="hidden ml-6 sm:block">
                            <div className="hidden ml-6 sm:block">
                                <div className="flex space-x-4 items-center">


                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `text-2xl block pt-1 pr-4 duration-200 rounded-md px-4 pb-1 leading-none ${isActive
                                                ? "text-white bg-black hover:bg-black hover:text-white hover:shadow-2xl"
                                                : "text-black hover:bg-black hover:text-white hover:shadow-2xl"
                                            }`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/maintenance"
                                        className={({ isActive }) =>
                                            `text-2xl block pt-1 pr-4 duration-200 rounded-md px-4 pb-1 leading-none ${isActive
                                                ? "text-white bg-black hover:bg-black hover:text-white hover:shadow-2xl"
                                                : "text-black hover:bg-black hover:text-white hover:shadow-2xl"
                                            }`
                                        }
                                    >
                                        Team
                                    </NavLink>
                                    <NavLink
                                        to="/my-cart"
                                        className={({ isActive }) =>
                                            `text-2xl block pt-1 pr-4 duration-200 rounded-md px-4 pb-1 leading-none ${isActive
                                                ? "text-white bg-black hover:bg-black hover:text-white hover:shadow-2xl"
                                                : "text-black hover:bg-black hover:text-white hover:shadow-2xl"
                                            }`
                                        }
                                    >
                                        My Cart <span className="text-[#00FF00]">({totalSelection})</span>
                                    </NavLink>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                        <div className="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    className="relative flex rounded-full text-sm focus:ring-2"
                                    id="user-menu-button"
                                    aria-expanded="true"
                                    aria-haspopup="true"
                                    onClick={handleDropDownProfile}
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <svg
                                        className="h-6 w-6 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-10 lg:w-10 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                                    </svg>
                                </button>
                            </div>

                            <div
                                className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-none ${isOpenProfile ? "block" : "hidden"
                                    }`}
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu-button"
                                tabIndex={-1}
                            >
                                <NavLink
                                    to="/maintenance"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="user-menu-item-0"
                                >
                                    Your Profile
                                </NavLink>
                                <NavLink
                                    to="/my-cart"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="user-menu-item-1"
                                >
                                    My Cart <span className="font-bold">({totalSelection})</span>
                                </NavLink>
                                <NavLink
                                    to="/maintenance"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="user-menu-item-2"
                                >
                                    Sign out
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            <div className="sm:hidden mt-4" id="mobile-menu">
                <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>

                    <NavLink
                        to="/my-cart"
                        className={({ isActive }) =>
                            `text-2xl m-2 block pt-1 pr-4 duration-200 rounded-md px-4 pb-1 leading-none ${isActive
                                ? "text-white bg-black hover:bg-black hover:text-white hover:shadow-2xl"
                                : "text-black hover:bg-black hover:text-white hover:shadow-2xl"
                            }`
                        }
                    >
                        My Cart
                    </NavLink>
                    <NavLink
                        to="/recommendations"
                        className={({ isActive }) =>
                            `text-2xl m-2 block pt-1 pr-4 duration-200 rounded-md px-4 pb-1 leading-none ${isActive
                                ? "text-white bg-black hover:bg-black hover:text-white hover:shadow-2xl"
                                : "text-black hover:bg-black hover:text-white hover:shadow-2xl"
                            }`
                        }
                    >
                        Recommendations
                    </NavLink>
                    <NavLink
                        to="/Login"
                        className={({ isActive }) =>
                            `text-2xl m-2 block pt-1 pr-4 duration-200 rounded-md px-4 pb-1 leading-none ${isActive
                                ? "text-white bg-black hover:bg-black hover:text-white hover:shadow-2xl"
                                : "text-black hover:bg-black hover:text-white hover:shadow-2xl"
                            }`
                        }
                    >
                        Login
                    </NavLink>

                </div>
            </div>
        </nav>


    )
}