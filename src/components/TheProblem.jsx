import React from 'react';
import styles from './TheProblem.module.css';

const AlertSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);


export default function TheProblem() {
  return (
    <section className={styles.problemSection}>
      <div className="container">
        
        <div className={styles.topContent}>
          <div className={styles.textLeft}>
            <span className="editorial-label">The Gap</span>
            <h2 className={styles.headline}>
              your work is <mark>miles ahead</mark><br />
              of how you present it online.
            </h2>
          </div>
          <div className={styles.textRight}>
            
            <h4 className="dr-subhead-1"><AlertSVG /> The Brutal Reality</h4>
            <p className={styles.tightText}>You see, you've spent years grinding to build this studio.</p>
            <p className={styles.tightText}><strong>The sleepless nights.</strong></p>
            <p className={styles.tightText}><strong>Years of trial and error.</strong></p>
            <p className={styles.tightText}>Beautiful spaces. Happy clients. Referrals that keep the lights on...</p>
            <p className={styles.pushDown}>And it simply just <em>works</em> in every single project you deploy it in.</p>
            
            <h4 className="dr-subhead-2">Then someone asks for your portfolio...</h4>
            <p className={styles.tightText}>And you send them your Instagram, or a PDF over WhatsApp.</p>
            <p className={styles.pushDown}>They scroll through an endless feed, trying to figure out what you <em>actually</em> do, what you charge, and whether you're the right fit.</p>
            <p className={styles.pushDown}>Look, I know you're busy.</p>
            
            <p className={styles.tightText}>But your portfolio needs to be a street-tested "selling system" that works right now.</p>
            <p className={styles.tightText}>To sell pretty much <u>ANYTHING!</u></p>
            <p className={styles.strongText}>Stop assembling portfolios manually... Stop making your next client piece your studio together like a puzzle.</p>
            
          </div>
        </div>

        <div className={styles.visualSplit}>
          <div className={styles.splitLeft}>
            <h3 className={styles.massiveType}>your<br/>work.</h3>
          </div>
          
          <div className={styles.splitImageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" 
              alt="Detail of an interior texture" 
              className={styles.image}
            />
          </div>

          <div className={styles.splitRight}>
            <h3 className={styles.massiveTypeRight}>the way<br/>it's presented.</h3>
          </div>
        </div>

      </div>
    </section>
  );
}
