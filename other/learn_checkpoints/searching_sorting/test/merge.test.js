const { assert } = require('chai');
const { mergeI, mergeR } = require('../merge');

describe('merge', () => {
  const arr1 = [0, 2, 4];
  const arr2 = [1, 3, 5];
  // merge(arr1, arr2);
  const expected = [0, 1, 2, 3, 4, 5];

  const arr3 = [7, 10, 12, 17];
  const arr4 = [6, 22, 70, 1000];
  // merge(arr3, arr4);
  const expected2 = [6, 7, 10, 12, 17, 22, 70, 1000];

  // merge(arr1, arr3);
  const expected3 = [0, 2, 4, 7, 10, 12, 17];

  describe('iterative', () => {
    it('should return an Array', () => {
      assert.isArray(mergeI(arr1, arr2));
    });
    it('should return an array with length of sum of input arrays', () => {
      assert.lengthOf(mergeI(arr1, arr2), arr1.length + arr2.length);
    });
    it('should return a merged and sorted array given two arrays of odd length', () => {
      assert.deepEqual(mergeI(arr1, arr2), expected);
    });
    it('should return a merged and sorted array given two arrays of even length', () => {
      assert.deepEqual(mergeI(arr3, arr4), expected2);
    });
    it('should return a merged and sorted array given two arrays of mixed (even/odd) lengths', () => {
      assert.deepEqual(mergeI(arr1, arr3), expected3);
    });
  });

  describe('recursive', () => {
    it('should return an Array', () => {
      assert.isArray(mergeR(arr1, arr2));
    });
    it('should return an array with length of sum of input arrays', () => {
      assert.lengthOf(mergeR(arr1, arr2), arr1.length + arr2.length);
    });
    it('should return a merged and sorted array given two arrays of odd length', () => {
      assert.deepEqual(mergeR(arr1, arr2), expected);
    });
    it('should return a merged and sorted array given two arrays of even length', () => {
      assert.deepEqual(mergeR(arr3, arr4), expected2);
    });
    it('should return a merged and sorted array given two arrays of mixed (even/odd) lengths', () => {
      assert.deepEqual(mergeR(arr1, arr3), expected3);
    });
  });
});
