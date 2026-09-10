import React from 'react';
import styles from './Logo.module.css';

export default function Logo({ 
  size = 40, 
  variant = 'dark', 
  showSubtitle = true,
  className = '' 
}) {
  const isLight = variant === 'light';
  const strokeColor = isLight ? '#F4F4F0' : '#1C1C1C';
  const bgColor = isLight ? '#262626' : '#1C1C1C';
  const accentColor = isLight ? '#60A5FA' : '#1E3A8A';

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a 
      href="#" 
      onClick={scrollToTop}
      className={`${styles.logoContainer} ${isLight ? styles.lightVariant : ''} ${className}`}
      aria-label="Studio Archis - Back to Top"
    >
      <div className={styles.emblemWrapper} style={{ width: size, height: size }}>
        <svg 
          viewBox="0 0 100 100" 
          width={size} 
          height={size} 
          className={styles.emblemSvg}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer architectural boundary */}
          <rect width="100" height="100" rx="18" fill={bgColor} />
          
          {/* Subtle architectural guide grid */}
          <circle cx="50" cy="50" r="38" stroke={isLight ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.15)'} strokeWidth="1" strokeDasharray="2 2" />
          
          {/* Architectural 'A' Gable & Compass */}
          <path 
            d="M50 20 L28 76 H38 L44 60 H56 L62 76 H72 L50 20 Z" 
            fill="none" 
            stroke="#F4F4F0" 
            strokeWidth="3.5" 
            strokeLinejoin="miter" 
          />
          {/* Precision Crossbar */}
          <path d="M42 54 H58" stroke="#F4F4F0" strokeWidth="3" strokeLinecap="round" />
          
          {/* Intertwined 'S' (Studio) curve in royal cobalt blue */}
          <path 
            d="M62 33 C58 26, 45 26, 40 32 C34 38, 36 44, 44 47 C57 52, 63 56, 61 64 C58 72, 44 74, 38 68" 
            fill="none" 
            stroke={accentColor} 
            strokeWidth="3.5" 
            strokeLinecap="round" 
          />
          
          {/* Golden ratio precision apex */}
          <circle cx="50" cy="20" r="2.2" fill={accentColor} />
        </svg>
      </div>

      <div className={styles.brandText}>
        <span className={styles.brandName}>Studio Archis</span>
        {showSubtitle && (
          <span className={styles.brandSubtitle}>Web Design · Interior Studios</span>
        )}
      </div>
    </a>
  );
}
