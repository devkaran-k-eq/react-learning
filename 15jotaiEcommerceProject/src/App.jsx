import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen ">
        <Header /> <Outlet /> <Footer />
      </div>
    </>
  );
}

export default App;
