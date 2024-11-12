import React from 'react'
import LevelCard from './LevelCard'
import styles from './Level.module.css'
import { BeginnerLevels, IntermediateLevels, AdvancedLevels } from './Data'
function LevelPage() {
  return (
    <>
    <div className={styles.body}>
        <div className={styles.parent_box}>
                <h2 className={styles.sec_heading}>Beginner Levels</h2>
                <div className={styles.section} id={styles.beginner_box}>
                    {
                        BeginnerLevels.map((level, index) => {
                            return <LevelCard key={index} levelIconSrc={level.icon} levelTitle={level.name} levelNumber={level.level} />
                        })
                    }
                </div>
            </div>
        <div className={styles.parent_box}>
                <h2 className={styles.sec_heading}>Intermediate Levels</h2>
                <div className={styles.section} id={styles.intermediate_box}>
                    {
                        IntermediateLevels.map((level, index) => {
                            return <LevelCard key={index} levelIconSrc={level.icon} levelTitle={level.name} levelNumber={level.level} />
                        })
                    }
                </div>
            </div>
        <div className={styles.parent_box}>
                <h2 className={styles.sec_heading}>Advanced Levels</h2>
                <div className={styles.section} id={styles.advanced_box}>
                    {
                        AdvancedLevels.map((level, index) => {
                            return <LevelCard key={index} levelIconSrc={level.icon} levelTitle={level.name} levelNumber={level.level} />
                        })
                    }
                </div>
            </div>
    </div>
    </>
  )
}

export default LevelPage