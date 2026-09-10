import React from 'react';
import styles from './WhatWeDo.module.css';

export default function WhatWeDo() {
  const outcomes = [
    {
      id: '01',
      title: 'show the work',
      desc: 'Turn individual projects into an intentional portfolio rather than a feed of images.'
    },
    {
      id: '02',
      title: 'build confidence',
      desc: 'Give potential clients a clear understanding of the studio, its work and its specialization.'
    },
    {
      id: '03',
      title: 'make inquiry easy',
      desc: 'Give interested visitors an obvious path to contact the studio or request a consultation.'
    }
  ];

  return (
    <section className={styles.systemSection}>
      <div className="container">
        
        <div className={styles.labelWrapper}>
          <span className="editorial-label">What the website does</span>
          <div className="fine-rule"></div>
        </div>

        <div className={styles.capabilitiesList}>
          {outcomes.map((cap, idx) => (
            <div key={cap.id} className={styles.capabilityItem}>
              <div className={styles.capabilityHeader}>
                <span className={styles.capId}>{cap.id} /</span>
                <h3 className={styles.capTitle}>{cap.title}</h3>
              </div>
              <p className={styles.capDesc}>{cap.desc}</p>
              
              {idx !== outcomes.length - 1 && <div className="fine-rule"></div>}
            </div>
          ))}
          <div className="fine-rule"></div>
        </div>

      </div>
    </section>
  );
}
