import { CalculatorContext } from "../../store/CalculatorProvider";
import { useContext } from "react";
import classes from "./Screen.module.css";

function Screen() {
  const { result } = useContext(CalculatorContext);

  return <div className={classes.screen}>{result.count}</div>;
}

export default Screen;
