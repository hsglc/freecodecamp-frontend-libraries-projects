import Screen from "../Screen/Screen";

import Keyboard from "../Keyboard/Keyboard";

import classes from "./Calculator.module.css";

function Calculator() {
  return (
    <div className={classes.container}>
      <Screen />
      <Keyboard />
    </div>
  );
}

export default Calculator;
