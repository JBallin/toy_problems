const linearSearchI = (arr, n) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === n) return i;
  }
  return -1;
};

const linearSearchR = (arr, n, i = 0) => {
  if (i === arr.length) return -1;
  if (arr[i] === n) return i;
  return linearSearchR(arr, n, i + 1);
};

module.exports = { linearSearchI, linearSearchR };
