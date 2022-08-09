(() => {
  const refs = {
    openLocBtn: document.querySelector(".locations"),
    closeLocBtn: document.querySelector(".location-close"),
      locPop: document.querySelector(".locations__backdrop"),
      body: document.querySelector('body'),
  };

  refs.openLocBtn.addEventListener("click", toggleLoc);
  refs.closeLocBtn.addEventListener("click", toggleLoc);

  function toggleLoc() {
      refs.locPop.classList.toggle("is-hidden");
      refs.body.classList.toggle('no-scroll');
  }
})();