import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";


export default function Github() {
    const data = useLoaderData();

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/devkkaran")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <>
      <h1 className="text-7xl text-center bg-yellow-200"> {data.name} </h1>

        <img src={data.avatar_url} alt="" className="w-auto mx-auto m-8 rounded-4xl "/>
     
    </>
  );
}

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/devkkaran")

    const userData = await response.json()
    // setData(userData)
    
    
    return userData;
}
