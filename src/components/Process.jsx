import React from 'react';
import styles from './Process.module.css';

export default function Process() {
  const steps = [
    { id: '01', title: 'Tell us about your studio', desc: 'Complete a short questionnaire about your studio, projects, services, audience and goals. Send us the assets you already have.' },
    { id: '02', title: 'We design', desc: "We turn that information into the site's structure and visual direction, built around your work rather than a generic template." },
    { id: '03', title: 'You review', desc: 'You see the design, give feedback and approve the direction through the agreed revision rounds.' },
    { id: '04', title: 'We build', desc: 'We develop the responsive website, add your projects and content, and test everything across devices.' },
    { id: '05', title: 'We launch', desc: 'Final checks, final approval, then your new website goes live.' }
  ];

  return (
    <section className={styles.processSection}>
      <div className="container">
        
        <header className={styles.header}>
          <span className="editorial-label">From First Message to Live Site</span>
          <h2 className={styles.headline}>simple on your side.<br />structured on ours.</h2>
        </header>
        
        <div className={styles.timeline}>
          {steps.map((step, idx) => (
            <div key={step.id} className={styles.step}>
              <div className={styles.stepMarker}>
                <span className={styles.stepId}>{step.id}</span>
                <div className={styles.markerCircle}></div>
              </div>
              
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
              
              {idx !== steps.length - 1 && <div className={styles.connector}></div>}
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerNote}><strong>No unnecessary meetings. <mark>No technical work for you.</mark></strong></p>
        </div>

      </div>
    </section>
  );
}
