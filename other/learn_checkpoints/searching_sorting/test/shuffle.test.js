const { assert } = require('chai');
const shuffle = require('../js/shuffle');

describe('shuffle', () => {
  const original = [1, 2, 3, 4, 5, 6];
  let a;
  beforeEach(() => {
    a = original.slice();
  });

  it('should return an Array', () => {
    assert.isArray(shuffle(a));
  });
  it('should return array with the same length as the original Array', () => {
    assert.lengthOf(shuffle(a), original.length);
  });
  it('should modify the original Array', () => {
    assert.notDeepEqual(shuffle(a), original);
  });
});
