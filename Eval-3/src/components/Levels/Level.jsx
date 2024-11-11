import React from 'react';
import './Levels.css'; // Import the global CSS

const Level = ({ levelNum, imgSrc, levelName }) => (
    <div className="levelBox">
        <div className="levelIcon">
            <img src={imgSrc} alt={levelName} width='100'/>
        </div>
        <div className="levelName">
            <span className="levelNum">{levelNum}</span>
            <p>{levelName}</p>
        </div>
    </div>
);

export default Level;
