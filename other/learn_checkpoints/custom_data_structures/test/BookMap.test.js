const { assert } = require('chai');
const { BookMap } = require('../js/BookMap');

describe('BookMap', () => {
  const bookMap = new BookMap();
  const regMap = new Map();
  it('should add a book as an array', () => {
    assert.deepEqual(bookMap.add('jballin', 'git').library, regMap.set('jballin', ['git']));
  });
  it('should add to authors books array if already has a book', () => {
    assert.deepEqual(bookMap.add('jballin', 'bash').library, regMap.set('jballin', ['git', 'bash']));
  });
  it('should retreive books written by author', () => {
    assert.deepEqual(bookMap.retrieve('jballin'), ['git', 'bash']);
  });
  it('should return size', () => {
    bookMap.add('bossman', 'this is how we do it');
    assert.deepEqual(bookMap.size(), 2);
  });
});
