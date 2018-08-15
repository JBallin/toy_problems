const isPalindrome1 = s => s == s.split('').reverse().join('');

let isPalindrome2 = s => {
  for (let i = 0; i < Math.floor(s.length/2); i++) {
    if (s[i] !== s[s.length - i - 1]) return false;
  }
  return true;
}

// checks whole word
let isPalindrome3 = s => s.split('').reduce(
  (bool, e, i, a) => bool && e === a[a.length-i-1], true
)

// less clear but doesn't check whole word (more efficient)
let isPalindrome = s =>
  s.split('')
   .reduce( (bool, e, i, a) =>
     bool && (i >= Math.floor(s.length/2) || e === a[a.length-i-1]), true
)

const runTests = () => isPalindrome('runner') === false &&
                       isPalindrome('tacocat') === true &&
                       isPalindrome('abba') === true;

console.log(runTests());
