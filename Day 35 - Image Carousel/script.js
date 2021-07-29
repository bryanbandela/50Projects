const imgContainer = document.getElementById('img-container');
const imgs = document.querySelectorAll('img');
const leftBtn = document.getElementById('btn-left');
const rightBtn = document.getElementById('btn-right');

let idx = 0;
let swipImg = setInterval(run, 2000);

function run() {
  idx++;
  changeImg();
}

function changeImg() {
  if (idx > imgs.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgs.length - 1;
  }

  imgContainer.style.transform = `translateX(${-500 * idx}px)`;
}

leftBtn.addEventListener('click', () => {
  clearInterval(swipImg);
  idx--;
  changeImg();
  swipImg = setInterval(run, 2000);
});

rightBtn.addEventListener('click', () => {
  clearInterval(swipImg);
  idx++;
  changeImg();
  swipImg = setInterval(run, 2000);
});
