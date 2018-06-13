/*
PROBLEM
Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).

FROM: StackOverflow question - https://stackoverflow.com/q/50825842/4722345
My Answer: https://stackoverflow.com/a/50826104/4722345
*/

function censor() {
  const switches = [];

  return (target, replacement) => {

    if (replacement) {
      switches.push([target, replacement]);
    } else {
      return switches.reduce((s, [trgt, rplc]) => {
      let reTrgt = new RegExp(`\\b${trgt}\\b`, 'gi');
      return s.replace(reTrgt, rplc);
      }, target);
    }

  };
}

// TEST CASES
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // The slow, brown fox jumps over the lazy cats.
