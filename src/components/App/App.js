import React from 'react';
import styles from './styles.module.css';
import {
  Navbar,
  MainIntro,
  AboutMe,
  Projects,
  Skills,
  Contact,
  Footer,
} from 'components';
import { useInView } from 'react-intersection-observer';

export const App = () => {
  const [isWindowSmall, setIsWindowSmall] = React.useState(null);

  const [theme, setTheme] = React.useState(localStorage.theme);

  React.useEffect(() => {
    setIsWindowSmall(window.innerWidth < 600);

    if (localStorage.theme === undefined) {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }, []);

  document.body.classList = `theme ${theme}`;

  const rootMarginNum = isWindowSmall ? '100px' : '-35%';
  const options = { rootMargin: rootMarginNum, triggerOnce: 'true' };

  const { ref: aboutMeRef, inView: aboutMeVisible } = useInView(options);
  const { ref: projectsRef, inView: projectsVisible } = useInView(options);
  const { ref: skillsRef, inView: skillsVisible } = useInView(options);
  const { ref: contactRef, inView: contactVisible } = useInView(options);

  const [overlay, setOverlay] = React.useState(false);

  return (
    <div className={[styles.containerApp].join(' ')}>
      <div className={overlay ? styles.overlay : undefined}></div>
      <Navbar setOverlay={setOverlay} theme={theme} setTheme={setTheme} />
      <div className={styles.containerMain}>
        <div className={[styles.card, ''].join(' ')}>
          <MainIntro isWindowSmall={isWindowSmall} />
        </div>
        <div ref={aboutMeRef} className={aboutMeVisible ? 'show' : 'card'}>
          <AboutMe isWindowSmall={isWindowSmall} />
        </div>
        <div ref={projectsRef} className={projectsVisible ? 'show' : 'card'}>
          <Projects isWindowSmall={isWindowSmall} />
        </div>
        <div ref={skillsRef} className={skillsVisible ? 'show' : 'card'}>
          <Skills isWindowSmall={isWindowSmall} />
        </div>

        <div ref={contactRef} className={contactVisible ? 'show' : 'card'}>
          <Contact isWindowSmall={isWindowSmall} />
        </div>
        <Footer />
      </div>
    </div>
  );
};
