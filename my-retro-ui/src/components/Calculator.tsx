import { Frame } from "@react95/core";
import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const appendDigit = (digit: string) => setInput(prev => prev + digit);
  const appendOperator = (operator: string) => setInput(prev => prev + operator);
  const clearDisplay = () => setInput("");
  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (err) {
      setInput("Error");
    }
  };

  return (
    <Frame bg="white" boxShadow="in" style={{ padding: 10, minWidth: 320 }}>
        <div className="calculator-wrapper">
            <section className="calculator">
        <div className="container">
          <div className="calculator-header">
            <input
              type="text"
              value={input}
              readOnly
              id="input-text"
            />
          </div>
          <div className="calculator-body">
            <div className="btn-container">
              {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "%", "+"].map((btn) => (
                <button
                  key={btn}
                  className={`btn ${/\d/.test(btn) ? "btn-number" : "btn-functions"}`}
                  onClick={() =>
                    /\d/.test(btn) ? appendDigit(btn) : appendOperator(btn)
                  }
                >
                  {btn === "*" ? "×" : btn}
                </button>
              ))}
              <button className="btn btn-functions clear" onClick={clearDisplay}>C</button>
              <button className="btn btn-functions" onClick={calculateResult}>=</button>
              <button className="btn btn-functions e" disabled>e</button>
              <button className="btn btn-functions e" disabled>e</button>
            </div>
          </div>
        </div>
      </section>
        </div>
      
    </Frame>
  );
};

export default Calculator;
