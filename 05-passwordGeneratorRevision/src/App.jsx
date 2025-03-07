import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numbers, setNumbersAllowed] = useState(false);
  const [Characters, setCharacterAllowed] = useState(false);

  const passwordRefrence = useRef();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "1234567890";
    if (Characters) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [Characters, numbers, length, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [Characters, numbers, length, passwordGenerator]);

  const copyPasswordClipBoard = useCallback(() => {
    passwordRefrence.current?.select();
    passwordRefrence.current?.setSelectionRange(0, 10)
    window.navigator.clipboard.writeText(password); // copy text only
  }, [password]);

  return (
    <div>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={password}
            readOnly
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            ref={passwordRefrence}
          />
          <button
            onClick={copyPasswordClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={numbers}
              id="numberInput"
              onChange={(e) => {
                setNumbersAllowed((pre) => !pre);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={Characters}
              id="characterInput"
              onChange={(e) => {
                setCharacterAllowed((pre) => !pre);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
