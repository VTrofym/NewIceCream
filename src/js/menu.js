(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-button--open'),
    closeMenuBtn: document.querySelector('.menu-button--close'),
    menu: document.querySelector('.burger__backdrop'),
    menuMob: document.querySelector('.burger__list'),
    body: document.querySelector('body'),
    
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuMob.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
  function removeMenu() {
    refs.menu.classList.add('is-hidden');
    refs.body.classList.toggle('no-scroll');

  }
})();