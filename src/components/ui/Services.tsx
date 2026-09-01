'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionHeader from './core/SectionHeader';
import ServiceTabs from './core/ServiceTabs';
import Button from './core/Button';
import styles from './Services.module.css';

gsap.registerPlugin(ScrollTrigger);

// s1 (UI/UX) and s2 (Web Development) are the two services the business
// wants front and center — `featured: true` gives them the accent marker
// in ServiceTabs, everything else is equal-weight. Content itself comes
// straight from messages/*.json (services.s1..s5), nothing invented.
const SERVICES = [
  {
    key: 's1',
    featured: true,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  },
  {
    key: 's2',
    featured: true,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  },
  {
    key: 's3',
    featured: false,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  },
  {
    key: 's4',
    featured: false,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>,
  },
  {
    key: 's5',
    featured: false,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-3 2-6 2-5.5-2-9-2-4 2-4 2v16s1-2 4-2 5.5 2 9 2 6-2 6-2V4z"/><line x1="12" y1="6" x2="12" y2="18"/></svg>,
  },
] as const;

export default function Services() {
  const t = useTranslations('services');
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  useGSAP(() => {
    if (reduceMotion) return;
    // One group entrance for header + tabs showcase as the section comes
    // into view, plus the closing CTA panel on its own trigger. Switching
    // between services themselves is click-driven (ServiceTabs, Framer
    // Motion) — no per-item scroll animation needed anymore.
    gsap.from('.services-intro-elem', {
      scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power2.out',
    });
    gsap.from('.services-cta-elem', {
      scrollTrigger: { trigger: '.services-cta-elem', start: 'top 88%' },
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
    });
  }, { scope: containerRef, dependencies: [reduceMotion] });

  const services = SERVICES.map(({ key, icon, featured }) => ({
    key,
    icon,
    featured,
    title: t(`${key}.title`),
    description: t(`${key}.desc`),
    features: [t(`${key}.f1`), t(`${key}.f2`), t(`${key}.f3`), t(`${key}.f4`)],
  }));

  return (
    <section id="services" ref={containerRef} className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        <SectionHeader
          className="services-intro-elem"
          tag={t('tag')}
          title={t('title')}
          desc={t('desc')}
          titleId="services-heading"
          align="center"
        />

        <div className="services-intro-elem">
          <ServiceTabs services={services} />
        </div>

        <div className={`${styles.ctaPanel} services-cta-elem`}>
          <div aria-hidden="true" className={styles.ctaEmoji}>💬</div>
          <h3 className={styles.ctaTitle}>{t('cta.title')}</h3>
          <p className={styles.ctaDesc}>{t('cta.desc')}</p>
          <Button variant="whatsapp" href="https://wa.me/message/J3MYMT4QSDQDL1" external>
            {t('cta.btn')}
          </Button>
        </div>
      </div>
    </section>
  );
}
