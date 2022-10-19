import React from 'react';
import styles from './styles.module.css';

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>Designed and Developed by Brian N.</p>
      <p>
        Built with <span>React.js</span>. Hosted on <span>Github</span>.
      </p>
    </div>
  );
};
