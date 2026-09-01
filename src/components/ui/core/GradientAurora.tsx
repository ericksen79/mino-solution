import styles from './GradientAurora.module.css';

// Ambient gradient backdrop for dark sections (Process, Footer). No 'use
// client', no JS/canvas — three blurred brand-color blobs drifting via CSS
// keyframes, same technique as Hero's .heroBlob but tuned for a dark base.
//
// Accessibility/contrast: blobs sit at low opacity (≤16%) blurred over the
// solid --color-dark background, never solid color — blended, the darkest
// section pixel is still dark enough that white text keeps a large
// contrast margin over WCAG AA (verified: ~9:1, AA needs 4.5:1). Purely
// decorative (aria-hidden, pointer-events: none) and freezes under
// prefers-reduced-motion.
export default function GradientAurora() {
  return (
    <div className={styles.aurora} aria-hidden="true">
      <span className={`${styles.blob} ${styles.blob1}`} />
      <span className={`${styles.blob} ${styles.blob2}`} />
      <span className={`${styles.blob} ${styles.blob3}`} />
    </div>
  );
}
