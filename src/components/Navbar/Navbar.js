import React from 'react';
import styles from './styles.module.css';
import { ThemeButton, Navlist } from 'components';
import { useInView } from 'react-intersection-observer';

export const Navbar = ({ setOverlay, theme, setTheme }) => {
  const [open, setOpen] = React.useState(false);
  const navbarEl = React.useRef();
  const options = { triggerOnce: 'true' };

  React.useEffect(() => {
    let handler = (e) => {
      if (!navbarEl.current.contains(e.target)) {
        setOpen(false);
        setOverlay(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div
      ref={navbarEl}
      className={[styles.containerNavbar, 'container'].join(' ')}
    >
      {/* Desktop version */}
      <div className={styles.desktopNav}>
        <Navlist setOpen={setOpen} setOverlay={setOverlay} />
        <div className={styles.desktopThemeToggle}>
          <ThemeButton theme={theme} setTheme={setTheme} showText />
        </div>
      </div>
      {/* Mobile Version Nav */}
      <div className={styles.mobileNav}>
        <button
          onClick={() => {
            setOpen(!open);
            setOverlay(true);
          }}
        >
          <svg
            className={styles.menuIcon}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' />
          </svg>
        </button>
        <div
          onClick={() => {
            console.log('hi');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={styles.mobileNavTitle}
        >
          <div>Brian N.</div>
          <div>Software Developer</div>
        </div>
        <ThemeButton theme={theme} setTheme={setTheme} />
      </div>

      <div
        className={[
          open ? styles.expandedNavActive : styles.expandedNavInactive,
          styles.expandedNav,
        ].join(' ')}
      >
        <Navlist setOpen={setOpen} setOverlay={setOverlay} />
      </div>
    </div>
  );
};
