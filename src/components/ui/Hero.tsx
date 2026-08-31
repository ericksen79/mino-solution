'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from './core/Button';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('hero');
  const containerRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Text Reveal
    tl.from('.hero-text-elem', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Mockup Reveal
    tl.from(mockupRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.5)',
    }, '-=0.4');

    // Badges Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(badge1Ref.current, { x: xPos, y: yPos, duration: 1, ease: 'power2.out' });
      gsap.to(badge2Ref.current, { x: -xPos, y: -yPos, duration: 1, ease: 'power2.out' });
      gsap.to('.hero-blob-elem', { x: xPos * 2, y: yPos * 2, duration: 2, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={styles.hero} aria-label="Sección principal">
      <div className={styles.heroBg} aria-hidden="true">
        <div className={`${styles.heroBlob} ${styles.heroBlob1} hero-blob-elem`}></div>
        <div className={`${styles.heroBlob} ${styles.heroBlob2} hero-blob-elem`}></div>
      </div>

      <div className="container">
        <div className={styles.heroGrid}>
          
          <div className={styles.heroContent}>
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

            <div className={`${styles.heroStats} hero-text-elem`}>
              <div className={styles.statItem}>
                <div className={styles.statNum}>+20</div>
                <div className={styles.statLabel}>{t('stat1')}</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>+90<span>%</span></div>
                <div className={styles.statLabel}>{t('stat2')}</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>3</div>
                <div className={styles.statLabel}>{t('stat3')}</div>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div ref={mockupRef} className={styles.heroMockup}>
              <div className={styles.mockupInner}>MINO Solutions</div>
            </div>
            
            <div ref={badge1Ref} className={`${styles.floatingBadge} ${styles.floatingBadge1} glass`}>
              🚀 {t('stat2')}
            </div>
            
            <div ref={badge2Ref} className={`${styles.floatingBadge} ${styles.floatingBadge2} glass-dark`}>
              💻 {t('stat3')}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
