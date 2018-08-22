const { assert } = require('chai');
const toDecimal = require('../toDecimal');

describe('toDecimal', () => {
  it('should return a number', () => {
    assert.isNumber(toDecimal('1001'));
  });
  it('should convert binary to decimal', () => {
    assert.equal(toDecimal('1001'), 9);
    assert.equal(toDecimal('10'), 2);
  });
});
