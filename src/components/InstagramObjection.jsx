import React from 'react';
import styles from './InstagramObjection.module.css';

export default function InstagramObjection() {
  return (
    <section className={styles.instagramSection}>
      <div className="container">
        
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <span className="editorial-label">Keep Instagram.</span>
            <h2 className={styles.headline}>
              instagram gets people interested.<br />
              <mark>your website gives them somewhere to decide.</mark>
            </h2>
            
            <div className={styles.paragraph}>
              <p>Keep posting.</p>
              <br />
              <p>Keep building relationships.</p>
              <br />
              <p>Keep getting referrals.</p>
              <br />
              <p><strong>Your website doesn't replace any of that.</strong></p>
              <br />
              <p>It simply gives the people who become curious somewhere to go deeper.</p>
              <p>A single place where they can see your strongest work, understand your studio, learn how you work, and decide whether to get in touch.</p>
            </div>
          </div>

          <div className={styles.visualContent}>
            <div className={styles.flowchart}>
              
              <div className={styles.flowNode}>
                <h4 className={styles.nodeTitle}>INSTAGRAM</h4>
                <span className={styles.nodeSubtitle}>Discovery</span>
              </div>
              
              <div className={styles.flowArrow}>&darr;</div>
              
              <div className={styles.flowNode}>
                <h4 className={styles.nodeTitle}>WEBSITE</h4>
                <span className={styles.nodeSubtitle}>Evaluation</span>
              </div>
              
              <div className={styles.flowArrow}>&darr;</div>
              
              <div className={styles.flowNode}>
                <h4 className={styles.nodeTitle}>ENQUIRY</h4>
                <span className={styles.nodeSubtitle}>Conversation</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
