import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './SystemNav.module.css';
import DigitalClockComponent from '../../smallcomponents/DigitalClockComponent/DigitalClockComponent';

const SystemNav = () => {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      element.setAttribute('tabindex', '-1'); 
      element.focus({ preventScroll: true });
    }
  };

  return (
    <>
      <a href="#main-content" className={styles.skipLink} aria-label="Skip navigation and go to main content">
        SKIP_TO_CONTENT
      </a>

      <nav className={styles.topNav} aria-label="System Top Bar">
        <div className={styles.navSide}>
          <div className={styles.logo} aria-level="1" role="heading">
            PORTFOLIO_OS
          </div>
        </div>

        <div className={styles.navCenter}>
          <ul className={styles.navButtons} role="list">
            <li>
              <button onClick={() => scrollToSection('introduction')} aria-label="Go to Introduction">[ INFO ]</button>
            </li>
            {isMobile ? (
              <>
                <li><button onClick={() => scrollToSection('stack')} aria-label="Go to Stack">[ STACK ]</button></li>
                <li><button onClick={() => scrollToSection('projects')} aria-label="Go to Projects">[ PROJECTS ]</button></li>
              </>
            ) : (
              <li><button onClick={() => scrollToSection('stack-projects')} aria-label="Go to Stack and Projects">[ STACK & PROJECTS ]</button></li>
            )}
            <li><button onClick={() => scrollToSection('records')} aria-label="Go to Records">[ RECORDS ]</button></li>
            <li><button onClick={() => scrollToSection('contact-me')} aria-label="Go to Contact Me">[ CONTACT ME ]</button></li>
          </ul>
        </div>

        <div className={`${styles.navSide} ${styles.rightSide}`}>
          { !isMobile && (
            <div className={styles.systemStatus}>
              <DigitalClockComponent />
            </div>
          ) }
        </div>
      </nav>
    </>
  );
};

export default SystemNav;