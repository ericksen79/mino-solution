'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './ProjectsHero.module.css';

export default function ProjectsHero() {
  const t = useTranslations('projects.hero');
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.phero-elem', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      delay: 0.2
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={styles.section} aria-labelledby="page-hero-heading">
      
      <div className={styles.heroBg} aria-hidden="true">
        <div className={`${styles.blob} ${styles.blob1}`}></div>
        <div className={`${styles.blob} ${styles.blob2}`}></div>
      </div>

      <div className="container">
        <div className={styles.inner}>
          
          <div className={`${styles.tag} phero-elem`}>{t('tag')}</div>
          
          <h1 id="page-hero-heading" className="phero-elem" dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
          
          <p className={`${styles.desc} phero-elem`}>
            {t('desc')}
          </p>

          <div className={`${styles.statsRow} phero-elem`} aria-label="Estadísticas del portafolio">
            <div className={styles.stat}>
              <div className={styles.statNum}><span>+</span> 20</div>
              <div className={styles.statLbl}>{t('s1')}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>+90 <span>%</span></div>
              <div className={styles.statLbl}>{t('s2')}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>6 <span>+</span></div>
              <div className={styles.statLbl}>{t('s3')}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>5</div>
              <div className={styles.statLbl}>{t('s4')}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
