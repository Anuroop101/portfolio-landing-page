import React from 'react';
import styles from './Comparison.module.css';

const BadgeCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const BadgeCross = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ListCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '12px', flexShrink: 0, marginTop: '2px' }}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ListCross = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '12px', flexShrink: 0, marginTop: '2px' }}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Curved arrow pointing left
const ArrowLeft = () => (
  <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M55 35 Q 30 35 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
    <path d="M5 5 L 15 2 M5 5 L 12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Comparison() {
  return (
    <section className={styles.compSection} id="comparison">
      <div className="container">
        
        <header className={styles.header}>
          <span className="editorial-label">The Comparison</span>
          <h2 className={styles.headline}>
            when they open your website beside another studio's, <mark>what do they see?</mark>
          </h2>
        </header>

        <div className={styles.visuals}>
          
          {/* Studio B (The Bad One - First) */}
          <div className={styles.cardWrapper}>
            <div className={`${styles.statusBadge} ${styles.badBadge}`}>
              <BadgeCross />
            </div>
            <div className={styles.card}>
              <div className={styles.windowTitle}>The Average Studio</div>
              <ul className={`${styles.featureList} ${styles.badList}`}>
                <li><ListCross /> <span>Linktree to Instagram</span></li>
                <li><ListCross /> <span>Outdated projects</span></li>
                <li><ListCross /> <span>Generic "about us" copy</span></li>
                <li><ListCross /> <span>Random image gallery</span></li>
                <li><ListCross /> <span>Basic contact form</span></li>
              </ul>
            </div>
          </div>
          
          {/* Studio A (The Good One - Second) */}
          <div className={styles.cardWrapper}>
            <div className={`${styles.statusBadge} ${styles.goodBadge}`}>
              <BadgeCheck />
            </div>
            <div className={styles.card}>
              <div className={styles.windowTitle}>Our Standard</div>
              <ul className={styles.featureList}>
                <li><ListCheck /> <span>Beautiful project imagery</span></li>
                <li><ListCheck /> <span>Clear studio specialization</span></li>
                <li><ListCheck /> <span>The story behind the space</span></li>
                <li><ListCheck /> <span>Detailed services & process</span></li>
                <li><ListCheck /> <span>Frictionless enquiry</span></li>
              </ul>
            </div>

            {/* Handwritten Annotations pointing to the Good Card */}
            <div className={styles.annotationsContainer}>
              <div className={styles.annotation}>
                <ArrowLeft />
                <span className={styles.annotationText}>Clear Positioning</span>
              </div>
              <div className={styles.annotation}>
                <ArrowLeft />
                <span className={styles.annotationText}>Beautiful Imagery</span>
              </div>
              <div className={styles.annotation}>
                <ArrowLeft />
                <span className={styles.annotationText}>High Conversion</span>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.footer}>
          <p>Your competitor doesn't have to be better at interior design.</p>
          <p><strong>They just have to make it easier for a prospective client to understand why they should choose them.</strong></p>
        </div>

      </div>
    </section>
  );
}
