import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CalculatorProvider from "./store/CalculatorProvider";

ReactDOM.render(
  <CalculatorProvider>
    <App />
  </CalculatorProvider>,
  document.getElementById("root")
);
