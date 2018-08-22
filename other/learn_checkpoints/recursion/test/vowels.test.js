const { assert } = require('chai');
const { vowelsI, vowelsR } = require('../vowels');

describe('vowels', () => {
  describe('iterative', () => {
    it('should return an integer', () => {
      assert.isNumber(vowelsI('hello'));
    });
    it('should return num vowels', () => {
      assert.equal(vowelsI('hello'), 2);
    });
    it('should return 0 for empty string', () => {
      assert.equal(vowelsI(''), 0);
    });
  });

  describe('recursive', () => {
    it('should return an integer', () => {
      assert.isNumber(vowelsR('hello'));
    });
    it('should return num vowels', () => {
      assert.equal(vowelsR('hello'), 2);
    });
    it('should return 0 for empty string', () => {
      assert.equal(vowelsR(''), 0);
    });
  });
});
