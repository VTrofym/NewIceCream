(() => {
  const refs = {
    openProductBtn1: document.querySelector('.card__btn--1'),
    openProductBtn2: document.querySelector('.card__btn--2'),
    openProductBtn3: document.querySelector('.card__btn--3'),
    openProductCard1: document.querySelector('.card__bg--1'),
    openProductCard2: document.querySelector('.card__bg--2'),
    openProductCard3: document.querySelector('.card__bg--3'),  
  };
  
    refs.openProductBtn1.addEventListener('click', toggleProduct1);
    refs.openProductBtn2.addEventListener('click', toggleProduct2);
    refs.openProductBtn3.addEventListener('click', toggleProduct3);

    function toggleProduct1() {
    refs.openProductCard1.classList.toggle('flip');
    }
      function toggleProduct2() {
    refs.openProductCard2.classList.toggle('flip');
    }
      function toggleProduct3() {
    refs.openProductCard3.classList.toggle('flip');
    }
})();