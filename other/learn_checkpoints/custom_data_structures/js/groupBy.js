const groupBy = (arr, key) => (
  arr.reduce((res, item) => {
    const currentKey = item[key];
    if (res.has(currentKey)) {
      res.get(currentKey).push(item);
    } else {
      res.set(currentKey, [item]);
    }
    return res;
  }, new Map())
);

module.exports = { groupBy };
