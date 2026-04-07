/* ============================================================
   MINO Solutions — main.js
   Contenido: Navegación con scroll, Menú móvil,
              Toggle de idioma (ES/EN), Animaciones de scroll
   ============================================================ */


/* ─────────────────────────────────────────────────────────────
   1. NAV — EFECTO AL HACER SCROLL
   ───────────────────────────────────────────────────────────── */

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


/* ─────────────────────────────────────────────────────────────
   2. MENÚ MÓVIL
   ───────────────────────────────────────────────────────────── */

const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

/**
 * Abre y cierra el menú móvil.
 * Actualiza aria-expanded para accesibilidad.
 */
function toggleMenu() {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);

  // Evita el scroll del body cuando el menú está abierto
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Cerrar menú con la tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    toggleMenu();
    hamburger.focus(); // devuelve el foco al botón
  }
});


/* ─────────────────────────────────────────────────────────────
   3. ANIMACIONES AL HACER SCROLL (Intersection Observer)
   ───────────────────────────────────────────────────────────── */

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Una vez visible, deja de observar para mejor rendimiento
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  }
);

// Observa todos los elementos con clase fade-up
document.querySelectorAll('.fade-up').forEach(el => {
  fadeObserver.observe(el);
});


/* ─────────────────────────────────────────────────────────────
   4. INTERNACIONALIZACIÓN (ES / EN)
   ───────────────────────────────────────────────────────────── */

/**
 * Traducciones del sitio.
 * Cada clave corresponde a un data-i18n o data-i18n-html en el HTML.
 */
const translations = {
  es: {
    /* Nav */
    'nav.services' : 'Servicios',
    'nav.process'  : 'Proceso',
    'nav.cases'    : 'Proyectos',
    'nav.packages' : 'Paquetes',
    'nav.about'    : 'Nosotros',
    'nav.cta'      : 'Hablemos',

    /* Hero */
    'hero.eyebrow'        : 'Soluciones Digitales',
    'hero.title'          : 'Tu negocio merece una<br><em>presencia digital</em><br>que venda',
    'hero.desc'           : 'Diseñamos, desarrollamos y optimizamos tu ecosistema digital. Sitios web de alto rendimiento, transformación de procesos y estrategias de contenido que convierten visitantes en clientes.',
    'hero.cta1'           : 'Iniciar mi proyecto',
    'hero.cta2'           : 'Ver proyectos',
    'hero.stat1'          : 'Proyectos finalizados',
    'hero.stat2'          : 'Mejora en performance',
    'hero.stat3'          : 'Áreas de especialidad',
    'hero.badge1.title'   : 'Performance Score',
    'hero.badge1.sub'     : '+90% en todos los proyectos',
    'hero.badge2.title'   : 'Diseño UI/UX',
    'hero.badge2.sub'     : 'Centrado en el usuario',

    /* Clients */
    'clients.label' : 'Empresas que han confiado en MINO',

    /* Services */
    'services.tag'  : 'Nuestros Servicios',
    'services.title': 'Todo lo que tu negocio necesita para crecer en digital',
    'services.desc' : 'Combinamos diseño, tecnología y estrategia para construir un ecosistema digital que trabaje por tu negocio.',

    /* Servicio 1 — UI/UX */
    's1.title' : 'Diseño UI/UX',
    's1.desc'  : 'Interfaces claras, intuitivas y atractivas que conectan tu marca con tus clientes desde el primer clic.',
    's1.f1'    : 'Investigación y análisis de usuarios',
    's1.f2'    : 'Prototipado y wireframes en Figma',
    's1.f3'    : 'Diseño centrado en conversión',
    's1.f4'    : 'Testing de usabilidad',

    /* Servicio 2 — Web Dev */
    's2.title' : 'Desarrollo Web',
    's2.desc'  : 'Sitios web profesionales construidos desde cero o con WordPress, optimizados para rendimiento y conversión.',
    's2.f1'    : 'Desarrollo a medida (HTML/CSS/JS)',
    's2.f2'    : 'WordPress + temas personalizados',
    's2.f3'    : 'WooCommerce y e-commerce',
    's2.f4'    : 'Integración de pasarelas de pago',

    /* Servicio 3 — Optimización */
    's3.title' : 'Optimización Web',
    's3.desc'  : 'Convertimos sitios lentos en máquinas de rendimiento. SEO técnico, velocidad y accesibilidad en un solo servicio.',
    's3.f1'    : 'Auditoría técnica completa',
    's3.f2'    : 'Optimización de velocidad Core Web Vitals',
    's3.f3'    : 'SEO on-page y técnico',
    's3.f4'    : '+90% en performance garantizado',

    /* Servicio 4 — Digital Transformation */
    's4.title' : 'Transformación Digital',
    's4.desc'  : 'Modernizamos cómo opera tu empresa: herramientas digitales, automatización y procesos más eficientes.',
    's4.f1'    : 'Diagnóstico de procesos digitales',
    's4.f2'    : 'Implementación de herramientas (CRM, etc.)',
    's4.f3'    : 'Automatización de tareas operativas',
    's4.f4'    : 'Integración de sistemas',

    /* Servicio 5 — Content */
    's5.title' : 'Estrategia de Contenido',
    's5.desc'  : 'Construimos tu presencia en redes sociales con contenido que comunica, conecta y convierte.',
    's5.f1'    : 'Estrategia editorial personalizada',
    's5.f2'    : 'Creación de contenido para redes',
    's5.f3'    : 'Calendario de publicaciones',
    's5.f4'    : 'Análisis y mejora continua',

    /* Servicio 6 — CTA card */
    's6.title' : '¿No sabes por dónde empezar?',
    's6.desc'  : 'Cuéntanos tu proyecto y te recomendamos la mejor solución para tu negocio, sin compromiso.',
    's6.cta'   : 'Consulta gratuita',

    /* Process */
    'process.tag'  : 'Cómo Trabajamos',
    'process.title': 'Un proceso claro, sin sorpresas',
    'process.desc' : 'De la idea al lanzamiento con metodología probada y comunicación constante en cada etapa.',
    'p1.title'     : 'Diagnóstico',
    'p1.desc'      : 'Analizamos tu negocio, tus objetivos y tu audiencia para entender qué solución digital necesitas realmente.',
    'p2.title'     : 'Estrategia & Diseño',
    'p2.desc'      : 'Definimos la arquitectura, el diseño visual y el plan de contenido. Presentamos prototipos antes de desarrollar.',
    'p3.title'     : 'Desarrollo',
    'p3.desc'      : 'Construimos tu solución con código limpio, optimizado y preparado para escalar. Iteraciones rápidas con tu feedback.',
    'p4.title'     : 'Lanzamiento & Soporte',
    'p4.desc'      : 'Publicamos tu proyecto con pruebas completas de rendimiento, SEO y accesibilidad. Te acompañamos después del lanzamiento.',

    /* Cases */
    'cases.tag'  : 'Proyectos',
    'cases.title': 'Resultados reales, no promesas',
    'cases.desc' : 'Cada proyecto es una historia de transformación digital. Más del 90% de mejora en performance, SEO y accesibilidad en todos nuestros clientes.',
    'case.view'  : 'Ver proyecto →',
    'cases.cta'  : 'Ver todos los proyectos →',

    /* Packages */
    'packages.tag'      : 'Paquetes',
    'packages.title'    : 'Soluciones adaptadas a tu etapa digital',
    'packages.desc'     : 'Desde presencia web completa hasta estrategia de redes. Elige el paquete que mejor encaja con los objetivos de tu negocio.',
    'pkg.recommended'   : '⭐ Más popular',
    'pkg.digital'       : 'Transformación Digital',
    'pkg.web'           : 'Desarrollo Web',
    'pkg.content'       : 'Estrategia de Contenido',
    'pkg.cta1'          : 'Crear mi presencia digital',
    'pkg.cta2'          : 'Optimizar mi negocio',
    'pkg.cta3'          : 'Impulsar mi presencia',

    /* About */
    'about.tag'            : 'Sobre MINO',
    'about.title'          : 'Tecnología accesible que hace crecer tu negocio',
    'about.desc'           : 'En MINO creemos que la transformación digital no debe ser complicada ni inaccesible. Diseñamos soluciones simples, efectivas y escalables.',
    'about.badge1.t'       : 'Compromiso total',
    'about.badge1.s'       : 'Con cada proyecto',
    'about.badge2.t'       : 'Entrega puntual',
    'about.badge2.s'       : 'Sin sorpresas',
    'about.mission.title'  : 'Misión',
    'about.mission.desc'   : 'Ser aliado estratégico en la transformación digital de empresas, ofreciendo soluciones confiables que fortalezcan su presencia online.',
    'about.vision.title'   : 'Visión',
    'about.vision.desc'    : 'Convertirnos en referente en soluciones digitales para negocios en crecimiento en la región, impulsando innovación y desarrollo empresarial.',
    'about.cta'            : 'Trabajemos juntos',

    /* CTA */
    'cta.tag'   : '¿Listo para comenzar?',
    'cta.title' : 'Tu próximo cliente está buscando tu negocio en internet',
    'cta.desc'  : 'No dejes que la competencia te adelante. Contáctanos hoy y en menos de 24 horas te presentamos una propuesta personalizada.',
    'cta.cta1'  : 'Escribir por WhatsApp',
    'cta.cta2'  : 'Enviar un email',
    'cta.note'  : 'Respuesta en menos de 24 horas · Sin compromiso · Primera consulta gratuita',

    /* Footer */
    'footer.brand'   : 'Soluciones digitales para empresas y emprendedores que quieren crecer en internet.',
    'footer.services': 'Servicios',
    'footer.company' : 'Empresa',
    'footer.contact' : 'Contacto',
    'footer.rights'  : 'Todos los derechos reservados.',
    'footer.privacy' : 'Privacidad',
    'footer.terms'   : 'Términos',
    'f.s1' : 'Diseño UI/UX',
    'f.s2' : 'Desarrollo Web',
    'f.s3' : 'Optimización Web',
    'f.s4' : 'Transformación Digital',
    'f.s5' : 'Estrategia de Contenido',
    'f.c1' : 'Sobre Nosotros',
    'f.c2' : 'Proyectos',
    'f.c3' : 'Paquetes',
    'f.c4' : 'Portafolio',
  },

  en: {
    /* Nav */
    'nav.services' : 'Services',
    'nav.process'  : 'Process',
    'nav.cases'    : 'Projects',
    'nav.packages' : 'Packages',
    'nav.about'    : 'About',
    'nav.cta'      : "Let's talk",

    /* Hero */
    'hero.eyebrow'        : 'Digital Solutions',
    'hero.title'          : 'Your business deserves a<br><em>digital presence</em><br>that sells',
    'hero.desc'           : 'We design, develop and optimize your digital ecosystem. High-performance websites, process transformation and content strategies that turn visitors into customers.',
    'hero.cta1'           : 'Start my project',
    'hero.cta2'           : 'View projects',
    'hero.stat1'          : 'Projects delivered',
    'hero.stat2'          : 'Performance improvement',
    'hero.stat3'          : 'Areas of expertise',
    'hero.badge1.title'   : 'Performance Score',
    'hero.badge1.sub'     : '+90% across all projects',
    'hero.badge2.title'   : 'UI/UX Design',
    'hero.badge2.sub'     : 'User-centered',

    /* Clients */
    'clients.label' : 'Companies that have trusted MINO',

    /* Services */
    'services.tag'  : 'Our Services',
    'services.title': 'Everything your business needs to grow digitally',
    'services.desc' : 'We combine design, technology and strategy to build a digital ecosystem that works for your business.',

    's1.title' : 'UI/UX Design',
    's1.desc'  : 'Clear, intuitive and attractive interfaces that connect your brand with your customers from the very first click.',
    's1.f1'    : 'User research & analysis',
    's1.f2'    : 'Prototyping & wireframes in Figma',
    's1.f3'    : 'Conversion-centered design',
    's1.f4'    : 'Usability testing',

    's2.title' : 'Web Development',
    's2.desc'  : 'Professional websites built from scratch or with WordPress, optimized for performance and conversion.',
    's2.f1'    : 'Custom development (HTML/CSS/JS)',
    's2.f2'    : 'WordPress + custom themes',
    's2.f3'    : 'WooCommerce & e-commerce',
    's2.f4'    : 'Payment gateway integration',

    's3.title' : 'Web Optimization',
    's3.desc'  : 'We turn slow sites into performance machines. Technical SEO, speed and accessibility in one service.',
    's3.f1'    : 'Full technical audit',
    's3.f2'    : 'Core Web Vitals speed optimization',
    's3.f3'    : 'On-page & technical SEO',
    's3.f4'    : '+90% performance guaranteed',

    's4.title' : 'Digital Transformation',
    's4.desc'  : 'We modernize how your company operates: digital tools, automation and more efficient processes.',
    's4.f1'    : 'Digital process diagnosis',
    's4.f2'    : 'Tool implementation (CRM, etc.)',
    's4.f3'    : 'Operational task automation',
    's4.f4'    : 'Systems integration',

    's5.title' : 'Content Strategy',
    's5.desc'  : 'We build your social media presence with content that communicates, connects and converts.',
    's5.f1'    : 'Custom editorial strategy',
    's5.f2'    : 'Social media content creation',
    's5.f3'    : 'Publishing calendar',
    's5.f4'    : 'Analytics & continuous improvement',

    's6.title' : 'Not sure where to start?',
    's6.desc'  : "Tell us about your project and we'll recommend the best solution for your business, no commitment.",
    's6.cta'   : 'Free consultation',

    'process.tag'  : 'How We Work',
    'process.title': 'A clear process, no surprises',
    'process.desc' : 'From idea to launch with proven methodology and constant communication at every stage.',
    'p1.title'     : 'Discovery',
    'p1.desc'      : 'We analyze your business, goals and audience to understand what digital solution you truly need.',
    'p2.title'     : 'Strategy & Design',
    'p2.desc'      : 'We define the architecture, visual design and content plan. We present prototypes before developing.',
    'p3.title'     : 'Development',
    'p3.desc'      : 'We build your solution with clean, optimized and scalable code. Fast iterations with your feedback.',
    'p4.title'     : 'Launch & Support',
    'p4.desc'      : 'We publish your project with full performance, SEO and accessibility testing. We support you after launch.',

    'cases.tag'  : 'Projects',
    'cases.title': 'Real results, not promises',
    'cases.desc' : 'Every project is a digital transformation story. Over 90% improvement in performance, SEO and accessibility across all our clients.',
    'case.view'  : 'View project →',
    'cases.cta'  : 'View all projects →',

    'packages.tag'    : 'Packages',
    'packages.title'  : 'Solutions tailored to your digital stage',
    'packages.desc'   : 'From full web presence to social strategy. Choose the package that best fits your business goals.',
    'pkg.recommended' : '⭐ Most popular',
    'pkg.digital'     : 'Digital Transformation',
    'pkg.web'         : 'Web Development',
    'pkg.content'     : 'Content Strategy',
    'pkg.cta1'        : 'Create my digital presence',
    'pkg.cta2'        : 'Optimize my business',
    'pkg.cta3'        : 'Boost my presence',

    'about.tag'           : 'About MINO',
    'about.title'         : 'Accessible technology that grows your business',
    'about.desc'          : "At MINO we believe digital transformation shouldn't be complicated or inaccessible. We design simple, effective and scalable solutions.",
    'about.badge1.t'      : 'Full commitment',
    'about.badge1.s'      : 'With every project',
    'about.badge2.t'      : 'On-time delivery',
    'about.badge2.s'      : 'No surprises',
    'about.mission.title' : 'Mission',
    'about.mission.desc'  : 'To be a strategic partner in the digital transformation of businesses, offering reliable solutions that strengthen their online presence.',
    'about.vision.title'  : 'Vision',
    'about.vision.desc'   : 'To become a benchmark in digital solutions for growing businesses in the region, driving innovation and business development.',
    'about.cta'           : "Let's work together",

    'cta.tag'   : 'Ready to start?',
    'cta.title' : 'Your next customer is searching for your business online',
    'cta.desc'  : "Don't let the competition get ahead. Contact us today and within 24 hours we'll present a personalized proposal.",
    'cta.cta1'  : 'Message on WhatsApp',
    'cta.cta2'  : 'Send an email',
    'cta.note'  : 'Response within 24 hours · No commitment · First consultation free',

    'footer.brand'   : 'Digital solutions for businesses and entrepreneurs who want to grow online.',
    'footer.services': 'Services',
    'footer.company' : 'Company',
    'footer.contact' : 'Contact',
    'footer.rights'  : 'All rights reserved.',
    'footer.privacy' : 'Privacy',
    'footer.terms'   : 'Terms',
    'f.s1' : 'UI/UX Design',
    'f.s2' : 'Web Development',
    'f.s3' : 'Web Optimization',
    'f.s4' : 'Digital Transformation',
    'f.s5' : 'Content Strategy',
    'f.c1' : 'About Us',
    'f.c2' : 'Projects',
    'f.c3' : 'Packages',
    'f.c4' : 'Portfolio',
  }
};

let currentLang = 'es';

/**
 * Cambia el idioma de la interfaz.
 * @param {string} lang - 'es' o 'en'
 */
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Actualiza elementos con texto simple
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Actualiza elementos con HTML (para negritas, <em>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Actualiza botones del toggle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.textContent.trim() === lang.toUpperCase();
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });
}

/* ─────────────────────────────────────────────────────────────
   5. TRADUCCIONES DE PROJECTS.HTML
   Agrega data-i18n a los elementos clave de projects.html
   ───────────────────────────────────────────────────────────── */

// Traducciones adicionales para projects.html
const projectsTranslations = {
  es: {
    /* Hero */
    'ph.tag'         : 'Portafolio',
    'ph.title'       : 'Proyectos que <em>transforman</em><br>negocios digitales',
    'ph.desc'        : 'Cada proyecto es una solución a un problema real. Aquí encontrarás el proceso, las decisiones de diseño y los resultados obtenidos en cada uno.',
    'ph.s1'          : 'Proyectos finalizados',
    'ph.s2'          : 'Mejora en performance',
    'ph.s3'          : 'Años de experiencia',
    'ph.s4'          : 'Países alcanzados',
    /* Logos */
    'logos.label'    : 'Sitios web y plataformas desarrolladas',
    /* Filtros */
    'f.all'          : 'Todos',
    'f.web'          : 'Desarrollo Web',
    'f.ux'           : 'UX / UI Design',
    'f.ecom'         : 'E-Commerce',
    'f.digital'      : 'Transformación Digital',
    'f.showing'      : 'Mostrando',
    'f.projects'     : 'proyectos',
    /* CTA */
    'pcta.tag'       : '¿Tienes un proyecto?',
    'pcta.title'     : 'Construyamos algo extraordinario juntos',
    'pcta.desc'      : 'Cada proyecto aquí comenzó con una conversación. Cuéntame tu idea y en menos de 24 horas te presento una propuesta.',
    'pcta.cta1'      : 'Escribir por WhatsApp',
    'pcta.cta2'      : '← Volver al inicio',
    'pcta.note'      : 'Respuesta en menos de 24 horas · Sin compromiso · Primera consulta gratuita',
  },
  en: {
    /* Hero */
    'ph.tag'         : 'Portfolio',
    'ph.title'       : 'Projects that <em>transform</em><br>digital businesses',
    'ph.desc'        : 'Every project is a solution to a real problem. Here you will find the process, design decisions and results achieved in each one.',
    'ph.s1'          : 'Projects delivered',
    'ph.s2'          : 'Performance improvement',
    'ph.s3'          : 'Years of experience',
    'ph.s4'          : 'Countries reached',
    /* Logos */
    'logos.label'    : 'Websites and platforms developed',
    /* Filtros */
    'f.all'          : 'All',
    'f.web'          : 'Web Development',
    'f.ux'           : 'UX / UI Design',
    'f.ecom'         : 'E-Commerce',
    'f.digital'      : 'Digital Transformation',
    'f.showing'      : 'Showing',
    'f.projects'     : 'projects',
    /* CTA */
    'pcta.tag'       : 'Have a project?',
    'pcta.title'     : "Let's build something extraordinary together",
    'pcta.desc'      : 'Every project here started with a conversation. Tell me your idea and within 24 hours I will present a proposal.',
    'pcta.cta1'      : 'Message on WhatsApp',
    'pcta.cta2'      : '← Back to home',
    'pcta.note'      : 'Response within 24 hours · No commitment · First consultation free',
  }
};

// Extiende el objeto translations con las de projects
Object.keys(projectsTranslations).forEach(lang => {
  Object.assign(translations[lang], projectsTranslations[lang]);
});


/* ─────────────────────────────────────────────────────────────
   6. ESTADO INICIAL DEL NAV SEGÚN PÁGINA
   index.html → hero blanco → nav empieza como scrolled
   projects.html → hero oscuro → nav empieza transparente
   ───────────────────────────────────────────────────────────── */

// En projects.html el hero es oscuro — el scroll listener
// ya maneja el estado. Solo aseguramos que al cargar en top
// el nav esté sin la clase scrolled.
if (window.location.pathname.includes('projects')) {
  if (window.scrollY <= 20) {
    navbar.classList.remove('scrolled');
  }
}