/* https://www.codewars.com/kata/length-of-missing-array/train/javascript
i: array of arrays of consecutive length values with one array element missing
o: length of the array that's missing
c: always a missing element, length will be between given arrays
e: if input array or any element of input is null/empty: return 0.
*/

const isEmptyOrFalsy = arr => !arr || !arr.length;

const getLengthOfMissingArray = arrOfArrs => {
  if (isEmptyOrFalsy(arrOfArrs) || arrOfArrs.some(isEmptyOrFalsy)) return 0;
  const sortedLens = arrOfArrs.map(a => a.length).sort((a, b) => a - b)
  const lastConsecutiveLen = sortedLens.find((l, i, a) => l + 1 !== a[i+1]);
  return lastConsecutiveLen + 1
}

// TESTS
console.log(
  getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), // 3
  getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), // 2
  getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), // 2
  getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ] ] ), // 5
  getLengthOfMissingArray([ ]) // 0
);
