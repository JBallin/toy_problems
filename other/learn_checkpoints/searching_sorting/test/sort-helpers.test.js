const { assert } = require('chai');
const { swap } = require('../js/sort-helpers');

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
});
