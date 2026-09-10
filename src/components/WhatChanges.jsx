import React from 'react';
import styles from './WhatChanges.module.css';

const KeySVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
  </svg>
);

const EyeSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const CursorSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
    <path d="M13 13l6 6"></path>
  </svg>
);

export default function WhatChanges() {
  const blocks = [
    {
      num: '01',
      title: 'MAKE THE RIGHT WORK EASY TO FIND.',
      icon: <KeySVG />,
      sub: 'The One-Click Solution',
      content: (
        <div className={styles.drContent}>
          <p className={styles.tightText}>A prospective client shouldn't have to scroll through years of Instagram posts...</p>
          <p className={styles.tightText}>Just to find the kind of project they want to hire you for.</p>
          <p className={styles.pushDown}><strong>Send ONE URL.</strong></p>
          <p className={styles.tightText}>Instead of five Instagram posts...</p>
          <p className={styles.tightText}>A massive PDF...</p>
          <p className={styles.tightText}>And a WhatsApp explanation.</p>
        </div>
      )
    },
    {
      num: '02',
      title: "SHOW WHAT'S BEHIND THE ROOM.",
      icon: <EyeSVG />,
      sub: 'Sell The Expertise',
      content: (
        <div className={styles.drContent}>
          <p className={styles.tightText}>Beautiful photographs show the result.</p>
          <p className={styles.pushDown}><strong>But they don't sell the expertise.</strong></p>
          <p className={styles.tightText}>Your website needs to explain the brief, the constraints, the scope, and the deep thinking behind it.</p>
          <p className={styles.pushDown}>When visitors understand what you actually bring to a project...</p>
          <p className={styles.tightText}><u>They stop questioning your fees.</u></p>
        </div>
      )
    },
    {
      num: '03',
      title: 'MAKE THE NEXT STEP OBVIOUS.',
      icon: <CursorSVG />,
      sub: 'Remove The Friction',
      content: (
        <div className={styles.drContent}>
          <p className={styles.tightText}>When someone finishes exploring your work and thinks "I'd like to talk to them"...</p>
          <p className={styles.pushDown}>They shouldn't have to hunt the footer for an email address.</p>
          <p className={styles.tightText}><strong>Give them a clear, undeniable way to tell you about their project.</strong></p>
          <p className={styles.tightText}>Right there. On the spot.</p>
        </div>
      )
    }
  ];

  return (
    <section className={styles.changesSection} id="difference">
      <div className="container">
        
        <header className={styles.header}>
          <span className="editorial-label">The Difference</span>
          <h2 className={styles.headline}>not another place to <mark>just</mark> put your projects.</h2>
        </header>

        <div className={styles.blocksContainer}>
          {blocks.map((block, idx) => (
            <div key={idx} className={styles.block}>
              <div className="fine-rule"></div>
              <div className={styles.blockInner}>
                <div className={styles.blockNum}>{block.num}</div>
                <div className={styles.blockContent}>
                  <h3 className={styles.blockTitle}>{block.title}</h3>
                  <h4 className="dr-subhead-1" style={{ marginTop: 0 }}>
                    {block.icon} {block.sub}
                  </h4>
                  <div className={styles.blockText}>{block.content}</div>
                </div>
              </div>
            </div>
          ))}
          <div className="fine-rule"></div>
        </div>

      </div>
    </section>
  );
}
