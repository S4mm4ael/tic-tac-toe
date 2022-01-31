// Translate

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Retouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}

const navLinkEn = document.querySelector('.en');
const navLinkRus = document.querySelector('.ru');

function getTranslate (lang) {
  const translateData = document.querySelectorAll('[data-i18]');
  translateData.forEach((el) => {
  el.textContent = i18Obj[lang][el.dataset.i18] 
  });
}

navLinkRus.addEventListener('click', () => {
  getTranslate('ru');
})
navLinkEn.addEventListener('click', () => {
  getTranslate('en');
})


// My mark //
console.log("Ваша отметка - 80 баллов");
// Hamburger menu //

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
const portfolioPic = document.querySelectorAll('.portfolio-image');
const portfolioChanger = document.querySelector('.button-group')

function changePics(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    portfolioPic.forEach((img, index) => img.src = `assets/jpg/${event.target.dataset.season}/${index + 1}.jpg`);
  }
}

portfolioChanger.addEventListener('click', changePics);

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

// Theme change

const themeLink = document.querySelector('.theme-logo');

function changeTheme (event) {
  if (event.target.classList.contains('theme-black')){
    themeLink.classList.remove('theme-black');
    document.documentElement.style.setProperty('--background-color', '#fff');
    document.documentElement.style.setProperty('--text-color', '#000');
    document.documentElement.style.setProperty('--hover-color', '#000');
    document.documentElement.style.setProperty('--line-color', '#000');
    themeLink.src = "assets/svg/carbon_sun.svg";

 }
  else {
    themeLink.classList.add('theme-black');
    document.documentElement.style.setProperty('--background-color', '#000');
    document.documentElement.style.setProperty('--text-color', '#fff');
    document.documentElement.style.setProperty('--hover-color', '#fff');
    document.documentElement.style.setProperty('--line-color', '#bdae82');
    themeLink.src = "assets/svg/carbon_moon.svg";
  }
};

themeLink.addEventListener('click', changeTheme);