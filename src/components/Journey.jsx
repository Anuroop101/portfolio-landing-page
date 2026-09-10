import React from 'react';
import styles from './Journey.module.css';

export default function Journey() {
  const steps = [
    { num: '01', title: 'REFERRED', desc: '"You should speak to them."' },
    { num: '02', title: 'GOOGLE', desc: 'They look you up.' },
    { num: '03', title: 'EXPLORE', desc: 'Projects.\nApproach.\nServices.\nStudio.' },
    { num: '04', title: 'DECIDE', desc: '"This is exactly the kind of designer we\'re looking for."' },
    { num: '05', title: 'ENQUIRE', desc: 'Tell us about your project →' }
  ];

  return (
    <section className={styles.journeySection}>
      <div className="container">
        
        <div className={styles.header}>
          <span className="editorial-label">The Journey</span>
          <h2 className={styles.headline}>someone just <mark>heard your name</mark>.</h2>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>
                  {step.desc.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}<br/>
                    </React.Fragment>
                  ))}
                </p>
              </div>
              {idx !== steps.length - 1 && <div className={styles.connector}>&darr;</div>}
            </div>
          ))}
        </div>
        
        <div className={styles.footer}>
          <p className={styles.footerText}><strong>That is <u>exactly</u> what your website should help them do!</strong></p>
        </div>

      </div>
    </section>
  );
}
