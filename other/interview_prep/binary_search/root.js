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
    const guess = mid ** n;
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
