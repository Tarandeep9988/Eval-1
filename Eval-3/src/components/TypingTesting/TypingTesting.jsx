import React, { useState, useEffect, useRef } from "react";
import styles from "./TypingTesting.module.css";

function TypingTesting() {
  const [content, setContent] = useState("HERE TEXT WILL BE DISPLAYED");
  const [speed, setSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isTyping, setIsTyping] = useState(false);
  const [errors, setErrors] = useState(0);

  const inputFieldRef = useRef(null);
  const contentBoxRef = useRef(null);
  const buttonRef = useRef(null);

  let startingTime = null;
  let lastTime = null; // Track last time for accurate WPM calculation

  useEffect(() => {
    setContent("Hello my name is Tarandeep Singh");  // Default text, you can replace it with content from localStorage
  }, []);

  const startTypingTest = () => {
    setIsTyping(true);
    startingTime = Date.now();
    lastTime = startingTime; // Initialize last time when typing starts
    inputFieldRef.current.removeAttribute("disabled");
    buttonRef.current.innerText = "Stop";
    contentBoxRef.current.textContent = content;
    inputFieldRef.current.value = "";
    inputFieldRef.current.focus();
  };

  const stopTypingTest = () => {
    setIsTyping(false);
    inputFieldRef.current.setAttribute("disabled", "");
    buttonRef.current.innerText = "Start";
    contentBoxRef.current.textContent = "HERE TEXT WILL BE DISPLAYED";
  };

  const handleInputChange = (e) => {
    const typedContent = e.target.value;
    const typedLength = typedContent.length;

    const timeTaken = (Date.now() - startingTime) / 60000; // time in minutes

    // Only calculate WPM after at least 1 second
    if (timeTaken > 0) {
      const wordsTyped = typedContent.split(" ").length;
      const speedWPM = wordsTyped / timeTaken;
      setSpeed(Math.round(speedWPM));
    }

    // Handle accuracy and errors
    let newErrors = 0;
    for (let i = 0; i < typedLength; i++) {
      if (typedContent[i] !== content[i]) {
        newErrors++;
      }
    }
    setErrors(newErrors);

    const accuracy = typedLength > 0 ? ((typedLength - newErrors) / typedLength) * 100 : 100;
    setAccuracy(Math.round(accuracy));

    // Stop typing test if typed content matches the content
    if (typedLength === content.length) {
      stopTypingTest();
    }
  };

  const handleButtonClick = () => {
    if (isTyping) {
      stopTypingTest();
    } else {
      startTypingTest();
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.main_section}>
        <h1>Test your typing skills</h1>
        <div className={styles.main_box}>
          <p ref={contentBoxRef}>{content}</p>
          <hr className={styles.hr_line} />
          <textarea
            ref={inputFieldRef}
            className={styles.input_field_box}
            placeholder="Press start button"
            autoComplete="off"
            disabled
            onChange={handleInputChange}
          ></textarea>
          <button ref={buttonRef} className={styles.start_stop_button} onClick={handleButtonClick}>
            Start
          </button>
        </div>
        <div className={styles.detail_box}>
          <div className={styles.speed_box}>
            <span className={styles.results}>{speed}</span>
            <span className={styles.label}>words/min</span>
          </div>
          <div className={styles.accuracy_box}>
            <span className={styles.results}>{accuracy}</span>
            <span className={styles.label}>% accuracy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypingTesting;
