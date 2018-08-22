const { assert } = require('chai');
const { factorialRecursive, factorialIterative } = require('../factorial');

describe('factorial', () => {
  describe('iterative', () => {
    it('should return factorial', () => {
      assert.equal(factorialIterative(5), 120);
    });
  });
  describe('recursive', () => {
    it('should return factorial', () => {
      assert.equal(factorialRecursive(5), 120);
    });
  });
});
