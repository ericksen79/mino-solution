'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import CaseCard from './core/CaseCard';
import styles from './Cases.module.css';

// The 4 real projects we ship this section with — same case studies
// already detailed at /projects#<slug> (Portfolio.tsx). Nothing here is
// placeholder: images are the real project heroes already used elsewhere
// on the site (public/assets/projects), copy comes from messages/*.json.
const CASES = [
  {
    key: 'case1' as const,
    slug: 'proj-cato',
    name: 'CATO Media',
    image: '/assets/projects/cato-media/hero-sbj.webp',
    tag: null, // uses cases.cato1 instead of case1.tag
  },
  {
    key: 'case2' as const,
    slug: 'proj-linework',
    name: 'Linework',
    image: '/assets/projects/linework/hero-linework.webp',
    tag: 'Product Design',
  },
  {
    key: 'case3' as const,
    slug: 'proj-casa',
    name: 'Casa Escencia',
    image: '/assets/projects/casa-escencia/hero.webp',
    tag: 'E-Commerce',
  },
  {
    key: 'case4' as const,
    slug: 'proj-lienzos',
    name: 'Lienzos & Trazos',
    image: '/assets/projects/lienzos-trazos/hero.webp',
    tag: null, // uses cases.case4.tag
  },
];

export default function Cases() {
  const t = useTranslations('cases');

  return (
    <section id="cases" className={styles.section} aria-labelledby="cases-heading">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.sticky}>
            <p className={styles.tag}>{t('tag')}</p>
            <h2 id="cases-heading" className={styles.title}>{t('title')}</h2>
            <p className={styles.desc}>{t('desc')}</p>
            <Link href="/projects" className={styles.allLink}>
              {t('cta')}
            </Link>
          </div>

          <div className={styles.grid}>
            {CASES.map(({ key, slug, name, image, tag }) => (
              <CaseCard
                key={key}
                href={`/projects#${slug}`}
                image={image}
                imageAlt={name}
                tag={tag ?? t(key === 'case1' ? 'cato1' : `${key}.tag`)}
                name={name}
                description={t(`${key}.desc`)}
                metric={t(`${key}.metric`)}
                viewLabel={t('view')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
