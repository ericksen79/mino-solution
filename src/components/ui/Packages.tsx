'use client';

import { useTranslations } from 'next-intl';
import SectionHeader from './core/SectionHeader';
import PackageSwitcher from './core/PackageSwitcher';
import styles from './Packages.module.css';

const WHATSAPP_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

// Same 3 group icons Services.tsx uses for these exact categories
// (s4 = Transformación Digital, s2 = Desarrollo Web, s5 = Estrategia de
// Contenido) — reused on purpose so a visitor recognizes the category
// across sections instead of learning a second icon set.
const DIGITAL_ICON = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>;
const WEB_ICON = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const CONTENT_ICON = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-3 2-6 2-5.5-2-9-2-4 2-4 2v16s1-2 4-2 5.5 2 9 2 6-2 6-2V4z"/><line x1="12" y1="6" x2="12" y2="18"/></svg>;

const WHATSAPP_HREF = 'https://wa.me/message/J3MYMT4QSDQDL1';

export default function Packages() {
  const t = useTranslations('packages');

  const packages = [
    {
      key: 'pkg2',
      name: 'BusinessSync',
      subtitle: t('pkg2.sub'),
      ctaLabel: t('pkg.cta2'),
      groups: [
        { icon: DIGITAL_ICON, label: t('pkg.digital'), features: [t('pkg2.f1'), t('pkg2.f2'), t('pkg2.f3')] },
        { icon: WEB_ICON, label: t('pkg.web'), features: [t('pkg2.f4'), t('pkg2.f5'), t('pkg2.f6')] },
      ],
    },
    {
      key: 'pkg1',
      name: 'WebUnity',
      subtitle: t('pkg1.sub'),
      featured: true,
      badgeLabel: t('pkg.recommended'),
      ctaLabel: t('pkg.cta1'),
      groups: [
        { icon: DIGITAL_ICON, label: t('pkg.digital'), features: [t('pkg1.f1'), t('pkg1.f2'), t('pkg1.f3')] },
        { icon: WEB_ICON, label: t('pkg.web'), features: [t('pkg1.f4'), t('pkg1.f5'), t('pkg1.f6')] },
        { icon: CONTENT_ICON, label: t('pkg.content'), features: [t('pkg1.f7'), t('pkg1.f8'), t('pkg1.f9')] },
      ],
    },
    {
      key: 'pkg3',
      name: 'SocialBoost',
      subtitle: t('pkg3.sub'),
      ctaLabel: t('pkg.cta3'),
      groups: [
        { icon: DIGITAL_ICON, label: t('pkg.digital'), features: [t('pkg3.f1'), t('pkg3.f2'), t('pkg3.f3')] },
        { icon: CONTENT_ICON, label: t('pkg.content'), features: [t('pkg3.f4'), t('pkg3.f5'), t('pkg3.f6')] },
      ],
    },
  ];

  return (
    <section id="packages" className={styles.section} aria-labelledby="packages-heading">
      <div className="container">
        <SectionHeader
          tag={t('tag')}
          title={t('title')}
          desc={t('desc')}
          titleId="packages-heading"
          align="center"
        />

        <PackageSwitcher packages={packages} ctaHref={WHATSAPP_HREF} ctaIcon={WHATSAPP_ICON} />

        <p className={styles.footnote}>
          {t('pkg.mj')}{' '}
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
            Cuéntanos tu proyecto
          </a>
          {' '}y creamos una propuesta personalizada.
        </p>

      </div>
    </section>
  );
}
