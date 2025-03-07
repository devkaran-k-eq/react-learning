import React from "react";
import { useParams } from "react-router";

export default function User(){
    const {userText} = useParams();

    return(
        <h1 className="text-center text-9xl text-red-700 bg-orange-50">{userText}</h1>
    )
}