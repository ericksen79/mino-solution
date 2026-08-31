'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Clients.module.css';

const CLIENTS = [
  { name: 'Lienzos & Trazos', href: 'https://www.lienzosytrazos.art/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { name: 'Linework', href: 'https://linework.online/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { name: 'CATO Media', href: 'https://catomediacompany.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  { name: 'Casa Escencia', href: 'https://casaescencia.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> },
  { name: 'RPG Architect', href: 'https://rpg-architect.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { name: 'Zentro Labs', href: 'https://www.zentroolabs.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10z"/></svg> },
  { name: 'NuvPOS', href: 'https://nuvpos.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg> },
  { name: 'ABG Homes', href: 'https://abghomes.us/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { name: 'Super Clean SV', href: 'https://supercleansv.com/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7z"/></svg> },
];

export default function Clients() {
  const t = useTranslations('clients');
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Infinite Marquee
    gsap.to(trackRef.current, {
      xPercent: -50,
      ease: 'none',
      duration: 30,
      repeat: -1,
    });
  }, []);

  return (
    <section id="clients" className={styles.clients} aria-label={t('label')}>
      <div className="container">
        <p className={styles.clientsLabel}>{t('label')}</p>
      </div>

      <div className={styles.clientsTrackWrap}>
        <div ref={trackRef} className={styles.clientsTrack} role="list">
          {/* Render twice for seamless loop */}
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <a key={i} href={client.href} target="_blank" rel="noopener noreferrer">
              <div className={styles.clientItem} role="listitem">
                <div className={styles.clientIcon} aria-hidden="true">
                  {client.icon}
                </div>
                <span>{client.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
