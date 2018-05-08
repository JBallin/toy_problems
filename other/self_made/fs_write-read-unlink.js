/*
use node to:
1) write a file
2) read the file to the console
3) delete the file
4) log progress throughout
*/

const fs = require('fs');

fs.writeFile('test.txt', 'I am a testy boy', () => {
  console.log('test.txt created!');
  setTimeout(() => fs.readFile('test.txt', 'utf8', (err, data) => {
      console.log(data);
      console.log('test.txt read!');
      setTimeout(() => fs.unlink('test.txt', () =>
        console.log('text.txt deleted!')), 3000)
  }), 3000);
});
