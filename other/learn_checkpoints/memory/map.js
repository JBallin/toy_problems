// destructive version map (alters input array)

const map = (a, cb) => {
  /* eslint-disable */
  for (i of a) {
    a[i] = cb(a[i]);
  }
  /* eslint-enable */
  return a;
};

module.exports = { map };
