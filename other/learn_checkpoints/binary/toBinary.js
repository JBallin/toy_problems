const toBinary = (n) => {
  let bin = '';
  let remain = n;
  while (remain > 0) {
    bin = (remain % 2).toString() + bin;
    remain = Math.floor(remain / 2);
  }
  return bin;
};

module.exports = toBinary;
