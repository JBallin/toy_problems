const { assert } = require('chai');
const { groupBy } = require('../js/groupBy');

describe('groupBy', () => {
  const items = [
    { color: 'green', size: 'medium' },
    { color: 'red', size: 'large' },
    { color: 'orange', size: 'medium' },
    { color: 'green', size: 'small' },
  ];
  const expectedObj = {
    green: [
      { color: 'green', size: 'medium' },
      { color: 'green', size: 'small' },
    ],
    red: [
      { color: 'red', size: 'large' },
    ],
    orange: [
      { color: 'orange', size: 'medium' },
    ],
  };
  const expectedMap = new Map(Object.entries(expectedObj));

  it('should use Map', () => {
    assert.include(groupBy.toString(), 'Map');
  });
  it('should group items', () => {
    assert.deepEqual(groupBy(items, 'color'), expectedMap);
  });
});
