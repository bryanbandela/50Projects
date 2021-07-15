const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target'); //+ = Number() : turning something into a number
    const c = +counter.innerText;

    const increment = target / 100;

    if (c < target) {
      counter.innerText = `+${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = `+${target}`;
    }
  };

  updateCounter();
});
