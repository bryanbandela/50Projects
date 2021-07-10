const jokeBtn = document.getElementById('jokeBtn');
const jokeEl = document.getElementById('joke');

jokeBtn.addEventListener('click', getJokes);

getJokes();

async function getJokes() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  console.log(data);

  jokeEl.innerHTML = data.joke;
}
