import classes from "./Button.module.css";

function Button({ symbol }) {
  return <button className={classes.button}>{symbol}</button>;
}

export default Button;
