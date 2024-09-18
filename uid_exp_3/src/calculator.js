import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState(""); 
  const [previousInput, setPreviousInput] = useState(null); 
  const [operation, setOperation] = useState(null); 

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleOperationClick = (op) => {
    setPreviousInput(input);
    setInput(""); 
    setOperation(op);
  };

  const calculateResult = () => {
    const prev = parseFloat(previousInput); 
    const current = parseFloat(input); 

    if (isNaN(prev) || isNaN(current)) return; 
    let result;
    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }

    setInput(result.toString()); 
    setOperation(null); 
    setPreviousInput(null); 
  };

  const clearInput = () => {
    setInput("");
    setPreviousInput(null);
    setOperation(null);
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>

        <button onClick={() => handleOperationClick("+")}>+</button>
        <button onClick={() => handleOperationClick("-")}>-</button>
        <button onClick={() => handleOperationClick("*")}>*</button>
        <button onClick={() => handleOperationClick("/")}>/</button>

        <button onClick={clearInput}>C</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
