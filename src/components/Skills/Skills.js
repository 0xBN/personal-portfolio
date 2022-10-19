import React from 'react';
import styles from './styles.module.css';

export const Skills = ({ isWindowSmall }) => {
  return (
    <div
      className={[styles.containerSkills, 'sectionSkills', 'section'].join(' ')}
    >
      <div className='sectionTitle'>
        <h2 className={isWindowSmall ? 'textCenter' : null}>Skills</h2>
      </div>
      <ul className={styles.skills}>
        <li>
          <p>Javascript</p>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' />
        </li>
        <li>
          <p>React</p>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
        </li>

        <li>
          <p>HTML</p>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
        </li>

        <li>
          <p>CSS</p>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' />
        </li>
        <li>
          <p>Firebase</p>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' />
        </li>

        <li>
          <p>Python</p>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' />
        </li>

        <li>
          <p>Jest</p>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' />
        </li>

        <li>
          <p>Git</p>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' />
        </li>

        <li>
          <p>Webpack</p>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' />
        </li>
        <li>
          <p>Node.Js</p>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' />
        </li>
        <li>
          <p>NPM</p>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' />
        </li>
      </ul>
    </div>
  );
};
