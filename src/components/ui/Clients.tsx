'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Clients.module.css';

// Real client/project logos — files copied from
// _legacy_site/assets/icons/logos-brands into public/logos-brands (Next
// only serves static assets from public/, kebab-cased for URL-safe paths).
// Every entry links to that company's real site: target=_blank +
// rel="nofollow noopener noreferrer" — nofollow because these are outbound
// reference links we don't want to vouch for/pass SEO weight through,
// noopener/noreferrer for the standard tab-hijack + referrer-leak guard.
// ponytail: ab-pos.svg is ~1.2MB (uncompressed vector paths, not a raster
// embed) — heaviest asset on the page by far. Works fine, but if this
// section shows up in a perf audit, run it through svgo before anything
// fancier.
const CLIENTS = [
  { name: 'AB POS', href: 'https://abpos.com/', file: 'ab-pos.svg' },
  { name: 'ABG Homes', href: 'https://abghomes.us/', file: 'abg-homes.svg' },
  { name: 'Bienes Raíces Maquilishuat SV', href: 'https://sites.google.com/view/bienesracesmaquilishuatsv', file: 'bienes-raices-maquilishuat.svg' },
  { name: 'CATO Media', href: 'https://catomediacompany.com/', file: 'cato-media.svg' },
  { name: 'Casa Escencia', href: 'https://casaescencia.com/', file: 'casa-escencia.svg' },
  { name: 'Clark County Catalyst', href: 'https://clarkcountycatalyst.com/', file: 'clark-county-catalyst.svg' },
  { name: 'DENIM Corporate Division', href: 'https://denimprojectsv.com/', file: 'denim-corporate-division.svg' },
  { name: 'Effort Stack', href: 'https://www.instagram.com/effortstack/', file: 'effort-stack.svg' },
  { name: 'Lienzos & Trazos', href: 'https://www.lienzosytrazos.art/', file: 'lienzos-y-trazos.svg' },
  { name: 'Linework', href: 'https://linework.online/', file: 'linework.svg' },
  { name: 'NuvPOS', href: 'https://nuvpos.com/', file: 'nuv-pos.svg' },
  { name: 'Press Release Salem', href: 'https://pressreleasesalem.com/', file: 'press-release-salem.svg' },
  { name: 'RPG Architect', href: 'https://rpg-architect.com/', file: 'rpg-architect.svg' },
  { name: 'SIPcity', href: 'https://sipcity.com.au/', file: 'sipcity.svg' },
  { name: 'Salem Business Journal', href: 'https://salembusinessjournal.org/', file: 'salem-business-journal.svg' },
  { name: 'Super Clean SV', href: 'https://supercleansv.com/', file: 'super-clean-drycleaning.svg' },
  { name: 'XMT Inc.', href: 'https://xmt-inc.com/', file: 'xmt-construction.svg' },
  { name: 'Zentro Labs', href: 'https://www.zentroolabs.com/', file: 'zentroo.svg' },
] as const;

// Constant crawl speed in px/second — kept low on purpose for a calm,
// premium feel. Using a fixed px/s (instead of a fixed total duration)
// means the loop always feels the same speed no matter how many logos
// there are.
const MARQUEE_SPEED = 55;

export default function Clients() {
  const t = useTranslations('clients');
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useGSAP(() => {
    if (reduceMotion) return;
    const track = trackRef.current;
    if (!track) return;

    let tween: gsap.core.Tween | undefined;

    function start() {
      // Bug fix: the logos are real <img> files loading over the network,
      // so their rendered width isn't known at mount. Measuring
      // scrollWidth too early (or animating by xPercent, which is
      // computed once) baked in a stale distance, and the loop would
      // "jump" once every image finished loading and reflowed. Waiting
      // for every logo to load, then animating a real pixel distance,
      // guarantees the loop point lines up exactly — no snap.
      const loopDistance = track!.scrollWidth / 2;
      tween = gsap.to(track, {
        x: -loopDistance,
        ease: 'none',
        duration: loopDistance / MARQUEE_SPEED,
        repeat: -1,
      });
    }

    let started = false;
    function startOnce() {
      if (started) return;
      started = true;
      start();
    }

    const imgs = Array.from(track.querySelectorAll('img'));
    const pending = imgs.filter((img) => !img.complete);

    if (pending.length === 0) {
      startOnce();
    } else {
      let remaining = pending.length;
      const onSettle = () => {
        remaining -= 1;
        if (remaining === 0) startOnce();
      };
      // Bug fix: only listening for 'load' meant one broken/blocked logo
      // (404, ad-blocker, slow network) left the remaining counter stuck
      // above 0 forever — the marquee would just never start. 'error' counts the
      // same as loaded (scrollWidth is still whatever it ends up being),
      // and a hard timeout is a last-resort net in case some other browser
      // quirk skips both events.
      pending.forEach((img) => {
        img.addEventListener('load', onSettle, { once: true });
        img.addEventListener('error', onSettle, { once: true });
      });
    }

    const safetyTimer = window.setTimeout(startOnce, 4000);

    return () => {
      window.clearTimeout(safetyTimer);
      tween?.kill();
    };
  }, { dependencies: [reduceMotion] });

  return (
    <section id="clients" className={styles.clients} aria-label={t('label')}>
      <div className="container">
        <p className={styles.clientsLabel}>{t('label')}</p>
      </div>

      <div className={`${styles.clientsTrackWrap} ${reduceMotion ? styles.trackWrapStatic : ''}`}>
        <div ref={trackRef} className={styles.clientsTrack} role="list">
          {/* Rendered twice back-to-back so the loop can wrap from the
              midpoint to the start invisibly. Second copy is hidden from
              the a11y tree/tab order — same pattern as LogosCarousel. */}
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <a
              key={i}
              href={client.href}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={styles.clientItem}
              role="listitem"
              tabIndex={i >= CLIENTS.length ? -1 : 0}
              aria-hidden={i >= CLIENTS.length ? 'true' : undefined}
            >
              <img
                src={`/logos-brands/${client.file}`}
                alt={client.name}
                className={styles.clientLogo}
                loading="lazy"
                decoding="async"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
