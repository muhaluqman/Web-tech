const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('categories-nav');
const overlay = document.getElementById('nav-overlay');
const mobileQuery = window.matchMedia('(max-width: 768px)');

function setMenu(open) {
  nav.classList.toggle('open', open);
  overlay.classList.toggle('open', open);
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
}

hamburger.addEventListener('click', () => {
  setMenu(!nav.classList.contains('open'));
});
overlay.addEventListener('click', () => setMenu(false));
