import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";

function App() {
  const [count, setCount] = useState(0);


  // set Layout 
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
