const { assert } = require('chai');
const { killKthBit } = require('../killKthBit');

describe('killKthBit', () => {
  it('should return a number', () => {
    assert.isNumber(killKthBit(10, 2));
  });
  it('should "kill" kth bit if its 1', () => {
    assert.equal(killKthBit(10, 2), 8);
  });
  it('should return same decimal if kth bit is 0', () => {
    assert.equal(killKthBit(8, 2), 8);
  });
});
