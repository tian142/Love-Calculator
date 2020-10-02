import React from 'react';
import './style.css';

const Result = ({ percent, sentence, prediction, name1, name2 }) => {
  const judgePrediction = () => {
    if (!sentence) {
      return;
    } else if (prediction > percent && prediction - percent < 25) {
      return 'Not as compatable as you have hoped, but close!';
    } else if (prediction > percent && prediction - percent > 25) {
      return 'You had high hopes, but reality can be cruel sometimes.';
    } else if (prediction < percent && percent - prediction > 25) {
      return 'You are in for a plesant suprise!';
    } else if (prediction < percent && percent - prediction < 25) {
      return 'Pretty close! You both are more compatable than you think!';
    } else if (prediction === percent) {
      return 'Nice Guess, right on the target!';
    }
  };

  const aiScore = () => {
    return `${name1} and ${name2}'s Match Score is: ${percent}%`;
  };

  return (
    <div className="right-side">
      <div className="result" id="first-result">
        You Predicted: {prediction}%
      </div>
      <div className="result">{aiScore()}</div>
      <div className="result">{judgePrediction()}</div>
      <div className="result">The Love AI says: "{sentence}."</div>
    </div>
  );
};

export default Result;
