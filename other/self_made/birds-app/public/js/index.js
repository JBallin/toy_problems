const bird1 = document.querySelector('#bird1');
const bird2 = document.querySelector('#bird2');
const bird3 = document.querySelector('#bird3');

fetch('birds')
.then(res => {
  return res.json();
})
.then(birds => {
  const displayBird = n => birds[n-1].type + ': ' + birds[n-1].description;
  bird1.innerText = displayBird(1);
  bird2.innerText = displayBird(2);
  bird3.innerText = displayBird(3);
})
