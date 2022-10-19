import React from 'react';
import styles from './styles.module.css';

export const AboutMe = ({ isWindowSmall }) => {
  return (
    <div
      className={[styles.containerAbout, 'sectionAbout', 'section'].join(' ')}
    >
      <div className='sectionTitle'>
        <h2 className={isWindowSmall ? 'textCenter' : null}>About Me</h2>
      </div>
      <p>I am a fullstack developer.</p>
      <p>
        Growing up, I have always had an affinity for everything tech related. I
        loved exploring software mods for my devices and building PCs for my
        friends during my free time.
      </p>
      <p>
        Today I am passionate about developing applications that solve
        real-world problems impacting millions of users.
      </p>

      <p>
        <strong>Languages</strong>: Javascript(ES6+), HTML/CSS, Python
      </p>
      <p>
        <strong>Technologies</strong>: React, Firebase, Git, Jest, Webpack, NPM,
        Node.js
      </p>
    </div>
  );
};
