const bird1 = document.querySelector('#bird1');
const bird2 = document.querySelector('#bird2');
const bird3 = document.querySelector('#bird3');

let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

const disableB = b => b.disabled = true;
const enableB = b => b.disabled = false;
disableB(prev);

const getBirdDiv = n => [bird1, bird2, bird3][n];
const getRemoveB = n => [remove1, remove2, remove3][n];
const clearDiv = div => {
  div.style.border = '2px solid transparent';
  clearBird(div);
}
const clearBird = div => {
  const title = div.children[0];
  const info = div.children[1]
  title.textContent = 'empty';
  info.textContent = 'empty';
  title.style.color = 'transparent';
  info.style.color = 'transparent';
}
const showDiv = div => div.style.border = '2px solid blue';
const insertBird = (div, bird) => {
  clearBird(div);
  const title = div.children[0];
  const info = div.children[1];
  title.style.color = 'black';
  info.style.color = 'black';
  console.log(div.children);

  title.textContent = bird.type;

  info.textContent = bird.description;
}
const hideB = b => b.style.display = 'none';
const showB = b => b.style.display = 'inline';

let currentBirds = [];

let start = 1;
const size = 3;
getBirds(start, size);

next.onclick = () => {
  enableB(prev);
  getBirds(start, size);
}

prev.onclick = () => {
  enableB(next);
  getBirds(start, size, true);
}

function getBirds(startID, size, reverse=false) {
  fetch(`birds/get/${reverse ? 'reverse/' : ''}${startID}/${size}`)
  .then(res => res.json())
  .then(birds => {
    const display = n => {
      const birdDiv = getBirdDiv(n);
      const bird = birds[n];
      const removeB = getRemoveB(n);
      if (bird) {
        showDiv(birdDiv);
        insertBird(birdDiv, bird);
        showB(removeB);

        start = bird.id + 1;
      } else {
        clearDiv(birdDiv);
        hideB(removeB);
        disableB(reverse ? prev : next);
      }
    };
    // if (max <= 3) disableB(prev);

    for (let divN = 0; divN < size; divN++) {
      display(divN);
    }

    currentBirds = birds;
  })
}

getMaxID = () => fetch('birds/get/max').then(res => res.json())

// DELETE ROUTE ('remove')

const remove1 = document.querySelector('#remove1');
const remove2 = document.querySelector('#remove2');
const remove3 = document.querySelector('#remove3');

remove1.onclick = () => remove(1);
remove2.onclick = () => remove(2);
remove3.onclick = () => remove(3);

function remove(bird) {
  const n = bird-1;
  const birdDiv = getBirdDiv(n);
  const removeB = getRemoveB(n);
  hideDiv(birdDiv);
  hideB(removeB);
  fetch('remove/' + currentBirds[n].id, {
    method: 'delete'
  })
}
