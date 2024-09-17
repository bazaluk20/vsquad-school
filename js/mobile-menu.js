const burgerBtn = document.querySelector('#burgerBtn');
const menuNav = document.querySelector('#menuNav');

burgerBtn.addEventListener('click', function (event) {
  const checkClass = burgerBtn.classList.contains('is-active');
  if (checkClass) {
    event.target.classList.remove('is-active');
    menuNav.classList.remove('is-open');
  } else {
    event.target.classList.add('is-active');
    menuNav.classList.add('is-open');
  }
});
