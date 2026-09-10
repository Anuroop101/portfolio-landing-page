import React from 'react';
import styles from './FinalCTA.module.css';

export default function FinalCTA({ onOpenApplication }) {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        
        <div className={styles.content}>
          <span className="editorial-label" style={{ color: 'var(--bg-primary)', marginBottom: '1rem' }}>The Point</span>
          
          <h2 className={styles.headline}>
            you already built the studio.<br />
            <span style={{ borderBottom: '2px solid var(--bg-primary)' }}>now make sure people can see it.</span>
          </h2>
          
          <div className={styles.paragraph}>
            <p className={styles.tightText}>Your best projects shouldn't disappear into an Instagram feed.</p>
            <p className={styles.tightText}>Your experience shouldn't live only in conversations.</p>
            <p className={styles.tightText}>Your referrals shouldn't have to explain who you are...</p>
            
            <p className={styles.pushDown}>And your next client shouldn't have to piece your studio together from five different places.</p>
            
            <p className={styles.pushDown}><strong>Give your work one single place to speak for itself.</strong></p>
          </div>
          
          <div className={styles.actionWrapper}>
            <button className={`btn-primary ${styles.ctaButton}`} onClick={onOpenApplication}>
              Tell us about your project &rarr;
            </button>
            <p className={styles.smallNote}>Tell us a little about your studio. We'll take it from there.</p>
          </div>
          
        </div>

      </div>
    </section>
  );
}

