const dropdown = document.querySelector('select');
const display = document.querySelector('pre');

dropdown.onchange = () => {
  const verse = dropdown.value;
  updateDisplay(verse);
}

function updateDisplay(verse) {
  const verseFile = '../verses/' + verse.replace(' ', '').toLowerCase() + '.txt'
  const request = new XMLHttpRequest();
  request.open('GET', verseFile);
  request.responseType = 'text'
  request.onload = () => {
    display.textContent = request.response;
  }
  request.send();
}

updateDisplay('Verse 1');
dropdown.value = 'Verse 1';
