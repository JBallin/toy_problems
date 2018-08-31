const { assert } = require('chai');
const { swap, getMinI } = require('../js/sort-helpers');

describe('sort-helpers', () => {
  let a;
  const original = [4, 2, 9, 1, 7];

  beforeEach(() => {
    a = original.slice();
  });

  describe('swap', () => {
    it('should return an Array', () => {
      assert.isArray(swap(a, 2, 0));
    });
    it('should return same length as original', () => {
      assert.lengthOf(swap(a, 2, 0), original.length);
    });
    it('should not modify original array', () => {
      assert.notDeepEqual(swap(a, 2, 0), original);
    });
  });

  describe('getMinI', () => {
    it('should return min index', () => {
      assert.equal(getMinI([7, 100, 2, 5, 4], 3), 4);
    });
  });
});
