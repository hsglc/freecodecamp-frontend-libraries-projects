function TweetButton() {
  const tweetHandler = () => {
    window.location.href = "https://twitter.com/intent/tweet";
  };

  return (
    <button onClick={tweetHandler}>
      <img
        alt="twitter"
        src="https://img.icons8.com/plasticine/48/000000/twitter--v2.png"
      />
    </button>
  );
}

export default TweetButton;
