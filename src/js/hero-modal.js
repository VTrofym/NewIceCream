(() => {
  const refs = {
    openMenuBtn1: document.querySelector('.buy-now--header'),
    openMenuBtn2: document.querySelector('.buy-now'),
    closeMenuBtn: document.querySelector('.hero-modal__close-button'),
    menu: document.querySelector('.hero-modal__backdrop'),
    body: document.querySelector('body'),
  };
  refs.openMenuBtn1.addEventListener('click', toggleMenu);
  refs.openMenuBtn2.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
