import React from 'react';
import Logo from './Logo';
import styles from './Navbar.module.css';

export default function Navbar({ onOpenApplication }) {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Logo size={42} showSubtitle={true} />

        <nav className={styles.navLinks} aria-label="Main Navigation">
          <a href="#work" className={styles.navLink}>Selected Work</a>
          <a href="#difference" className={styles.navLink}>The Shift</a>
          <a href="#process" className={styles.navLink}>Our Process</a>
          <a href="#comparison" className={styles.navLink}>Why Custom</a>
        </nav>

        <div className={styles.navActions}>
          <button 
            type="button" 
            className={styles.ctaBtn} 
            onClick={onOpenApplication}
            id="nav-start-project"
          >
            Start a Project &rarr;
          </button>
        </div>
      </div>
    </header>
  );
}
