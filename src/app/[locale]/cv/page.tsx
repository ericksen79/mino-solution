
'use client';
import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import './CVStyles.css';

export default function CVPage() {
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState('cv');

  useEffect(() => {
    document.body.classList.remove('es', 'en');
    document.body.classList.add(locale);
    return () => {
      document.body.classList.remove('es', 'en');
    };
  }, [locale]);

  return (
    <div className="cv-container" style={{ background: 'var(--paper)', minHeight: '100vh', paddingTop: '60px' }}>
      


<div className="wrapper">

  <div className="tab-bar">
    <button className={`tab ${activeTab === "cv" ? "active" : ""}`} onClick={() => setActiveTab("cv")}>
      <span data-lang="es">CV Visual</span>
      <span data-lang="en">Visual CV</span>
    </button>
    <button className={`tab ${activeTab === "refs" ? "active" : ""}`} onClick={() => setActiveTab("refs")}>
      <span data-lang="es">Proyectos y Referencias</span>
      <span data-lang="en">Projects & References</span>
    </button>
  </div>

  
  <div id="cv" className={`panel ${activeTab === "cv" ? "active" : ""}`}>

    <div className="cv-header">
      <div>
        <div className="cv-name">Erick<br /><em>Hernández</em></div>
        <div className="cv-role">UI/UX Designer · WordPress Developer · Product Designer</div>
      </div>
      <div className="cv-contact-block">
        <p>+503 7888 6872</p>
        <p><a href="mailto:erick@mino.solutions">erick@mino.solutions</a></p>
        <p><a href="https://www.linkedin.com/in/erickehc/" target="_blank">linkedin.com/in/erickehc</a></p>
        <p>San Salvador, El Salvador</p>
        <span className="available-badge">
          <span data-lang="es">Disponible · Remoto</span>
          <span data-lang="en">Available · Remote</span>
        </span>
        <br />
        <a className="header-cta" href="https://www.mino.solutions/projects" target="_blank" rel="noopener">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="3" width="12" height="10" rx="1"/>
            <path d="M5 3V2m6 1V2M2 7h12"/>
          </svg>
          <span data-lang="es">Portafolio & Casos de estudio</span>
          <span data-lang="en">Portfolio & Case studies</span>
        </a>
      </div>
    </div>

    <div className="two-col">

      
      <div>

        <div className="section-label">
          <span data-lang="es">Perfil profesional</span>
          <span data-lang="en">Professional profile</span>
        </div>
        <p className="summary-text" style={{ 'marginBottom': '2rem' }} data-lang="es">
          UI/UX Designer y WordPress Developer con 6+ años de experiencia construyendo productos digitales de principio a fin. Especializado en interfaces intuitivas, sistemas de diseño escalables y desarrollo web. Experiencia en fintech, media digital y SaaS. Trabajo en inglés y español, con clientes en EE.UU., Australia y El Salvador.
        </p>
        <p className="summary-text" style={{ 'marginBottom': '2rem' }} data-lang="en">
          UI/UX Designer and WordPress Developer with 6+ years of experience building digital products end-to-end. Specialized in intuitive interfaces, scalable design systems, and web development. Experience in fintech, digital media, and SaaS. Fluent in English and Spanish, with clients across the US, Australia, and El Salvador.
        </p>

        <div className="section-label">
          <span data-lang="es">Experiencia</span>
          <span data-lang="en">Experience</span>
        </div>

        
        <div className="exp-item">
          <div className="exp-top">
            <div className="exp-title" data-lang="es">Senior UI/UX Designer</div>
            <div className="exp-title" data-lang="en">Senior UI/UX Designer</div>
            <div className="exp-date">2025 – <span data-lang="es">actual</span><span data-lang="en">present</span></div>
          </div>
          <div className="exp-company">AB POS Solution / NUV POS Solution</div>
          <ul className="exp-bullets">
            <li data-lang="es">Liderar el diseño de interfaces para páginas web críticas del ecosistema AB POS y NUV POS, preparándolas para desarrollo técnico.</li>
            <li data-lang="en">Leading UI design for critical web pages within the AB POS and NUV POS ecosystem, preparing them for technical development.</li>
            <li data-lang="es">Crear componentes y diseños consistentes para diversas secciones, garantizando una experiencia de usuario escalable.</li>
            <li data-lang="en">Creating consistent components and layouts across multiple sections, ensuring a scalable user experience.</li>
            <li data-lang="es">Colaborar con desarrolladores para supervisar la correcta implementación de los diseños en las páginas finales.</li>
            <li data-lang="en">Collaborating closely with developers to oversee accurate implementation of UI designs in final web pages.</li>
          </ul>
        </div>

        
        <div className="exp-item">
          <div className="exp-top">
            <div className="exp-title">Senior Web Engineer</div>
            <div className="exp-date">2025</div>
          </div>
          <div className="exp-company">Salem Business Journal / CATO Media Company</div>
          <ul className="exp-bullets">
            <li data-lang="es">Lideré desarrollo y optimización de plataformas de media digital con PHP, CSS, HTML y JavaScript.</li>
            <li data-lang="en">Led development and optimization of digital media platforms using PHP, CSS, HTML, and JavaScript.</li>
            <li data-lang="es">Rediseñé el periódico digital con experiencias responsive para mobile y desktop.</li>
            <li data-lang="en">Redesigned the digital newspaper with responsive experiences for mobile and desktop.</li>
            <li data-lang="es">Integré CRM (GoHighLevel) y herramientas SEO (Google Analytics, Search Console).</li>
            <li data-lang="en">Integrated CRM (GoHighLevel) and SEO tools (Google Analytics, Search Console).</li>
          </ul>
        </div>

        
        <div className="exp-item">
          <div className="exp-top">
            <div className="exp-title" data-lang="es">Lead UI/UX & WordPress Dev</div>
            <div className="exp-title" data-lang="en">Lead UI/UX & WordPress Dev</div>
            <div className="exp-date">2024 – 2025</div>
          </div>
          <div className="exp-company">Linework · Fintech</div>
          <ul className="exp-bullets">
            <li data-lang="es">Rediseñé una app fintech con crypto marketplace, red social descentralizada y cold wallet.</li>
            <li data-lang="en">Redesigned a fintech app including a crypto marketplace, decentralized social network, and cold wallet.</li>
            <li data-lang="es">Creé design system completo y UI kit para toda la plataforma.</li>
            <li data-lang="en">Created a complete design system and UI kit for the entire platform.</li>
            <li data-lang="es">Conduje user research, usability testing y prototipado en Figma.</li>
            <li data-lang="en">Conducted user research, usability testing, and prototyping in Figma.</li>
          </ul>
        </div>

        
        <div className="exp-item">
          <div className="exp-top">
            <div className="exp-title" data-lang="es">Web & UX Designer</div>
            <div className="exp-title" data-lang="en">Web & UX Designer</div>
            <div className="exp-date">2023 – 2024</div>
          </div>
          <div className="exp-company">SIPcity · Australia · Cloud SaaS</div>
          <ul className="exp-bullets">
            <li data-lang="es">Diseñé landing pages responsive para plataforma UCaaS en mercado australiano.</li>
            <li data-lang="en">Designed responsive landing pages for a UCaaS platform in the Australian market.</li>
            <li data-lang="es">Motion graphics con After Effects; SEO y WordPress con Elementor.</li>
            <li data-lang="en">Motion graphics with After Effects; SEO management and WordPress with Elementor.</li>
          </ul>
        </div>

        
        <div className="exp-item">
          <div className="exp-top">
            <div className="exp-title">Web Designer</div>
            <div className="exp-date">2022 – 2023</div>
          </div>
          <div className="exp-company">Taskable · El Salvador</div>
          <ul className="exp-bullets">
            <li data-lang="es">Landing pages, prototipos y mantenimiento WordPress con Divi y Elementor.</li>
            <li data-lang="en">Landing pages, prototypes, and WordPress maintenance with Divi and Elementor.</li>
          </ul>
        </div>

        
        <div className="section-label" style={{ 'marginTop': '1.5rem' }}>
          <span data-lang="es">Proyectos destacados</span>
          <span data-lang="en">Featured projects</span>
        </div>

        <div className="exp-item">
          <div className="exp-top">
            <div className="exp-title" style={{ 'fontSize': '13px' }}>Lienzos y Trazos — CENAR (2024)</div>
          </div>
          <div className="exp-company">
            Product Designer &amp; <span data-lang="es">Gestor Cultural</span><span data-lang="en">Cultural Manager</span>
            &nbsp;·&nbsp;
            <a className="case-link" href="https://hay-cultura.super.site/index/proyectos/case-study/lienzos-trazos" target="_blank">
              <span data-lang="es">Ver caso de estudio ↗</span><span data-lang="en">View case study ↗</span>
            </a>
          </div>
          <p className="exp-desc" data-lang="es">Sitio web informativo para estudiantes de artes plásticas del CENAR, donde pueden compartir sus obras y promover el desarrollo del arte nacional.</p>
          <p className="exp-desc" data-lang="en">Informative website for fine arts students at CENAR (National Arts Center), where they can share their work and promote national art development.</p>
          <ul className="exp-bullets">
            <li data-lang="es">UX design, design system e implementación. Gestión cultural de talleres y contenido didáctico.</li>
            <li data-lang="en">UX design, design system, and implementation. Cultural management of workshops and educational content.</li>
          </ul>
        </div>

        <div className="exp-item">
          <div className="exp-top">
            <div className="exp-title" style={{ 'fontSize': '13px' }}>ESArt — <span data-lang="es">Escuela de Artes</span><span data-lang="en">School of Arts</span> (2023)</div>
          </div>
          <div className="exp-company">
            UI/UX Designer &amp; <span data-lang="es">Gestor Cultural</span><span data-lang="en">Cultural Manager</span>
            &nbsp;·&nbsp;
            <a className="case-link" href="https://hay-cultura.super.site/index/proyectos/case-study/esart/" target="_blank">
              <span data-lang="es">Ver caso de estudio ↗</span><span data-lang="en">View case study ↗</span>
            </a>
          </div>
          <p className="exp-desc" data-lang="es">Plataforma para que estudiantes de la única Escuela de Artes universitaria en El Salvador compartan sus trabajos y actividades académicas.</p>
          <p className="exp-desc" data-lang="en">Platform for students of the only university-level School of Arts in El Salvador to share their work and academic activities.</p>
          <ul className="exp-bullets">
            <li data-lang="es">Design Thinking, User Research y prototipo de alta fidelidad. <a className="case-link" href="https://hay-cultura.super.site/index/proyectos/case-study/gallery-esart-1" target="_blank">Ver galería ↗</a></li>
            <li data-lang="en">Design Thinking, User Research, and high-fidelity prototype. <a className="case-link" href="https://hay-cultura.super.site/index/proyectos/case-study/gallery-esart-1" target="_blank">View gallery ↗</a></li>
            <li data-lang="es">Solución con secciones clave: landing, especialidades, obras, consultas y blog.</li>
            <li data-lang="en">Solution with key sections: landing, specializations, artworks, inquiries, and blog.</li>
          </ul>
        </div>

        <div className="exp-item">
          <div className="exp-top">
            <div className="exp-title" style={{ 'fontSize': '13px' }}>
              <span data-lang="es">Curso: Diseño y desarrollo de apps móviles</span>
              <span data-lang="en">Course: Mobile App Design & Development</span>
              (2022)
            </div>
          </div>
          <div className="exp-company">
            <span data-lang="es">Facilitador & Gestor Cultural</span><span data-lang="en">Facilitator & Cultural Manager</span>
            &nbsp;·&nbsp;
            <a className="case-link" href="https://hay-cultura.super.site/index/blogs/mobile-application-design-and-development" target="_blank">
              <span data-lang="es">Ver más ↗</span><span data-lang="en">Learn more ↗</span>
            </a>
          </div>
          <ul className="exp-bullets">
            <li data-lang="es">Proyecto de horas sociales UES en colaboración con el IMJ. +15 jóvenes certificados.</li>
            <li data-lang="en">Social hours project at UES in collaboration with the IMJ. 15+ certified young participants.</li>
            <li data-lang="es">Fundamentos UI/UX, Figma y prototipado. Clases de 2h durante 3 meses.</li>
            <li data-lang="en">UI/UX fundamentals, Figma, and prototyping. 2-hour classes over 3 months.</li>
          </ul>
        </div>

      </div>

      
      <div>

        <div className="sidebar-block">
          <div className="section-label">Stack</div>
          <div className="skill-group">
            <div className="skill-group-name"><span data-lang="es">Diseño</span><span data-lang="en">Design</span></div>
            <span className="skill-pill">Figma</span>
            <span className="skill-pill">Adobe XD</span>
            <span className="skill-pill">Illustrator</span>
            <span className="skill-pill">Photoshop</span>
            <span className="skill-pill">After Effects</span>
            <span className="skill-pill">Blender</span>
          </div>
          <div className="skill-group">
            <div className="skill-group-name"><span data-lang="es">Desarrollo</span><span data-lang="en">Development</span></div>
            <span className="skill-pill">WordPress</span>
            <span className="skill-pill">PHP</span>
            <span className="skill-pill">HTML5</span>
            <span className="skill-pill">CSS3</span>
            <span className="skill-pill">JavaScript</span>
            <span className="skill-pill">Elementor</span>
            <span className="skill-pill">Gutenberg</span>
          </div>
          <div className="skill-group">
            <div className="skill-group-name">UX Process</div>
            <span className="skill-pill">Design Systems</span>
            <span className="skill-pill">User Research</span>
            <span className="skill-pill">Usability Testing</span>
            <span className="skill-pill">Design Sprint</span>
            <span className="skill-pill">Lean UX</span>
            <span className="skill-pill">IA</span>
          </div>
          <div className="skill-group">
            <div className="skill-group-name">Marketing &amp; Analytics</div>
            <span className="skill-pill">SEO</span>
            <span className="skill-pill">Google Analytics</span>
            <span className="skill-pill">Search Console</span>
            <span className="skill-pill">GoHighLevel</span>
          </div>
        </div>

        <div className="sidebar-block">
          <div className="section-label"><span data-lang="es">Educación</span><span data-lang="en">Education</span></div>
          <div className="cert-item">
            <strong data-lang="es">Licenciatura en Bellas Artes</strong>
            <strong data-lang="en">Bachelor of Fine Arts</strong><br />
            <span data-lang="es">Minor en Diseño Gráfico</span>
            <span data-lang="en">Minor in Graphic Design</span><br />
            <span className="cert-org">Universidad de El Salvador · 2025</span>
          </div>
        </div>

        <div className="sidebar-block">
          <div className="section-label"><span data-lang="es">Certificaciones</span><span data-lang="en">Certifications</span></div>
          <div className="cert-item">
            UX Design Fundamentals<br />
            <span className="cert-org">Google / Coursera</span>
          </div>
          <div className="cert-item">
            Graphic Design Specialization<br />
            <span className="cert-org">CalArts / Coursera</span>
          </div>
          <div className="cert-item" data-lang="es">
            Design Systems · Design Sprint · Lean UX · Metodologías de Diseño Digital · Identidad Corporativa · Gestión de Proyectos · Colaboración Diseño-Dev · Evitar Dark Patterns · Estrategias UX<br />
            <span className="cert-org">Platzi 2024–2025</span>
          </div>
          <div className="cert-item" data-lang="en">
            Design Systems · Design Sprint · Lean UX · Digital Product Design · Corporate Identity · Project Management · Design-Dev Collaboration · Avoiding Dark Patterns · UX Strategies<br />
            <span className="cert-org">Platzi 2024–2025</span>
          </div>
          <div className="cert-item" data-lang="es">
            Advanced Figma · Diseño Centrado en el Usuario · Fundamentos UI/UX · Arquitectura de Información · Design Thinking · ChatGPT para Product Designers · Bitcoin &amp; Blockchain · Lean UX<br />
            <span className="cert-org">Platzi / Domestika 2020–2023</span>
          </div>
          <div className="cert-item" data-lang="en">
            Advanced Figma · User-Centered Design · UI/UX Fundamentals · Information Architecture · Design Thinking · ChatGPT for Product Designers · Bitcoin &amp; Blockchain · Lean UX<br />
            <span className="cert-org">Platzi / Domestika 2020–2023</span>
          </div>
          <div className="cert-item" data-lang="es">
            Diseño Gráfico · Marketing Digital · Emprendimiento Juvenil · Innovación en Políticas Públicas<br />
            <span className="cert-org">IMJ 2021</span>
          </div>
          <div className="cert-item" data-lang="en">
            Graphic Design · Digital Marketing · Youth Entrepreneurship · Public Policy Innovation<br />
            <span className="cert-org">IMJ 2021</span>
          </div>
        </div>

        <div className="sidebar-block">
          <div className="section-label"><span data-lang="es">Idiomas</span><span data-lang="en">Languages</span></div>
          <div className="cert-item"><span data-lang="es">Español</span><span data-lang="en">Spanish</span> <span style={{ 'color': 'var(--accent)' }}>—</span> <span data-lang="es">Nativo</span><span data-lang="en">Native</span></div>
          <div className="cert-item"><span data-lang="es">Inglés</span><span data-lang="en">English</span> <span style={{ 'color': 'var(--accent)' }}>—</span> <span data-lang="es">Profesional</span><span data-lang="en">Professional</span></div>
        </div>

        <div className="sidebar-block">
          <div className="section-label"><span data-lang="es">Clientes Freelance</span><span data-lang="en">Freelance Clients</span></div>
          <p style={{ 'fontSize': '11px', 'color': 'var(--muted)', 'lineHeight': '1.9' }}>
            ABG Homes · Clark County Catalyst · Press Release Salem · Denim Project SV · RPG Architect · CATO Media · XMT Construction · Casa Escencia · Super Clean SV
          </p>
        </div>

      </div>
    </div>

    <div className="print-note">
      <span>▲</span>
      <span data-lang="es">Versión visual para envío directo · CV para sistemas ATS:
        <a href="https://docs.google.com/document/d/1Nk-R70bNgAOh0OCjq3IZUy0cjMldOTndA-36C7UJ0eA/edit?usp=sharing" target="_blank">ES</a>
        &amp;
        <a href="https://docs.google.com/document/d/1R2SGtXSV9qmn8u3sCGn_zIU6UPRDtQqdybIgRF8P6Pw/edit?usp=sharing" target="_blank">EN</a>
      </span>
      <span data-lang="en">Visual version for direct delivery · ATS-ready CV:
        <a href="https://docs.google.com/document/d/1Nk-R70bNgAOh0OCjq3IZUy0cjMldOTndA-36C7UJ0eA/edit?usp=sharing" target="_blank">ES</a>
        &amp;
        <a href="https://docs.google.com/document/d/1R2SGtXSV9qmn8u3sCGn_zIU6UPRDtQqdybIgRF8P6Pw/edit?usp=sharing" target="_blank">EN</a>
      </span>
    </div>

  </div>

  
  <div id="refs" className={`panel ${activeTab === "refs" ? "active" : ""}`}>

    <div className="stats-row">
      <div className="stat-card">
        <div className="stat-num">6+</div>
        <div className="stat-label"><span data-lang="es">Años de experiencia</span><span data-lang="en">Years of experience</span></div>
      </div>
      <div className="stat-card">
        <div className="stat-num">20+</div>
        <div className="stat-label"><span data-lang="es">Proyectos finalizados</span><span data-lang="en">Completed projects</span></div>
      </div>
      <div className="stat-card">
        <div className="stat-num">$1.5k–$2.5k</div>
        <div className="stat-label"><span data-lang="es">Rango estimado USD/mes</span><span data-lang="en">Estimated range USD/mo</span></div>
      </div>
    </div>

    
    <div className="category-label">
      <span data-lang="es">Cartas de Referencia</span>
      <span data-lang="en">Reference Letters</span>
    </div>

    
    <div className="ref-card">
      <div className="ref-top">
        <div>
          <div className="ref-name">Ariela Suvillaga</div>
          <div className="ref-company">Casa Escencia E-commerce</div>
        </div>
        <span className="badge">✦ Founder</span>
      </div>
      <div className="ref-meta">
        <span className="ref-tag" data-lang="es">Proyecto de 4 meses</span>
        <span className="ref-tag" data-lang="en">4-month project</span>
        <span className="ref-tag" data-lang="es">San Salvador, 28 mayo 2025</span>
        <span className="ref-tag" data-lang="en">San Salvador, May 28, 2025</span>
        <span className="ref-tag">Remote</span>
      </div>
      <p className="ref-body" data-lang="es">Me gustaría recomendar a Erick Hernández por su excelente desempeño en el proyecto Casa Esencia. A lo largo del desarrollo, Erick demostró ser un profesional comprometido, creativo y altamente orientado al detalle. Su contribución en el diseño y desarrollo del sitio fue fundamental para lograr una experiencia clara, funcional y coherente con la identidad de la marca. Además, valoro mucho que sus valores estén alineados con los de mi marca, lo que hizo el proceso de trabajo aún más fluido y auténtico. Sin duda, es una persona confiable para cualquier proyecto digital.</p>
      <p className="ref-body" data-lang="en">I would like to recommend Erick Hernández for his excellent performance in the Casa Esencia project. Throughout the development, Erick proved to be a committed, creative, and highly detail-oriented professional. His contribution to the site's design and development was key to achieving a clear, functional experience aligned with the brand identity. I also deeply value that his values align with those of my brand, which made the work process even more fluid and authentic. He is undoubtedly a reliable person for any digital project.</p>
      <div className="ref-contacts">
        <span className="ref-contact">+34 674 89 23 12</span>
        <span className="ref-contact"><a href="mailto:erick@mino.solutions">erick@mino.solutions</a></span>
      </div>
      <a className="ref-link" href="https://www.linkedin.com/in/ariela-s-a44204b4/" target="_blank">LinkedIn ↗</a>
    </div>

    
    <div className="ref-card">
      <div className="ref-top">
        <div>
          <div className="ref-name">Luis Roberto Ticas Valdivieso</div>
          <div className="ref-company">Zentroo Lav &amp; Linework</div>
        </div>
        <span className="badge">✦ Operations Management</span>
      </div>
      <div className="ref-meta">
        <span className="ref-tag" data-lang="es">8 meses colaborando</span>
        <span className="ref-tag" data-lang="en">8 months together</span>
        <span className="ref-tag" data-lang="es">San Salvador, 28 mayo 2025</span>
        <span className="ref-tag" data-lang="en">San Salvador, May 28, 2025</span>
        <span className="ref-tag">Remote</span>
      </div>
      <p className="ref-body" data-lang="es">Me complace recomendar a Erick Hernández, a quien tuve el privilegio de supervisar directamente en el área de operaciones, marketing y gestión financiera. Durante el tiempo que trabajamos juntos, Erick demostró ser una persona con un talento excepcional, capaz de aportar soluciones creativas y estratégicas en cada proyecto. Su capacidad para combinar pensamiento analítico con sensibilidad hacia el diseño y la experiencia del usuario lo convierte en un profesional integral. Además, su actitud colaborativa y disposición para aprender enriquecieron no solo su desempeño, sino también el de todo el equipo. Recomiendo ampliamente a Erick para cualquier posición o iniciativa que decida asumir.<br /><em>Certified Compliance Officer — Operations / Marketing / Finance / Management</em></p>
      <p className="ref-body" data-lang="en">It is my pleasure to recommend Erick Hernández, whom I had the privilege of supervising directly in operations, marketing, and financial management. During our time working together, Erick proved to be an exceptionally talented individual, able to contribute creative and strategic solutions to every project. His ability to combine analytical thinking with sensitivity to design and user experience makes him an all-around professional. I wholeheartedly recommend Erick for any position or initiative he decides to pursue.<br /><em>Certified Compliance Officer — Operations / Marketing / Finance / Management</em></p>
      <div className="ref-contacts">
        <span className="ref-contact">+503 7741 0994</span>
        <span className="ref-contact"><a href="mailto:erick@mino.solutions">erick@mino.solutions</a></span>
      </div>
      <a className="ref-link" href="https://www.linkedin.com/in/robertoticas/" target="_blank">LinkedIn ↗</a>
    </div>

    
    <div className="ref-card">
      <div className="ref-top">
        <div>
          <div className="ref-name">Doroty Johnstone</div>
          <div className="ref-company">SIPcity</div>
        </div>
        <span className="badge">✦ Founder &amp; CEO</span>
      </div>
      <div className="ref-meta">
        <span className="ref-tag" data-lang="es">1 año colaborando</span>
        <span className="ref-tag" data-lang="en">1 year together</span>
        <span className="ref-tag" data-lang="es">3 junio 2024</span>
        <span className="ref-tag" data-lang="en">June 3, 2024</span>
        <span className="ref-tag">Australia · Remote</span>
      </div>
      <p className="ref-body" data-lang="es">Es un honor recomendar a Erick Hernández, quien trabajó con nuestro equipo como junior graphic designer, contribuyendo en proyectos clave como diseño de sitios web, gestión de activos de marca y creación de contenido para YouTube. Erick demostró una ética de trabajo sólida y una gran disposición para asumir nuevos retos. Su talento como diseñador, junto con su aguda sensibilidad estética, le permitió aportar soluciones visuales de gran calidad. Además, fue un verdadero placer de tener en el equipo: colaborativo, creativo y siempre dispuesto a aportar más allá de lo esperado.</p>
      <p className="ref-body" data-lang="en">It is an honor to recommend Erick Hernández, who worked with our team as a junior graphic designer, contributing to key projects including website design, brand asset management, and YouTube content creation. Erick demonstrated a strong work ethic and great willingness to take on new challenges. His talent as a designer, combined with his sharp aesthetic sensibility, allowed him to deliver high-quality visual solutions. He was also a true pleasure to have on the team: collaborative, creative, and always going above and beyond.</p>
      <a className="ref-link" href="https://www.linkedin.com/in/dotjohnstone/" target="_blank">LinkedIn ↗</a>
    </div>

    
    <div className="ref-card">
      <div className="ref-top">
        <div>
          <div className="ref-name">Jesse Lippold Peone</div>
          <div className="ref-company">Salem Business Journal · CATO Media</div>
        </div>
        <span className="badge">✦ Founder &amp; Journalist</span>
      </div>
      <div className="ref-meta">
        <span className="ref-tag" data-lang="es">1 año colaborando</span>
        <span className="ref-tag" data-lang="en">1 year together</span>
        <span className="ref-tag" data-lang="es">24 noviembre 2025</span>
        <span className="ref-tag" data-lang="en">November 24, 2025</span>
        <span className="ref-tag">USA · Remote</span>
      </div>
      <p className="ref-body" data-lang="es">Tuve el privilegio de contar con Erick Hernández en nuestro equipo, y puedo afirmar que su aporte fue invaluable. Erick se distingue por su responsabilidad y compromiso, garantizando que cada tarea se complete en tiempo y con altos estándares. Como diseñador web, posee un gran ojo para los detalles, asegurando que cada proyecto tenga una apariencia limpia, profesional y alineada con la identidad de la marca. Erick no solo cumple con lo esperado, sino que eleva la calidad del equipo con su actitud positiva y su enfoque en la excelencia.</p>
      <p className="ref-body" data-lang="en">I had the privilege of having Erick Hernández on our team, and I can affirm that his contribution was invaluable. Erick stands out for his responsibility and commitment, ensuring every task is completed on time and to high standards. As a web designer, he has a great eye for detail, making sure every project looks clean, professional, and aligned with the brand identity. Erick not only meets expectations but elevates the team's quality with his positive attitude and focus on excellence.</p>
      <div className="ref-contacts">
        <span className="ref-contact">+503 7806 5141</span>
        <span className="ref-contact"><a href="mailto:erick@mino.solutions">erick@mino.solutions</a></span>
      </div>
      <a className="ref-link" href="https://www.linkedin.com/in/jessepeone/" target="_blank">LinkedIn ↗</a>
    </div>

    
    <div className="category-label">
      <span data-lang="es">Proyectos y páginas desarrolladas</span>
      <span data-lang="en">Developed projects & pages</span>
    </div>

    <div className="sites-grid">
      <div className="site-block">
        <a href="https://nuvpos.com/" target="_blank">NUV POS Solution ↗</a>
        <a href="https://casaescencia.com/" target="_blank">Casa Escencia ↗</a>
        <a href="https://catomediacompany.com/" target="_blank">CATO Media ↗</a>
        <a href="https://salembusinessjournal.org/" target="_blank">Salem Business Journal ↗</a>
        <a href="https://clarkcountycatalyst.com/" target="_blank">Clark County Catalyst ↗</a>
        <a href="https://denimprojectsv.com/" target="_blank">Denim Project SV ↗</a>
        <a href="https://xmt-inc.com/" target="_blank">XMT Construction ↗</a>
      </div>
      <div className="site-block">
        <a href="https://www.lienzosytrazos.art/" target="_blank">CENAR — Lienzos y Trazos ↗</a>
        <a href="https://linework.online/" target="_blank">Linework ↗</a>
        <a href="https://rpg-architect.com/" target="_blank">RPG Architect ↗</a>
        <a href="https://sipcity.com.au/" target="_blank">SIPcity ↗</a>
        <a href="https://abghomes.us/" target="_blank">ABG Homes ↗</a>
        <a href="https://supercleansv.com/" target="_blank">Super Clean SV ↗</a>
        <a href="https://pressreleasesalem.com/" target="_blank">Press Release Salem ↗</a>
      </div>
    </div>

    <div className="tip-box">
      <div className="tip-title" data-lang="es">Conoce más</div>
      <div className="tip-title" data-lang="en">Learn more</div>
      <p data-lang="es">Visita <a href="https://www.mino.solutions/projects" target="_blank"><strong>MINO Solutions</strong></a> para ver casos de estudio completos, proyectos finalizados y más sobre mi trabajo y experiencia.</p>
      <p data-lang="en">Visit <a href="https://www.mino.solutions/projects" target="_blank"><strong>MINO Solutions</strong></a> to explore complete case studies, finished projects, and more about my work and experience.</p>
    </div>

  </div>

</div>




    </div>
  );
}
