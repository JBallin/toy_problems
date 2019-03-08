const ascendNumSort = arr => arr.slice().sort((a, b) => a - b);

const findSmallestNotInArr = (A) => {
  let smallest = 1;

  ascendNumSort(A).some((e) => {
    if (e === smallest) smallest += 1;
    return e > smallest;
  });

  return smallest;
};


const a1 = [1, 5, 100, 2, 17];

/* eslint-disable no-console */
console.log('res', findSmallestNotInArr(a1));
