'use client';

import { useTranslations } from 'next-intl';
import styles from './LogosCarousel.module.css';

const LOGOS_ROW_1 = [
  { name: 'Salem Business Journal', url: 'https://salembusinessjournal.org/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/></svg> },
  { name: 'CATO Media', url: 'https://catomediacompany.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { name: 'Clark County Catalyst', url: 'https://clarkcountycatalyst.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/></svg> },
  { name: 'Press Release Salem', url: 'https://pressreleasesalem.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
  { name: 'Casa Escencia', url: 'https://casaescencia.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> },
  { name: 'Lienzos & Trazos', url: 'https://www.lienzosytrazos.art/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-3 2-6 2-5.5-2-9-2-4 2-4 2v16s1-2 4-2 5.5 2 9 2 6-2 6-2V4z"/></svg> },
  { name: 'XMT Inc.', url: 'https://xmt-inc.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg> },
  { name: 'RPG Architect', url: 'https://rpg-architect.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { name: 'NuvPOS', url: 'https://nuvpos.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg> },
];

const LOGOS_ROW_2 = [
  { name: 'AB POS', url: 'https://abpos.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { name: 'Linework', url: 'https://linework.online/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> },
  { name: 'Zentro Labs', url: 'https://www.zentroolabs.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/></svg> },
  { name: 'ABG Homes', url: 'https://abghomes.us/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { name: 'Denim Project SV', url: 'https://denimprojectsv.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg> },
  { name: 'Super Clean SV', url: 'https://supercleansv.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { name: 'Bienes Raíces Maquilishuatl', url: 'https://sites.google.com/view/bienesracesmaquilishuatsv', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg> },
  { name: 'Hay Cultura', url: 'https://hay-cultura.super.site/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-3 2-6 2-5.5-2-9-2-4 2-4 2v16s1-2 4-2 5.5 2 9 2 6-2 6-2V4z"/></svg> },
];

export default function LogosCarousel() {
  const t = useTranslations('projects.logos');

  return (
    <section className={styles.section} aria-label={t('label')}>
      <div className={styles.header}>
        <p>{t('label')}</p>
      </div>

      <div className={styles.logosRows}>
        
        {/* Row 1 */}
        <div className={styles.logosRowWrap}>
          <div className={`${styles.logosRow} ${styles.rowFwd}`}>
            {[...LOGOS_ROW_1, ...LOGOS_ROW_1].map((logo, i) => (
              <a
                key={i}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logoCard}
                aria-hidden={i >= LOGOS_ROW_1.length ? 'true' : 'false'}
                tabIndex={i >= LOGOS_ROW_1.length ? -1 : 0}
              >
                <div className={styles.logoCardIcon}>{logo.icon}</div>
                <span className={styles.logoCardName}>{logo.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className={styles.logosRowWrap}>
          <div className={`${styles.logosRow} ${styles.rowRev}`}>
            {[...LOGOS_ROW_2, ...LOGOS_ROW_2].map((logo, i) => (
              <a
                key={i}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logoCard}
                aria-hidden={i >= LOGOS_ROW_2.length ? 'true' : 'false'}
                tabIndex={i >= LOGOS_ROW_2.length ? -1 : 0}
              >
                <div className={styles.logoCardIcon}>{logo.icon}</div>
                <span className={styles.logoCardName}>{logo.name}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
