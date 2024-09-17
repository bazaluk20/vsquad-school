let dropdown = document.querySelectorAll('.dropdown');

dropdown.forEach(function (element) {
  let ddBtn = element.querySelector('.ddBtn');
  let ddText = element.querySelector('.ddList');
  ddBtn.addEventListener('click', function (event) {
    const checkClass = element.querySelector('.ddBtn.active');
    if (checkClass) {
      event.target.classList.remove('active');
      ddText.style.height = null;
    } else {
      event.target.classList.add('active');
      ddText.style.height = ddText.scrollHeight + 'px';
    }
  });
});

window.onclick = function (event) {
  if (!event.target.matches('.ddBtn')) {
    let dropdown = document.querySelectorAll('.dropdown');

    dropdown.forEach(function (element) {
      let ddBtn = element.querySelector('.ddBtn');
      let ddText = element.querySelector('.ddList');

      if (ddBtn.classList.contains('active')) {
        ddBtn.classList.remove('active');
        ddText.style.height = null;
      }
    });
  }
};
