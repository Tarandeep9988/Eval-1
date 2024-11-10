import React from 'react';

const Section4 = () => {
  return (
    <div className="section4">
      <Section4Item 
        title="How Does it Work?" 
        description="Keep practicing each lesson until you get all five stars. It really doesn't take much to learn, a few minutes a day for one to two weeks and you will be a pro!"
      />
      <Section4Item 
        title="Do I need an account?" 
        description="You do not need to create an account. However, as you go through the lessons, you can create an optional profile in order to save your progress."
      />
    </div>
  );
};

const Section4Item = ({ title, description }) => {
  return (
    <div className="sec4_com">
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Section4;
