// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.
//
// The input string will only consist of lower case letters and/or spaces.

function getCount(s) {
  let vowelsCount = 0;
  let vowels = 'aeiou';
  for (let i = 0; i < s.length; i++) {
    if ( vowels.indexOf(s[i]) !== -1 ) vowelsCount++;
  }
  return vowelsCount;
}

describe("Case 1", function(){
    it ("should be defined", function(){
        Test.assertEquals(getCount("abracadabra"), 5)
    });
});
