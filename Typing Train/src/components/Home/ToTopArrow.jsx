import React from 'react';

const ToTopArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  }
  return (
    <div id="to-top-arrow" onClick={scrollToTop}>
      <img src="./images/upArrow.png" draggable="false" alt="upArrow" />
    </div>
  );
};

export default ToTopArrow;
