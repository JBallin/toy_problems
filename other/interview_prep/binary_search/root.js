function power(x, n) {
  let result = 1;

  for (let i = 0; i < n; i += 1) {
    result *= x;
  }

  return result;
}

// eslint-disable-next-line no-unused-vars
function root(x, n) {
  if (x === 0) {
    return 0;
  }

  let start = 0;
  let end = x;
  let mid;

  while (start < end) {
    mid = (start + end) / 2;
    const guess = power(mid, n);
    if (guess >= x + 0.001) {
      end = mid;
    } else if (guess <= x - 0.001) {
      start = mid;
    } else {
      break;
    }
  }

  return Number(mid.toFixed(3));
}

/*
TIME: O(log(x))
SPACE: O(1)
*/
