// Kill Kth Bit
// I: decimal number n and a decimal number k
// Convert n to binary number
// take that kth bit from the right and change it from a 1 to a 0 (if possible)
// O: decimal with kth bit now being 0
// E: test decimals that convert to binary with both 1 AND 0 at kth from right

// EXAMPLE: killKthBit(10, 2)
// 1. 10 in decimal is '1010'
// 2. The 2nd bit from the right is the right-most 1
// 3. Change it to a 0, '1000'
// 4. Return the decimal representation of the number which is 8

const toBinary = require('./toBinary');
const toDecimal = require('./toDecimal');

const killKthBit = (n, k) => {
  // convert n to binary
  const bin = toBinary(n);
  // split binary into array
  const binArr = bin.split('');
  // make kth bit '0'
  binArr[binArr.length - k] = 0;
  // join binary array back to string
  const newBin = binArr.join('');
  // convert binary back to decimal
  const newDec = toDecimal(newBin);
  // return decimal
  return newDec;
};

module.exports = killKthBit;
