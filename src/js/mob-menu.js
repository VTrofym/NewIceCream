(() => {
  const refs = {
    // Burger
    openMenuBtn: document.querySelector('.menu-button--open'),
    closeMenuBtn: document.querySelector('.menu-button--close'),
    burgerBackdrop: document.querySelector('.burger__backdrop'),
    burgerList: document.querySelector('.burger__list'),
    // Menu
    openPopBtn1: document.querySelector('.buy-now--header'),
    openPopBtn2: document.querySelector('.buy-now'),
    closePopBtn: document.querySelector('.hero-modal__close-button'),
    popUp: document.querySelector('.hero-modal__backdrop'),

    body: document.querySelector('body'),
  };
  refs.openMenuBtn.addEventListener('click', removeMenu);
  refs.closeMenuBtn.addEventListener('click', addMenu);
  refs.burgerBackdrop.addEventListener('click', addMenu);
  refs.burgerList.addEventListener('click', addMenu); 

  refs.openPopBtn1.addEventListener('click', openMob);
  refs.openPopBtn2.addEventListener('click', openMobNoScroll);
  refs.closePopBtn.addEventListener('click', closeMob);
  refs.popUp.addEventListener('click', closeMob);

  function addMenu() {
    refs.burgerBackdrop.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
   function removeMenu() {
    refs.burgerBackdrop.classList.remove('is-hidden');
    refs.body.classList.add('no-scroll');
  }
  function openMob() {
    refs.popUp.classList.remove('is-hidden');
    refs.body.classList.add('no-scroll');
  }
   function closeMob() {
     refs.popUp.classList.add('is-hidden');
     refs.body.classList.remove('no-scroll');
  }
   function openMobNoScroll() {
     refs.popUp.classList.toggle('is-hidden');
     refs.body.classList.toggle('no-scroll');
  }
  
})();


