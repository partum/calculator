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
  const [progress, setProgress] = useState(null);
  useEffect(() => {
    //console.log(number);
  }); //use this because setX doesn't update imedietly.
  return (
    <div id="case">
      <div id="screen">
        <h3>{progress}</h3>
        <h1>{number}</h1>
      </div>
      <div id="button-container">
        {buttons.map((button) => (
          <button
            key={button.id}
            id={button.selector}
            onClick={() => {
              if (
                button.id <= 9 ||
                button.id == 16 ||
                (button.id == 12 && number == "")
              ) {
                return setNumber(number + button.name);
              } else {
                if (tempValue == null) {
                  setOperator(button.name);
                  setTempValue(parseFloat(number, 10));
                } else if (button.id == 14) {
                  //if the user hits the equals button
                  setProgress(tempValue + " " + operator + " " + number);
                  console.log(tempValue);
                  console.log(operator);
                  console.log(number);
                  console.log(
                    "the answer should be " +
                      DoMath(
                        parseFloat(tempValue),
                        parseFloat(number, 10),
                        operator
                      )
                  );

                  setTempValue(
                    DoMath(tempValue, parseFloat(number, 10), operator)
                  );
                  return setNumber(
                    DoMath(tempValue, parseFloat(number, 10), operator)
                  );
                } else if (button.id == 15) {
                  //if the clear button is pressed
                  return (
                    setNumber(""),
                    setTempValue(null),
                    setOperator(null),
                    setProgress(null)
                  );
                } else if (button.id >= 10 && button.id <= 13) {
                  setOperator(button.name);
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
