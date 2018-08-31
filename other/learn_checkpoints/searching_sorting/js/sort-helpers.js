const swap = (a, i, j) => {
  const r = a.slice();
  [r[i], r[j]] = [a[j], a[i]];
  return r;
};

const getMinI = (arr, start = 0) => {
  let minI = start;
  for (let i = start + 1; i < arr.length; i += 1) {
    if (arr[i] < arr[minI]) minI = i;
  }
  return minI;
};

module.exports = { swap, getMinI };
