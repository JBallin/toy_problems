const linearSearchI = (arr, n) => {
  for(let i = 0; i < arr.length; i += 1) {
    if (arr[i] === n) return i;
  }
  return -1;
};

