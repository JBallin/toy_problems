// return num vowels in string

// iterative
const vowelsI = str => str.split('')
  .filter(l => 'aeiou'.includes(l))
  .length;

// recursive
const vowelsR1 = str => str.length && ('aeiou'.includes(str[0]) ? 1 : 0) + vowelsR1(str.slice(1));
const vowelsR = (str) => {
  if (!str) return 0;
  const isVowel = 'aeiou'.includes(str[0]);
  return (isVowel ? 1 : 0) + vowelsR(str.slice(1));
};

module.exports = { vowelsI, vowelsR, vowelsR1 };
