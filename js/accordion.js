let accordion = document.querySelectorAll('.accordion');
accordion.forEach(function (element) {
  let accBtn = element.querySelector('.accordionBtn');
  let accText = element.querySelector('.accordionText');
  accBtn.addEventListener('click', function (event) {
    const checkClass = element.querySelector('.accordionBtn.active');
    if (checkClass) {
      event.target.classList.remove('active');
      accText.style.maxHeight = null;
    } else {
      event.target.classList.add('active');
      accText.style.maxHeight = accText.scrollHeight + 'px';
    }
  });
});
