'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Bug fix: `lenisRef.current?.lenis` read once inside a `useEffect(fn, [])`
  // was almost always undefined at that exact instant — ReactLenis creates
  // the Lenis instance inside its OWN effect and publishes it a render
  // later (via internal setState), so our effect's one-shot guard bailed
  // every time and never registered the ticker. Nothing ever called
  // `lenis.raf()` — Lenis intercepted wheel/gesture scroll (preventDefault)
  // but never applied the eased position, so the page was hard-stuck, and
  // ScrollTrigger never got told about the scroll. `useLenis()` is the
  // library's own hook for this exact race: it returns the instance
  // reactively once it actually exists.
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // ScrollTrigger listens for native scroll events, but Lenis eases the
    // scroll position on its own RAF loop instead of jumping straight
    // there — without telling ScrollTrigger about every Lenis tick, its
    // trigger math runs against stale scroll data and scroll-revealed
    // sections can end up stuck in their pre-animation state.
    lenis.on('scroll', ScrollTrigger.update);

    function update(time: number) {
      lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove(update);
    };
  }, [lenis]);

  // Bug fix: passing a numeric `duration` here made Lenis animate every
  // wheel/trackpad delta as a discrete duration-based tween instead of
  // continuously damping toward the target — Lenis only uses `lerp` when
  // `duration` is unset, the two are mutually exclusive internally. That
  // mode tolerates a mouse's few big wheel ticks fine, but a trackpad's
  // stream of small two-finger gesture deltas fights it. `lerp`-only is
  // the continuous, input-agnostic mode — smooth for wheel, trackpad
  // gestures, and scrollbar drag alike. Touch/mobile was never actually
  // affected by this: Lenis leaves native touch scrolling untouched unless
  // `syncTouch` is explicitly enabled, which it isn't here.
  return (
    <ReactLenis root autoRaf={false} options={{ lerp: 0.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
