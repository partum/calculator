import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const buttons = [
  { id: "0", name: "0" },
  { id: "1", name: "1" },
  { id: "2", name: "2" },
  { id: "3", name: "3" },
  { id: "4", name: "4" },
  { id: "5", name: "5" },
  { id: "6", name: "6" },
  { id: "7", name: "7" },
  { id: "8", name: "8" },
  { id: "9", name: "9" },
];
function App({ buttons }) {
  const [number, setNumber] = useState("");

  return (
    <>
      <div>
        <h1>{number}</h1>
        {buttons.map((button) => (
          <button key={button.id} onClick={() => setNumber(button.name)}>
            {button.name}
          </button>
        ))}
      </div>
    </>
  );
}

ReactDOM.render(<App buttons={buttons} />, document.getElementById("root"));
