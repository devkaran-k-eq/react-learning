import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LogoutBtn, Container, Logo } from "../../components";

function Header() {
  const authStatus = useSelector((state) => state.authSlice.status);
  const userData = useSelector((state) => state.authSlice.userData);
  
  const navigate = useNavigate(); // new hook for forceful navuigation
  console.log("authStatus ----------->", authStatus);
  console.log("userData --------->", userData);

  // useEffect(() => {
  //   authService
  //     .getCurrentUser()
  //     .then((userData) => {
  //       console.log("userData from Post", setUsername(userData.name));
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user: ++++++++++++++", error); // Log the error
  //     });
  // }, [authStatus]);

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
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Posts",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500 rounded-2xl">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="60px" className="mx-2" />
            </Link>
          </div>

          <ul className="flex ml-auto items-center">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block py-2 px-6 duration-200 hover:bg-blue-100 rounded-full font-bold"
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
              <div className="flex items-center space-x-3">
                
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <span className="font-bold text-2xl text-gray-600 dark:text-gray-300">
                    {userData.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                
                <h6 className="font-bold ml-0">
                  {userData.name.toUpperCase()}
                </h6>
              </div>
            ) : null
          }
        </nav>
      </Container>
    </header>
  );
}

export default Header;
