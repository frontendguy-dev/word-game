import React from "react";

const GuessInput = ({ updateWordList }) => {
  const [input, setInput] = React.useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    updateWordList(input);
    setInput("");
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleFormSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        maxLength={5}
        minLength={5}
      />
    </form>
  );
};

export default GuessInput;
