import React from "react";
import styles from './Level.module.css'
import { useNavigate } from "react-router-dom";

function LevelCard({levelNumber, levelTitle, levelIconSrc, levelContent}) {
  const navigate = useNavigate();
  const startTypingTest = () => { 
    navigate('/typingtest',
      {
        state: levelContent,
      }
    );

    
  };
  return (
    <>
      <div className={styles.level_box} onClick={startTypingTest}>
        <div className={styles.level_num}> {levelNumber} </div>
        <div className={styles.level_icon}>
          <img className={styles.level_icon_img} src={levelIconSrc} alt="logo" width={100} />
        </div>
        <div className={styles.level_name}>{levelTitle}</div>l
      </div>
    </>
  );
}

export default LevelCard;
