const toDecimal = bin => bin.split('')
  .map(s => Number(s))
  .map((n, i, a) => n * (2 ** (a.length - i - 1)))
  .reduce((sum, num) => sum + num);

module.exports = toDecimal;
