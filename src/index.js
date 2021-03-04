import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const buttons = [
  { id: "15", name: "c", selector: "clear" },
  { id: "10", name: "÷", selector: "divide" },
  { id: "11", name: "x", selector: "multiply" },
  { id: "12", name: "-", selector: "subtract" },
  { id: "7", name: "7", selector: "seven" },
  { id: "8", name: "8", selector: "eight" },
  { id: "9", name: "9", selector: "nine" },
  { id: "13", name: "+", selector: "add" },
  { id: "4", name: "4", selector: "four" },
  { id: "5", name: "5", selector: "five" },
  { id: "6", name: "6", selector: "six" },
  { id: "1", name: "1", selector: "one" },
  { id: "2", name: "2", selector: "two" },
  { id: "3", name: "3", selector: "three" },
  { id: "14", name: "=", selector: "equal" },
  { id: "0", name: "0", selector: "zero" },
  { id: "16", name: ".", selector: "point" },
];

function DoMath(num1, num2, op) {
  if (op == "+") {
    //console.log(num1 + num2);
    return num1 + num2;
  } else if (op == "-") {
    return num1 - num2;
  } else if (op == "÷") {
    return num1 / num2;
  } else if (op == "x") {
    return num1 * num2;
  }
}

function MakeButtons() {
  const [number, setNumber] = useState("");
  const [tempValue, setTempValue] = useState(null);
  const [operator, setOperator] = useState(null);
  useEffect(() => {
    console.log(operator);
  }); //use this because setX doesn't update imedietly.
  return (
    <div id="case">
      <div id="screen">
        <h1>{number}</h1>
      </div>
      <div id="button-container">
        {buttons.map((button) => (
          <button
            key={button.id}
            id={button.selector}
            onClick={() => {
              if (button.id <= 9 || button.id == 16) {
                return setNumber(number + button.name);
              } else {
                if (tempValue == null) {
                  setOperator(button.name);
                  console.log("The operator should be " + operator);
                  setTempValue(parseInt(number, 10));
                } else if (button.id == 14) {
                  console.log("The first value is " + tempValue);
                  console.log("The second value is " + number);
                  console.log("The operator is " + operator);
                  console.log(
                    "The answer is " +
                      DoMath(tempValue, parseInt(number, 10), operator)
                  );
                  setTempValue(
                    DoMath(tempValue, parseInt(number, 10), operator)
                  );
                } else {
                  console.log("The first value is " + tempValue);
                  console.log("The second value is " + number);
                  console.log("The operator is " + button.name);
                  console.log(
                    "The answer is " +
                      DoMath(tempValue, parseInt(number, 10), button.name)
                  );
                }
                return setNumber("");
              }
            }}
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <MakeButtons />

      <p>
        View this code on{" "}
        <a href="https://github.com/partum/calculator">GitHub</a>
      </p>
    </>
  );
}

ReactDOM.render(<App buttons={buttons} />, document.getElementById("root"));
