'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './core/SectionHeader';
import ServiceCard from './core/ServiceCard';
import Button from './core/Button';
import styles from './Services.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const t = useTranslations('services');
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.service-card-elem', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        <SectionHeader 
          tag={t('tag')}
          title={t('title')}
          desc={t('desc')}
          titleId="services-heading"
          align="center"
        />

        <div className={styles.servicesGrid}>
          {/* Service 1 */}
          <ServiceCard
            className="service-card-elem"
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>}
            title={t('s1.title')}
            description={t('s1.desc')}
            features={[t('s1.f1'), t('s1.f2'), t('s1.f3'), t('s1.f4')]}
          />

          {/* Service 2 */}
          <ServiceCard
            className="service-card-elem"
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
            title={t('s2.title')}
            description={t('s2.desc')}
            features={[t('s2.f1'), t('s2.f2'), t('s2.f3'), t('s2.f4')]}
          />

          {/* Service 3 */}
          <ServiceCard
            className="service-card-elem"
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>}
            title={t('s3.title')}
            description={t('s3.desc')}
            features={[t('s3.f1'), t('s3.f2'), t('s3.f3'), t('s3.f4')]}
          />

          {/* Service 4 */}
          <ServiceCard
            className="service-card-elem"
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>}
            title={t('s4.title')}
            description={t('s4.desc')}
            features={[t('s4.f1'), t('s4.f2'), t('s4.f3'), t('s4.f4')]}
          />

          {/* Service 5 */}
          <ServiceCard
            className="service-card-elem"
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-3 2-6 2-5.5-2-9-2-4 2-4 2v16s1-2 4-2 5.5 2 9 2 6-2 6-2V4z"/><line x1="12" y1="6" x2="12" y2="18"/></svg>}
            title={t('s5.title')}
            description={t('s5.desc')}
            features={[t('s5.f1'), t('s5.f2'), t('s5.f3'), t('s5.f4')]}
          />

          {/* CTA Card */}
          <div className={`${styles.serviceCardCta} service-card-elem`}>
            <div aria-hidden="true" style={{fontSize: '2rem', marginBottom: '20px'}}>💬</div>
            <h3 style={{color: 'white', marginBottom: '12px'}}>{t('cta.title')}</h3>
            <p style={{color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginBottom: '28px'}}>{t('cta.desc')}</p>
            <Button variant="whatsapp" href="https://wa.me/message/J3MYMT4QSDQDL1" external>
              {t('cta.btn')}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
