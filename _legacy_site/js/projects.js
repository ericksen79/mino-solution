/* ============================================================
   MINO Solutions — projects.js
   Contenido: Filtro de proyectos por categoría,
              Animaciones de scroll en projects.html
   ============================================================ */


/* ─────────────────────────────────────────────────────────────
   1. FILTRO DE PROYECTOS POR CATEGORÍA
   ───────────────────────────────────────────────────────────── */

const filterBtns      = document.querySelectorAll('.filter-btn');
const projectSections = document.querySelectorAll('.project-section');
const visibleCount    = document.getElementById('visibleCount');

/**
 * Filtra los proyectos visibles según la categoría seleccionada.
 * @param {string} filter - categoría ('all', 'web', 'ux', 'ecom', 'digital')
 */
function filterProjects(filter) {
  let count = 0;

  projectSections.forEach(section => {
    const categories = section.dataset.categories || '';
    const shouldShow = filter === 'all' || categories.includes(filter);

    if (shouldShow) {
      section.classList.remove('hidden');
      count++;
    } else {
      section.classList.add('hidden');
    }
  });

  // Actualiza el contador de proyectos visibles
  if (visibleCount) {
    visibleCount.textContent = count;
  }
}

// Eventos en los botones de filtro
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Actualiza estado activo
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.removeAttribute('aria-current');
    });

    btn.classList.add('active');
    btn.setAttribute('aria-current', 'true');

    filterProjects(btn.dataset.filter);
  });
});


/* ─────────────────────────────────────────────────────────────
   2. ANIMACIONES DE SCROLL EN PROJECTS.HTML
   (Reutiliza el mismo IntersectionObserver de main.js
    que ya observa .fade-up)
   ───────────────────────────────────────────────────────────── */

// No necesita código adicional aquí.
// El fadeObserver en main.js ya observa todos los .fade-up
// incluidos los de projects.html.


/* ─────────────────────────────────────────────────────────────
   3. TOGGLE DE IDIOMA EN PROJECTS.HTML
   (Reutiliza setLang() de main.js)
   ───────────────────────────────────────────────────────────── */

// No necesita código adicional aquí.
// setLang() está definido en main.js y funciona en ambas páginas.