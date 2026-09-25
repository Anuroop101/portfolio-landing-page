import React from 'react';
import styles from './Hero.module.css';

export default function Hero({ onOpenApplication }) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        
        <div className={styles.heroTop}>
          <p className={`editorial-label ${styles.label}`}>Web Design / For Interior Design Studios</p>
          
          <h1 className={styles.headline}>
            when a <mark>high-value prospect</mark> hears your name, what do they actually find?
          </h1>
        </div>

        <div className={styles.heroBottom}>
          
          {/* Left Side: Image Content */}
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" 
                alt="Premium interior design living room" 
                className={styles.mainImage}
              />
              
              {/* Editorial annotations */}
              <div className={styles.annotations}>
                <span className={styles.metaLabel}>Project / 001</span>
                <span className={styles.metaLabel}>Residential</span>
                <span className={styles.metaLabel}>London</span>
                <span className={styles.metaLabel}>2026</span>
                <a href="#project" className={styles.metaLabelLink}>&darr; View Project</a>
              </div>

              {/* Handwritten style markup */}
              <div className={`annotation ${styles.handwritten}`}>
                first impression
              </div>
              
              <svg className={styles.scribbleArrow} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10 Q 40 40 10 50" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" />
                <path d="M10 50 L 25 45 M10 50 L 15 35" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className={styles.textContent}>
            <div className={styles.supportingText}>
              <p className={styles.tightText}>A referral.</p>
              <p className={styles.tightText}>An Instagram post.</p>
              <p className={styles.tightText}>A Google search...</p>
              
              <p className={styles.pushDown}>However they discover you, eventually they <strong>will</strong> look you up.</p>
              
              <p className={styles.tightText}>And when they do?</p>
              
              <p className={styles.pushDown}><strong>We build the place they go next.</strong></p>
            </div>
            
            <div className={styles.ctaGroup}>
              <a 
                href="https://www.instagram.com/direct/t/17844966386941227" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Start a project &rarr;
              </a>
              <a href="#work" className={styles.secondaryLink}>View selected work &darr;</a>
            </div>
          </div>

        </div>

      </div>
      <div className="fine-rule"></div>
    </section>
  );
}
