// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:
// <number><char>
// for example, '2c' or '3a'.

// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

// approach 
// set up variable for final string
// track the current number value
// at first instance of a number, set number value
// subsequent instances of a number, add it to the number value (which are strings so just add it, no math)
// iterate the second index until it finds a letter
// we know to multiple the letter by num times - use .repeat()
// calculate the string and add to final string (concat)
// reset num to 0

// time complexity: O(n) linear since we go through the string of length n, once
// space complexity: O(num * letterCount) linear since num and uncompressed grow according to expanded value
const uncompress2 = (s) => {
  let uncompressed = '';
  let num = 0;
  
  for(let idx = 0; idx < s.length; idx++) {
    let char = s[idx];

    if (char >= 0) {
      num = num + char;
    } else {
      uncompressed = uncompressed + char.repeat(num);
      num = 0;
    }
  }
  return uncompressed;
};

// uncompress("2c3a1t"); // -> 'ccaaat'
// uncompress("4s2b"); // -> 'ssssbb'
// uncompress("2p1o5p"); // -> 'ppoppppp'
// uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
// uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
