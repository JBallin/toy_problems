const { swap } = require('./sort-helpers');

const shuffle = (a) => {
  let res = a.slice();

  for (let i = 0; i < a.length; i += 1) {
    const randI = Math.floor(Math.random() * a.length);
    res = swap(res, i, randI);
  }

  return res;
};

module.exports = shuffle;
