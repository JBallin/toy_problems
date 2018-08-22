const { assert } = require('chai');
const toBin = require('../toBinary');

describe('toBinary', () => {
  it('should return a string', () => {
    assert.typeOf(toBin(32), 'string');
  });
  it('should return binary ending in 1', () => {
    assert.equal(toBin(35), '100011');
  });
  it('should return binary ending in 0', () => {
    assert.equal(toBin(2), '10');
  });
  it('should return binary ending in 000', () => {
    assert.equal(toBin(8), '1000');
  });
});
