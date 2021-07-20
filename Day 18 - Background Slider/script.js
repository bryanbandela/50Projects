const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeDiv = 0;

setBgToBody();

rightBtn.addEventListener('click', () => {
  if (activeDiv > slides.length - 1) {
    activeDiv = 0;
  }
  activeDiv++;
  setBgToBody();
  changeImage();
});

leftBtn.addEventListener('click', () => {
  if (activeDiv < 0) {
    activeDiv = slides.length - 1;
  }
  activeDiv--;
  setBgToBody();
  changeImage();
});

function setBgToBody() {
  body.style.backgroundImage = slides[activeDiv].style.backgroundImage;
}

function changeImage() {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[activeDiv].classList.add('active');
}
