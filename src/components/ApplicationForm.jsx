import React from 'react';
import styles from './ApplicationForm.module.css';

export default function ApplicationForm({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "https://www.instagram.com/direct/t/17844966386941227";
  };

  return (
    <div className={styles.modalOverlay}>
      <header className={styles.header}>
        <span className="editorial-label">Project Application</span>
        <button className={styles.closeBtn} onClick={onClose}>Close &times;</button>
      </header>
      
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Tell us about your studio.</h1>
        <p className={styles.subtitle}>
          A few questions so we can understand your studio, the kind of work you do, and what you need from the website.
        </p>

        <form onSubmit={handleSubmit}>
          
          {/* About the studio */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>About the studio</h2>
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Studio name</label>
                <input type="text" className={styles.input} required />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Website / current website (if any)</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Instagram</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Location</label>
                <input type="text" className={styles.input} required />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Years in business</label>
                <select className={styles.select}>
                  <option value="">Select...</option>
                  <option value="Just starting">Just starting</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Team size</label>
                <select className={styles.select}>
                  <option value="">Select...</option>
                  <option value="Solo">Solo</option>
                  <option value="2-5">2-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11+">11+</option>
                </select>
              </div>
            </div>
          </section>

          {/* About the work */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>About the work</h2>
            <div className={styles.formGrid}>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>What type of projects do you specialize in?</label>
                <textarea className={styles.textarea} required></textarea>
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>What kind of projects do you want to attract?</label>
                <textarea className={styles.textarea} required></textarea>
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <div className={styles.labelHeader}>
                  <label className={styles.label}>Link to 3–5 projects you're most proud of</label>
                  <span className={styles.optionalTag}>Optional for now</span>
                </div>
                <p className={styles.helperText}>
                  Google Drive, Dropbox, or live web links. We will need project photography and details to build your site, but feel free to skip this if you don't have them ready to share yet.
                </p>
                <textarea 
                  className={styles.textarea}
                  placeholder="Paste links to Drive folders, Dropbox, published features, or current project pages..."
                ></textarea>
              </div>
            </div>
          </section>

          {/* About the website */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>About the website</h2>
            <div className={styles.formGrid}>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>What isn't working with your current online presence?</label>
                <textarea className={styles.textarea} required></textarea>
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>What do you want the new website to accomplish?</label>
                <textarea className={styles.textarea} required></textarea>
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Do you already have photography/content?</label>
                <input type="text" className={styles.input} required />
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Anything else we should know?</label>
                <textarea className={styles.textarea}></textarea>
              </div>
            </div>
          </section>

          {/* Qualification */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Qualification</h2>
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Approximate project budget / investment range</label>
                <p className={styles.helperText}>Don't worry, we'll discuss in chat.</p>
                <input 
                  type="text" 
                  className={styles.input} 
                  placeholder="Under $1k or more?" 
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Desired launch timeframe</label>
                <p className={styles.helperText}>Don't worry, we'll discuss in chat.</p>
                <input 
                  type="text" 
                  className={styles.input} 
                  placeholder="A week or more?" 
                />
              </div>
            </div>
          </section>

          <button type="submit" className={styles.submitBtn}>SUBMIT PROJECT &rarr;</button>

        </form>
      </div>
    </div>
  );
}
