import React, { useReducer } from "react";

const CalcContext = React.createContext();

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

  return {};
};

const CalcProvider = ({ children }) => {
  const [result, dispatchResult] = useReducer(resultReducer, { count: 0 });

  const value = { result, dispatchResult };

  return <CalcContext.Provider value={value}>{children}</CalcContext.Provider>;
};

export default CalcProvider;
