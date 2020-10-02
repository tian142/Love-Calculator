import React from 'react';

const Result = ({ percent, sentence }) => {
  return (
    <div>
      <div>Match Score: {percent}%</div>
      <div>The Love AI says: {sentence}</div>
    </div>
  );
};

export default Result;
