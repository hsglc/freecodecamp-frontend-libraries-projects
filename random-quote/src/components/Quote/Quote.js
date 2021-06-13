import { useState, useEffect } from "react";
import TweetButton from "../Button/TweetButton";
import NewQuoteButton from "../Button/NewQuoteButton";

import classes from "./Quote.module.css";

function Quote() {
  const [isFetched, setIsFetched] = useState(false);

  const [quote, setQuote] = useState(null);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const randomQuote = await response.json();
      setQuote(randomQuote);
      setIsFetched(true);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <>
      {!isFetched && <div className={classes.spinner} />}
      {isFetched && (
        <div className={classes.container}>
          <div className={classes.quote_section}>
            <p>{quote.content}</p>
            <h4>-{quote.author}</h4>
          </div>

          <div className={classes.buttons}>
            <TweetButton />
            <NewQuoteButton event={fetchRandomQuote} />
          </div>
        </div>
      )}
    </>
  );
}

export default Quote;
