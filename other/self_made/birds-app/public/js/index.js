const bird1 = document.querySelector('#bird1');
const bird2 = document.querySelector('#bird2');
const bird3 = document.querySelector('#bird3');

let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
prev.disabled = true;

let start = 1;
let step = 3;
getBirds(start, start += (step - 1))

next.onclick = () => {
  console.log('next: start', start);
  prev.disabled = false;
  getBirds(start, start += (step - 1));
}

prev.onclick = () => {
  next.disabled = false;
  start -= (step + 1)
  getBirds(start, start += (step - 1));
}

function getBirds(min, max) {
  fetch(`birds/range/${min}/${max}`)
  .then(res => res.json())
  .then(birds => {
    const birdFormat = (bird) => `<strong>${bird.type}</strong> <p>${bird.description}</p>`;
    const display = n => {
      let birdDiv = [bird1, bird2, bird3][n];
      let bird = birds[n];
      if (birds[n]) {
        birdDiv.style.border = '1px solid blue';
        birdDiv.innerHTML = birdFormat(bird);
      } else {
        birdDiv.style.border = '1px solid transparent';
        birdDiv.innerHTML = '';
      }
    };
    getSize().then(size => {
      if (max >= size) next.disabled = true;
    })
    if (max <= 3) prev.disabled = true;

    for (let i = 0; i < step; i++) {
      display(i);
    }
  })
}

getSize = () => fetch('birds/size').then(res => res.json())
