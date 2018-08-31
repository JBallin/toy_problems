const { assert } = require('chai');
const { mergeSortI, mergeSortR } = require('../js/mergeSort');

describe('merge sort', () => {
  let a;
  const original = [4, 2, 9, 1, 7];
  const sorted = [1, 2, 4, 7, 9];

  beforeEach(() => {
    a = original.slice();
  });

  describe('iterative', () => {
    it('should return an Array', () => {
      assert.isArray(mergeSortI(a));
    });
    it('should return same length as original', () => {
      assert.lengthOf(mergeSortI(a), original.length);
    });
    it('should return a new sorted array', () => {
      assert.deepEqual(mergeSortI(a), sorted);
      assert.notEqual(mergeSortI(a), original);
    });
    it('should return an empty array if input array is empty', () => {
      assert.deepEqual(mergeSortI([]), []);
    });
  });

  describe('recursive', () => {
    it('should return an Array', () => {
      assert.isArray(mergeSortR(a));
    });
    it('should return same length as original', () => {
      assert.lengthOf(mergeSortR(a), original.length);
    });
    it('should return a new sorted array', () => {
      assert.deepEqual(mergeSortR(a), sorted);
      assert.notEqual(mergeSortR(a), original);
    });
    it('should return an empty array if input array is empty', () => {
      assert.deepEqual(mergeSortR([]), []);
    });
  });
});
