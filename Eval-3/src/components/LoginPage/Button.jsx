import React from "react";
import styles from './LoginPage.module.css';

function Button({ imgSrc, content }) {
  return (
    <>
      <button className={styles.btn}>
        <img src={imgSrc} alt="logo" />
            Log in with {content}
      </button>
    </>
  );
}

export default Button;
