const { assert } = require('chai');
const { binarySearchI, binarySearchR } = require('../js/binarySearch');

describe('binary search', () => {
  const arr = [1, 5, 8, 12, 15];

  describe('iterative', () => {
    it('should return index of target', () => {
      assert.equal(binarySearchI(arr, 12), 3);
    });
    it('should return -1 if target not in array', () => {
      assert.equal(binarySearchI(arr, 100), -1);
    });
    it('should return index of first number in arr', () => {
      assert.equal(binarySearchI(arr, 1), 0);
    });
    it('should return index of last number in arr', () => {
      assert.equal(binarySearchI(arr, 15), 4);
    });
  });

  describe('recursive', () => {
    it('should return index of target', () => {
      assert.equal(binarySearchR(arr, 12), 3);
    });
    it('should return -1 if target not in array', () => {
      assert.equal(binarySearchR(arr, 100), -1);
    });
    it('should return index of first number in arr', () => {
      assert.equal(binarySearchR(arr, 1), 0);
    });
    it('should return index of last number in arr', () => {
      assert.equal(binarySearchR(arr, 15), 4);
    });
  });
});
