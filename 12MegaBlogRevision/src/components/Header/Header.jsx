import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {Container, LogoutBtn, Logo} from "../../components"
import { Link } from "react-router";
const Header = function () {
  const authStatus = useSelector((state) => state.authSliceReducer.status);

  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "signup",
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
      slug: "/add-posts",
      active: authStatus,
    },
  ];

  return(
    <header className="px-3 bg-gray-200 shadow">
        <Container>
            <nav className="flex">
                <div>
                    <Link to="/">
                      <Logo width="70px"/>
                    </Link>
                </div>

                <ul className="flex mx-auto">
                  {
                    navItems.map(
                      (items) => 
                        items.active ? 
                                    (<li key={items.name}>
                                      <button 
                                        className="inline-block py-2 px-6 duration-200 hover:bg-blue-300"
                                        onClick={() => navigate(items.slug)}>
                                              {items.name}
                                      </button>
                                    </li>) : null
                    )
                  }

                  {
                    authStatus && (
                      <li>
                        <LogoutBtn/>
                      </li>
                    )
                  }
                </ul>
            </nav>
        </Container>
    </header>
  )
};

export default Header;
