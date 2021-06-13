const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

console.log(progress, prev, next, circles);

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  console.log(currentActive);
  update(); //to update the DOM
});

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive > 1) {
    currentActive = 1;
  }
  console.log(currentActive);
  update(); //to update the DOM
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

//Fix the problem when you click prev after reaching the last circle
