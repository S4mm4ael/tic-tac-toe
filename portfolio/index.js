console.log("110 баллов: Все пункты выполнены полностью");

const hamburger = document.querySelector('.hamburger');
const menubox = document.querySelector('.menubox');


function toggleMenu() {
  hamburger.classList.toggle('open');
  menubox.classList.toggle('open');
}

function closeMenu(event) {
  if (event.target.classList.contains('nav-link')) {
  hamburger.classList.remove('open');
  menubox.classList.remove('open');
  }
}

hamburger.addEventListener('click', toggleMenu);
menubox.addEventListener('click', closeMenu);