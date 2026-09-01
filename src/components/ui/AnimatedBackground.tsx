'use client';

import { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

// Brand-colored particle field, fixed behind the whole page.
// Adapted from the nxworld canvas-particles pattern, slowed down (~30% of
// the original speed) and recolored to the site's blue/purple palette.
// Perf/a11y: pauses when the tab is hidden, skips the RAF loop entirely
// when the user prefers reduced motion (renders one static frame instead).

const PARTICLE_COLORS = [
  'rgba(48, 138, 205, OPACITY)',   // --color-primary
  'rgba(77, 69, 170, OPACITY)',    // --color-secondary
  'rgba(192, 237, 255, OPACITY)',  // --color-light-blue
];
const LINK_DISTANCE = 170; // longer reach = a denser-looking web between dots
const SPEED = 0.12; // px/frame — slow, ambient drift (original ref runs ~3-4x this)
const GLOW_SPRITE_SIZE = 32; // px, offscreen sprite canvas (pre-baked glow)

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  sprite: HTMLCanvasElement;
}

// Pre-render a radial-gradient "point of light" once per color, reused via
// drawImage every frame. Bug fix: this used to be a live ctx.shadowBlur on
// every particle, every frame — Canvas2D shadow blur is one of the most
// expensive draw ops there is, and at 120 particles x devicePixelRatio
// (retina laptops effectively 2-4x the pixels) it was eating enough of the
// frame budget to make high-frequency input (trackpad two-finger scroll
// sends far more wheel events/sec than a mouse) feel like it wasn't
// registering. A cached sprite blit is a GPU-accelerated bitmap copy —
// same "glowing dot" look, none of the per-frame blur cost.
function createGlowSprite(color: string): HTMLCanvasElement {
  const sprite = document.createElement('canvas');
  sprite.width = sprite.height = GLOW_SPRITE_SIZE;
  const sctx = sprite.getContext('2d')!;
  const center = GLOW_SPRITE_SIZE / 2;
  const gradient = sctx.createRadialGradient(center, center, 0, center, center, center);
  gradient.addColorStop(0, color.replace('OPACITY', '0.9'));
  gradient.addColorStop(0.4, color.replace('OPACITY', '0.45'));
  gradient.addColorStop(1, color.replace('OPACITY', '0'));
  sctx.fillStyle = gradient;
  sctx.fillRect(0, 0, GLOW_SPRITE_SIZE, GLOW_SPRITE_SIZE);
  return sprite;
}

function createParticles(width: number, height: number, sprites: HTMLCanvasElement[]): Particle[] {
  // Density scales with viewport area but is capped so large monitors
  // don't pay for hundreds of particles.
  const count = Math.min(120, Math.round((width * height) / 12000));
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED,
    r: Math.random() * 2 + 1.5,
    sprite: sprites[Math.floor(Math.random() * sprites.length)],
  }));
}

// Pure step function (bounce off edges) kept isolated so the update logic
// is easy to read/verify independently of the canvas drawing code.
function stepParticle(p: Particle, width: number, height: number) {
  p.x += p.vx;
  p.y += p.vy;
  if (p.x <= 0 || p.x >= width) p.vx *= -1;
  if (p.y <= 0 || p.y >= height) p.vy *= -1;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sprites = PARTICLE_COLORS.map(createGlowSprite);

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = createParticles(width, height, sprites);
    let rafId: number | null = null;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = createParticles(width, height, sprites);
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        const size = (p.r + 6) * 2;
        ctx!.drawImage(p.sprite, p.x - size / 2, p.y - size / 2, size, size);
      }

      // ponytail: O(n^2) nearest-pair scan for the connecting lines. Fine at
      // the current cap (120 particles → ~7k checks/frame). If the density
      // cap in createParticles() ever grows past a few hundred, swap for a
      // spatial grid (bucket particles by LINK_DISTANCE cell) before this
      // becomes the bottleneck.
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(48, 138, 205, ${0.22 * (1 - dist / LINK_DISTANCE)})`;
            ctx!.lineWidth = 1;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }
    }

    function tick() {
      for (const p of particles) stepParticle(p, width, height);
      draw();
      rafId = requestAnimationFrame(tick);
    }

    resize();

    if (reduceMotion) {
      draw(); // one static frame, no loop
    } else {
      rafId = requestAnimationFrame(tick);
    }

    function handleVisibility() {
      if (document.hidden) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
      } else if (!reduceMotion && rafId === null) {
        rafId = requestAnimationFrame(tick);
      }
    }

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
