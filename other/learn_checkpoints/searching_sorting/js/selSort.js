const { swap } = require('./sort-helpers');

const selSortI = (arr) => {
  let res = arr.slice();
  for (let i = 0; i < res.length; i += 1) {
    let minI = i;
    for (let j = i + 1; j < res.length; j += 1) {
      if (res[j] < res[minI]) minI = j;
    }
    if (minI !== i) res = swap(res, i, minI);
  }
  return res;
};

const selSortR = arr => arr;

module.exports = { selSortI, selSortR };
