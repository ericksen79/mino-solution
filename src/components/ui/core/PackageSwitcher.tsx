'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import styles from './PackageSwitcher.module.css';

interface PackageGroup {
  icon: React.ReactNode;
  label: string;
  features: string[];
}

export interface PackageOption {
  key: string;
  name: string;
  subtitle: string;
  featured?: boolean;
  badgeLabel?: string;
  groups: PackageGroup[];
  ctaLabel: string;
}

interface PackageSwitcherProps {
  packages: PackageOption[];
  ctaHref: string;
  ctaIcon: React.ReactNode;
}

// Full redesign: one package fully visible at a time instead of three
// dense cards side by side — a segmented pill switcher (sliding highlight,
// shared-layout spring) up top picks which, a single spec panel below
// shows it in full below with plenty of room. That's the actual fix for
// "too much text per card": nothing is hidden or truncated, there's just
// only ever one plan's worth of copy on screen instead of three at once.
export default function PackageSwitcher({ packages, ctaHref, ctaIcon }: PackageSwitcherProps) {
  const defaultIndex = Math.max(0, packages.findIndex((p) => p.featured));
  const [active, setActive] = useState(defaultIndex === -1 ? 0 : defaultIndex);
  const reduceMotion = useReducedMotion();
  const current = packages[active];

  function focusTab(index: number) {
    setActive((index + packages.length) % packages.length);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowRight') { e.preventDefault(); focusTab(active + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); focusTab(active - 1); }
  }

  return (
    <div className={styles.switcher}>
      <div
        className={styles.pillbar}
        role="tablist"
        aria-label="Paquetes"
        onKeyDown={handleKeyDown}
      >
        {packages.map((pkg, i) => (
          <button
            key={pkg.key}
            type="button"
            role="tab"
            id={`pkg-tab-${pkg.key}`}
            aria-selected={i === active}
            aria-controls={`pkg-panel-${pkg.key}`}
            tabIndex={i === active ? 0 : -1}
            className={styles.pill}
            onClick={() => setActive(i)}
          >
            {i === active && (
              <motion.span
                layoutId="pkg-pill-bg"
                className={styles.pillBg}
                transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className={styles.pillLabel}>{pkg.name}</span>
            {pkg.featured && <span className={styles.pillDot} aria-hidden="true" />}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.key}
          id={`pkg-panel-${current.key}`}
          role="tabpanel"
          aria-labelledby={`pkg-tab-${current.key}`}
          className={styles.panel}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.panelHead}>
            <div>
              {current.badgeLabel && <span className={styles.badge}>{current.badgeLabel}</span>}
              <h3 className={styles.name}>{current.name}</h3>
              <p className={styles.subtitle}>{current.subtitle}</p>
            </div>
            <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={styles.cta}>
              {ctaIcon}
              {current.ctaLabel}
            </a>
          </div>

          <div className={styles.groups}>
            {current.groups.map((group, i) => (
              <motion.div
                key={group.label}
                className={styles.group}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: reduceMotion ? 0 : 0.08 * i, ease: 'easeOut' }}
              >
                <div className={styles.groupIcon} aria-hidden="true">{group.icon}</div>
                <strong className={styles.groupLabel}>{group.label}</strong>
                <ul className={styles.features}>
                  {group.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
