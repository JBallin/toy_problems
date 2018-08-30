/*
I: sorted array of numbers and a target number
O: integer of the index where n is in arr
E:
  - empty array || n not in array => return -1
  - single element in array (mid should be set to 0)
*/

const binarySearchI = (arr, n) => {
  let [lo, hi] = [0, arr.length - 1];
  while (lo <= hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    if (arr[mid] === n) return mid;

    if (arr[mid] < n) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
};

const binarySearchR = (arr, n, lo = 0, hi = arr.length - 1) => {
  if (lo > hi) return -1;

  const mid = Math.floor(lo + (hi - lo) / 2);
  if (arr[mid] === n) return mid;
  if (arr[mid] < n) return binarySearchR(arr, n, mid + 1, hi);
  return binarySearchR(arr, n, lo, mid - 1);
};

module.exports = { binarySearchI, binarySearchR };
