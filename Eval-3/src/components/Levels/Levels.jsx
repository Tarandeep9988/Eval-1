import React from 'react';
import './Levels.css';  // Import the global CSS
import Level from './Level';
import { beginnerLevels, intermediateLevels, advancedLevels } from './Data';  // Assuming these are exported from Data.js

const Levels = () => (
    <div className="mainParentBox">
        <h2 className="mainSectionHeading">Beginner Levels</h2>
        <div className="section">
            {beginnerLevels.map((level) => (
                <Level
                    key={level.level}
                    levelNum={level.level}
                    imgSrc={level.icon}
                    levelName={level.name}
                />
            ))}
        </div>

        <h2 className="mainSectionHeading">Intermediate Levels</h2>
        <div className="section">
            {intermediateLevels.map((level) => (
                <Level
                    key={level.level}
                    levelNum={level.level}
                    imgSrc={level.icon}
                    levelName={level.name}
                />
            ))}
        </div>

        <h2 className="mainSectionHeading">Advanced Levels</h2>
        <div className="section">
            {advancedLevels.map((level) => (
                <Level
                    key={level.level}
                    levelNum={level.level}
                    imgSrc={level.icon}
                    levelName={level.name}
                />
            ))}
        </div>
    </div>
);

export default Levels;
