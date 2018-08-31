const { swap, getMinI } = require('./sort-helpers');

const selSortI = (arr) => {
  let res = arr.slice();
  for (let i = 0; i < res.length; i += 1) {
    const minI = getMinI(res, i);
    if (minI !== i) res = swap(res, i, minI);
  }
  return res;
};

const selSortR = arr => arr;

module.exports = { selSortI, selSortR };
