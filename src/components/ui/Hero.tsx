'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from './core/Button';
import GlassCard from './core/GlassCard';
import styles from './Hero.module.css';

// Stat values live here (not in messages/*.json) because they're numbers
// tweened by GSAP, not translated strings — only the label under each
// number comes from i18n. Keep this in sync with hero.stat1/2/3 in
// messages/es.json + en.json if the figures ever change.
const STATS = [
  { value: 20, prefix: '+', suffix: '', labelKey: 'stat1' },
  { value: 90, prefix: '+', suffix: '%', labelKey: 'stat2' },
  { value: 3, prefix: '', suffix: '', labelKey: 'stat3' },
] as const;

// v2: single-column, typography-led hero. Dropped the two-column
// mockup-placeholder layout — that box had no real content (just a
// gradient standing in for an illustration that isn't produced yet), so it
// read as unfinished rather than "innovative". Everything here is either
// real copy or a decorative element that costs no content: gradient-sweep
// on the headline, two ambient glass badges that drift on their own (pure
// CSS, no mousemove listener), a single glass stats bar, and a scroll cue.
export default function Hero() {
  const t = useTranslations('hero');
  const containerRef = useRef<HTMLElement>(null);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const reduceMotion = useReducedMotion();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Text reveal, top to bottom.
    tl.from('.hero-text-elem', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // Stat count-up: numbers tween from 0 to their real value once the
    // stats bar has revealed. Skipped under reduced-motion — the
    // server-rendered final numbers (JSX below) just stay put.
    if (!reduceMotion) {
      statRefs.current.forEach((el, i) => {
        if (!el) return;
        const counter = { val: 0 };
        gsap.to(counter, {
          val: STATS[i].value,
          duration: 1.4,
          delay: 0.9 + i * 0.15,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = String(Math.round(counter.val));
          },
        });
      });
    }
  }, { scope: containerRef, dependencies: [reduceMotion] });

  return (
    <section ref={containerRef} className={styles.hero} aria-label="Sección principal">
      <div className={styles.heroBg} aria-hidden="true">
        <div className={`${styles.heroBlob} ${styles.heroBlob1}`} />
        <div className={`${styles.heroBlob} ${styles.heroBlob2}`} />
      </div>

      {/* Ambient badges: real copy (badge1/2 from messages), float
          independently via CSS keyframes — no JS tracking needed since
          they're no longer pinned to a mockup image. */}
      <div className={styles.heroBadges} aria-hidden="true">
        <GlassCard variant="light" className={`${styles.floatBadge} ${styles.floatBadge1}`}>
          <span className={styles.badgeContent}>🚀 {t('badge1.title')}</span>
        </GlassCard>
        <GlassCard variant="dark" className={`${styles.floatBadge} ${styles.floatBadge2}`}>
          <span className={styles.badgeContent}>💻 {t('badge2.title')}</span>
        </GlassCard>
      </div>

      <div className="container">
        <div className={styles.heroInner}>
          <h1
            className={`${styles.heroTitle} hero-text-elem`}
            dangerouslySetInnerHTML={{ __html: t.raw('title') }}
          />

          <p className={`${styles.heroDesc} hero-text-elem`}>
            {t('desc')}
          </p>

          <div className={`${styles.heroActions} hero-text-elem`}>
            <Button variant="whatsapp" href="https://wa.me/message/J3MYMT4QSDQDL1" external>
              {t('cta1')}
            </Button>
            <Button variant="secondary" href="/#cases">
              {t('cta2')}
            </Button>
          </div>

          <GlassCard variant="light" className={`${styles.statsBar} hero-text-elem`}>
            {STATS.map((stat, i) => (
              <div className={styles.statItem} key={stat.labelKey}>
                <div className={styles.statNum}>
                  {stat.prefix}
                  <span ref={(el) => { statRefs.current[i] = el; }}>{stat.value}</span>
                  {stat.suffix && <span className={styles.statSuffix}>{stat.suffix}</span>}
                </div>
                <div className={styles.statLabel}>{t(stat.labelKey)}</div>
              </div>
            ))}
          </GlassCard>
        </div>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollCueDot} />
      </div>
    </section>
  );
}
