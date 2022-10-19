import React from 'react';
import styles from './styles.module.css';
import texture from '../../shared/texture.svg';
import { useInView } from 'react-intersection-observer';

export const MainIntro = () => {
  const options = { triggerOnce: 'true' };

  const { ref: greetingRef, inView: greetingVisible } = useInView(options);
  const { ref: usernameRef, inView: usernameVisible } = useInView(options);
  const { ref: desc1Ref, inView: desc1Visible } = useInView(options);
  const { ref: desc2Ref, inView: desc2Visible } = useInView(options);
  const { ref: desc3Ref, inView: desc3Visible } = useInView(options);
  const { ref: button1, inView: button1Visible } = useInView(options);
  const { ref: button2, inView: button2Visible } = useInView(options);
  const { ref: button3, inView: button3Visible } = useInView(options);

  const clickEmail = () => {};
  return (
    <div
      className={[
        styles.containerMainIntro,
        'sectionMainIntro',
        'section',
      ].join(' ')}
    >
      <div>
        <h3
          ref={greetingRef}
          className={[
            styles.greeting,
            greetingVisible ? styles.greetingShow : styles.greetingInitial,
          ].join(' ')}
        >
          Hello there!, I'm-
        </h3>
        <h3
          ref={usernameRef}
          className={[
            styles.userName,
            usernameVisible ? styles.usernameShow : styles.usernameInitial,
          ].join(' ')}
        >
          Brian N.
        </h3>
      </div>
      <div className={styles.userDescription}>
        <h4
          className={desc1Visible ? styles.desc1Show : styles.desc1Initial}
          ref={desc1Ref}
          // className={greetingVisible ? styles.desc2Show : styles.desc2Initial}
          // ref={desc2Ref}
        >
          Software Engineer.
        </h4>
        <h4
          className={desc2Visible ? styles.desc2Show : styles.desc2Initial}
          ref={desc2Ref}
        >
          Self-driven, quick-starter, passionate developer with a curious mind.
        </h4>
        <h4
          className={desc3Visible ? styles.desc3Show : styles.desc3Initial}
          ref={desc3Ref}
        >
          I enjoy solving complex and challenging real-world problems.
        </h4>
      </div>

      <div className={styles.contactButtons}>
        <div
          ref={button1}
          className={[
            button1Visible ? styles.button1Show : styles.button1Initial,
          ].join(' ')}
        >
          <button
            onClick={() => window.open('https://github.com/0xBN', '_blank')}
            className={[styles.contactMethod].join(' ')}
          >
            <svg
              ref={button1}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
            </svg>
            Github
          </button>
        </div>
        <div
          ref={button2}
          className={[
            button2Visible ? styles.button2Show : styles.button2Initial,
          ].join(' ')}
        >
          <button
            onClick={() =>
              window.open('https://www.linkedin.com/in/brianvbn/', '_blank')
            }
            className={[styles.contactMethod].join(' ')}
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path d='M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z' />
            </svg>{' '}
            LinkedIn
          </button>
        </div>

        <div
          ref={button3}
          className={[
            button3Visible ? styles.button3Show : styles.button3Initial,
          ].join(' ')}
        >
          <button
            onClick={() => window.open('mailto:brianvbn@gmail.com', '_blank')}
            className={[styles.contactMethod].join(' ')}
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path d='M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z' />
            </svg>{' '}
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
