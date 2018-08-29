const swap = (a, i, j) => {
  const r = a.slice();
  [r[i], r[j]] = [a[j], a[i]];
  return r;
};

module.exports = { swap };
