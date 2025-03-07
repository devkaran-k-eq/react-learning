import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export default function Github(){

    const data = useLoaderData();
    console.log(data)
    // const [data, setData] = useState([])

    // useEffect(() => {
    //         const fetchData = async () => {
    //             try{
    //                 const response = await fetch("https://api.github.com/users/devkaran-k")

    //                 if(!response.ok){
    //                         throw new error("Error Bro", response.status)
    //                 }

    //                 const result = await response.json()
    //                 setData(result)
    //                 console.log(result);
                    
    //             }

    //             catch(error){
    //                 console.error("Error In fetching data", error)
    //             }
                
                
    //         }

            
    //         fetchData();
    // },[])

    return(

        <div>
            <h1 className="text-7xl bg-yellow-300 text-center">{data.name}</h1>
            <img src={data.avatar_url} alt="" className="w-auto mx-auto rounded-4xl m-8"/>
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/devkaran-k") 

    const result = await response.json()
    
    return result

}