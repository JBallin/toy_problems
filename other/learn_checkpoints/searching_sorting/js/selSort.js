const { swap, getMinI } = require('./sort-helpers');

const selSortI = (arr) => {
  let res = arr.slice();
  for (let i = 0; i < res.length; i += 1) {
    const minI = getMinI(res, i);
    if (minI !== i) res = swap(res, i, minI);
  }
  return res;
};

const selSortR = (arr) => {
  if (arr.length < 2) return arr;

  let res = arr.slice();
  const minI = getMinI(res);
  if (minI !== 0) res = swap(res, 0, minI);

  return res.splice(0, 1).concat(selSortR(res));
};

module.exports = { selSortI, selSortR };
