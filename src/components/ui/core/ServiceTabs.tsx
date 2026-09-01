'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import GlassCard from './GlassCard';
import styles from './ServiceTabs.module.css';

interface Service {
  key: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  /** Accent marker for the two services the business wants front and
   *  center (UI/UX, Web Development) — purely visual, no copy change. */
  featured?: boolean;
}

interface ServiceTabsProps {
  services: Service[];
}

// How long each tab stays up before auto-advancing to the next one.
const AUTO_ADVANCE_MS = 5000;

// Click-driven showcase instead of a long scroll-story: every service is
// one click away, so all five are reachable without scrolling past the
// rest of the homepage to find them. Real WAI-ARIA tablist (roving
// arrow-key nav) on the left, panel content crossfades via Framer Motion
// on the right — GSAP stays out of this component entirely, this is
// discrete state-driven UI, not scroll-driven, so Framer is the right
// tool here (see Services.tsx for where GSAP/ScrollTrigger still applies).
export default function ServiceTabs({ services }: ServiceTabsProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const current = services[active];

  // Auto-advance through the tabs so the transition between services reads
  // as one continuous flow instead of waiting for a click. Pauses on
  // hover/focus (see onMouseEnter/onFocus below) and never runs at all
  // under reduced-motion. Re-armed every time `active` changes — whether
  // that came from this timer or a manual click — so a click always buys
  // the user a full AUTO_ADVANCE_MS before it moves on again.
  useEffect(() => {
    if (reduceMotion || paused || services.length <= 1) return;
    const id = setTimeout(() => {
      setActive((a) => (a + 1) % services.length);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [active, paused, reduceMotion, services.length]);

  function focusTab(index: number) {
    const next = (index + services.length) % services.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      focusTab(active + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      focusTab(active - 1);
    }
  }

  return (
    <div
      className={styles.showcase}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className={styles.tabList}
        role="tablist"
        aria-orientation="vertical"
        aria-label="Servicios"
        onKeyDown={handleKeyDown}
      >
        {services.map((service, i) => (
          <button
            key={service.key}
            ref={(el) => { tabRefs.current[i] = el; }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${baseId}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className={`${styles.tab} ${i === active ? styles.tabActive : ''} ${service.featured ? styles.tabFeatured : ''}`}
            onClick={() => setActive(i)}
          >
            <span className={styles.tabIcon} aria-hidden="true">{service.icon}</span>
            <span className={styles.tabTitle}>{service.title}</span>
            {/* Auto-advance progress fill — only on the active tab, only
                when the timer is actually running. Keyed on `active` so it
                restarts from empty every time the tab changes. */}
            {!reduceMotion && i === active && (
              <span
                key={active}
                className={styles.tabProgress}
                style={{
                  animationDuration: `${AUTO_ADVANCE_MS}ms`,
                  animationPlayState: paused ? 'paused' : 'running',
                }}
              />
            )}
          </button>
        ))}
      </div>

      <div className={styles.panelWrap}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            id={`${baseId}-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${active}`}
            className={styles.panel}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.panelText}>
              <h3>{current.title}</h3>
              <p className={styles.panelDesc}>{current.description}</p>
              {current.features.length > 0 && (
                <ul className={styles.features}>
                  {current.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Placeholder for the real service illustration/screenshot.
                Swap point: replace this block's contents with an <Image>
                once the asset exists — GlassCard sizing already fits it. */}
            <div className={styles.panelImageWrap} aria-hidden="true">
              <GlassCard variant="light" className={styles.panelImage}>
                <div className={styles.placeholderIcon}>{current.icon}</div>
              </GlassCard>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
