import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordList, setWordList] = React.useState([]);
  const [victory, setVictory] = React.useState(false);
  const [isLimitReached, setLimitReached] = React.useState(false);

  const updateWordList = (word) => {
    const newWordList = [...wordList];
    newWordList.push(word.toUpperCase());
    if (newWordList.length === NUM_OF_GUESSES_ALLOWED)
      setLimitReached(true);
    setWordList(newWordList);
  };

  const endGame = (victory) => {
    setVictory(victory);
  };

  return (
    <>
      Put a game here!
      <div className="guess-results">
        <GuessResults wordList={wordList} answer={answer} endGame={endGame} />
        {!victory && !isLimitReached && (
          <GuessInput updateWordList={updateWordList} />
        )}
        {victory && (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              {' '}
              <strong>{wordList.length} guess</strong>.
            </p>
          </div>
        )}
        {!victory && isLimitReached && (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Game;
