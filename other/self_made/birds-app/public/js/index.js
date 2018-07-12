const bird1 = document.querySelector('#bird1');
const bird2 = document.querySelector('#bird2');
const bird3 = document.querySelector('#bird3');

fetch('birds')
.then(res => {
  return res.json();
})
.then(birds => {
  const displayBird = n => `<strong>${birds[n-1].type}</strong> <p>${birds[n-1].description}</p>`;
  bird1.innerHTML = displayBird(1);
  bird2.innerHTML = displayBird(2);
  bird3.innerHTML = displayBird(3);
})

let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
