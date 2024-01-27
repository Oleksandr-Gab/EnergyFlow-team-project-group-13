const menuBtn = document.querySelector('[data-menu-open]');
const menuBtnCl = document.querySelector('[data-menu-close]');
const menu = document.querySelector('.nav');
const homePageLink = document.querySelector('[data-action="homepage"]');
const favoritePageLink = document.querySelector(
  '[data-action="favoritespage"]'
);
const menuBackDrop = document.querySelector('.menu-back-drop');
const body = document.body;

const currentPath = window.location.pathname;

if (!currentPath.includes("/favorite.html")) {
    favoritePageLink.classList.remove('current')
    homePageLink.classList.add('current');
}


document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

menuBtnCl.addEventListener('click', closeMenu);

menuBtn.addEventListener('click', () => {
  menu.classList.add('active');
  menuBtn.classList.add('is-hidden');
  menuBtnCl.classList.remove('is-hidden');
  body.classList.add('lock');
  menuBackDrop.classList.add('active');
});

function closeMenu() {
  menu.classList.remove('active');
  menuBtn.classList.remove('is-hidden');
  menuBtnCl.classList.add('is-hidden');
  body.classList.remove('lock');
  menuBackDrop.classList.remove('active');
}

menuBackDrop.addEventListener('click', funk);

function funk(ev) {
  if (ev.target.classList.contains('menu-back-drop')) {
    closeMenu();
  }
}
