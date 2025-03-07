import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  function addValue() {
    if (count < 20) {
      setCount(count + 1);
    } else {
      setCount(count = 0);
    }
  }

  const removeValue = () => {
    if (count > 0) {
      setCount(count -= 1);
    } else {
      setCount(count = 0);
    }
  };

  return (
    <>
      <h1>counter Project</h1>
      <h2>counter Value: {} </h2>
      <button onClick={addValue}>Add Value: {count}</button>
      <br />
      <br />
      <button onClick={removeValue}> Remove Value: {count} </button>
    </>
  );
}

export default App;
