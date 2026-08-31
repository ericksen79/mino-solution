import {useTranslations} from 'next-intl';
import Hero from '@/components/ui/Hero';
import Clients from '@/components/ui/Clients';
import Services from '@/components/ui/Services';
import Process from '@/components/ui/Process';
import Cases from '@/components/ui/Cases';
import Packages from '@/components/ui/Packages';
import About from '@/components/ui/About';
import Cta from '@/components/ui/Cta';

export default function HomePage() {
  const t = useTranslations('home');
  return (
    <main id="main-content">
      <Hero />
      <Clients />
      <Services />
      <Process />
      <Cases />
      <Packages />
      <About />
      <Cta />
    </main>
  );
}
