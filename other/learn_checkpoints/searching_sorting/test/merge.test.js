const { assert } = require('chai');
const { mergeI, mergeR } = require('../merge');

describe('merge', () => {
  const arr1 = [0, 2, 4];
  const arr2 = [1, 3, 5];
  const expected = [0, 1, 2, 3, 4, 5];

  describe('iterative', () => {
    it('should return an Array', () => {
      assert.isArray(mergeI(arr1, arr2));
    });
    it('should return an array with length of sum of input arrays', () => {
      assert.lengthOf(mergeI(arr1, arr2), arr1.length + arr2.length);
    });
    it('should return a merged and sorted array', () => {
      assert.equal(mergeI(arr1, arr2), expected);
    });
  });

  xdescribe('recursive', () => {
    it('should return an Array', () => {
      assert.isArray(mergeR(arr1, arr2));
    });
    it('should return an array with length of sum of input arrays', () => {
      assert.lengthOf(mergeR(arr1, arr2), arr1.length + arr2.length);
    });
    it('should return a merged and sorted array', () => {
      assert.equal(mergeR(arr1, arr2), expected);
    });
  });
});
