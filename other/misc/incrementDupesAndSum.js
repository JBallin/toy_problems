// Given an array of numbers check for duplicates.
// If there are duplicates increament the duplicates
// until there are no more.
// Return the sum of the array.
// Example 1 Input: const arr1 = [3,2,1,2,7]
// Example 1 Output: 17
// Example 1 Explanation:
// const arr1 has 1 duplicate number (2)
// Increament 2 to 4 since there already exists a 3
// arr1 becomes [3, 2, 1, 4, 7]
// The sum of arr1 then is 17.
// Edge cases:
// - There could be more than one duplicate.
// - There could be more than 2 number duplicates - [3, 3, 3, 4]
// Practice:
// const myArray = [5, 1, 2, 2, 3, 4, 4, 4]

const addToMap = (map, e) => Object.assign({}, map, { [e]: (map[e] || 0) + 1 });

const buildMap = a => a.reduce(addToMap, {});

const incrementDupes = (arr) => {
  let map = buildMap(arr);
  return arr.map((e) => {
    let updated = e;
    while (map[updated] > 1) {
      map[updated] -= 1;
      updated += 1;
      map = addToMap(map, updated);
    }
    return updated;
  });
};

const incrementDupesAndSum = arr => incrementDupes(arr).reduce((sum, e) => sum + e);

const arr1 = [3, 2, 1, 2, 7];
const arr2 = [3, 3, 3, 4];
const arr3 = [5, 1, 2, 2, 3, 4, 4, 4];

/* eslint-disable no-console */

console.log(incrementDupesAndSum(arr1));
console.log(incrementDupesAndSum(arr2));
console.log(incrementDupesAndSum(arr3));
