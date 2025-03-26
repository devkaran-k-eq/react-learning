import React from "react";
import { useAtom } from "jotai";
import { loadData } from "./atom/atoms";

export default function UserInfo() {
  const [datas] = useAtom(loadData);

  console.log(datas);
  if (datas.state === "loading") return <h1>Loading</h1>;
  if (datas.state === "hasError") return <h1>Error Occured</h1>;
  return (
    <div
      style={{
        backgroundColor: "#c0d3f4",
        display: "flex",
        flexWrap: "wrap", // Enable wrapping
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "38px",
        padding: "20px"

      }}
    >
      <h1>UserInfo</h1>
      <h5>Name: {datas.data[0].name}</h5>
      <h5>Email: {datas.data[0].email}</h5>
    </div>
  );
}
