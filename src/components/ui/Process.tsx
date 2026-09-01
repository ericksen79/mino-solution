'use client';

import { useTranslations } from 'next-intl';
import SectionHeader from './core/SectionHeader';
import GradientAurora from './core/GradientAurora';
import ScrollProcess from './core/ScrollProcess';
import styles from './Process.module.css';

const STEP_KEYS = ['p1', 'p2', 'p3', 'p4'] as const;

// Short looping clips (hyperframes-rendered, see public/videos/process),
// one per step, same order as STEP_KEYS.
const STEP_VIDEOS = [
  '/videos/process/diagnostico.mp4',
  '/videos/process/estrategia.mp4',
  '/videos/process/desarrollo.mp4',
  '/videos/process/lanzamiento.mp4',
];

const STEP_ICONS = [
  <svg key="p1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  <svg key="p2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  <svg key="p3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  <svg key="p4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
];

export default function Process() {
  const t = useTranslations('process');

  const steps = STEP_KEYS.map((key, i) => ({
    key,
    icon: STEP_ICONS[i],
    title: t(`${key}.title`),
    description: t(`${key}.desc`),
    video: STEP_VIDEOS[i],
  }));

  return (
    <section id="process" className={styles.section} aria-labelledby="process-heading">
      <GradientAurora />
      <div className="container">
        <SectionHeader
          tag={t('tag')}
          title={t('title')}
          desc={t('desc')}
          titleId="process-heading"
          align="center"
          className={styles.processHeader}
        />

        <ScrollProcess steps={steps} />
      </div>
    </section>
  );
}
