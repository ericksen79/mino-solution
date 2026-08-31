import {useTranslations} from 'next-intl';
import ProjectsHero from '@/components/ui/projects/ProjectsHero';
import LogosCarousel from '@/components/ui/projects/LogosCarousel';
import Portfolio from '@/components/ui/projects/Portfolio';
import Cta from '@/components/ui/Cta';

export const metadata = {
  title: 'Proyectos — MINO Solutions',
  description: 'Portafolio de proyectos de MINO Solutions: desarrollo web, UX/UI, e-commerce y transformación digital.',
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <ProjectsHero />
      <LogosCarousel />
      <Portfolio />
      <Cta />
    </main>
  );
}
