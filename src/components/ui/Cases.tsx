'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './core/SectionHeader';
import styles from './Cases.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Cases() {
  const t = useTranslations('cases');
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.case-card-elem', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <section id="cases" ref={containerRef} className={styles.section} aria-labelledby="cases-heading">
      <div className="container">
        <SectionHeader 
          tag={t('tag')}
          title={t('title')}
          desc={t('desc')}
          titleId="cases-heading"
          align="center"
        />

        <div className={styles.casesGrid}>

          {/* Project 1 */}
          <Link href="/projects#proj-cato" style={{ textDecoration: 'none' }}>
            <article className={`${styles.caseCard} case-card-elem`}>
              <div className={styles.caseImg} style={{background: 'linear-gradient(135deg,#0B2540,#1a3a5c)'}}>
                <span className={styles.caseType}>{t('cato1')}</span>
                <img
                  src="/_legacy_site/assets/projects/cato-media/hero-sbj.webp" // Temporarily pointing to legacy assets
                  alt="CATO Media Company"
                  width="600" height="400"
                  loading="lazy"
                  className={styles.projectImg}
                />
              </div>
              <div className={styles.caseBody}>
                <h3>CATO Media</h3>
                <p>{t('case1.desc')}</p>
                <div className={styles.caseTags}>
                  <span className={styles.caseTag}>WordPress</span>
                  <span className={styles.caseTag}>PHP</span>
                  <span className={styles.caseTag}>CRM</span>
                  <span className={styles.caseTag}>{t('case1.tag')}</span>
                </div>
                <div className={styles.caseMetric}>
                  <span className={styles.caseScore}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                    {t('case1.metric')}
                  </span>
                  <span className={styles.caseLink}>{t('view')}</span>
                </div>
              </div>
            </article>
          </Link>

          {/* Project 2 */}
          <Link href="/projects#proj-linework" style={{ textDecoration: 'none' }}>
            <article className={`${styles.caseCard} case-card-elem`}>
              <div className={styles.caseImg} style={{background: 'linear-gradient(135deg,#1a2744,#308ACD33)'}}>
                <span className={styles.caseType}>Product Design</span>
                <img
                  src="/_legacy_site/assets/projects/linework/hero-linework.webp"
                  alt="Linework"
                  width="600" height="400"
                  loading="lazy"
                  className={styles.projectImg}
                />
              </div>
              <div className={styles.caseBody}>
                <h3>Linework</h3>
                <p>{t('case2.desc')}</p>
                <div className={styles.caseTags}>
                  <span className={styles.caseTag}>UX/UI</span>
                  <span className={styles.caseTag}>Figma</span>
                  <span className={styles.caseTag}>Design System</span>
                  <span className={styles.caseTag}>WordPress</span>
                </div>
                <div className={styles.caseMetric}>
                  <span className={styles.caseScore}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                    {t('case2.metric')}
                  </span>
                  <span className={styles.caseLink}>{t('view')}</span>
                </div>
              </div>
            </article>
          </Link>

          {/* Project 3 */}
          <Link href="/projects#proj-casa" style={{ textDecoration: 'none' }}>
            <article className={`${styles.caseCard} case-card-elem`}>
              <div className={styles.caseImg} style={{background: 'linear-gradient(135deg,#2d1b4e,#6B3FA0)'}}>
                <span className={styles.caseType}>E-Commerce</span>
                <img
                  src="/_legacy_site/assets/projects/casa-escencia/hero-ce.webp"
                  alt="Casa Escencia"
                  width="600" height="400"
                  loading="lazy"
                  className={styles.projectImg}
                />
              </div>
              <div className={styles.caseBody}>
                <h3>Casa Escencia</h3>
                <p>{t('case3.desc')}</p>
                <div className={styles.caseTags}>
                  <span className={styles.caseTag}>WordPress</span>
                  <span className={styles.caseTag}>WooCommerce</span>
                  <span className={styles.caseTag}>E-Commerce</span>
                </div>
                <div className={styles.caseMetric}>
                  <span className={styles.caseScore}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                    {t('case3.metric')}
                  </span>
                  <span className={styles.caseLink}>{t('view')}</span>
                </div>
              </div>
            </article>
          </Link>

        </div>

        <div className={styles.casesCta}>
          <Link href="/projects" className="btn btn-secondary btn-lg">
            {t('cta')}
          </Link>
        </div>

      </div>
    </section>
  );
}
