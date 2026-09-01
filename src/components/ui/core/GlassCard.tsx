'use client';

import { useRef } from 'react';
import styles from './GlassCard.module.css';

// Reusable glassmorphism card: cursor-tracking light spotlight + a subtle
// 3D tilt toward the pointer, on top of the existing .glass / .glass-dark
// utility classes (globals.css). Both effects are driven by CSS vars set on
// mousemove — no per-frame JS animation loop, the browser/GPU handles the
// gradient and the transform. An ambient diagonal sheen (CSS-only keyframe,
// see .module.css) runs independently to sell the "reflects light" look
// even before the user touches the card.
interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}

const MAX_TILT_DEG = 6;

export default function GlassCard({ children, variant = 'light', className = '' }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty('--spot-x', `${x}px`);
    el.style.setProperty('--spot-y', `${y}px`);

    // Tilt: offset from card center, normalized to [-1, 1], scaled to deg.
    // Inverted on the X axis so the top edge tilts toward the cursor.
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
    el.style.setProperty('--tilt-x', `${(-py * MAX_TILT_DEG).toFixed(2)}deg`);
    el.style.setProperty('--tilt-y', `${(px * MAX_TILT_DEG).toFixed(2)}deg`);
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
  }

  const baseVariant = variant === 'dark' ? 'glass-dark' : 'glass';

  return (
    <div
      ref={ref}
      className={`${baseVariant} ${styles.card} ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
