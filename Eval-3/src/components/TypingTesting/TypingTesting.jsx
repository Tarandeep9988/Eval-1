import React, { useState, useEffect, useRef } from "react";
import styles from "./TypingTesting.module.css";
import { useLocation } from "react-router-dom";

function TypingTesting() {
  const location = useLocation();
  
  const defaultContent = "HERE TEXT WILL BE DISPLAYED";
  const [content, setContent] = useState(defaultContent);
  const [speed, setSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const start_stop_btn = useRef(null);
  const input_field = useRef(null);

  var starting_time = new Date();

  const getContent = () => { 
    //   const typingPracticeParagraphs = [
    //   "Typing is a skill that improves with practice. Focus on accuracy first, then speed.",
    //   "Good posture is key to effective typing. Sit up straight and keep your wrists relaxed.",
    //   "Consistency is important. Regular practice helps build muscle memory and speed.",
    //   "Typing without looking at the keys can boost your speed. Try to memorize the key positions.",
    //   "Accuracy matters more than speed when you start. It’s easier to type fast once you’re accurate."
    // ];
    // const randomIndex = Math.floor(Math.random() * typingPracticeParagraphs.length);
    // const para = typingPracticeParagraphs[randomIndex];
    // return para;
    return location.state;
  }
  
  const startTypingTest = () => {
    input_field.current.disabled = false;
    input_field.current.style.backgroundColor = "white";
    input_field.current.value = "";
    console.log("Start typing test");
    setContent(getContent());
    starting_time = Date.now();
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
    // Calculating the time taken
    const time_taken = (Date.now() - starting_time) / 60000; // milliseconds->minutes
    // Calculating speed
    const words_typed = typed_content.split(" ").length;
    const speedWPM = words_typed / time_taken;
    setSpeed(typed_length ? String(Math.round(speedWPM, 1)) : String(0));
    
    
    let errors = 0;
    for (let i = 0; i < typed_length; i++) {
      if (!(typed_content[i] === content[i])) {
        errors++;
        console.log("Error");
      }
    }
    if (errors > 0) {
      input_field.current.style.backgroundColor = "red";
    } else {
      input_field.current.style.backgroundColor = "white";
    }
    const new_accuracy = ((typed_length - errors) / typed_length) * 100;
    setAccuracy(String(Math.round(new_accuracy, 1)));
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
