const { assert } = require('chai');
const { linearSearchI, linearSearchR } = require('../js/linearSearch');

describe('linearSearch', () => {
  const inputArr = [1, 56, 118, 700, 700, 999];
  const validTarget = 700;
  const invalidTarget = 100;
  const expectedValid = 3;

  describe('iterative', () => {
    const validActual = linearSearchI(inputArr, validTarget);
    const invalidActual = linearSearchI(inputArr, invalidTarget);

    it('should return a number', () => {
      assert.isNumber(validActual);
      assert.isNumber(invalidActual);
    });
    it('should return index of first occurence of n', () => {
      assert.equal(validActual, expectedValid);
    });
    it('should return -1 if n not in array', () => {
      assert.equal(invalidActual, -1);
    });
  });

  describe('recursive', () => {
    const validActual = linearSearchR(inputArr, validTarget);
    const invalidActual = linearSearchR(inputArr, invalidTarget);

    it('should return a number', () => {
      assert.isNumber(validActual);
      assert.isNumber(invalidActual);
    });
    it('should return index of first occurence of n', () => {
      assert.equal(validActual, expectedValid);
    });
    it('should return -1 if n not in array', () => {
      assert.equal(invalidActual, -1);
    });
  });
});
