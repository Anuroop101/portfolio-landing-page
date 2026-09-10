import React, { useState } from 'react';
import styles from './SelectedWork.module.css';

export default function SelectedWork() {
  const projects = [
    {
      id: '001',
      name: 'voss studio',
      location: 'london',
      type: 'residential',
      year: '2026',
      image: '/voss-preview.png',
      desc: 'Full-service interior design for a Victorian townhouse renovation.',
      link: '/projects/demo1/index.html'
    }
  ];

  const [activeDemo, setActiveDemo] = useState(null);

  return (
    <section className={styles.workSection} id="work">
      <div className="container">
        
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <span className="editorial-label">Selected Work / 001</span>
            <div className={styles.decorativeLine}></div>
          </div>
          <h2 className={styles.headline}>let the work do the <mark>convincing</mark>.</h2>
          <p className={styles.subhead}>Because the actual quality of your portfolio needs to do most of the selling.</p>
        </header>

        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <article 
              key={project.id} 
              className={`${styles.project} ${index % 2 === 0 ? styles.projectOffset : ''}`}
            >
              <div 
                onClick={() => setActiveDemo(project.link)} 
                className={styles.imageContainer}
                style={{ cursor: 'pointer' }}
              >
                <img src={project.image} alt={project.name} className={styles.projectImage} />
                <div className={styles.hoverOverlay}>
                  <span className={styles.viewText}>Visit Live Demo &rarr;</span>
                </div>
              </div>
              
              <div className={styles.projectMeta}>
                <div className={styles.metaTop}>
                  <div 
                    onClick={() => setActiveDemo(project.link)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h3 className={styles.projectName}>{project.name}</h3>
                  </div>
                </div>
                
                <div className={styles.metaDetails}>
                  <span>{project.location}</span>
                  <span>/</span>
                  <span>{project.type}</span>
                  <span>/</span>
                  <span>{project.year}</span>
                </div>
                
                {project.desc && (
                  <p className={styles.projectDesc}>{project.desc}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Full-screen Demo Modal */}
        {activeDemo && (
          <div className={styles.demoModal}>
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>Live Preview: Voss Studio</span>
              <button 
                className={styles.closeButton}
                onClick={() => setActiveDemo(null)}
              >
                Close Preview &times;
              </button>
            </div>
            <iframe 
              src={activeDemo} 
              className={styles.demoIframe} 
              title="Live Demo"
            ></iframe>
          </div>
        )}

      </div>
    </section>
  );
}
