(() => {
  const refs = {
    openMenuBtn3: document.querySelector('.read-more'),
    closeMenuBtn3: document.querySelector('.about-modal__close-button'),
    menu: document.querySelector('.about-modal__backdrop'),
    body: document.querySelector('body'),
  };
  refs.openMenuBtn3.addEventListener('click', toggleMenu);
  refs.closeMenuBtn3.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();