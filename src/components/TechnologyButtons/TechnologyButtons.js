import React from 'react';
import styles from './styles.module.css';
import { techIcons } from '../../projectData';

// Supported: firebase, react, html, css, javascript

export const TechnologyButtons = ({ tech }) => {
  let techLowerCase = tech.toLowerCase();

  if (!techIcons[techLowerCase][1]) return;

  return (
    <div className={styles.techButton}>
      <button
        style={{
          color: techIcons[techLowerCase][1],
          backgroundColor: techIcons[techLowerCase][2],
        }}
      >
        {techIcons[techLowerCase][0]}
        {tech}
      </button>
    </div>
  );
};
