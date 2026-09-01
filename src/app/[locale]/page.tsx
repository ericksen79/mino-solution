import Hero from '@/components/ui/Hero';
import Clients from '@/components/ui/Clients';
import Services from '@/components/ui/Services';
import Cases from '@/components/ui/Cases';
import Process from '@/components/ui/Process';
import Packages from '@/components/ui/Packages';
import About from '@/components/ui/About';
import Cta from '@/components/ui/Cta';

// Order: Hero -> Clients -> Services (own embedded CTA) -> Cases
// (Proyectos) -> Process (Cómo Trabajamos) -> Packages -> About -> Cta.
export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Clients />
      <Services />
      <Cases />
      <Process />
      <Packages />
      <About />
      <Cta />
    </main>
  );
}
