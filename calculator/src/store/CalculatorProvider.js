import React, { useReducer, createContext } from "react";

const defaultCalcState = {
  count: 0,
};

const resultReducer = (state, action) => {
  if (action.type === "ADD") {
    return { count: state.count + action.amount };
  } else if (action.type === "SUBTRACT") {
    return { count: state.count - action.amount };
  } else if (action.type === "MULTIPLY") {
    return { count: state.count * action.amount };
  } else if (action.type === "DIVIDE") {
    return { count: state.count / action.amount };
  }

  return defaultCalcState;
};

export const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
  const [result, dispatchResult] = useReducer(resultReducer, defaultCalcState);

  const add = (amount) => {
    dispatchResult({ type: "ADD", amount });
  };

  const substract = (amount) => {
    dispatchResult({ type: "SUBSTRACT", amount });
  };

  const multiply = (amount) => {
    dispatchResult({ type: "SUBSTRACT", amount });
  };

  const divide = (amount) => {
    dispatchResult({ type: "DIVIDE", amount });
  };

  const calcContext = {
    result: result,
    add,
    substract,
    multiply,
    divide,
  };

  return (
    <CalculatorContext.Provider value={calcContext}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
