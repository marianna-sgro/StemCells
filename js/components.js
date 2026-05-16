(function () {
  'use strict';

  var PRODUCTS = [
    { name: 'Ampollas Nutri + Cell', meta: 'Tratamiento intensivo', keywords: 'ampolla nutri cell argan pantenol vitamina seda termoactivo restaurar fibra', slug: 'ampollas-nutri-cell' },
    { name: 'Shampoo Pre Tratamiento Nutrientes', meta: '475 ml', keywords: 'shampoo champu limpieza ph sodio tenido alisado pretatamiento nutrientes', slug: 'shampoo' },
    { name: 'Protector Térmico Nutricell', meta: '170 ml', keywords: 'protector termico calor secado sol clima contaminacion fibra capilar', slug: 'protector-termico' },
    { name: 'Crema de Peinar Nutricell', meta: '170 ml', keywords: 'crema peinar rizos frizz hidratacion brillo nutricell', slug: 'crema-de-peinar' },
    { name: 'Ampolla Alpin Rose', meta: 'Regeneración profunda', keywords: 'ampolla alpin rose rosa alpina hialuronico ciruela regenerar hidratar', slug: 'alpin-rose' },
    { name: 'Ampolla BTX Express', meta: 'Alisado y nutrición', keywords: 'ampolla btx express alisado keratina vegetal soya manzana verde', slug: 'btx-express' },
    { name: 'Cocktail EXPRESS', meta: 'Nutrición intensiva', keywords: 'cocktail express argan moringa green tea vitamina b12 b6 pantenol', slug: 'cocktail-express' }
  ];

  function updateCartBadge() {
    var total = JSON.parse(localStorage.getItem('stemcells_cart') || '[]')
      .reduce(function (s, i) { return s + i.qty; }, 0);
    document.querySelectorAll('.cart-badge').forEach(function (b) {
      b.textContent = total;
      b.style.display = total > 0 ? '' : 'none';
    });
  }

  function setActiveNav() {
    var page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav__link').forEach(function (link) {
      var href = link.getAttribute('href').split('?')[0];
      if (href === page || (page === '' && href === 'index.html')) {
        link.classList.add('main-nav__link--active');
        link.setAttribute('aria-current', 'page');
      }
    });
    if (page === 'catalogo.html') {
      var catLink = document.querySelector('.main-nav__item--has-drop .main-nav__link');
      if (catLink) {
        catLink.classList.add('main-nav__link--active');
        catLink.setAttribute('aria-current', 'page');
      }
    }
  }

  function initSearch() {
    var overlay = document.getElementById('searchOverlay');
    var input = document.getElementById('searchInput');
    var results = document.getElementById('searchResults');
    if (!overlay || !input || !results) return;

    var searchBtn = document.getElementById('searchBtn');
    if (searchBtn) searchBtn.addEventListener('click', openSearch);
    document.getElementById('searchClose').addEventListener('click', closeSearch);
    document.getElementById('searchBackdrop').addEventListener('click', closeSearch);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeSearch();
    });

    function openSearch() {
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      setTimeout(function () { input.focus(); }, 50);
    }

    function closeSearch() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      input.value = '';
      results.innerHTML = '';
    }

    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      results.innerHTML = '';
      if (!q) return;
      var matches = PRODUCTS.filter(function (p) {
        return (p.name + ' ' + p.keywords).toLowerCase().includes(q);
      });
      if (!matches.length) {
        var li = document.createElement('li');
        li.className = 'search-overlay__result-empty';
        li.textContent = 'Sin resultados para "' + input.value + '"';
        results.appendChild(li);
        return;
      }
      matches.forEach(function (p) {
        var li = document.createElement('li');
        li.className = 'search-overlay__result-item';
        li.innerHTML =
          '<a class="search-overlay__result-link" href="catalogo.html?open=' + p.slug + '">' +
          '<span class="search-overlay__result-name">' + p.name + '</span>' +
          '<span class="search-overlay__result-meta">' + p.meta + '</span></a>';
        results.appendChild(li);
      });
    });
  }

  window.updateCartBadge = updateCartBadge;

  setActiveNav();
  updateCartBadge();
  initSearch();

})();
