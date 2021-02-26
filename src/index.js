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
  { id: "10", name: "÷" },
  { id: "11", name: "x" },
  { id: "12", name: "-" },
  { id: "13", name: "+" },
  { id: "14", name: "=" },
  { id: "15", name: "c" },
  { id: "16", name: "." },
];
function App({ buttons }) {
  const [number, setNumber] = useState("");

  return (
    <>
      <div id="case">
        <div id="screen">
          <h1>{number}</h1>
        </div>
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
