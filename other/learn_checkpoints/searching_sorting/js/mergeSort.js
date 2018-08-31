function mergeSortI(arr) {
  if (!arr.length) return [];
  let res = [];
  for (let i = 0; i < arr.length; i += 1) res.push([arr[i]]);

  while (res.length > 1) {
    let temp = [];
    for (let i = 0; i < res.length - 1; i += 2) {
      temp.push(merge(res[i], res[i + 1]));
    }
    if (res.length % 2 !== 0) {
      temp.push(res[res.length - 1]);
    }
    [res, temp] = [temp, []];
  }

  return res[0];
}

