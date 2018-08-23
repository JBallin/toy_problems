const { assert } = require('chai');
const { map } = require('../map');

describe('map', () => {
  it('should alter input array', () => {
    const arr = [1, 2, 3];
    assert.equal(map(arr, e => e + 1), arr);
  });
});
