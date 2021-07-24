const bg = document.getElementById('background');
const email = document.getElementById('email');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
  console.log(email.value, e.target.value, password.value.length);
  if (email.value) {
    bg.style.filter = `blur(${20 - password.value.length * 2}px)`;
  }
});
