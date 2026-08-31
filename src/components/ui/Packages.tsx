'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './core/SectionHeader';
import styles from './Packages.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Packages() {
  const t = useTranslations('packages');
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.package-card-elem', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <section id="packages" ref={containerRef} className={styles.section} aria-labelledby="packages-heading">
      <div className="container">
        <SectionHeader 
          tag={t('tag')}
          title={t('title')}
          desc={t('desc')}
          titleId="packages-heading"
          align="center"
        />

        <div className={styles.packagesGrid}>
          
          {/* Package 1: BusinessSync */}
          <article className={`${styles.packageCard} package-card-elem`}>
            <h3>BusinessSync</h3>
            <p className={styles.packageSubtitle}>{t('pkg2.sub')}</p>
            <div className={styles.packageServices}>
              <div className={styles.pkgServiceGroup}>
                <strong>{t('pkg.digital')}</strong>
                <ul className={styles.pkgFeatures}>
                  <li>{t('pkg2.f1')}</li>
                  <li>{t('pkg2.f2')}</li>
                  <li>{t('pkg2.f3')}</li>
                </ul>
              </div>
              <div className={styles.pkgServiceGroup}>
                <strong>{t('pkg.web')}</strong>
                <ul className={styles.pkgFeatures}>
                  <li>{t('pkg2.f4')}</li>
                  <li>{t('pkg2.f5')}</li>
                  <li>{t('pkg2.f6')}</li>
                </ul>
              </div>
            </div>
            <a
              href="https://wa.me/message/J3MYMT4QSDQDL1"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${styles.btnDark}`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t('pkg.cta2')}
            </a>
          </article>

          {/* Package 2: WebUnity (Featured) */}
          <article className={`${styles.packageCard} ${styles.featured} package-card-elem`}>
            <div className={styles.packageBadge}>{t('pkg.recommended')}</div>
            <h3>WebUnity</h3>
            <p className={styles.packageSubtitle}>{t('pkg1.sub')}</p>
            <div className={styles.packageServices}>
              <div className={styles.pkgServiceGroup}>
                <strong>{t('pkg.digital')}</strong>
                <ul className={styles.pkgFeatures}>
                  <li>{t('pkg1.f1')}</li>
                  <li>{t('pkg1.f2')}</li>
                  <li>{t('pkg1.f3')}</li>
                </ul>
              </div>
              <div className={styles.pkgServiceGroup}>
                <strong>{t('pkg.web')}</strong>
                <ul className={styles.pkgFeatures}>
                  <li>{t('pkg1.f4')}</li>
                  <li>{t('pkg1.f5')}</li>
                  <li>{t('pkg1.f6')}</li>
                </ul>
              </div>
              <div className={styles.pkgServiceGroup}>
                <strong>{t('pkg.content')}</strong>
                <ul className={styles.pkgFeatures}>
                  <li>{t('pkg1.f7')}</li>
                  <li>{t('pkg1.f8')}</li>
                  <li>{t('pkg1.f9')}</li>
                </ul>
              </div>
            </div>
            <a
              href="https://wa.me/message/J3MYMT4QSDQDL1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t('pkg.cta1')}
            </a>
          </article>

          {/* Package 3: SocialBoost */}
          <article className={`${styles.packageCard} package-card-elem`}>
            <h3>SocialBoost</h3>
            <p className={styles.packageSubtitle}>{t('pkg3.sub')}</p>
            <div className={styles.packageServices}>
              <div className={styles.pkgServiceGroup}>
                <strong>{t('pkg.digital')}</strong>
                <ul className={styles.pkgFeatures}>
                  <li>{t('pkg3.f1')}</li>
                  <li>{t('pkg3.f2')}</li>
                  <li>{t('pkg3.f3')}</li>
                </ul>
              </div>
              <div className={styles.pkgServiceGroup}>
                <strong>{t('pkg.content')}</strong>
                <ul className={styles.pkgFeatures}>
                  <li>{t('pkg3.f4')}</li>
                  <li>{t('pkg3.f5')}</li>
                  <li>{t('pkg3.f6')}</li>
                </ul>
              </div>
            </div>
            <a
              href="https://wa.me/message/J3MYMT4QSDQDL1"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${styles.btnDark}`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t('pkg.cta3')}
            </a>
          </article>

        </div>

        <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '0.87rem', color: 'var(--color-gray)' }}>
          {t('pkg.mj')}{' '}
          <a
            href="https://wa.me/message/J3MYMT4QSDQDL1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-primary)', fontWeight: 600 }}
          >
            Cuéntanos tu proyecto
          </a>
          {' '}y creamos una propuesta personalizada.
        </p>

      </div>
    </section>
  );
}
