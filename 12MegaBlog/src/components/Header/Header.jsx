import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LogoutBtn, Container, Logo } from "../../components";

function Header() {
  const authStatus = useSelector((state) => state.authSlice.status);
  const userData = useSelector((state) => state.authSlice.userData);

  const navigate = useNavigate(); // new hook for forceful navuigation
  console.log(
    "Debug: In Header.jsx rfce redux authStatus ----------->",
    authStatus
  );
  console.log("Debug: In Header.jsx rfce redux userData --------->", userData);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
    {
      name: "Add Posts",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-[#97ffc8] rounded-2xl">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="60px" className="mx-2" />
            </Link>
          </div>

          <ul className="flex  items-center">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block py-2 px-6 duration-200 hover:bg-[#F3C301] rounded-full font-bold"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {/* Logical AND (&&) - Short-Circuit Evaluation */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          {userData ? (
            <div className="ml-auto flex items-center space-x-3 mr-3">
              <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-bold text-2xl text-gray-600 dark:text-gray-300">
                  {userData.name.charAt(0).toUpperCase()}
                </span>
              </div>

              <h6 className="font-bold ml-0">{userData.name.toUpperCase()}</h6>
            </div>
          ) : null}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
