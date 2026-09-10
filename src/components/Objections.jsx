import React from 'react';
import styles from './Objections.module.css';

export default function Objections() {
  const faqs = [
    {
      q: 'Already have Instagram?',
      a: 'Instagram is useful for discovery and ongoing content. The website gives the studio a dedicated place to present its work, identity, services and inquiries in a more controlled way.'
    },
    {
      q: "Don't have time?",
      a: 'The process is intentionally lightweight for the client. After the initial questionnaire and asset collection, we handle the design and development.'
    },
    {
      q: 'Will it look like every other website?',
      a: 'No. The website is built around the studio\'s work, aesthetic and positioning — not a generic business template.'
    },
    {
      q: 'Will I have to deal with technical stuff?',
      a: 'We handle responsive implementation, website setup, testing, and launch. You focus on running your studio.'
    }
  ];

  return (
    <section className={styles.objectionsSection}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.headerColumn}>
          <h2 className={styles.headline}>
            you have a studio to run.<br />
            you shouldn't have to<br />
            run your website too.
          </h2>
        </div>

        <div className={styles.faqColumn}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqItem}>
              <h4 className={styles.question}>{faq.q}</h4>
              <p className={styles.answer}>{faq.a}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
