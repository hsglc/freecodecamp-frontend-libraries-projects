import classes from "./Buttons.module.css";

function NewQuoteButton({ event }) {
  return (
    <button className={classes.container} onClick={event}>
      New Quote
    </button>
  );
}

export default NewQuoteButton;
