import React from "react";
import { useAtom } from "jotai";
import { counterAtom } from "./atom/atoms";
import DoubleCounter from "./DoubleCounter";

const Counter = () => {
    const [count, setCount] = useAtom(counterAtom);
    // console.log(useAtom(counterAtom));
    

    return(
        <>
        <h1>{count}</h1>
        <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          +
        </button>
        <button onClick={() => setCount((prev) => prev - 1)}>
          -
        </button>
        
      </div>
      <DoubleCounter/>
      </>
    )
}


export default Counter