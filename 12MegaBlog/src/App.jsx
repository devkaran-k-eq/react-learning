import React, { useState, useEffect } from "react";
import "./App.css";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

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
          // console.log("--------login", userData);
          // console.log("--------userData.name", userData.name);

        } else {
          dispatch(logout());
          console.log("--------logout", userData);
        }
      })
      .catch((error) => {
        console.error("Error fetching user: ++++++++++++++", error); // Log the error
        //dispatch(logout()); // Or handle the error differently, maybe show a message
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <div className="flex items-center justify-center min-h-screen">
      <p>Loading...</p>
    </div>
  ) : (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          {" "}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
