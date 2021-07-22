const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message two',
  'Message three',
  'Message four',
];

button.addEventListener('click', () => showNotif());

function showNotif() {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.innerHTML = getRandom();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandom() {
  return messages[Math.floor(Math.random() * messages.length)];
}
