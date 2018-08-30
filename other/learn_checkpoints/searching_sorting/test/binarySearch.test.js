const { assert } = require('chai');
const { binarySearchI, binarySearchR } = require('../js/binarySearch');

describe('binary search', () => {
  const inputArr = [1, 5, 8, 12, 15];
  const target = 12;
  const expected = 3;

  describe('iterative', () => {
    const validActual = binarySearchI(inputArr, target);
    const invalidActual = binarySearchI(inputArr, 100);
    const firstActual = binarySearchI(inputArr, 1);
    const lastActual = binarySearchI(inputArr, 15);
    it('should return index of target', () => {
      assert.equal(validActual, expected);
    });
    it('should return -1 if target not in array', () => {
      assert.equal(invalidActual, -1);
    });
    it('should return index of first number in arr', () => {
      assert.equal(firstActual, 0);
    });
    it('should return index of last number in arr', () => {
      assert.equal(lastActual, 4);
    });
  });

  describe('recursive', () => {
    const validActual = binarySearchR(inputArr, target);
    const invalidActual = binarySearchR(inputArr, 100);
    const firstActual = binarySearchR(inputArr, 1);
    const lastActual = binarySearchR(inputArr, 15);
    it('should return index of target', () => {
      assert.equal(validActual, expected);
    });
    it('should return -1 if target not in array', () => {
      assert.equal(invalidActual, -1);
    });
    it('should return index of first number in arr', () => {
      assert.equal(firstActual, 0);
    });
    it('should return index of last number in arr', () => {
      assert.equal(lastActual, 4);
    });
  });
});
