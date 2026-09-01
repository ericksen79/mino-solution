'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from '@/i18n/routing';
import styles from './CaseCard.module.css';

gsap.registerPlugin(ScrollTrigger);

interface CaseCardProps {
  href: string;
  image: string;
  imageAlt: string;
  tag: string;
  name: string;
  description: string;
  metric: string;
  viewLabel: string;
}

// One real project, full-bleed — a-lign.studio's "featured project" card
// pattern (photo fills the card, name + a hover cursor tag), pointed at
// our own case studies instead of theirs. Self-contained: owns its own
// scroll reveal, image parallax, and mouse-follow "view project" badge,
// so ScrollShowcase just has to map over data.
export default function CaseCard({ href, image, imageAlt, tag, name, description, metric, viewLabel }: CaseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const reduceMotion = useReducedMotion();

  // Cursor-follow badge position — spring-smoothed motion values instead
  // of React state, so mousemove never triggers a re-render.
  const badgeX = useMotionValue(0);
  const badgeY = useMotionValue(0);
  const springX = useSpring(badgeX, { stiffness: 300, damping: 30, mass: 0.5 });
  const springY = useSpring(badgeY, { stiffness: 300, damping: 30, mass: 0.5 });

  useGSAP(() => {
    if (reduceMotion) return;

    gsap.from(cardRef.current, {
      scrollTrigger: { trigger: cardRef.current, start: 'top 85%' },
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
    });

    const image = cardRef.current?.querySelector<HTMLElement>('[data-parallax]');
    if (image) {
      gsap.fromTo(
        image,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: { trigger: cardRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
    }
  }, { scope: cardRef, dependencies: [reduceMotion] });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    badgeX.set(e.clientX - rect.left);
    badgeY.set(e.clientY - rect.top);
  }

  return (
    <div
      ref={cardRef}
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Link href={href} className={styles.link} aria-label={`${name} — ${viewLabel}`}>
        <div className={styles.imageWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element -- real
              project photography, arbitrary aspect ratios, plain <img>
              keeps this in sync with the rest of the site's case-study
              images (Portfolio.tsx uses the same pattern). */}
          <img src={image} alt={imageAlt} data-parallax className={styles.image} loading="lazy" />
          <div className={styles.overlay} />
        </div>

        <div className={styles.info}>
          <span className={styles.tag}>{tag}</span>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.desc}>{description}</p>
          <div className={styles.metricRow}>
            <span className={styles.metric}>{metric}</span>
            <span className={styles.viewLink}>{viewLabel}</span>
          </div>
        </div>
      </Link>

      {/* Cursor-follow badge — decorative echo of the "view project" link
          already in the card body, so it's aria-hidden. Desktop hover
          only (mousemove on touch doesn't track a resting cursor). */}
      {!reduceMotion && (
        <motion.div
          className={styles.cursorBadge}
          aria-hidden="true"
          style={{ left: springX, top: springY, opacity: hovering ? 1 : 0 }}
        >
          {viewLabel}
        </motion.div>
      )}
    </div>
  );
}
