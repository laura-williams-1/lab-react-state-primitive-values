import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);
  // const [boostIncrement, setboostIncrement] = useState(1);
  function changeScore() {
    setScore(score + increment);
  }

  function buyIncrements() {
    if (score < 10) {
      window.alert(`You can't afford that!`);
    } else {
      setScore(score - 10);
      setIncrement(increment + 1);
    }
  }

  // const [victory, setVictory] = useState(100);

  // function reachVictory() {
  //   if (score >= 100) {
  //     window.alert("You Win!");
  //   }
  // }
  // - When the user has `100` or more points, display a victory screen
  // - There should be an `<h2>` element with the _exact_ text `You Win!`
  // - There should be a button with the text `Play again?` (including the question mark)
  //   - Clicking on this button starts the game over again with a score of 0, a `+1` button, etc.
  // - Keep the user's score on the screen
  // - Do not show the buttons to add to the score or pay points.
  return (
    <main>
      <h1>Current Score: {score}</h1>

      <button onClick={changeScore}>+{increment}</button>
      <button onClick={buyIncrements}>
        Pay 10 points to change from +{increment} to +{increment + 1}
      </button>
    </main>
  );
}

export default App;
