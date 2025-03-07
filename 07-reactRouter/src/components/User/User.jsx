import React from "react";
import { useParams } from "react-router";

function User(){
    const {userId} = useParams();

    return(
        <>
            <div className="bg-black text-white text-5xl text-center"> User: {userId}</div>
        </>
    )
}

export default User