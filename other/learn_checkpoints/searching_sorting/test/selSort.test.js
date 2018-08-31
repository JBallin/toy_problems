const { assert } = require('chai');
const { selSortI, selSortR } = require('../js/selSort');

describe('selection sort', () => {
  const original = [4, 2, 9, 1, 7];
  const sorted = [1, 2, 4, 7, 9];
  const a = original.slice();

  describe('iterative', () => {
    const result = selSortI(a);
    it('should return an Array', () => {
      assert.isArray(result);
    });
    it('should return same length as original', () => {
      assert.lengthOf(result, original.length);
    });
    it('should return a new sorted array', () => {
      assert.deepEqual(result, sorted);
      assert.notEqual(result, original);
    });
    it('should return an empty array if input array is empty', () => {
      assert.deepEqual(selSortI([]), []);
    });
  });

  describe('recursive', () => {
    const result = selSortR(a);
    it('should return an Array', () => {
      assert.isArray(result);
    });
    it('should return same length as original', () => {
      assert.lengthOf(result, original.length);
    });
    it('should return a new sorted array', () => {
      assert.deepEqual(result, sorted);
      assert.notEqual(result, original);
    });
    it('should return an empty array if input array is empty', () => {
      assert.deepEqual(selSortR([]), []);
    });
  });
});
