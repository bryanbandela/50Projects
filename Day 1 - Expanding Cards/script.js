const panels = document.querySelectorAll('.panel');

console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeAllClasse();
    panel.classList.add('active');
  });
});

function removeAllClasse() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
