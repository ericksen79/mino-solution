import './Portfolio.css';

export default function Portfolio() {
  return (
    <div className="portfolio-wrap">
      


      
      <article
        id="proj-cato"
        className="project-section fade-up"
        data-categories="web digital"
        aria-labelledby="cato-heading"
      >
        <div className="container">

          
          <header className="proj-header">
            <div className="proj-header-left">

              <div className="proj-meta">
                <span className="proj-num" aria-label="Proyecto número 1">01</span>
                <span className="proj-category cat-web" data-i18n="caso1.tag1">Desarrollo Web</span>
                <span className="proj-category cat-digital" data-i18n="caso1.tag2">Ecosistema Digital</span>
              </div>

              <h2 id="cato-heading" className="proj-title">CATO Media</h2>

              <p className="proj-subtitle" data-i18n="caso1.decr">
                Ecosistema de 4 plataformas de noticias interconectadas para Salem, Oregon
                y Clark County, Washington. Infraestructura escalable, automatizada y preparada
                para alto volumen de contenido multimedia.
              </p>

              <div className="proj-roles" aria-label="Rol y duración">
                <span className="proj-role">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  Lead Web Engineer
                </span>
                <span className="proj-role" data-i18n="caso1.time">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  7 meses
                </span>
              </div>

              
              <div className="proj-btn-row" aria-label="Ver sitios en vivo">
                <a href="https://salembusinessjournal.org/"  target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" aria-label="Ver Salem Business Journal (abre en nueva pestaña)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Salem Business Journal
                </a>
                <a href="https://clarkcountycatalyst.com/"   target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" aria-label="Ver Clark County Catalyst (abre en nueva pestaña)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Clark County Catalyst
                </a>
                <a href="https://pressreleasesalem.com/"     target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" aria-label="Ver Press Release Salem (abre en nueva pestaña)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Press Release Salem
                </a>
                <a href="https://catomediacompany.com/"      target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm" aria-label="Ver CATO Media Company (abre en nueva pestaña)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  CATO Media
                </a>
              </div>

            </div>

            
            <div className="proj-header-right">
              <div className="proj-metrics" aria-label="Métricas del proyecto CATO Media">
                <div className="metric-card">
                  <div className="metric-card-val green">+90%</div>
                  <div className="metric-card-lbl">Performance &amp; SEO</div>
                </div>
                <div className="metric-card">
                  <div className="metric-card-val blue">4</div>
                  <div className="metric-card-lbl" data-i18n="caso1.metrics.platforms">Plataformas desarrolladas</div>
                </div>
                <div className="metric-card">
                  <div className="metric-card-val purple">CRM</div>
                  <div className="metric-card-lbl" data-i18n="caso1.metrics.crm">GoHighLevel integrado</div>
                </div>
                <div className="metric-card">
                  <div className="metric-card-val" style={{ 'fontSize': '1rem' }}>Oregon<br />+ Washington</div>
                  <div className="metric-card-lbl" data-i18n="caso1.metrics.geography">Cobertura geográfica</div>
                </div>
              </div>
            </div>

          </header>


          
          <div className="figma-embed-wrap" aria-label="Prototipo interactivo de CATO Media en Figma">
            
            <iframe
              src="https://embed.figma.com/proto/woSlJyfGPjmKtHjdFJrzm6/CATO-Media-Company?node-id=224-583&viewport=71%2C654%2C0.19&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=224%3A583&page-id=0%3A1&embed-host=share"
              title="Prototipo interactivo del proyecto CATO Media Company"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>


          
          <div className="cato-img-grid" aria-label="Capturas de pantalla de las plataformas CATO Media" role="list">
              

            <a href="https://salembusinessjournal.org/" target="_blank" rel="noopener noreferrer" className="img-secondary-link" aria-label="Visitar Salem Business Journal (abre en nueva pestaña)">
            <div className="img-secondary" role="listitem" style={{ 'background': 'linear-gradient(135deg,#0f2035,#1e3a5a)', 'aspectRatio': '16/9' }}>
              
                <img
                  src="/assets/projects/cato-media/salem-bj.webp"
                  alt="Vista del Salem Business Journal, medio digital sobre negocios en Salem, Oregon"
                  width="1200" height="675"
                  loading="lazy"
                  className="project-img"
                />
            </div>
            </a>

            <a href="https://clarkcountycatalyst.com/" target="_blank" rel="noopener noreferrer" className="img-secondary-link" aria-label="Visitar Clark County Catalyst (abre en nueva pestaña)">
            <div className="img-secondary" role="listitem" style={{ 'background': 'linear-gradient(135deg,#0f2035,#243a5a)', 'aspectRatio': '16/9' }}>
              

                              <img
                  src="/assets/projects/cato-media/clark-county.webp"
                  alt="Vista del Clark County Catalyst, medio digital sobre negocios en Clark, Oregon"
                  width="1200" height="675"
                  loading="lazy"
                  className="project-img"
                />
            </div>
            </a>

            <a href="https://pressreleasesalem.com/" target="_blank" rel="noopener noreferrer" className="img-secondary-link" aria-label="Visitar Press Release Salem (abre en nueva pestaña)">
            <div className="img-secondary" role="listitem" style={{ 'background': 'linear-gradient(135deg,#0f2035,#1a2e50)', 'aspectRatio': '16/9' }}>
              
              <img
                  src="/assets/projects/cato-media/press-release.webp"
                  alt="Vista del portal Press Release Salem, integrado al flujo editorial de CATO Media"
                  width="1200" height="675"
                  loading="lazy"
                  className="project-img"
                />
            </div>
            </a>

            <a href="https://media.salembusinessjournal.org/" target="_blank" rel="noopener noreferrer" className="img-secondary-link" aria-label="Visitar Salem Business Journal Shop (abre en nueva pestaña)">
            <div className="img-secondary" role="listitem" style={{ 'background': 'linear-gradient(135deg,#0B2540,#1a3a5c)', 'aspectRatio': '16/9' }}>
              
              <img
                  src="/assets/projects/cato-media/cato-main.webp"
                  alt="Vista de CATO Media Company, plataforma principal de ads y marketplace"
                  width="1200" height="675"
                  loading="lazy"
                  className="project-img"
                />
            </div>
            </a>

          </div>


          
          <div className="proj-content">

            <div className="content-block">
              <h4 data-i18n="caso1.problem">El Problema</h4>
              <h3 data-i18n="caso1.problem-title">Plataformas aisladas sin infraestructura compartida</h3>
              <p data-i18n="caso1.problem-desc">CATO Media necesitaba escalar su modelo de periodismo digital a múltiples ciudades, pero cada sitio operaba de forma independiente. No había automatización, los flujos editoriales eran manuales y la integración con anunciantes era limitada.</p>
            </div>

            <div className="content-block">
              <h4 data-i18n="caso1.solution">La Solución</h4>
              <h3 data-i18n="caso1.solution-title">Ecosistema interconectado y automatizado</h3>
              <p data-i18n="caso1.solution-desc">Diseñé y desarrollé la arquitectura técnica de cuatro plataformas interconectadas con módulos reutilizables, automatización de contenido multimedia e integración de CRM para gestión de leads y anunciantes.</p>
            </div>

            <div className="content-block dark">
              <h4 data-i18n="caso1.responsibilities">Responsabilidades Clave</h4>
              <ul className="feat-list" aria-label="Responsabilidades en el proyecto CATO Media">
                <li data-i18n="caso1.responsibilities.f1">Arquitectura técnica de los cuatro sitios con WordPress + PHP</li>
                <li data-i18n="caso1.responsibilities.f2">Integración y creación de Marketplace con GoHighLevel CRM</li>
                <li data-i18n="caso1.responsibilities.f3">Automatización del flujo de contenido multimedia</li>
                <li data-i18n="caso1.responsibilities.f4">Diseño UX/UI funcional con Elementor</li>
                <li data-i18n="caso1.responsibilities.f5">Optimización de rendimiento, responsive y SEO técnico</li>
                <li data-i18n="caso1.responsibilities.f6">Creación de módulos reutilizables entre sitios</li>
                <li data-i18n="caso1.responsibilities.f7">Implementación de sistemas de registro de suscriptores</li>
              </ul>
            </div>

            <div className="content-block">
              <h4 data-i18n="caso1.platforms">Plataformas del Ecosistema</h4>
              <div className="platforms-grid" aria-label="Las cuatro plataformas del ecosistema CATO Media">
                <div className="platform-item">
                  <span className="platform-num">01</span>
                  <strong data-i18n="caso1.platforms.f1">Salem Business Journal</strong>
                  <p data-i18n="caso1.platforms.f1-desc">Medio digital · Negocios &amp; política · Salem, Oregon</p>
                </div>
                <div className="platform-item">
                  <span className="platform-num">02</span>
                  <strong data-i18n="caso1.platforms.f2">Clark County Catalyst</strong>
                  <p data-i18n="caso1.platforms.f2-desc">Expansión del modelo SBJ · Clark County, Washington</p>
                </div>
                <div className="platform-item">
                  <span className="platform-num">03</span>
                  <strong data-i18n="caso1.platforms.f3">Press Release Salem</strong>
                  <p data-i18n="caso1.platforms.f3-desc">Portal de comunicados · Integrado al flujo editorial</p>
                </div>
                <div className="platform-item">
                  <span className="platform-num">04</span>
                  <strong data-i18n="caso1.platforms.f4">CATO Media</strong>
                  <p data-i18n="caso1.platforms.f4-desc">Plataforma principal · Ads &amp; marketplace para empresas</p>
                </div>
              </div>
            </div>

            <div className="content-block full">
              <h4 data-i18n="caso1.tech-stack">Tech Stack</h4>
              <ul className="stack-pills" aria-label="Tecnologías utilizadas en CATO Media">
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>WordPress</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>PHP</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>Figma</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/></svg>GoHighLevel CRM</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>Google Analytics</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="8"/></svg>Search Console</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>Slack</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7z"/></svg>SiteGround</li>
              </ul>
            </div>

          </div>


          
          <footer className="proj-footer">
            <div className="proj-footer-left">
              <span className="tag" data-i18n="caso1.platforms.goal">Ecosistema Digital</span>
              <span className="tag" style={{ 'background': 'rgba(39,174,96,0.1)', 'color': '#27AE60' }} data-i18n="caso1.metrics.performance">+90% Performance</span>
              <span className="tag" style={{ 'background': 'rgba(48,138,205,0.1)', 'color': 'var(--color-primary)' }} data-i18n="caso1.metrics.platforms">4 Plataformas desarrolladas</span>
            </div>
            <div className="proj-footer-right">
              <a
                href="https://wa.me/message/J3MYMT4QSDQDL1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                aria-label="Solicitar un proyecto similar por WhatsApp"
                data-i18n="caso1.cta"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Tengo un proyecto similar
              </a>
            </div>
          </footer>

        </div>
      </article>
      


      
      <article
        id="proj-linework"
        className="project-section fade-up bg-light"
        data-categories="ux"
        aria-labelledby="linework-heading"
      >
        <div className="container">

          <header className="proj-header">
            <div className="proj-header-left">

              <div className="proj-meta">
                <span className="proj-num" aria-label="Proyecto número 2">02</span>
                <span className="proj-category cat-ux" data-i18n="caso2.tag1">UX / UI Design</span>
                <span className="proj-category cat-web" data-i18n="caso2.tag2">Product Design</span>
              </div>

              <h2 id="linework-heading" className="proj-title">Linework</h2>

              <p className="proj-subtitle" data-i18n="caso2.decr">
                Plataforma todo-en-uno que integra Marketplace, Wallet cripto,
                Red social descentralizada y Chat. Un ecosistema financiero global
                diseñado para llevar las criptomonedas a la vida cotidiana.
              </p>

              <div className="proj-roles" aria-label="Rol y duración">
                <span className="proj-role">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                  UX Lead
                </span>
                <span className="proj-role" data-i18n="caso2.time">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Dic 2024 — Jun 2025
                </span>
              </div>

              <div className="proj-btn-row" aria-label="Ver sitio en vivo">
                <a
                  href="https://linework.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  aria-label="Ver sitio de Linework (abre en nueva pestaña)"
                  data-i18n="caso2.cta"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Ver sitio en vivo
                </a>
              </div>

            </div>

            <div className="proj-header-right">
              <div className="proj-metrics" aria-label="Métricas del proyecto Linework">
                <div className="metric-card">
                  <div className="metric-card-val blue">4</div>
                  <div className="metric-card-lbl" data-i18n="caso2.metrics.modules">Módulos diseñados</div>
                </div>
                <div className="metric-card">
                  <div className="metric-card-val purple">2</div>
                  <div className="metric-card-lbl" data-i18n="caso2.metrics.user-roles">Roles de usuario (buyer/seller)</div>
                </div>
                <div className="metric-card">
                  <div className="metric-card-val green" style={{ 'fontSize': '1rem' }} data-i18n="caso2.metrics.interface-modes-type">Dark + Light</div>
                  <div className="metric-card-lbl" data-i18n="caso2.metrics.interface-modes">Modos de interfaz</div>
                </div>
                <div className="metric-card">
                  <div className="metric-card-val" style={{ 'fontSize': '1rem' }} data-i18n="caso2.metrics.design-system">Sistema de diseño</div>
                  <div className="metric-card-lbl" data-i18n="caso2.metrics.design-system-desc">Completo e integral</div>
                </div>
              </div>
            </div>

          </header>


          
          <div className="figma-section-label" aria-hidden="true" >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/></svg>
            <p data-i18n="caso2.description-title">Descripción del Proyecto</p>
          </div>

          <div className="figma-embed-wrap" aria-label="Descripción del proyecto Linework en Figma" style={{ 'aspectRatio': '16/9' }}>
            
            <iframe
              src="https://embed.figma.com/proto/ScOof8jhhBkKQfDnXyjotx/BLOOP---LINEWORK-APP-MOBILE?node-id=40000161-399311&viewport=425%2C-75%2C0.15&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=40000161%3A399311&page-id=40000161%3A398777&embed-host=share"
              title="Descripción del proyecto Linework — BLOOP App Mobile"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>


          
          <div className="linework-proto-grid" aria-label="Prototipo de alta fidelidad e imágenes de Linework">

            
            <div className="linework-proto-left">
              <div className="figma-section-label" aria-hidden="true" >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                <p data-i18n="caso2.high-fidelity-prototype">Prototipo de Alta Fidelidad</p>
              </div>
              <div className="figma-embed-wrap" aria-label="Prototipo interactivo de alta fidelidad de Linework" style={{ 'minHeight': '480px', 'aspectRatio': '9/16' }}>
                
                <iframe
                  src="https://embed.figma.com/proto/ScOof8jhhBkKQfDnXyjotx/BLOOP---LINEWORK-APP-MOBILE?node-id=14192-34752&viewport=633%2C1371%2C0.06&scaling=scale-down&content-scaling=fixed&starting-point-node-id=14192%3A34752&page-id=13886%3A11246&embed-host=share"
                  title="Prototipo de alta fidelidad de la app Linework — BLOOP Mobile"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            
            <div className="linework-screens-right" aria-label="Pantallas del proyecto Linework" role="list">

              <div className="figma-section-label" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <p data-i18n="caso2.referencias">Referencias</p>
              </div>

              <div className="img-secondary" role="listitem" style={{ 'background': 'linear-gradient(135deg,#0f1a2e,#1e2a40)', 'flex': '1', 'minHeight': '140px', 'aspectRatio': 'unset' }}>
                
                  <img
                  src="/assets/projects/linework/marketplace.webp"
                  alt="Interfaz del módulo Marketplace de Linework con roles de comprador y vendedor"
                  width="800" height="600"
                  loading="lazy"
                  className="project-img"
                />

              </div>

              <div className="img-secondary" role="listitem" style={{ 'background': 'linear-gradient(135deg,#0f1a2e,#1a2540)', 'flex': '1', 'minHeight': '140px', 'aspectRatio': 'unset' }}>
                
                  <img
                  src="/assets/projects/linework/spiral.webp"
                  alt="Interfaz del módulo Spiral, red social descentralizada de Linework"
                  width="800" height="600"
                  loading="lazy"
                  className="project-img"
                />
              </div>

              <div className="img-secondary" role="listitem" style={{ 'background': 'linear-gradient(135deg,#0f1a2e,#162040)', 'flex': '1', 'minHeight': '140px', 'aspectRatio': 'unset' }}>
                
                  <img
                  src="/assets/projects/linework/wallet.webp"
                  alt="Interfaz del módulo Wallet de Linework con soporte cripto y fiat"
                  width="800" height="600"
                  loading="lazy"
                  className="project-img"
                />
              </div>

            </div>

          </div>


          
          <div className="proj-content" style={{ 'marginTop': '40px' }}>

            <div className="content-block">
              <h4 data-i18n="caso2.problem">El Problema</h4>
              <h3 data-i18n="caso2.problem-title">Apps fragmentadas: wallets sin marketplace</h3>
              <p data-i18n="caso2.problem-desc">Los usuarios enfrentan aplicaciones dispersas: wallets sin marketplace, marketplaces sin soporte cripto. Linework debía unificar ambos mundos en una sola solución fluida con cuatro módulos interconectados.</p>
            </div>

            <div className="content-block">
              <h4 data-i18n="caso2.hypothesis">Hipótesis & Enfoque</h4>
              <h3 data-i18n="caso2.hypothesis-title">Un ecosistema financiero cotidiano</h3>
              <p data-i18n="caso2.hypothesis-desc">Benchmarking contra Facebook Marketplace, OpenSea, Trust Wallet y MetaMask. La solución: flujos separados para comprador y vendedor, sistema de diseño integral con modo oscuro/claro, e integración de aprendizaje contextual para reducir barreras de adopción.</p>
            </div>

            <div className="content-block">
              <h4 data-i18n="caso2.modules">Los 4 Módulos</h4>
              <ul className="feat-list" aria-label="Los cuatro módulos de Linework">
                <li data-i18n="caso2.modules-Marketplace"><strong>Marketplace</strong> — Compra/venta con roles duales, filtros por región y categorización por tipo de envío.</li>
                <li data-i18n="caso2.modules-Spiral"><strong>Spiral</strong> — Red social descentralizada con chat, reels y soporte de vendedores.</li>
                <li data-i18n="caso2.modules-Wallet"><strong>Wallet</strong> — Cripto + fiat, transferencias instantáneas y doble validación de seguridad.</li>
                <li data-i18n="caso2.modules-Finanzas"><strong>Finanzas</strong> — Educación financiera sobre criptomonedas en tiempo real.</li>
              </ul>
            </div>

            <div className="content-block">
              <h4 data-i18n="caso2.process">Proceso UX</h4>
              <ul className="feat-list" aria-label="Métodos de proceso UX aplicados">
                <li data-i18n="caso2.process.f1">User Journey, Proto-usuario y Mapeo de flujos</li>
                <li data-i18n="caso2.process.f2">Co-creación en Figma con equipo de desarrollo</li>
                <li data-i18n="caso2.process.f3">Prototipos interactivos validados con stakeholders</li>
                <li data-i18n="caso2.process.f4">A/B Testing, Card Sorting, Evaluación heurística</li>
                <li data-i18n="caso2.process.f5">Integración de Amplitude para monitoreo</li>
              </ul>
            </div>

            <div className="content-block dark full">
              <h4 data-i18n="caso2.tech-stack">Tech Stack</h4>
              <ul className="stack-pills" aria-label="Tecnologías utilizadas en Linework">
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>Figma</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>WordPress</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>Amplitude</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>Slack</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>UX Research</li>
              </ul>
            </div>

          </div>


          <footer className="proj-footer">
            <div className="proj-footer-left">
              <span className="tag" style={{ 'background': 'rgba(77,69,170,0.1)', 'color': 'var(--color-secondary)' }}>UX Lead</span>
              <span className="tag" data-i18n="caso2.tag">Sistema de Diseño</span>
              <span className="tag">Marketplace</span>
            </div>
            <div className="proj-footer-right">
              <a
                href="https://www.figma.com/proto/ScOof8jhhBkKQfDnXyjotx/BLOOP---LINEWORK-APP-MOBILE?node-id=14192-34752&viewport=1054%2C743%2C0.13&t=dalBPoHrV1QWl1mx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=14192%3A34752&page-id=13886%3A11246"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Ver Linework en vivo (abre en nueva pestaña)"
                data-i18n="caso2.cta2"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Ver prototipo en vivo
              </a>
            </div>
          </footer>

        </div>
      </article>
      


      
      <article
        id="proj-casa"
        className="project-section fade-up"
        data-categories="ecom ux web"
        aria-labelledby="casa-heading"
      >
        <div className="container">

          <header className="proj-header">
            <div className="proj-header-left">

              <div className="proj-meta">
                <span className="proj-num" aria-label="Proyecto número 3">03</span>
                <span className="proj-category cat-ecom">E-Commerce</span>
                <span className="proj-category cat-ux" data-i18n="caso3.tab">UI/UX Design</span>
              </div>

              <h2 id="casa-heading" className="proj-title">Casa Escencia</h2>

              <p className="proj-subtitle" data-i18n="caso3.desc">
                Marca de cuidado capilar premium con identidad visual, estrategia de contenido
                y e-commerce completo. Del branding conceptual a la tienda online con integración
                de pagos y facturación electrónica en El Salvador.
              </p>

              <div className="proj-roles" aria-label="Rol en el proyecto">
                <span className="proj-role">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                  UI/UX &amp; Web Designer
                </span>
              </div>

              <div className="proj-btn-row" aria-label="Ver tienda en vivo">
                <a
                  href="https://casaescencia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  aria-label="Ver tienda online de Casa Escencia (abre en nueva pestaña)"
                  data-i18n="caso3.cta1"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Ver tienda en vivo
                </a>
              </div>

            </div>

            <div className="proj-header-right">
              <div className="proj-metrics" aria-label="Métricas del proyecto Casa Escencia">
                <div className="metric-card">
                  <div className="metric-card-val green">+90%</div>
                  <div className="metric-card-lbl" data-i18n="caso3.metrics1">Performance & Accesibilidad</div>
                </div>
                <div className="metric-card">
                  <div className="metric-card-val blue" data-i18n="caso3.metrics2">End-to-end</div>
                  <div className="metric-card-lbl" data-i18n="caso3.metrics2.1">Branding & e-commerce</div>
                </div>
                <div className="metric-card">
                  <div className="metric-card-val purple" style={{ 'fontSize': '1rem' }}>WooCommerce</div>
                  <div className="metric-card-lbl" data-i18n="caso3.metrics3">Arquitectura e-commerce</div>
                </div>
                <div className="metric-card">
                  <div className="metric-card-val" style={{ 'fontSize': '1rem' }}>Wompi Payments</div>
                  <div className="metric-card-lbl" data-i18n="caso3.metrics4">Pasarela integrada</div>
                </div>
              </div>
            </div>

          </header>


          
          <div className="proj-images" aria-label="Capturas del proyecto Casa Escencia">

            <a href="https://casaescencia.com/" target="_blank" rel="noopener noreferrer" aria-label="Ver tienda online de Casa Escencia (abre en nueva pestaña)">
            <div className="img-main" style={{ 'background': 'linear-gradient(135deg,#f5f0eb,#e8ddd4)' }}>
              
                  <img
                  src="/assets/projects/casa-escencia/hero.webp"
                  alt="Homepage de la tienda Casa Escencia con diseño minimalista y elegante"
                  width="1440" height="810"
                  loading="lazy"
                  className="project-img"
                />
            </div>
            </a>

            <div className="img-grid" role="list" aria-label="Pantallas adicionales de Casa Escencia">

              <a href="https://casaescencia.com/about/" target="_blank" rel="noopener noreferrer" aria-label="Ver sección 'Sobre Nosotros' de Casa Escencia (abre en nueva pestaña)">
              <div className="img-secondary" role="listitem" style={{ 'background': 'linear-gradient(135deg,#f0ebe6,#e5ddd6)' }}>
                
                  <img
                  src="/assets/projects/casa-escencia/product.webp"
                  alt="Página de producto del Aura Hair Brush en Casa Escencia"
                  width="800" height="600"
                  loading="lazy"
                  className="project-img"
                />
              </div>
              </a>

              <a href="https://casaescencia.com/professional-line/" target="_blank" rel="noopener noreferrer" aria-label="Ver sección 'Professional Line' de Casa Escencia (abre en nueva pestaña)">
              <div className="img-secondary" role="listitem" style={{ 'background': 'linear-gradient(135deg,#eee9e4,#e0d8d0)' }}>
                
                  <img
                  src="/assets/projects/casa-escencia/checkout.webp"
                  alt="Proceso de checkout optimizado de la tienda Casa Escencia"
                  width="800" height="600"
                  loading="lazy"
                  className="project-img"
                />
              </div>
              </a>

              <a href="https://casaescencia.com/store/" target="_blank" rel="noopener noreferrer" aria-label="Ver sección 'Tienda' de Casa Escencia (abre en nueva pestaña)">
              <div className="img-secondary" role="listitem" style={{ 'background': 'linear-gradient(135deg,#ede8e3,#ddd5cc)' }}>
                
                  <img
                  src="/assets/projects/casa-escencia/branding.webp"
                  alt="Sección de blog y branding de Casa Escencia con enfoque en rituales de bienestar"
                  width="800" height="600"
                  loading="lazy"
                  className="project-img"
                />
              </div>
              </a>

            </div>
          </div>


          
          <div className="proj-content">

            <div className="content-block">
              <h4 data-i18n="caso3.problem-title">El Problema</h4>
              <h3 data-i18n="caso3.problem-subtitle">Mercado local sin identidad ni experiencia emocional</h3>
              <p data-i18n="caso3.problem-desc">El mercado de cuidado capilar en El Salvador presentaba productos genéricos sin identidad, experiencias de compra poco cuidadas y falta de conexión emocional. El e-commerce existente no tenía enfoque UX, generando compras impulsivas, no experienciales.</p>
            </div>

            <div className="content-block">
              <h4 data-i18n="caso3.filosofia-title">La Filosofía</h4>
              <h3 data-i18n="caso3.filosofia-subtitle">"El cuidado personal no es una tarea — es un ritual"</h3>
              <p data-i18n="caso3.filosofia-desc">Desarrollé una propuesta basada en minimalismo funcional, navegación clara, jerarquía visual limpia y enfoque en sensaciones. El lujo moderno no siempre es tiempo extra a veces es atención plena.</p>
            </div>

            <div className="content-block">
              <h4 data-i18n="caso3.servicios-title">Servicios Realizados</h4>
              <ul className="feat-list" aria-label="Servicios realizados en Casa Escencia">
                <li data-i18n="caso3.servicios-f1">Branding conceptual e identidad visual</li>
                <li data-i18n="caso3.servicios-f2">UX/UI design con enfoque en conversión</li>
                <li data-i18n="caso3.servicios-f3">Desarrollo WordPress + Elementor Pro</li>
                <li data-i18n="caso3.servicios-f4">Arquitectura e-commerce con WooCommerce</li>
                <li data-i18n="caso3.servicios-f5">Integración Wompi (pagos) + EasyFact (DTE)</li>
                <li data-i18n="caso3.servicios-f6">Estrategia de contenido y copywriting emocional</li>
                <li data-i18n="caso3.servicios-f7">Automatización de email marketing</li>
              </ul>
            </div>

            <div className="content-block">
              <h4 data-i18n="caso3.flujo-title">Flujo de Compra</h4>
              <ul className="feat-list" aria-label="Flujo de compra implementado">
                <li data-i18n="caso3.flujo-f1">Usuario navega productos con una galería optimizada</li>
                <li data-i18n="caso3.flujo-f2">Agrega al carrito con CTAs estratégicos</li>
                <li data-i18n="caso3.flujo-f3">Checkout simplificado con mínima fricción</li>
                <li data-i18n="caso3.flujo-f4">Pago con Wompi (pasarela local de El Salvador)</li>
                <li data-i18n="caso3.flujo-f5">Confirmación + generación de factura electrónica DTE</li>
              </ul>
            </div>

            <div className="content-block full">
              <h4>Tech Stack</h4>
              <ul className="stack-pills" aria-label="Tecnologías utilizadas en Casa Escencia">
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>WordPress</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8z"/></svg>Elementor Pro</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/></svg>WooCommerce</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7z"/></svg>Wompi</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/></svg>EasyFact / DTE</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>Figma</li>
              </ul>
            </div>

          </div>


          <footer className="proj-footer">
            <div className="proj-footer-left">
              <span className="tag" style={{ 'background': 'rgba(39,174,96,0.1)', 'color': '#27AE60' }}>E-Commerce</span>
              <span className="tag" data-i18n="caso3.tag">Branding Completo</span>
            </div>
            <div className="proj-footer-right">
              <a
                href="https://casaescencia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Ver tienda Casa Escencia en vivo (abre en nueva pestaña)"
                data-i18n="caso3.cta2"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Ver tienda en vivo
              </a>
            </div>
          </footer>

        </div>
      </article>
      


      
      <article
        id="proj-lienzos"
        className="project-section fade-up bg-light"
        data-categories="web digital ux"
        aria-labelledby="lienzos-heading"
      >
        <div className="container">

          <header className="proj-header">
            <div className="proj-header-left">

              <div className="proj-meta">
                <span className="proj-num" aria-label="Proyecto número 4">04</span>
                <span className="proj-category cat-digital" data-i18n="caso4.tab1">Transformación Digital</span>
                <span className="proj-category cat-web" data-i18n="caso4.tab2">Gestión Cultural</span>
              </div>

              <h2 id="lienzos-heading" className="proj-title">Lienzos &amp; Trazos</h2>

              <p className="proj-subtitle" data-i18n="caso4.desc">
                Plataforma digital institucional para el Centro Nacional de Artes (CENAR)
                de El Salvador. Galería interactiva de obras estudiantiles, biblioteca
                de recursos educativos y sistema de gestión de inscripciones.
              </p>

              <div className="proj-roles" aria-label="Rol en el proyecto">
                <span className="proj-role">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                  UX Designer &amp; Web
                </span>
              </div>

              <div className="proj-btn-row" aria-label="Ver sitio en vivo">
                <a
                  href="https://www.lienzosytrazos.art/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  aria-label="Ver sitio Lienzos y Trazos en vivo (abre en nueva pestaña)"
                  data-i18n="caso4.cta1"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Ver sitio en vivo
                </a>
              </div>

            </div>

            <div className="proj-header-right">
              <div className="proj-metrics" aria-label="Métricas del proyecto Lienzos y Trazos">
                <div className="metric-card">
                  <div className="metric-card-val green">+90%</div>
                  <div className="metric-card-lbl" data-i18n="caso4.metric1">Mejora accesibilidad digital</div>
                </div>
                <div className="metric-card">
                  <div className="metric-card-val blue">CENAR</div>
                  <div className="metric-card-lbl">Centro Nacional de Artes</div>
                </div>
                <div className="metric-card">
                  <div className="metric-card-val purple" style={{ 'fontSize': '1rem' }}>User Research</div>
                  <div className="metric-card-lbl" data-i18n="caso4.metric2">Encuestas + entrevistas</div>
                </div>
                <div className="metric-card">
                  <div className="metric-card-val" style={{ 'fontSize': '1rem' }} data-i18n="caso4.metric3.1">Galería + Biblioteca</div>
                  <div className="metric-card-lbl" data-i18n="caso4.metric3.2">Módulos principales</div>
                </div>
              </div>
            </div>

          </header>


          
          <div className="proj-images" aria-label="Capturas del proyecto Lienzos y Trazos">

            <div className="img-main" style={{ 'background': 'linear-gradient(135deg,#1a1a2e,#2d1b4e)' }}>
              
                  <img
                  src="/assets/projects/lienzos-trazos/hero.webp"
                  alt="Homepage de la plataforma Lienzos y Trazos del CENAR con galería de obras estudiantiles"
                  width="1440" height="810"
                  loading="lazy"
                  className="project-img"
                />
            </div>

            <div className="img-grid" role="list" aria-label="Pantallas adicionales de Lienzos y Trazos">

              <a href="https://www.lienzosytrazos.art/home" target="_blank" rel="noopener noreferrer" aria-label="Ver galería de obras estudiantiles en Lienzos y Trazos (abre en nueva pestaña)">
              <div className="img-secondary" role="listitem" style={{ 'background': 'linear-gradient(135deg,#1a1a2e,#251a40)' }}>
                
                  <img
                  src="/assets/projects/lienzos-trazos/gallery.webp"
                  alt="Galería interactiva y categorizada de obras de estudiantes del CENAR"
                  width="800" height="600"
                  loading="lazy"
                  className="project-img"
                />
              </div>
              </a>

              <a href="https://www.lienzosytrazos.art/home" target="_blank" rel="noopener noreferrer" aria-label="Ver biblioteca de recursos educativos en Lienzos y Trazos (abre en nueva pestaña)">
              <div className="img-secondary" role="listitem" style={{ 'background': 'linear-gradient(135deg,#1a1a2e,#1e1835)' }}>
                
                  <img
                  src="/assets/projects/lienzos-trazos/library.webp"
                  alt="Biblioteca digital de recursos educativos del CENAR con búsqueda avanzada"
                  width="800" height="600"
                  loading="lazy"
                  className="project-img"
                />
              </div>
              </a>

              <a href="https://www.lienzosytrazos.art/home" target="_blank" rel="noopener noreferrer" aria-label="Ver formulario de inscripción en Lienzos y Trazos (abre en nueva pestaña)">
              <div className="img-secondary" role="listitem" style={{ 'background': 'linear-gradient(135deg,#1a1a2e,#1f1a38)' }}>
                
                  <img
                  src="/assets/projects/lienzos-trazos/form.webp"
                  alt="Formulario de inscripción y registro de obras para estudiantes del CENAR"
                  width="800" height="600"
                  loading="lazy"
                  className="project-img"
                />
              </div>
              </a>

            </div>
          </div>


          
          <div className="figma-embed-wrap" aria-label="Prototipo interactivo del proyecto Lienzos y Trazos en Figma" style={{ 'marginBottom': '32px' }}>
            
            <iframe
              src="https://embed.figma.com/proto/YUteHkbe7WUFEB0yarRISi/Proyecto---Lienzos---Trazos?node-id=7421-35684&viewport=2532%2C3055%2C0.26&scaling=min-zoom&content-scaling=fixed&page-id=4001%3A28909&embed-host=share"
              title="Prototipo interactivo del proyecto Lienzos y Trazos para el CENAR"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>


          
          <div className="proj-content">

            <div className="content-block">
              <h4 data-i18n="caso4.problem-title">El Problema</h4>
              <h3 data-i18n="caso4.problem-subtitle">Sin espacio digital para el arte estudiantil</h3>
              <p data-i18n="caso4.problem-desc">No existía un espacio digital único para acceder a las obras y recursos del CENAR. Los materiales estaban dispersos o no disponibles en línea, limitando la visibilidad del trabajo estudiantil y el acceso a recursos educativos tanto local como internacionalmente.</p>
            </div>

            <div className="content-block">
              <h4>Insights</h4>
              <ul className="feat-list" aria-label="Insights del proyecto Lienzos y Trazos">
                <li data-i18n="caso4.Insights-f1"><strong>Galería interactiva</strong> — Visualización de obras de estudiantes</li>
                <li data-i18n="caso4.Insights-f2"><strong>Biblioteca integrada</strong> — Acceso a recursos educativos</li>
                <li data-i18n="caso4.Insights-f3"><strong>Categorización &amp; búsqueda avanzada</strong> — Facilita encontrar obras y recursos específicos</li>
                <li data-i18n="caso4.Insights-f4"><strong>Formularios de inscripción</strong> — Permite a los usuarios inscribirse y registrar obras</li>
              </ul>
            </div>

            
            <div className="content-block full">
              <h4>User Research</h4>
              <h3 style={{ 'marginBottom': '20px' }} data-i18n="caso4.research-title">Métodos de investigación de usuarios</h3>

              <div className="user-research-grid">

                
                <div className="research-col">
                  <div className="research-col-header" aria-hidden="true" data-i18n="caso4.research-subtitle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ 'width': '14px', 'height': '14px' }}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>
                    <p data-i18n="caso4.form-title">Formulario de Sondeo</p>
                  </div>
                  <div className="survey-stats" aria-label="Resultados de encuestas">
                    <div className="survey-stat">
                      <div className="survey-stat-num">25</div>
                      <div className="survey-stat-lbl" data-i18n="caso4.research-data1">Primera encuesta</div>
                    </div>
                    <div className="survey-stat">
                      <div className="survey-stat-num">16</div>
                      <div className="survey-stat-lbl" data-i18n="caso4.research-data2">Segunda encuesta</div>
                    </div>
                  </div>
                </div>

                
                <div className="research-col">
                  <div className="research-col-header" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ 'width': '14px', 'height': '14px' }}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                    <p data-i18n="caso4.research-interviews">Entrevistas</p>
                  </div>
                  <ul className="feat-list" aria-label="Personas entrevistadas">
                    <li><strong>Lic. Rolando Chicas</strong> — Director del CENAR</li>
                    <li><strong>Lcda. Andrea Esmeralda</strong> — Coordinadora del CENAR</li>
                    <li><strong>Lic. Carlos Girón</strong> — Maestro responsable del CENAR</li>
                    <li>
                      <a href="https://www.instagram.com/rodrigo_lopez_arguello/" target="_blank" rel="noopener noreferrer" style={{ 'color': 'var(--color-primary)', 'fontWeight': '700' }} aria-label="Ver perfil de Rodrigo López Argüello en Instagram">Lic. Rodrigo López Argüello</a>
                      — Artista Salvadoreño
                    </li>
                    <li>
                      <a href="https://www.instagram.com/alexcuchilla/" target="_blank" rel="noopener noreferrer" style={{ 'color': 'var(--color-primary)', 'fontWeight': '700' }} aria-label="Ver perfil de Alex Cuchilla en Instagram">Lic. Alex Cuchilla</a>
                      — Artista Salvadoreño
                    </li>
                    <li><strong>Lcda. Rocío Hernández</strong> — Universidad de El Salvador</li>
                    <li><strong>Lic. Diego Cubias</strong> — Universidad de El Salvador</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="content-block">
              <h4 data-i18n="caso4.result-title">Hipótesis &amp; Resultados</h4>
              <h3 data-i18n="caso4.result-subtitle">Mayor visibilidad, alcance global</h3>
              <p data-i18n="caso4.result-desc">La plataforma digital, junto con capacitación en portafolios y difusión moderna, aumenta la visibilidad del trabajo estudiantil tanto local como internacionalmente. La investigación inicial mediante encuestas y entrevistas fue clave para definir las necesidades reales de cada perfil.</p>
            </div>

            <div className="content-block full">
              <h4>Tech Stack</h4>
              <ul className="stack-pills" aria-label="Tecnologías utilizadas en Lienzos y Trazos">
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>Figma</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/></svg>Google Sites</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/></svg>Google Forms</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>Google Sheets</li>
                <li className="stack-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>UX Research</li>
              </ul>
            </div>

          </div>


          <footer className="proj-footer">
            <div className="proj-footer-left">
              <span className="tag" style={{ 'background': 'rgba(230,126,34,0.1)', 'color': '#E67E22' }}>Transformación Digital</span>
              <span className="tag" data-i18n="caso4.tab1">Gestión Cultural</span>
            </div>
            <div className="proj-footer-right">
              <a
                href="https://www.lienzosytrazos.art/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Ver sitio Lienzos y Trazos en vivo (abre en nueva pestaña)"
                data-i18n="caso4.cta2"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Ver sitio en vivo
              </a>
            </div>
          </footer>

        </div>
      </article>
      


    </div>
  );
}
