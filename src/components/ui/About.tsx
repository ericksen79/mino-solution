'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './core/SectionHeader';
import GlassCard from './core/GlassCard';
import Button from './core/Button';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

// Same layout as before (photo + floating badges left, story + mission/
// vision right) — rebuilt for a softer, warmer read: a real photo that
// unveils itself (clip-path wipe, not a flat fade), badges as actual
// GlassCard glass (matches the rest of the site instead of a one-off
// blurred box), and rounder, friendlier mission/vision tiles. The message
// here is "we're people you can trust," not a feature list — the motion
// and shapes should feel calm, not technical.
export default function About() {
  const t = useTranslations('about');
  const containerRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useGSAP(() => {
    if (reduceMotion) return;

    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
    });

    // Photo unveils left-to-right instead of just fading in — reads as an
    // intentional reveal, not a generic entrance.
    tl.fromTo(
      imgRef.current,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1.1, ease: 'power3.inOut' }
    );

    tl.from('.about-content-elem', {
      y: 24,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
    }, '-=0.7');

    tl.from('.about-mv-elem', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.12,
      ease: 'power2.out',
    }, '-=0.3');

    tl.from('.about-badge-elem', {
      scale: 0.85,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: 'back.out(1.6)',
    }, '-=0.5');
  }, { scope: containerRef, dependencies: [reduceMotion] });

  return (
    <section id="about" ref={containerRef} className={styles.section} aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.aboutGrid}>

          {/* Visual */}
          <div className={styles.aboutVisual}>
            <div ref={imgRef} className={styles.aboutImgWrap}>
              <Image
                src="/assets/projects/about-team.webp"
                alt="Equipo de MINO Solutions"
                width={800}
                height={600}
                sizes="(max-width: 992px) 90vw, 45vw"
                className={styles.aboutImg}
              />
            </div>

            <div className={`${styles.badgeSlot} ${styles.topLeft} about-badge-elem`}>
              <GlassCard variant="light" className={styles.badgeCard}>
                <div className={styles.badgeContent}>
                  <div className={`${styles.badgeIcon} ${styles.blue}`} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div className={styles.badgeText}>
                    <strong>{t('badge1.t')}</strong>
                    <span>{t('badge1.s')}</span>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className={`${styles.badgeSlot} ${styles.botRight} about-badge-elem`}>
              <GlassCard variant="light" className={styles.badgeCard}>
                <div className={styles.badgeContent}>
                  <div className={`${styles.badgeIcon} ${styles.purple}`} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div className={styles.badgeText}>
                    <strong>{t('badge2.t')}</strong>
                    <span>{t('badge2.s')}</span>
                  </div>
                </div>
              </GlassCard>
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

            <div className={styles.mvGrid} aria-label="Misión y visión">
              <div className={`${styles.mvCard} about-mv-elem`}>
                <div className={styles.mvIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className={styles.mvHeading}>{t('mission.title')}</h3>
                <p>{t('mission.desc')}</p>
              </div>

              <div className={`${styles.mvCard} about-mv-elem`}>
                <div className={styles.mvIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 className={styles.mvHeading}>{t('vision.title')}</h3>
                <p>{t('vision.desc')}</p>
              </div>
            </div>

            <div className="about-content-elem">
              <Button variant="whatsapp" href="https://wa.me/message/J3MYMT4QSDQDL1" external>
                {t('cta')}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
