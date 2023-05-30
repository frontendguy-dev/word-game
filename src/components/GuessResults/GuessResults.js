import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

const GuessResults = (props) => {
  const { wordList, answer } = props;

  const emptySlots = range(5).map((el) => (
    <span key={Math.random()} className="cell"></span>
  ));

  const guessedSlot = (guessResult) => {
    if (!guessResult) return null;
    const correctGuess = guessResult
      ? guessResult.every((el) => el.status === "correct")
      : false;
    if (correctGuess) props.endGame(true);
    return guessResult.map((el, idx) => (
      <span key={Math.random()} className={`cell ${el.status}`}>
        {el.letter}
      </span>
    ));
  };

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((el, idx) => {
        const currWord = wordList[idx];
        const guessResult = checkGuess(currWord, answer);
        return (
          <p className="guess" key={Math.random()}>
            {guessResult ? guessedSlot(guessResult) : emptySlots}
          </p>
        );
      })}
    </div>
  );
};

export default GuessResults;
