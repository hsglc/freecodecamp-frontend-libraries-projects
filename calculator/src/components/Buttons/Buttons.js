import { keys } from "../../constants/constants";
import Button from "./Button/Button";

import classes from "./Buttons.module.css";

function Buttons() {
  return (
    <div className={classes.container}>
      {keys.map((symbol) => (
        <Button symbol={symbol} key={symbol} />
      ))}
    </div>
  );
}

export default Buttons;
