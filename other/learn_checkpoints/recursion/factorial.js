
const factorialIterative = (n) => {
  let result = 1;
  for (let i = n; i > 1; i -= 1) {
    result *= i;
  }
  return result;
};

const factorialRecursive = (n) => {
  if (n === 1) return 1;
  return n * factorialRecursive(n - 1);
};

module.exports = { factorialIterative, factorialRecursive };
