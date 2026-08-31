'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './core/SectionHeader';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const t = useTranslations('about');
  const containerRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      }
    });

    tl.from('.about-content-elem', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
    });

    tl.from(visualRef.current, {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.4');

    tl.from('.about-badge-elem', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'back.out(1.5)',
    }, '-=0.4');

  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className={styles.section} aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.aboutGrid}>

          {/* Visual */}
          <div ref={visualRef} className={styles.aboutVisual}>
            <div className={styles.aboutImgWrap}>
              <img
                src="/_legacy_site/assets/projects/about-team.webp"
                alt="MINO Solutions team"
                width="800" height="600"
                loading="lazy"
                className={styles.projectImg}
              />
            </div>

            {/* Badges */}
            <div className={`${styles.aboutBadgeFloat} ${styles.topLeft} about-badge-elem`} aria-hidden="true">
              <div className={`${styles.aboutBadgeIcon} ${styles.blue}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className={styles.aboutBadgeText}>
                <strong>{t('badge1.t')}</strong>
                <span>{t('badge1.s')}</span>
              </div>
            </div>

            <div className={`${styles.aboutBadgeFloat} ${styles.botRight} about-badge-elem`} aria-hidden="true">
              <div className={`${styles.aboutBadgeIcon} ${styles.purple}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className={styles.aboutBadgeText}>
                <strong>{t('badge2.t')}</strong>
                <span>{t('badge2.s')}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={styles.aboutContent}>
            <SectionHeader 
              tag={t('tag')}
              title={t('title')}
              desc={t('desc')}
              titleId="about-heading"
              align="left"
              className="about-content-elem"
            />

            <div className={`${styles.mvGrid} about-content-elem`} aria-label="Mission and Vision">
              <div className={styles.mvCard}>
                <div className={styles.mvCardHead}>
                  <div className={styles.mvIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h3 className={styles.mvCardHeading}>{t('mission.title')}</h3>
                </div>
                <p>{t('mission.desc')}</p>
              </div>

              <div className={styles.mvCard}>
                <div className={styles.mvCardHead}>
                  <div className={styles.mvIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  </div>
                  <h3 className={styles.mvCardHeading}>{t('vision.title')}</h3>
                </div>
                <p>{t('vision.desc')}</p>
              </div>
            </div>

            <a
              href="https://wa.me/message/J3MYMT4QSDQDL1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg about-content-elem"
            >
              {t('cta')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
