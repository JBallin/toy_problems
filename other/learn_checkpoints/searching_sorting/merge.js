// Write the merge() function that you'll need for the merge sort algorithm.
// It's only job is to join together two arrays in such a way that all the items are ordered

// I: 2 sorted arrays
// O: 1 merged array, sorted
/*
1. Declare a new empty array, and pointers corresponding
to indices in arr1 and arr2 (set them both to 0)

2. If the first element in arr1 is less than the first
element in arr2, push the first element in arr1 to the
new array, and move the pointer for arr1 one spot to
the right. Otherwise, do this for arr2.

3. Repeat this process until you've gone through one of
the arrays return the new array, concatenated with
whatever elements are remaining from the array that
you haven't exhausted yet.
*/

function mergeI(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  // while both arrays are not exhausted
  while (i < arr1.length && j < arr2.length) {
    // if arr1's element is less than arr2's element push arr1 element and increment i
    // else do the opposite
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i += 1;
    } else {
      result.push(arr2[j]);
      j += 1;
    }
  }

  // concat whichever array still has values, to result
  return result.concat(i === arr1.length ? arr2.slice(j) : arr1.slice(i));
}

function mergeR(arr1, arr2) {
  return arr1 + arr2;
}

module.exports = { mergeI, mergeR };
