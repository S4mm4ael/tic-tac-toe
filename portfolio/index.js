console.log("Ваша отметка - 82 балла");

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

// Image season change in portfolio

const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioSwitcher = document.querySelector('.button-group')

function changeEvent(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    portfolioImages.forEach((img, index) => img.src = `assets/jpg/${event.target.dataset.season}/${index + 1}.jpg`);
  }
}

portfolioSwitcher.addEventListener('click', changeEvent);

// Active button

const btns = document.querySelectorAll('.portfolio-btn');

btns.forEach( button => {
  button.addEventListener('click', function() {
      btns.forEach( oldButton => {
      oldButton.classList.remove('active');
    });
    
    this.classList.add('active');
  })
})
