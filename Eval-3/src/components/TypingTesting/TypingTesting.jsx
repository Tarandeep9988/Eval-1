import React, { useState, useEffect, useRef } from "react";
import styles from "./TypingTesting.module.css";
import { useLocation } from "react-router-dom";

function TypingTesting() {
  const location = useLocation();

  const defaultContent = "HERE TEXT WILL BE DISPLAYED";
  const [content, setContent] = useState(defaultContent);
  const [speed, setSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [startingTime, setStartingTime] = useState(null); // Updated to use state
  const start_stop_btn = useRef(null);
  const input_field = useRef(null);

  function getRandomPara() {
    const typingPracticeParagraphs = [
      "Typing is a skill that improves with practice. Focus on accuracy first, then speed.",
      "Good posture is key to effective typing. Sit up straight and keep your wrists relaxed.",
      "Consistency is important. Regular practice helps build muscle memory and speed.",
      "Typing without looking at the keys can boost your speed. Try to memorize the key positions.",
      "Accuracy matters more than speed when you start. It’s easier to type fast once you’re accurate.",
    ];
    const randomIndex = Math.floor(
      Math.random() * typingPracticeParagraphs.length
    );
    return typingPracticeParagraphs[randomIndex];
  }

  const getContent = () => {
    return location.state ? location.state : getRandomPara();
  };

  const startTypingTest = () => {
    input_field.current.disabled = false;
    input_field.current.style.backgroundColor = "white";
    input_field.current.value = "";
    console.log("Start typing test");
    setContent(getContent());
    setStartingTime(Date.now());
    input_field.current.focus();
  };

  const stopTypingTest = () => {
    input_field.current.disabled = true;
    setContent(defaultContent);
  };

  const handleButtonclick = () => {
    const btn_val = start_stop_btn.current.innerText;
    switch (btn_val) {
      case "Start":
        start_stop_btn.current.innerText = "Stop";
        startTypingTest();
        break;

      case "Stop":
        stopTypingTest();
        start_stop_btn.current.innerText = "Start";
        break;
    }
  };

  const handleKeyboardInput = () => {
    const typed_content = input_field.current.value;
    const typed_length = typed_content.length;

    // Calculating the time taken in minutes
    const time_taken = (Date.now() - startingTime) / 60000;

    // Calculate words typed as characters typed divided by 5 (average word length)
    const words_typed = typed_length / 5;

    // Prevent large values by ensuring a minimum time has passed
    const speedWPM = time_taken > 0 ? words_typed / time_taken : 0;
    setSpeed(typed_length ? String(Math.round(speedWPM)) : String(0));

    // Calculating accuracy
    let errors = 0;
    for (let i = 0; i < typed_length; i++) {
      if (!(typed_content[i] === content[i])) {
        errors++;
      }
    }
    input_field.current.style.backgroundColor = errors > 0 ? "red" : "white";

    const new_accuracy = typed_length
      ? ((typed_length - errors) / typed_length) * 100
      : 100;
    setAccuracy(String(Math.round(new_accuracy)));

    if (typed_length === content.length) {
      stopTypingTest();
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.main_section}>
        <h1>Test your typing skills</h1>
        <div className={styles.main_box}>
          <p>{content}</p>
          <hr className={styles.hr_line} />
          <textarea
            className={styles.input_field_box}
            placeholder="Press start button"
            autoComplete="off"
            ref={input_field}
            disabled
            onChange={handleKeyboardInput}
          ></textarea>
          <button
            ref={start_stop_btn}
            className={styles.start_stop_button}
            onClick={handleButtonclick}
          >
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
