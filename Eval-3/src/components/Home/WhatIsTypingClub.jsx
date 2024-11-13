import React from 'react';
import GetStarted from './GetStarted';

const WhatIsTypingTrain = () => {
  return (
    <div className="what_sec_parent">
      <div className="what_sec section2">
        <div className="left">
          <video height="300" autoPlay loop muted>
            <source src="./vedios/demo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="right">
          <p>What is TypingTrain?</p>
          <p>TypingTrain is the most effective way to learn how to type</p>
          <p>It is web-based and highly effective. TypingTrain is (and will always be) free for both individuals and schools.</p>
          <GetStarted />
        </div>
      </div>
    </div>
  );
}

export default WhatIsTypingTrain;
