'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './core/SectionHeader';
import styles from './Process.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const t = useTranslations('process');
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.process-step-elem', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <section id="process" ref={containerRef} className={styles.section} aria-labelledby="process-heading">
      <div className="container">
        <SectionHeader 
          tag={t('tag')}
          title={t('title')}
          desc={t('desc')}
          titleId="process-heading"
          align="center"
          className={styles.processHeader}
        />

        <ol className={styles.processGrid} aria-label="Pasos del proceso">
          {/* Step 1 */}
          <li className={`${styles.processStep} process-step-elem`}>
            <div className={styles.stepNum} aria-hidden="true">01</div>
            <div className={styles.stepIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <h3 className={styles.processTitle}>{t('p1.title')}</h3>
            <p className={styles.processDesc}>{t('p1.desc')}</p>
          </li>

          {/* Step 2 */}
          <li className={`${styles.processStep} process-step-elem`}>
            <div className={styles.stepNum} aria-hidden="true">02</div>
            <div className={styles.stepIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <h3 className={styles.processTitle}>{t('p2.title')}</h3>
            <p className={styles.processDesc}>{t('p2.desc')}</p>
          </li>

          {/* Step 3 */}
          <li className={`${styles.processStep} process-step-elem`}>
            <div className={styles.stepNum} aria-hidden="true">03</div>
            <div className={styles.stepIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 className={styles.processTitle}>{t('p3.title')}</h3>
            <p className={styles.processDesc}>{t('p3.desc')}</p>
          </li>

          {/* Step 4 */}
          <li className={`${styles.processStep} process-step-elem`}>
            <div className={styles.stepNum} aria-hidden="true">04</div>
            <div className={styles.stepIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            </div>
            <h3 className={styles.processTitle}>{t('p4.title')}</h3>
            <p className={styles.processDesc}>{t('p4.desc')}</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
