import React, { useState, useEffect } from "react";
import "./App.css";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); // always declared useDispatch at top level

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        console.log("userData", userData);
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-scrren flex flex-wrap content-between bg-grey-400">
      <div className="w-full block">
        <Header />
        <main>
          {" "}
          <Outlet />
        </main>
        <Footer />
      </div>
      
    </div>
  ) : null;
}

export default App;
