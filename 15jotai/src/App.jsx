import { useState } from "react";
import "./App.css";
import { atom, useAtom } from "jotai";
import Counter from "./Counter";
import { counterAtom } from "./atom/atoms";
import ShoppingCart from "./ShoppingCart";
import UserInfo from "./UserInfo";

// console.log(counterAtom);

function App() {
  const [Component, setComponent] = useState(() => UserInfo);
  const [activeTab, setActiveTab] = useState("UserInfo");
  return (
    <>
      <div
        style={{ textAlign: "center", marginTop: "20px", marginRight: "3px" }}
      >
        <button
          onClick={() => {
            setComponent(() => UserInfo);
            setActiveTab("UserInfo");
          }}
          className={activeTab === "UserInfo" ? "active" : ""}
        >
          UserInfo
        </button>
        <button
          onClick={() => {
            setComponent(() => Counter);
            setActiveTab("Counter");
          }}
          className={activeTab === "Counter" ? "active" : ""}
        >
          Counter
        </button>
        <button
          onClick={() => {
            setComponent(() => ShoppingCart);
            setActiveTab("ShoppingCart");
          }}
          className={activeTab === "ShoppingCart" ? "active" : ""}
        >
          Shopping Cart
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Component />
      </div>
    </>
  );
}

export default App;
