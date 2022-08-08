(() => {
  const refs = {
    changeTextBtn: document.querySelector('.hero__button-more'),
    heroText: document.querySelector('.hero__description'),
  };
    refs.changeTextBtn.addEventListener('click', toggleText);
    
    function toggleText() {
    refs.heroText.classList.toggle('roll');
  }
})();