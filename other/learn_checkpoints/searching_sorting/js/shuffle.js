const shuffle = (a) => {
  const res = a.slice();

  for (let i = 0; i < a.length; i += 1) {
    const randI = Math.floor(Math.random() * a.length);
    [res[i], res[randI]] = [res[randI], res[i]];
  }

  return res;
};

module.exports = shuffle;
