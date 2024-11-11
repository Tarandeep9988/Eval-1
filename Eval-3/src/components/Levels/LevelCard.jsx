import React from "react";
import styles from './Level.module.css'

function LevelCard({levelNumber, levelTitle, levelIconSrc}) {
  return (
    <>
      <div className={styles.level_box}>
        <div className={styles.level_num}> {levelNumber} </div>
        <div className={styles.level_icon}>
          <img className={styles.level_icon_img} src={levelIconSrc} alt="logo" width={100} />
        </div>
        <div className={styles.level_name}>{levelTitle}</div>
      </div>
    </>
  );
}

export default LevelCard;
