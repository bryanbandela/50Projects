const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4; //this will be our trigger point regardless of the screen size

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      //if the top value of an element becomes less than the trigger point then add the class otherwise remove
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
