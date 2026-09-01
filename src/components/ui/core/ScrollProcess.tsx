'use client';

import { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './ScrollProcess.module.css';

gsap.registerPlugin(ScrollTrigger);

export interface ProcessStep {
  key: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  /** Path to a short looping clip representing this step
   *  (public/videos/process/*.mp4). Optional — falls back to the static
   *  icon placeholder when absent. */
  video?: string;
}

interface ScrollProcessProps {
  steps: ProcessStep[];
}

// Reusable scroll-guided step narrative: a sticky numbered rail (with a
// progress line that fills as you scroll) tracks which step is in view
// while its content scrolls past on the right. Built generic (just a
// `steps` prop, no process-specific copy) so it's the base for any future
// "walk the user through N stages" section, not only this one.
//
// Deliberately NOT using GSAP's pin: true — position: sticky is the
// native CSS answer to "keep this column in place while its sibling
// scrolls," works with Lenis for free, and doesn't fight a pinned
// element's layout. GSAP's job here is limited to three things: (1)
// scrubbing the progress line to real scroll position, (2) toggling which
// rail item is "active" as each step crosses the viewport center, (3) a
// small per-step fade-in + image parallax. Clicking a rail item asks Lenis
// itself to smooth-scroll there — same engine the user is already
// scrolling with, so it never fights their input.
export default function ScrollProcess({ steps }: ScrollProcessProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const railItemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();

  useGSAP(() => {
    if (reduceMotion) return;

    // Progress line: fills top-to-bottom in step with how far the reader
    // has scrolled through the whole step list.
    gsap.fromTo(
      progressRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );

    stepRefs.current.forEach((stepEl, i) => {
      if (!stepEl) return;

      // Which rail item is "active" — toggled directly on the DOM (no
      // React state), this fires on every scroll direction change and a
      // re-render per tick would be wasteful for something this cheap.
      const setActive = () => {
        railItemRefs.current.forEach((el, j) => {
          el?.classList.toggle(styles.railItemActive, j === i);
        });
      };
      ScrollTrigger.create({
        trigger: stepEl,
        start: 'top center',
        end: 'bottom center',
        onEnter: setActive,
        onEnterBack: setActive,
      });

      // One-time fade/slide-in for this step's own content as it appears.
      gsap.from(stepEl.querySelectorAll('.process-step-elem'), {
        scrollTrigger: { trigger: stepEl, start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
      });

      // Subtle parallax on the step's image slot.
      const image = stepEl.querySelector<HTMLElement>('[data-parallax]');
      if (image) {
        gsap.fromTo(
          image,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: { trigger: stepEl, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        );
      }
    });
  }, { scope: containerRef, dependencies: [reduceMotion] });

  function goToStep(i: number) {
    const target = stepRefs.current[i];
    if (!target) return;
    if (lenis) {
      // Same easing engine the page already scrolls with, so this jump
      // reads as one continuous motion instead of a hard cut — this is
      // the "automatic" part: click a step, Lenis carries you there.
      lenis.scrollTo(target, { offset: -120, duration: 1.1 });
    } else {
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    }
  }

  return (
    <div ref={containerRef} className={styles.layout}>
      <div className={styles.rail}>
        <div className={styles.railLine} aria-hidden="true">
          <div ref={progressRef} className={styles.railProgress} />
        </div>
        <div className={styles.railItems}>
          {steps.map((step, i) => (
            <button
              key={step.key}
              type="button"
              ref={(el) => { railItemRefs.current[i] = el; }}
              className={`${styles.railItem} ${i === 0 ? styles.railItemActive : ''}`}
              onClick={() => goToStep(i)}
              aria-label={`Ir al paso ${i + 1}: ${step.title}`}
            >
              <span className={styles.railNum}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.railTitle}>{step.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.stepsList}>
        {steps.map((step, i) => (
          <div
            key={step.key}
            ref={(el) => { stepRefs.current[i] = el; }}
            className={styles.stepBlock}
          >
            <span className={`${styles.stepMobileNum} process-step-elem`} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className={`${styles.stepIcon} process-step-elem`} aria-hidden="true">
              {step.icon}
            </div>
            <h3 className={`${styles.stepTitle} process-step-elem`}>{step.title}</h3>
            <p className={`${styles.stepDesc} process-step-elem`}>{step.description}</p>

            {/* Step illustration slot: short looping clip when provided
                (ProcessStep.video), otherwise the icon placeholder. Video
                is purely decorative (title/desc already carry the
                meaning) — aria-hidden, muted, and only autoplays/loops
                outside prefers-reduced-motion. */}
            <div data-parallax className={`${styles.stepImage} process-step-elem`} aria-hidden="true">
              {step.video ? (
                <video
                  className={styles.stepVideo}
                  src={step.video}
                  autoPlay={!reduceMotion}
                  loop={!reduceMotion}
                  muted
                  playsInline
                  preload="auto"
                />
              ) : (
                <div className={styles.stepImageIcon}>{step.icon}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
