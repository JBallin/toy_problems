const { mergeI, mergeR } = require('./merge');

function mergeSortI(arr) {
  let res = arr.map(e => [e]);

  while (res.length > 1) {
    const temp = [];
    for (let i = 0; i < res.length - 1; i += 2) temp.push(mergeI(res[i], res[i + 1]));
    if (res.length % 2 !== 0) temp.push(res[res.length - 1]);
    res = temp;
  }

  return res[0] || [];
}

const mergeSortR = (arr) => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  return mergeR(mergeSortR(arr.slice(0, mid)), mergeSortR(arr.slice(mid)));
};

module.exports = { mergeSortI, mergeSortR };
