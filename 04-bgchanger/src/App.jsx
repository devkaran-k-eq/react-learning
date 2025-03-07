import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen transition duration-700 ease-in-out"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor( function(){
                  setColor("red")
              })}
              className="outline-none px-4 py-1 rounded-full shadow-lg ease-in-out"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              silver
            </button>
            <button
              onClick={() => setColor("aqua")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg"
              style={{ backgroundColor: "aqua" }}
            >
              Aqua
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("Yellow")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg"
              style={{ backgroundColor: "Yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("gold")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "gold" }}
            >
              Gold
            </button>
            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "lavender" }}
            >
              Lavender
            </button>
            <button
              onClick={() => setColor("magenta")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "magenta" }}
            >
              Magenta
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
