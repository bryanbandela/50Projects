const codes = document.querySelectorAll('.code');

codes[0].focus(); //as soon as the page loads the first digit will be focused

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = ''; //when we hit a new number the current value should be empty
      setTimeout(() => codes[idx + 1].focus(), 10); //remove setTimeout & watch the bug
      //when we type a number greater than 9 the next node will automatically be focused
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});
