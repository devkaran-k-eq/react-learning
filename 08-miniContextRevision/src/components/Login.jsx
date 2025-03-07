import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    setUser({ userName, password });
  };

  const { setUser } = useContext(UserContext);

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => {
          return setUsername(e.target.value);
        }}
      />{" "}
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}

      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "black",
          padding: "12px",
          color: "white",
          border: "none",
        }}
      >
        Submit
      </button>
    </div>
  );
}
