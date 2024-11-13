import React from 'react';
import GetStarted from './GetStarted';

const Section5 = () => {
  const features = [
    {
      imgSrc: './images/stars.svg',
      title: "It's a game.",
      description: "An engaging and interactive experience while you are learning how to type."
    },
    {
      imgSrc: './images/hands.svg',
      title: 'Proper hand posture guide.',
      description: 'Will show you the correct hand posture on every key as you type.'
    },
    {
      imgSrc: './images/badge.svg',
      title: 'Levels, Badges and Stars.',
      description: 'All the reasons to keep you going, and build your muscle memory.'
    },
    {
      imgSrc: './images/accessibility.svg',
      title: 'Accessibility.',
      description: 'TypingTrain is the most accessible typing program available.'
    },
    {
      imgSrc: './images/experience2.svg',
      title: 'Interactive experience.',
      description: 'A full range of experiences from games, videos and different typing challenges makes learning fun.'
    },
    {
      imgSrc: './images/voice_over.svg',
      title: 'Voice over.',
      description: 'Once you turn it on, every word is read out loud as you are typing each word.'
    },
    {
      imgSrc: './images/replay-icon.png',
      title: 'Typing Playback.',
      description: 'You can view your past performances and even play them back.'
    },
    {
      imgSrc: './images/responsive.png',
      title: 'Responsive',
      description: 'TypingTrain works on computers and mobile devices'
    },
    {
      imgSrc: './images/keyboard.png',
      title: '100% Online.',
      description: 'All you need is a keyboard and a web browser.'
    }
  ];

  return (
    <div className="sec5">
      <div className="sec5_1">
        <p>Inside TypingTrain</p>
        <p>All the reasons to start learning how to type right now</p>
      </div>
      <div className="sec5_2">
        {features.map((feature, index) => (
          <FeatureItem 
            key={index} 
            imgSrc={feature.imgSrc} 
            title={feature.title} 
            description={feature.description}
          />
        ))}
      </div>
      <div className="sec5_3">
        <GetStarted />
      </div>
    </div>
  );
};

const FeatureItem = ({ imgSrc, title, description }) => {
  return (
    <div className="sec5_2_1">
      <div className="sec5_svg_con">
        <img className="sec5_svg" src={imgSrc} alt={title} />
      </div>
      <div className="sec5_detail">
        <span className="sec5_dark">{title}</span> {description}
      </div>
    </div>
  );
};

export default Section5;
