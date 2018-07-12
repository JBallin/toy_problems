const bird1 = document.querySelector('#bird1');
const bird2 = document.querySelector('#bird2');
const bird3 = document.querySelector('#bird3');

let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
prev.style.display = 'none';

let start = 0;
let step = 3;
getBirds(start, start += step)

next.onclick = () => {
  prev.style.display = 'inline';
  getBirds(start, start += step);

  // getSize()
  // .then(
  //   if (size > )
  //   getBirds(start, stop);
  //   start += 3;
  // )
}

prev.onclick = () => {
  next.style.display = 'inline';
  getBirds(start - step, start)
  start -= step;
}

function getBirds(min, max) {
  fetch(`birds/${min}/${max}`)
  .then(res => res.json())
  .then(birds => {
    const birdFormat = (bird) => `<strong>${bird.type}</strong> <p>${bird.description}</p>`;
    const display = n => {
      let birdDiv = [bird1, bird2, bird3][n];
      let bird = birds[n];
      if (birds[n]) {
        birdDiv.style.display = 'block';
        birdDiv.innerHTML = birdFormat(bird);
      } else {
        birdDiv.style.display = 'none';
      }
    };
    if (birds.length < 3) next.style.display = 'none';
    if (max <= 3) prev.style.display = 'none';

    for (let i = 0; i < step; i++) {
      display(i);
    }
  })
}

getSize = () => fetch('birds/size').then(res => res.json())
