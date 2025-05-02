import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen ">
        <Header2 /> <Outlet /> <Footer />
      </div>
    </>
  );
}

export default App;
